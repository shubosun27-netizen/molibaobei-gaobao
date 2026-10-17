"""本地中继启动器

用法：
    python relay.py
    python relay.py --config relay_config.json
    python relay.py --port 8101

打包后（买家）：
    relay.exe
    relay.exe --config D:/xxx/relay_config.json
"""
import os
import sys
import argparse
import logging
import webbrowser
import json

from relay_core import RelayConfig, StaticServer, create_server


def _is_frozen():
    # PyInstaller 用 sys.frozen；Nuitka 编译后用 __compiled__
    return getattr(sys, "frozen", False) or getattr(sys, "__compiled__", False)


def _exe_dir():
    """exe 所在目录（用户可读写，放外置 config/static）"""
    if _is_frozen():
        return os.path.dirname(sys.executable)
    return os.path.dirname(os.path.abspath(__file__))


def _resource_dir():
    """内置资源目录（打包态的运行期数据目录，开发模式=脚本目录）

    兼容：
    - PyInstaller --onefile: sys._MEIPASS 临时解压目录
    - Nuitka --onefile    : os.path.dirname(sys.argv[0])（bootstrap 解压目录）
    - 开发模式            : 脚本所在目录
    """
    if _is_frozen():
        meipass = getattr(sys, "_MEIPASS", None)
        if meipass:
            return meipass
        # Nuitka: 使用可执行文件所在目录（onefile 下 Nuitka 把数据与其放在一起）
        return os.path.dirname(os.path.abspath(sys.argv[0]))
    return os.path.dirname(os.path.abspath(__file__))


def _resolve_config_path(user_arg=None):
    """配置文件路径：用户指定 > exe_dir > 内置"""
    if user_arg:
        return os.path.abspath(user_arg)
    candidates = [
        os.path.join(_exe_dir(), "relay_config.json"),
        os.path.join(_resource_dir(), "relay_config.json"),
    ]
    for p in candidates:
        if os.path.isfile(p):
            return p
    return candidates[0]


def _resolve_game_dir(config_dir, game_dir_rel):
    """游戏静态目录：config 同目录相对路径 > 内置 resource_dir 相对路径"""
    if os.path.isabs(game_dir_rel):
        return game_dir_rel
    candidates = [
        os.path.join(config_dir, game_dir_rel),
        os.path.join(_resource_dir(), game_dir_rel),
    ]
    for p in candidates:
        if os.path.isdir(p):
            return os.path.abspath(p)
    return os.path.abspath(candidates[0])


def setup_logging():
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
        handlers=[logging.StreamHandler()],
    )


def validate_config(config):
    errors = []
    if not config.find_proxy("/userlogin"):
        errors.append("proxy_map 缺少 /userlogin 登录转发配置")
    if not config.find_proxy("/sdk/api/"):
        errors.append("proxy_map 缺少 /sdk/api/ 登录转发配置")
    center = config.get("center", {})
    flask = center.get("flask_api", "")
    if "公共服务器IP" in flask:
        errors.append("center.flask_api 仍是占位符，请改为真实服务器地址")
    return errors


def main():
    parser = argparse.ArgumentParser(description="本地私服中继")
    parser.add_argument("--config", default=None, help="配置文件路径（默认自动查找）")
    parser.add_argument("--port", type=int, default=None, help="覆盖监听端口")
    args = parser.parse_args()

    setup_logging()
    logger = logging.getLogger("relay")

    config_path = _resolve_config_path(args.config)
    config_dir = os.path.dirname(config_path)

    config = RelayConfig().load(config_path)
    if args.port:
        config._config["server_port"] = args.port
    errors = validate_config(config)
    if errors:
        for e in errors:
            logger.error("配置错误: %s", e)
        logger.error("请先修正 relay_config.json 后重试")
        sys.exit(1)

    game_dir_rel = config.get("game_dir", "static/html_82.157.103.203")
    game_dir = _resolve_game_dir(config_dir, game_dir_rel)

    if not os.path.isdir(game_dir):
        logger.error("静态目录不存在: %s", game_dir)
        if _is_frozen():
            logger.error("请将 patch 后的 static/ 目录放到 relay.exe 同目录")
        else:
            logger.error("请先运行: python patch_js.py <原html目录>")
        sys.exit(1)

    static = StaticServer(game_dir)
    server = create_server(config, static)
    port = config.port
    url = f"http://127.0.0.1:{port}"
    logger.info("已启动: %s", url)

    try:
        webbrowser.open(url)
    except Exception:
        pass

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        logger.info("已停止")
        server.shutdown()


if __name__ == "__main__":
    main()