# 游戏账号验证加固方案

> 适用站点: `html_82.157.103.203` (listen 92)
> 日期: 2026-09-30

---

## 一、现状与漏洞

### 当前验证链路

```
用户登录 → localStorage 存 accessToken
         → 点"进入游戏" → game.js 提取 openID → POST verifyOpenID
         → 后端查 user_game_ids 表归属 → 通过 → iframe 加载 1.0.221_JuheH5.html
```

### 漏洞清单

| # | 漏洞 | 攻击路径 | 严重度 |
|---|------|----------|--------|
| 1 | 前端硬编码绕入口 | `game.js` 中 `if (!gameUrlInput)` 分支直接写死 `openID=111111` 加载 `1.0.73.html` | 🔴 高 |
| 2 | 静态资源无拦截 | 直接浏览器访问 `/1.0.221_JuheH5.html?openID=任意账号` 即可加载游戏 | 🔴 高 |
| 3 | DevTools 可直接改 iframe | `contentFrame.src = "/1.0.221_JuheH5.html?openID=目标"` 完全绕过前端验证 | 🔴 高 |
| 4 | verifyOpenID 不查过期时间 | 授权过期的账号只要 token 有效仍能通过归属检查 | 🟡 中 |

---

## 二、修复方案总览

三层防护，逐层收敛：

```
┌─────────────────────────────────────────────────────────┐
│  Layer 3: Nginx auth_request                            │
│  拦截 1.0.221_JuheH5.html / 1.0.73.html 入口           │
│  → 调后端 verifyGameToken 验签 → 不通过返回 403          │
│  ✅ 前端改不了这层                                       │
├─────────────────────────────────────────────────────────┤
│  Layer 2: 前端 game.js                                  │
│  → 删掉硬编码绕入口                                     │
│  → 把后端返回的 gameToken 拼到 iframe URL                │
├─────────────────────────────────────────────────────────┤
│  Layer 1: Flask serv.py                                 │
│  → verifyOpenID 加过期检查                              │
│  → 返回 HMAC 签名的 gameToken (无状态, 1小时有效)        │
│  → 新增 verifyGameToken GET 接口供 Nginx 调用            │
└─────────────────────────────────────────────────────────┘
```

### gameToken 结构

```
base64url(open_id:user_id:expires.signature)
         ────────┬──────────────────── ──────┬──────
                 明文 payload (3段用:分隔)    HMAC-SHA256 取前16位
```

- **无状态**: 后端不存 token，验签即可
- **TTL**: 3600 秒 (1小时)
- **签名密钥**: `GAME_TOKEN_SECRET`，部署前必须替换

---

## 三、改动文件清单

| 文件 | 路径 | 改动类型 |
|------|------|----------|
| serv.py | `server/serv.py` | 新增工具函数 + 修改 verifyOpenID + 新增 verifyGameToken |
| game.js | `html_82.157.103.203/game.js` | 重写 handleEnterGameButtonClick |
| nginx.conf | `conf/nginx.conf` | listen 92 server block 加 auth_request |

---

## 四、详细改动

### 4.1 后端 `server/serv.py`

#### 4.1.1 新增导入

```python
import hmac
import hashlib
import base64
from flask import make_response
```

#### 4.1.2 新增常量

```python
app.config["SECRET_KEY"] = "1qaz@WSX!@#"
GAME_TOKEN_TTL = 3600          # gameToken 有效期 1 小时
GAME_TOKEN_SECRET = "mtga_game_token_secret_2026_change_me"  # ⚠️ 部署前换随机长串
```

#### 4.1.3 新增签名工具函数

```python
def _generate_game_token(open_id, user_id, ttl=GAME_TOKEN_TTL):
    """签发 gameToken: base64(open_id:user_id:expires.signature)"""
    expires = int(time.time()) + ttl
    raw = f"{open_id}:{user_id}:{expires}"
    sig = hmac.new(GAME_TOKEN_SECRET.encode(), raw.encode(), hashlib.sha256).hexdigest()[:16]
    token = f"{raw}.{sig}"
    return base64.urlsafe_b64encode(token.encode()).decode().rstrip("=")


def _verify_game_token(token, open_id=None):
    """验签 gameToken，返回 (user_id, open_id) 或 None"""
    try:
        padded = token + "=" * (-len(token) % 4)
        decoded = base64.urlsafe_b64decode(padded.encode()).decode()
        open_id_t, user_id_t, expires_str, sig = decoded.rsplit(".", 1)
        if int(expires_str) < time.time():
            return None
        raw = f"{open_id_t}:{user_id_t}:{expires_str}"
        expected = hmac.new(GAME_TOKEN_SECRET.encode(), raw.encode(), hashlib.sha256).hexdigest()[:16]
        if not hmac.compare_digest(sig, expected):
            return None
        if open_id and open_id != open_id_t:
            return None
        return (int(user_id_t), open_id_t)
    except Exception:
        return None
```

