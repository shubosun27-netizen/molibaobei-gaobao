"""本地中继核心：静态服务 + 游戏私服代理 + 平台云端代理

架构说明：
- 浏览器访问 http://127.0.0.1:8100
- 静态文件从本地 static/ 提供（"同源"解决 bundle.js 与 main.js 互动）
- /sdk/api、/userlogin 等游戏路径代理到真实私服，并伪造 Host/Origin/Referer
- 该代理连接由用户本机发起，游戏服务端看到的源 IP 是用户家宽 IP
"""
import os
import re
import json
import socket
import logging
import mimetypes
import ssl
import sys
import time
import threading
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse, parse_qs, urlencode
from urllib.request import Request, urlopen, HTTPError
from urllib.error import URLError

logger = logging.getLogger("relay")


class RelayConfig:
    """配置管理：本地配置文件 + 可选云端覆盖"""

    def __init__(self):
        self._config = {}

    def load(self, path):
        with open(path, "r", encoding="utf-8") as f:
            self._config = json.load(f)
        return self

    def get(self, key, default=None):
        return self._config.get(key, default)

    @property
    def port(self):
        return int(self._config.get("server_port", 8100))

    def find_proxy(self, path):
        """在 proxy_map 中找匹配的游戏代理项（exact 优先于 startswith）"""
        # 第一批：exact
        for item in self._config.get("proxy_map", []):
            if item.get("match") == "exact" and path == item.get("path"):
                return item
        # 第二批：startswith
        for item in self._config.get("proxy_map", []):
            if item.get("match") == "startswith" and path.startswith(item.get("path")):
                return item
        return None

    def find_platform(self, path):
        # exact 优先
        for item in self._config.get("platform", []):
            if item.get("match") == "exact" and path == item.get("path"):
                return item
        for item in self._config.get("platform", []):
            if item.get("match") == "startswith" and path.startswith(item.get("path")):
                return item
        return None

    @staticmethod
    def _match(item, path):
        mode = item.get("match")
        target = item.get("path")
        if mode == "exact":
            return path == target
        if mode == "startswith":
            return path.startswith(target)
        return False


class TokenGuard:
    """入口认证守卫：仅拦截 HTML 页面入口，静态资源/代理请求全放行

    验证策略：
    - 有 ?token=xxx → 查内存缓存 → 没缓存则调云端 verify_url → 缓存结果
    - 无 token 且内存无有效 token → 302 跳 login_url
    - token 验证结果缓存 max_cache_seconds 秒
    """

    def __init__(self, auth_cfg):
        self.enabled = auth_cfg.get("enabled", False)
        self.login_url = auth_cfg.get("login_url", "")
        self.verify_url = auth_cfg.get("verify_url", "")
        self.max_cache = int(auth_cfg.get("max_cache_seconds", 3600))
        self._cache = {}
        self._lock = threading.Lock()

    def should_guard(self, path):
        """仅拦截 console 登录入口，游戏主入口(1.0.73.html等)全放行"""
        if not self.enabled:
            return False
        if path == "/" or path == "/console" or path.startswith("/console/"):
            return True
        return False

    def extract_token(self, raw_path):
        """从完整请求路径（含 query）中提取 token 值"""
        if "?" not in raw_path:
            return None
        try:
            qs = parse_qs(raw_path.split("?", 1)[1])
            token = qs.get("token", [None])[0]
            if token and token.strip():
                return token.strip()
        except Exception:
            pass
        return None

    def is_cache_valid(self, token):
        """检查 token 是否在缓存中且未过期"""
        if not token:
            return False
        with self._lock:
            expire = self._cache.get(token)
            if expire and expire > time.time():
                return True
        return False

    def mark_valid(self, token):
        """标记 token 为有效"""
        if not token:
            return
        with self._lock:
            self._cache[token] = time.time() + self.max_cache

    def verify_cloud(self, token):
        """调云端接口验证 token，成功返回 True"""
        if not self.verify_url or not token:
            return False
        # 先查缓存
        if self.is_cache_valid(token):
            return True
        # 调云端
        try:
            target = self.verify_url
            sep = "&" if "?" in target else "?"
            req = Request(f"{target}{sep}token={token}", method="GET",
                          headers={"User-Agent": "relay-guard/1.0"})
            with urlopen(req, timeout=8) as resp:
                body = resp.read().decode("utf-8", errors="ignore")
                # 简单判定：HTTP 200 且包含 "valid": true
                if resp.status == 200 and ("valid" in body.lower() or "success" in body.lower() or '"ok"' in body.lower()):
                    self.mark_valid(token)
                    return True
        except (URLError, HTTPError, TimeoutError, OSError):
            pass
        return False

    def check(self, raw_path):
        """返回 (是否通过, redirect_url)。通过=True时redirect_url为None"""
        if not self.enabled:
            return True, None
        token = self.extract_token(raw_path)
        if token:
            # 新 token → 云端验证
            if self.verify_cloud(token):
                return True, None
            return False, self.login_url
        # 无 token → 查内存中是否有已验证 token（允许同一浏览器后续请求）
        with self._lock:
            # 简单：只要缓存非空就算已认证（因为同一用户进来后，后续 JS 请求不带 token）
            now = time.time()
            self._cache = {k: v for k, v in self._cache.items() if v > now}
        if self._cache:
            return True, None
        return False, self.login_url


