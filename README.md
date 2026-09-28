# nginx-fugu

Windows 平台 Nginx 部署目录，主要服务于 **河豚（fugu）H5 游戏** 的前端静态资源托管 + 多后端反向代理。

## 目录结构

```
nginx - fugu/
├── nginx.exe                  # Nginx 主程序（Windows 版）
├── conf/
│   ├── nginx.conf             # 主配置文件（核心）
│   ├── nginx.conf.bk / .bk1.. # 历史备份（共 12 份 .bk + 2 份定制 .gf/.jx）
│   ├── mime.types             # MIME 类型
│   ├── fastcgi.conf / params # FastCGI 原生配置
│   ├── koi-utf / koi-win      # 编码映射
│   ├── scgi_params            # SCGI 参数
│   ├── uwsgi_params           # uWSGI 参数
│   └── win-utf                # Windows UTF 编码
├── html*/                     # 前端静态资源目录（详见下方）
├── logs/                      # 运行日志（首次启动后生成）
├── contrib/                   # Nginx 官方工具（vim 语法高亮等）
└── docs/                      # Nginx 许可证 / 更新日志
```

## `html*` 目录说明

项目内有大量 `html_*` 目录，对应不同 **CDN / 服务器 IP / 域名** 的 H5 游戏前端镜像：

| 目录 | 对应端口 | 用途 |
|---|---|---|
| `html_myGame` | 80 | 主站（默认 root） |
| `html_moli.u2ip.com` | 81 | U2IP 渠道服 |
| `html_101.43.162.207` | 82 | 腾讯云 CDN |
| `html_moli.yofijoy.com` | 83 | 游族 Yofijoy 渠道 |
| `html_103.91.210.7` | 84 | 阿里云 CDN |
| `html_202.189.9.59` | 85 | 华为云 CDN |
| `html_103.248.154.40` | 86 | 境外 CDN |
| `html_182.254.209.26` | 88 | 腾讯云 CDN 2 |
| `html_49.232.237.231` | 89 | 阿里云 CDN 2 |
| `html_43.248.133.155` | 90 | 境外 CDN 2 |
| `html_103.120.88.77` | — | 历史镜像（nginx.conf 未挂载） |
| `html_test` | — | 测试环境 |
| `html.bk` | — | 历史备份 |
| `html_update` | 59977 | 版本更新服务器（servers.json / WPS API） |
| `html_yunyouGame` | 59971 | 云游游戏项目 |
| `html_jiafengGame` | 59972 | 架设游戏项目 |
| `html_minigame` | 59973 | 小游戏项目 |
| `html_project/html` | 59974 | 独立项目（含 Socket.IO） |

> **风险点**：`html_103.120.88.77` 在磁盘上存在但 `nginx.conf` 里没有对应的 server 块，属历史遗留。

## 后端服务依赖

Nginx 反向代理到以下本地后端端口，**启动 Nginx 前需确保对应服务已运行**：

| 本地端口 | 代理路径（nginx.conf） | 用途 | 技术栈 |
|---|---|---|---|
| 5000 | `/v1/3rd/api`、`/api/demo` | 登录鉴权 / 第三方 API | Flask (Python) |
| 3000 | `/v2/3rd/api` | V2 版第三方 API | Node.js |
| 3001 | `/api`（59973 server） | 小游戏 API | Node.js |
| 5500 | `/api`、`/socket.io`（59974 server） | 独立项目 API + Socket.IO | Node.js |
| 59976 | `/api/v1` | 内部 API | Python |
| 59977 | `/servers.json`（多 server 块） | 版本更新 / servers.json | Python |
| 8765 | `/api/`（59971 server） | 云游游戏 API | Java (Spring Boot) |

## 快速开始

```powershell
# 1. 检查端口占用
netstat -ano | findstr ":80 :81 :82 :83 :84 :85 :86 :88 :89 :90 :59971 :59972 :59973 :59974 :59977"

# 2. 检查配置语法（每次改完 nginx.conf 必跑）
.\nginx.exe -t

# 3. 启动
.\nginx.exe

# 4. 重载配置（修改 nginx.conf 后，进程不退出）
.\nginx.exe -s reload

# 5. 停止
.\nginx.exe -s stop

# 6. 强制终止（reload/stop 无效时）
taskkill /F /IM nginx.exe
```

## 端口分配表（全局）

所有端口范围 **80-90、59971-59977** 都在 nginx.conf 中被占用，新增 server 块时必须避开：

| 端口范围 | 分配规则 |
|---|---|
| 80-90 | H5 游戏 CDN 镜像（每个端口一个渠道） |
| 59971-59977 | 独立项目 / 工具服务 |
| 5000 / 3000 / 3001 / 5500 / 59976 / 8765 | 本地后端（不对外监听，仅反代） |

> **规则**：新增渠道优先从 80-90 中找未占用端口；新增项目从 59971-59977 末尾追加。

## nginx.conf 核心特性