#### 4.1.4 修改 `verifyOpenID`

**原逻辑**: 只查归属，成功返回 `{"success": true}`

**新逻辑**:
1. 查 user_id + expire_date
2. 归属检查 (user_game_ids 表)
3. **新增**: 授权过期检查 (expire_date < now → 拒绝)
4. **新增**: 签发 gameToken 并返回

```python
@app.route("/v1/3rd/api/verifyOpenID", methods=["POST"])
@token_required
def verifyOpenID(current_user):
    data = request.json
    openID = data.get("openID")

    if not openID:
        return jsonify({"success": False, "message": "缺少openID参数"})

    conn = sqlite3.connect("users.db")
    c = conn.cursor()

    try:
        c.execute("SELECT id, expire_date FROM users WHERE phone = ?", (current_user,))
        user = c.fetchone()
        if not user:
            return jsonify({"success": False, "message": "用户不存在"})
        user_id, expire_str = user[0], user[1]

        c.execute(
            "SELECT 1 FROM user_game_ids WHERE user_id = ? AND game_id = ?",
            (user_id, openID),
        )
        if not c.fetchone():
            return jsonify({"success": False, "message": "该openID未注册"})

        if datetime.datetime.fromisoformat(expire_str) < datetime.datetime.now():
            return jsonify({"success": False, "message": "账号已过期"})

        game_token = _generate_game_token(openID, user_id)
        return jsonify({"success": True, "gameToken": game_token})
    except Exception as e:
        return jsonify({"success": False, "message": str(e)})
    finally:
        conn.close()
```

#### 4.1.5 新增 `verifyGameToken` 接口

```python
@app.route("/v1/3rd/api/verifyGameToken", methods=["GET"])
def verifyGameToken():
    """供 Nginx auth_request 调用：合法返回 200，否则 403"""
    token = request.args.get("token", "")
    open_id = request.args.get("openID", "")

    if not token or not open_id:
        return make_response("forbidden", 403)

    if _verify_game_token(token, open_id=open_id):
        return make_response("ok", 200)
    return make_response("forbidden", 403)
```

---

### 4.2 前端 `html_82.157.103.203/game.js`

**核心改动**: 删除 1.0.73 硬编码绕入口 + 拼 gameToken 到 URL

