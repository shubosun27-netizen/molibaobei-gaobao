# 本地私服中继（local_relay）

解决公网单 IP 登录账号被限的问题。核心原理：**把游戏体搬到用户本机运行**，
游戏登录/API 请求从用户自己的家宽 IP 发出，而非公共服务器 IP。
每台用户电脑天然一个 IP，只服务他自己的 5 个号，互不影响。

## 架构

```
用户浏览器 ──► 127.0.0.1:8100（本地中继 EXE）
                 ├─ 静态文件：本地 static/ 提供（同源）
                 ├─ /v1/3rd/api、/servers.json ──► 公共服务器（平台账号授权）
                 └─ /test /res /sdk /userlogin ──► 真实游戏私服（伪造头，源IP=用户）
```

## 目录结构

```
local_relay/
├─ relay.py            启动器
├─ relay_core.py       核心中继（静态服务 + 代理转发）
├─ patch_js.py         改写前端JS里的私服地址→本地地址
├─ relay_config.json   私服代理映射配置（已按 html_82.157.103.203 原型填好）
├─ requirements.txt    依赖
└─ static/             游戏静态副本（由 patch_js.py 生成）
```

## 首次部署（已有完整 html 原版目录）

```bash
# 1. 生成静态副本并改写地址（把 82.157.103.203 的地址改成 127.0.0.1:8100）
python patch_js.py html_82.157.103.203

# 2. 已配置好 center 地址（g.toolsa.cn:59977，经 nginx 转发到内网 flask:5000）
#    无需修改，除非服务器 IP 变化

# 3. 启动
python relay.py
```

## 每日使用

```bash
python relay.py          # 浏览器自动打开 http://127.0.0.1:8100
```

## 配置说明（relay_config.json）

| 字段 | 含义 |
|------|------|
| `server_port` | 本地监听端口，默认 8100 |
| `game_dir` | 静态副本目录 |
| `center.flask_api` | 公共服务器 Flask（平台账号授权） |
| `proxy_map` | 游戏私服反代表（对应 nginx 中的 location） |
| `login.userlogin.host` | userlogin 伪造的 Host |

## 风险与注意

1. `toLogin.js` 中的 `PREFIX_URL` / `LOGIN_PREFIX_URL`、`app.js` 的
   `HTTP_LOGIN_ADDR` / `ACTION_LOG_URL` 均被改写为 `127.0.0.1:8100`。
2. 若私服更新了 bundle.js，需重新跑 `patch_js.py`（本版本未做自动增量同步）。
3. 本机防火墙需放行 8100 端口入站（仅本机访问，可不放行）。
4. 打包 EXE 建议用 PyInstaller + PyArmor 加密，避免他人逆向方法。

## 打包 EXE（可选）

```bash
pip install pyinstaller
pyinstaller -F --add-data "static;static" --add-data "relay_config.json;." relay.py
```