1. **Gzip 压缩** 已启用，压缩级别 6，覆盖 JS/CSS/JSON/HTML/SVG 等；`gzip_proxied any` 对代理响应也压缩
2. **多 server 块**：每个端口对应一个 H5 游戏 CDN 镜像，方便本地调试不同渠道包
3. **路径代理改包**：通过 `proxy_set_header` 替换 `Host` / `Origin` / `Referer` / 业务自定义头（如 `Yofichannelid`），绕过后端域名校验
4. **资源代理**：`/test` `/scene` `/res` `/res/atlas` `/res/audio` `/atlas/ui` 等路径反向代理到 CDN，做跨域本地调试
5. **HTTPS upstream**：`/wps-api/` 使用 `proxy_ssl_server_name on` + SNI 转发到 `openapi.wps.cn`
6. **Socket.IO 代理**：59974 server 块使用 `Upgrade` / `Connection "upgrade"` 头支持 WebSocket
7. **内置 mock 接口**：80 server 块的 `/xhs/service` 和 `/xhs/docs` 返回硬编码 JSON

---

## 开发规范

### 1. 配置修改流程（硬性规定）

```
① 备份当前 conf/nginx.conf
   → Copy-Item conf\nginx.conf "conf\nginx.conf.bk$(Get-Date -Format 'yyyyMMdd_HHmmss')"
② 修改 conf/nginx.conf
③ .\nginx.exe -t   ← 语法检查，必须看到 "syntax is ok" 和 "test is successful"
④ .\nginx.exe -s reload  ← 热重载，不中断服务
⑤ 浏览器验证页面 + 接口
```

> **禁止**：跳过 `-t` 直接 reload。语法错会导致 Nginx 全部 server 块不生效，所有端口挂掉。

### 2. 备份文件命名规范

当前目录下 `.bk` / `.bk1` ~ `.bk11` + `.gf` / `.jx` 没有版本号，恢复时需要人工 diff。**新规范**：

```
conf/nginx.conf.bk_YYYYMMDD_HHmmss_简短说明
示例：conf/nginx.conf.bk_20260928_143000_add_u2ip_channel
```

> 历史备份暂不改名，新产生的备份必须按此命名。

### 3. 新增 H5 CDN server 块模板

新增渠道镜像时，**按以下模板复制**，替换 `PORT`、`HTML_DIR`、`CDN_HOST`、`CDN_PORT`：

```nginx
server {
    listen       PORT;
    server_name  localhost;

    # —— 静态资源根目录 ——
    location / {
        root   HTML_DIR;
        index  index.html index.htm;
    }

    # —— 本地后端代理（每个渠道服统一保留）——
    location /v1/3rd/api {
        proxy_pass http://localhost:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /servers.json {
        proxy_pass http://localhost:59977;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # —— CDN 资源反代（跨域本地调试必备，路径全量保留）——
    location /test {
        proxy_pass http://CDN_HOST:CDN_PORT/game_moli_gaobao/;
        proxy_set_header Host CDN_HOST;
        proxy_redirect off;
    }
    location /scene {
        proxy_pass http://CDN_HOST:CDN_PORT/game_moli_gaobao/scene;
        proxy_set_header Host CDN_HOST;
        proxy_redirect off;
    }
    location /res {
        proxy_pass http://CDN_HOST:CDN_PORT/game_moli_gaobao/res;
        proxy_set_header Host CDN_HOST;
        proxy_redirect off;
    }
    location /res/atlas {
        proxy_pass http://CDN_HOST:CDN_PORT/game_moli_gaobao/res/atlas;
        proxy_set_header Host CDN_HOST;
        proxy_redirect off;
    }
    location /atlas/ui {
        proxy_pass http://CDN_HOST:CDN_PORT/game_moli_gaobao/atlas/ui;
        proxy_set_header Host CDN_HOST;
        proxy_redirect off;
    }
    location /res/audio {
        proxy_pass http://CDN_HOST:CDN_PORT/game_moli_gaobao/res/audio;
        proxy_set_header Host CDN_HOST;
        proxy_redirect off;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}
```

### 4. 路径代理改包规范（后端域名校验绕过）

渠道服后端会校验 `Origin` / `Referer` / `Host`，必须按以下三步骤：

```nginx
location /moli/ {
    # ① 反代目标（注意结尾斜杠：/moli/ → http://target/ 会去掉 /moli/ 前缀）
    proxy_pass http://TARGET_HOST:TARGET_PORT/;

    # ② 改包三件套（必须写，顺序：Host → Origin → Referer）
    proxy_set_header Host TARGET_HOST:TARGET_PORT;
    proxy_set_header Origin "http://合法渠道域名";
    proxy_set_header Referer "http://合法渠道域名/";

    # ③ 禁止 302 跳转（防后端重定向到校验页）
    proxy_redirect off;

    # ④ 业务自定义头（Yofijoy 渠道必填，其他渠道按需）
    proxy_set_header Yofichannelid "4";
    proxy_set_header Clientid "10004";

    # ⑤ 跨域 + OPTIONS 预检（浏览器直接访问时需要）
    add_header Access-Control-Allow-Origin *;
    add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
    add_header Access-Control-Allow-Headers 'Content-Type, Authorization';
    if ($request_method = 'OPTIONS') { return 204; }
}
```