```javascript
function handleEnterGameButtonClick() {
    document.getElementById('overlay').style.display = 'block';

    // 空值防护（替换原来的 gameUrlInput 全局变量引用）
    const gameUrlInput = document.getElementById('gameurl-input')?.value;
    if (!gameUrlInput) {
        alert('请先输入游戏URL');
        document.getElementById('overlay').style.display = 'none';
        return;
    }

    let gameUrl;
    try {
        gameUrl = new URL(gameUrlInput);
    } catch (e) {
        alert('游戏URL格式无效');
        document.getElementById('overlay').style.display = 'none';
        return;
    }

    const openID = gameUrl.searchParams.get('openID');
    if (!openID) {
        alert('URL中缺少openID参数');
        document.getElementById('overlay').style.display = 'none';
        return;
    }

    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        window.location.href = '/';
        alert('请先登录');
        document.getElementById('overlay').style.display = 'none';
        return;
    }

    fetch('/v1/3rd/api/verifyOpenID', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        },
        body: JSON.stringify({ openID: openID })
    })
        .then(response => response.json())
        .then(data => {
            if (!data.success) {
                alert(data.message || '该openID未注册');
                document.getElementById('overlay').style.display = 'none';
                return;
            }

            // ⚠️ 关键：拼 gameToken，Nginx auth_request 会校验
            gameUrl.searchParams.set('token', data.gameToken);

            const currentUrl = new URL(window.location.href);
            const protocol = currentUrl.protocol;
            contentFrame.src = `${protocol}//${currentUrl.host}/1.0.221_JuheH5.html?${gameUrl.searchParams.toString()}`;
        })
        .catch(error => {
            console.error('Error:', error);
            alert('验证openID失败');
            document.getElementById('overlay').style.display = 'none';
        });
}
```

---

### 4.3 Nginx `conf/nginx.conf`

**改动位置**: `listen 92` server block

```nginx
server {
    listen       92;
    server_name  localhost;

    # ===== 新增: 游戏入口HTML加 gameToken 校验 =====
    location = /1.0.221_JuheH5.html {
        auth_request /_auth_game;
        root   html_82.157.103.203;
    }
    location = /1.0.73.html {
        auth_request /_auth_game;
        root   html_82.157.103.203;
    }
    # auth_request 内部路径：透传原始请求参数给后端验签
    location = /_auth_game {
        internal;
        proxy_pass http://localhost:5000/v1/3rd/api/verifyGameToken?token=$arg_token&openID=$arg_openID;
        proxy_pass_request_body off;
        proxy_set_header Content-Length "";
    }

    location / {
        root   html_82.157.103.203;
        index  index.html index.htm;
    }
    # ... 其余 location 不变 ...
}
```

**说明**:
- `auth_request /_auth_game` 会在请求 HTML 前先 GET `/_auth_game`，2xx 放行，否则返回 auth 响应
- `$arg_token` / `$arg_openID` 是 Nginx 内置变量，取原始请求 URL 中的 query 参数
- `internal` 表示 `/_auth_game` 不能被外部直接访问

---

## 五、部署步骤

### Step 0 — 备份（必须先做）

```bat
cd d:\Project\nginx_moli_fugu
copy server\serv.py server\serv.py.bak
copy html_82.157.103.203\game.js html_82.157.103.203\game.js.bak
copy conf\nginx.conf conf\nginx.conf.bak
```

### Step 1 — 改后端 (serv.py)

Apply diff，启动 Flask 验证:

```bat
cd d:\Project\nginx_moli_fugu\server
python serv.py
```

### Step 2 — 改前端 (game.js)

Apply diff。

### Step 3 — 改 Nginx (nginx.conf) **最后一步**

```bat
# 先测语法
nginx -t
# 再重载
nginx -s reload
```

> ⚠️ 顺序不能反: 先加 auth_request 再改后端 → 全站游戏入口 403

---

## 六、回滚方案

```bat
cd d:\Project\nginx_moli_fugu
copy server\serv.py.bak server\serv.py /Y
copy html_82.157.103.203\game.js.bak html_82.157.103.203\game.js /Y
copy conf\nginx.conf.bak conf\nginx.conf /Y
# 重启 Flask + nginx -s reload
```

---

## 七、测试用例

| # | 场景 | 操作 | 预期 |
|---|------|------|------|
| 1 | 正常流程 | 登录 → 输入自己的 openID → 点"进入游戏" | ✅ 加载游戏 |
| 2 | 无 token 直接访问 | 浏览器开新标签直接贴 `/1.0.221_JuheH5.html?openID=xxx` | ❌ 403 |
| 3 | 改 openID 偷 token | DevTools 把 URL 里 openID 改成别人的 | ❌ 403 (签名不匹配) |
| 4 | token 过期 | 等 1 小时后刷页面 | ❌ 403 |
| 5 | 过期账号 | 授权已过的账号登录点进入 | ❌ verifyOpenID 返回"账号已过期" |
| 6 | bundle.js 直接访问 | 贴 `/test/bundle-xxx.js` | ✅ 200 (只拦 HTML 入口) |
| 7 | Nginx 未 reload | 改完 nginx.conf 没 reload 就测 | ⚠️ 还是走旧逻辑 |

---

## 八、后续工作（其他站点同步）

项目中有多个站点目录，需逐个同步:

| 站点目录 | nginx listen | serv.py 位置 | 状态 |
|----------|-------------|-------------|------|
| `html_82.157.103.203` | 92 | `server/serv.py` | ✅ 本次改造 |
| `html_101.43.136.215` | 待查 | 待确认 | ⏳ 待同步 |
| `html_moli.u2ip.com` | 待查 | 待确认 | ⏳ 待同步 |
| `html_h5.gmfree.top` | 待查 | 待确认 | ⏳ 待同步 |

### 同步清单 (每个站点)

1. 对应目录下的 serv.py 副本 — 同步 4.1 全部改动
2. 对应 nginx server block — 同步 4.3 的 auth_request 配置
3. 如果 game.js 是独立副本 — 同步 4.2 改动

---

## 九、风险与注意事项

| 风险 | 说明 | 应对 |
|------|------|------|
| Nginx auth_request 超时 | 默认 60s，后端必须快速响应 | Flask verifyGameToken 纯内存验签，耗时 <1ms，无压力 |
| GAME_TOKEN_SECRET 泄露 | 攻击者拿到密钥可伪造任意 token | 部署前换成 `openssl rand -hex 32` 生成的随机串 |
| auth_request 性能 | 每次 HTML 请求多一次内部 HTTP | Flask 端验签加一层进程内 cache (TTL 300s) 可进一步优化 |
| 1.0.73 旧版 bundle | 可能有外部引用硬编码 | 本次已加 auth_request，入口被堵 bundle 无法正常初始化 |
| 其他 game.js 副本 | 项目可能有多个 game.js 没同步 | 同步清单见第八节 |