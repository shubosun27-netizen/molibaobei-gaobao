# nginx-fugu

Windows 平台 Nginx 部署目录，主要服务于 **河豚（fugu）H5 游戏** 的前端静态资源托管 + 多后端反向代理。

## 目录结构

```
nginx - fugu/
├── nginx.exe                  # Nginx 主程序（Windows 版）
├── conf/
│   ├── nginx.conf             # 主配置文件（核心）
│   ├── nginx.conf.bk*         # 历史备份（共 12 份 .bk + 2 份定制 .gf/.jx）
│   └── mime.types / fastcgi.* # Nginx 原生配置
├── html*/                     # 前端静态资源目录（详见下方）
├── logs/                      # 运行日志（需运行后生成）
├── contrib/                   # Nginx 官方工具（vim 语法高亮等）
└── docs/                      # Nginx 许可证 / 更新日志
```

## `html*` 目录说明

项目内有大量 `html_*` 目录，对应不同 **CDN / 服务器 IP / 域名** 的 H5 游戏前端镜像：

| 目录 | 对应端口 | 用途 |
|---|---|---|
| `html_myGame` | 80 | 主站（当前默认 root） |
| `html_moli.u2ip.com` | 81 | U2IP 渠道服 |
| `html_101.43.162.207` | 82 | 腾讯云 CDN |
| `html_moli.yofijoy.com` | 83 | 游族 Yofijoy 渠道 |
| `html_103.91.210.7` | 84 | 阿里云 CDN |
| `html_202.189.9.59` | 85 | 华为云 CDN |
| `html_103.248.154.40` | 86 | 境外 CDN |
| `html_182.254.209.26` | 88 | 腾讯云 CDN 2 |
| `html_49.232.237.231` | 89 | 阿里云 CDN 2 |
| `html_43.248.133.155` | 90 | 境外 CDN 2 |
| `html_test` | — | 测试环境 |
| `html.bk` | — | 历史备份 |
| `html_update` | 59977 | 版本更新服务器（servers.json / WPS API） |
| `html_yunyouGame` | 59971 | 云游游戏项目 |
| `html_jiafengGame` | 59972 | 架设游戏项目 |
| `html_minigame` | 59973 | 小游戏项目 |
| `html_project/html` | 59974 | 独立项目（含 Socket.IO） |

## 后端服务依赖

Nginx 反向代理到以下本地后端端口，**启动 Nginx 前需确保对应服务已运行**：

| 本地端口 | 用途 | 技术栈 |
|---|---|---|
| 5000 | 登录鉴权 / 第三方 API | Flask (Python) |
| 3000 | V2 版第三方 API | Node.js |
| 3001 | 小游戏 API | Node.js |
| 5500 | 独立项目 API + Socket.IO | Node.js |
| 59976 | 内部 API | Python |
| 59977 | 版本更新 / servers.json | Python |
| 8765 | 云游游戏 API | Java (Spring Boot) |

## 快速开始

```powershell
# 1. 检查配置语法
.\nginx.exe -t

# 2. 启动
.\nginx.exe

# 3. 重载配置（修改 nginx.conf 后）
.\nginx.exe -s reload

# 4. 停止
.\nginx.exe -s stop
```

## nginx.conf 核心特性

1. **Gzip 压缩** 已启用，压缩级别 6，覆盖 JS/CSS/JSON/HTML/SVG
2. **多 server 块**：每个端口对应一个 H5 游戏 CDN 镜像，方便本地调试不同渠道包
3. **路径代理改包**：通过 `proxy_set_header` 替换 `Host` / `Origin` / `Referer`，绕过后端域名校验（见 81 端口的 `/moli`、83 端口的 `/moli/`）
4. **资源代理**：`/test` `/scene` `/res` `/res/atlas` `/res/audio` `/atlas/ui` 等路径反向代理到 CDN，做跨域本地调试
5. **HTTPS upstream**：`/wps-api/` 使用 `proxy_ssl_server_name on` + `SNI` 转发到 `openapi.wps.cn`

## 风险点

- **端口冲突**：80-90、59971-59977 范围端口被占用会导致 Nginx 启动失败，先用 `netstat -ano | findstr :80` 检查
- **配置备份混乱**：`nginx.conf.bk` ~ `nginx.conf.bk11` + `.gf` / `.jx` 共 14 份备份，没有版本号或时间戳标识，恢复时需人工比对
- **硬编码 IP**：多个 server 块里写死了 CDN IP（如 `101.43.162.207:89`），CDN 迁移时容易遗漏
- **前端目录包含后端代码**：部分 `html_*` 目录下有 `server/*.py` + `users.db`（Flask 后端），但 nginx 不直接托管这些；手动同步前端时需注意不要误删
- **无进程守护**：Windows 上 Nginx 崩溃后不会自动重启，建议配合 `nssm` 注册为服务

## 常见问题

**Q: nginx.exe 一闪而过？**
A: 大概率是配置语法错误，先跑 `.\nginx.exe -t` 看报错，90% 是端口已被占用。

**Q: 页面打开但接口 404/跨域？**
A: 确认对应后端服务（Flask/Node）是否已启动，以及 nginx.conf 里 `proxy_pass` 的端口是否匹配。

**Q: 游戏资源加载失败？**
A: 检查对应 `html_*` 目录下文件是否完整；如果是 `/res` 开头的资源，看 nginx.conf 里的代理目标 CDN 是否可达。