class StaticServer:
    """本地静态文件服务器（同源核心）"""

    def __init__(self, base_dir):
        self.base_dir = os.path.abspath(base_dir)
        self.suffix_alias = {}
        self._setup_extension_alias()

    def _setup_extension_alias(self):
        """对于带 hash 的 bundle 等文件，建立别名映射（bundle-xxx.js -> 实际文件）"""
        if not os.path.isdir(self.base_dir):
            return
        for root, _, files in os.walk(self.base_dir):
            for name in files:
                m = re.match(r"^(bundle|engine|pre|loading|errorPromptLayer)-[a-f0-9]+\.(.*)$", name)
                if m:
                    base, ext = m.group(1), m.group(2)
                    self.suffix_alias[base + "." + ext] = name

    def resolve(self, path):
        """将 URI 路径映射到磁盘文件；找不到返回 None"""
        rel = path.lstrip("/") or "index.html"
        disk = os.path.normpath(os.path.join(self.base_dir, rel))
        # 防目录穿越
        if not disk.startswith(self.base_dir):
            return None
        if os.path.isfile(disk):
            return disk
        # 目录请求：自动追加 index.html
        if os.path.isdir(disk):
            idx = os.path.join(disk, "index.html")
            if os.path.isfile(idx):
                return idx
        # 尝试 hash 别名：/js/bundle.js -> 实际 bundle-xxx.js
        seg = rel.split("/")
        if seg:
            leaf = seg[-1]
            if leaf in self.suffix_alias:
                seg[-1] = self.suffix_alias[leaf]
                alt = os.path.normpath(os.path.join(self.base_dir, *seg))
                if os.path.isfile(alt):
                    return alt
                # 别名命中目录时也尝试 index.html
                if os.path.isdir(alt):
                    idx = os.path.join(alt, "index.html")
                    if os.path.isfile(idx):
                        return idx
        return None

    def is_index(self, path):
        # 原型无顶层 index.html，平台入口在 console/，游戏入口在 1.0.220.html
        return path == "/"


def build_outbound_request(method, target_url, headers, body):
    """构造出站请求头（伪造 Host），避免 hop-by-hop 头泄漏"""
    h = {}
    skip = {
        "host", "connection", "content-length", "content-encoding",
        "transfer-encoding", "accept-encoding", "proxy-authorization", "keep-alive",
        "upgrade", "proxy-connection", "te",
    }
    for k, v in headers.items():
        if k.lower() in skip:
            continue
        h[k] = v
    return h


def _has_query(handler_path):
    return "?" in handler_path


def _compute_target(item, request_path):
    """计算转发目标 URL（nginx proxy_pass 语义）

    - 所有 proxy_map 的 base 统一【不带】尾斜杠
    - strip=false: 目标 = base + 完整 request_path（其自带前导 '/'）
    - strip=true : 目标 = base + '/' + (request_path 去掉匹配前缀, 其本身绝不为空)
    """
    base = item.get("base", "").rstrip("/")
    if item.get("strip"):
        prefix = item.get("path", "")
        rest = request_path[len(prefix):] if request_path.startswith(prefix) else request_path
        rest = rest.lstrip("/")
        # 前缀匹配恰好等于 prefix（无剩余）时，视为精确命中，不加尾斜杠
        if not rest:
            return base
        return base + "/" + rest
    return base + request_path


def _do_proxy(handler, item, method, headers, body, timeout=20):
    """执行出站代理，返回 (status, headers, body_bytes) 或抛错"""
    request_path = handler.path.split("?")[0] if _has_query(handler.path) else handler.path
    target = _compute_target(item, request_path)
    fake_host = item.get("fake_host")
    purl = urlparse(target)
    req_headers = build_outbound_request(method, target, headers, body)
    if fake_host:
        req_headers["Host"] = fake_host
    req = Request(target, data=body, method=method, headers=req_headers)
    ctx = None
    if purl.scheme == "https":
        ctx = ssl.create_default_context()
        ctx.check_hostname = False
        ctx.verify_mode = ssl.CERT_NONE
    try:
        resp = urlopen(req, timeout=timeout, context=ctx)
        return resp.status, resp.headers, resp.read()
    except HTTPError as e:
        return e.code, e.headers, e.read()
    except (TimeoutError, socket.timeout) as e:
        raise RuntimeError(f"上游超时: {target} ({e})")
    except URLError as e:
        reason = e.reason
        if isinstance(reason, (TimeoutError, socket.timeout)):
            raise RuntimeError(f"上游超时: {target} ({reason})")
        raise RuntimeError(f"上游不可达: {target} ({reason})")