> **坑点**：`proxy_pass` 末尾的 `/` 决定路径拼接方式：`/moli/` + `http://host/` = `/moli/` 被剥掉；`/moli/` + `http://host` = 保留完整路径。新开发务必加 `/` 并验证。

### 5. HTTPS upstream 规范

反代 HTTPS 目标时，**必须**加 SNI：

```nginx
location /wps-api/ {
    proxy_pass https://openapi.wps.cn/;
    proxy_ssl_server_name on;           # SNI，没有会 403 或握手失败
    proxy_set_header Host openapi.wps.cn;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_connect_timeout 10s;
    proxy_read_timeout 30s;
}
```

### 6. Socket.IO / WebSocket 反代规范

```nginx
location /socket.io {
    proxy_pass http://127.0.0.1:PORT;
    proxy_http_version 1.1;             # WebSocket 需要 HTTP/1.1
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_read_timeout 86400s;          # 长连接超时
}
```

### 7. 硬编码 IP 管理

nginx.conf 中存在大量硬编码 CDN IP（如 `101.43.162.207:89`），建议维护一张映射表在本 README 末尾 **CDN 清单** 章节，IP 变更时同步修改两边。

---

## CDN 清单

| 变量名 | 实际地址 | 对应 server 块端口 | 备注 |
|---|---|---|---|
| u2ip 渠道 | `mlrg.u2ip.com:5099` | 81 | |
| 腾讯云 CDN | `101.43.162.207:89` / `mlgbcdn.bigrnet.com` | 82 | 域名已失效，靠 IP |
| Yofijoy 渠道 | `cdn.yofijoy.com` / `sdk.gateway.yofijoy.com` | 83 | |
| 阿里云 CDN | `103.91.210.7:89` | 84 | |
| 华为云 CDN | `202.189.9.59:99` | 85 | 注意端口是 99，不是 89 |
| 境外 CDN 1 | `103.248.154.40` | 86 | |
| 腾讯云 CDN 2 | `182.254.209.26:89` | 88 | |
| 阿里云 CDN 2 | `49.232.237.231:89` | 89 | |
| 境外 CDN 2 | `43.248.133.155` | 90 | |

---

## 风险点（必读）

- **端口冲突**：80-90、59971-59977 范围端口被占用会导致 Nginx 启动失败，先用 `netstat -ano | findstr :80` 检查
- **配置备份混乱**：`.bk` ~ `.bk11` + `.gf` / `.jx` 共 14 份备份，没有版本号或时间戳标识，恢复时需人工比对
- **硬编码 IP**：多个 server 块里写死了 CDN IP，CDN 迁移时容易遗漏
- **前端目录包含后端代码**：部分 `html_*` 目录下有 `server/*.py` + `users.db`（Flask 后端），但 nginx 不直接托管这些；手动同步前端时需注意不要误删
- **无进程守护**：Windows 上 Nginx 崩溃后不会自动重启，建议配合 `nssm` 注册为服务
- **复制粘贴残留**：85 端口 server 块中 `/moli/` 反代目标是 `103.91.210.7:89`（84 的 IP），属于复制粘贴错误，需业务侧确认
- **85/86 端口 Host 头**：硬编码为 `cdn.yofijoy.com`，但反代目标是华为云/境外 CDN，域名不匹配可能触发 CDN 校验失败

---

## 常见问题

**Q: nginx.exe 一闪而过？**
A: 大概率是配置语法错误，先跑 `.\nginx.exe -t` 看报错，90% 是端口已被占用。

**Q: `nginx.exe -t` 报错 `bind() to 0.0.0.0:80 failed (10048)`？**
A: 80 端口被别的程序占用（可能是 IIS / Apache / 其他 nginx）。用 `netstat -ano | findstr :80` 查到 PID，再 `taskkill /F /PID <pid>` 或换端口。

**Q: 页面打开但接口 404 / 跨域？**
A: 确认对应后端服务（Flask/Node）是否已启动，以及 nginx.conf 里 `proxy_pass` 的端口是否匹配。浏览器 F12 → Network 看响应头有没有 CORS，没有说明后端直连了没走 nginx。

**Q: 游戏资源加载失败？**
A: ① 检查对应 `html_*` 目录下文件是否完整；② 如果是 `/res` 开头的资源，看 nginx.conf 里的代理目标 CDN 是否可达（`curl http://CDN_HOST:CDN_PORT/res/xx`）；③ `proxy_set_header Host` 是否与 CDN 校验域名一致。

**Q: `/moli` 路径 302 跳回 CDN 首页？**
A: 忘了加 `proxy_redirect off;` 或 `Referer` / `Origin` 没改对。检查改包三件套。

**Q: Nginx 报 `upstream prematurely closed connection`？**
A: 后端服务挂了或者超时。先确认后端进程活着，再调大 `proxy_read_timeout`。

**Q: reload 后部分 server 块不生效？**
A: 某些配置（如 `worker_processes`）必须 stop + start 才能生效。改完先 `-t`，reload 不行就停掉再启。