class RelayHandler(BaseHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    # 类属性由 main 注入
    config = None
    static = None
    guard = TokenGuard({})
    timeout = 20

    # ---------- 日志 ----------
    def log_message(self, fmt, *args):
        logger.info("%s - %s", self.client_address[0], fmt % args)

    # ---------- 方法分发 ----------
    def do_GET(self):
        self._dispatch()

    def do_POST(self):
        self._dispatch()

    def do_OPTIONS(self):
        self._dispatch(force_options=True)

    def do_HEAD(self):
        self._dispatch()

    def _send_redirect(self, location):
        self.send_response(302)
        self.send_header("Location", location)
        self.send_header("Content-Length", "0")
        self.end_headers()

    def _dispatch(self, force_options=False):
        path = self.path.split("?")[0]
        try:
            # 0) 入口认证守卫（仅拦截 HTML 入口）
            if self.guard.should_guard(path) and not force_options:
                passed, redirect = self.guard.check(self.path)
                if not passed:
                    self._send_redirect(redirect)
                    return
            # 1) 平台云端（留在服务器，账号授权）
            plat = self.config.find_platform(path)
            if plat and not force_options:
                self._handle_platform(plat)
                return
            # 2) 本地静态文件优先（同源）；找不到再走游戏代理，避免兜底规则误伤本地资源
            if not force_options:
                disk = self.static.resolve(path if not self.static.is_index(path) else "/console/index.html")
                if disk is not None:
                    self._send_file(disk)
                    return
            # 3) 游戏私服代理转发
            proxy = self.config.find_proxy(path)
            if proxy and not force_options:
                self._handle_game_proxy(proxy)
                return
            # 4) OPTIONS 预检
            if force_options:
                self._send_options()
                return
            self._send_text(404, "<h1>404 Not Found</h1>", "text/html")
        except Exception as e:
            logger.exception("处理失败")
            self._send_text(500, f'{{"code":500,"msg":"{e}"}}', "application/json")

    # ---------- 静态 ----------
    def _send_file(self, disk):
        try:
            with open(disk, "rb") as f:
                data = f.read()
        except OSError:
            self._send_error(403)
            return
        ctype, _ = mimetypes.guess_type(disk)
        ctype = ctype or "application/octet-stream"
        self._send_bytes(200, data, ctype)

    # ---------- 平台云端代理 ----------
    def _handle_platform(self, item):
        base = self.config.get("center", {})
        api_base = base.get("flask_api", "").rstrip("/")
        if "/v1/3rd/api" in (item.get("path") or ""):
            target_base = api_base
        else:
            target_base = base.get("servers_json", api_base)
        if not target_base:
            self._send_text(500, '{"code":500,"msg":"platform base not configured"}', "application/json")
            return
        rule = dict(item)
        rule["base"] = target_base
        body = self._read_body()
        method = self.command
        try:
            status, headers, data = _do_proxy(self, rule, method, self.headers, body, self.timeout)
        except RuntimeError as e:
            self._send_text(502, f'{{"code":502,"msg":"{e}"}}', "application/json")
            return
        self._send_bytes(status, data, headers.get("Content-Type", "application/json"))

    # ---------- 游戏私服代理 ----------
    def _handle_game_proxy(self, item):
        method = self.command
        body = self._read_body()
        try:
            status, headers, data = _do_proxy(
                self,
                item,
                method,
                self.headers,
                body,
                self.timeout,
            )
        except RuntimeError as e:
            logger.warning("请求失败")
            self._send_text(502, f'{{"code":502,"msg":"{e}"}}', "application/json")
            return
        ctype = headers.get("Content-Type", "application/octet-stream")
        # 禁止重定向：proxy_redirect off 等价，去掉 Location
        out_headers = {k: v for k, v in headers.items() if k.lower() != "location"}
        self._send_bytes(status, data, ctype, extra_headers=out_headers)

    # ---------- 请求体 ----------
    def _read_body(self):
        length = int(self.headers.get("Content-Length", 0) or 0)
        if length > 0:
            return self.rfile.read(length)
        return None

    # ---------- 响应辅助 ----------
    def _send_options(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", self.headers.get("Origin", "*"))
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "*")
        self.send_header("Content-Length", "0")
        self.end_headers()

    def _send_text(self, code, text, ctype="application/json"):
        data = text.encode("utf-8")
        self._send_bytes(code, data, ctype)

    def _send_bytes(self, code, data, ctype, extra_headers=None):
        self.send_response(code)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Content-Disposition", "inline")
        self.send_header("Access-Control-Allow-Origin", self.headers.get("Origin", "*"))
        if extra_headers:
            for k, v in extra_headers.items():
                if k.lower() in ("content-type", "content-length", "connection", "transfer-encoding"):
                    continue
                try:
                    self.send_header(k, v)
                except Exception:
                    pass
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(data)


def create_server(config, static_dir):
    RelayHandler.config = config
    RelayHandler.static = static_dir
    RelayHandler.guard = TokenGuard(config.get("auth", {}))
    server = ThreadingHTTPServer(("127.0.0.1", config.port), RelayHandler)
    server.daemon_threads = True
    return server