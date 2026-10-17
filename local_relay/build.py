"""local_relay 一键编译脚本

规范（build spec）：
  1. 源目录：PROJECT_ROOT/html_82.157.103.203/  — 手动 patch 好的游戏资源
     ✓ 7 处 window.kinkoo_xxx 全局挂载已注入 bundle-3644536b44.js
     ✓ send/onMessageReceived/showBtnMode 三处手动修改已注入
     ✓ 私服硬编码地址已替换为 127.0.0.1:8100（或 bundle 内无硬编码）

  2. 同步规则：清空 local_relay/static/ → 平铺复制源目录全部文件
     ⚠ 不是子目录嵌套！static/ 根目录直接放源目录内容
     ⚠ 不要漏掉 .bk/.bak 等备份文件（可选排除）

  3. relay_config.json 规范：必须无 BOM UTF-8
     ✓ 已在 relay.spec datas 中打包进 EXE 根目录
     ✓ 运行时优先级：--config 参数 > EXE 同级 > 内置 _MEIPASS

  4. 编译：pyinstaller relay.spec --clean  → dist/relay.exe（单文件）

  5. 离线包：dist/relay.exe（已内嵌 static + config，纯单文件可运行）
"""
import os
import sys
import shutil
import subprocess
import re

LOCAL_RELAY_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(LOCAL_RELAY_DIR)
SOURCE_GAME_DIR = os.path.join(PROJECT_ROOT, "html_82.157.103.203")
STATIC_DIR = os.path.join(LOCAL_RELAY_DIR, "static")
DIST_DIR = os.path.join(LOCAL_RELAY_DIR, "dist")
CONFIG_PATH = os.path.join(LOCAL_RELAY_DIR, "relay_config.json")
SPEC_PATH = os.path.join(LOCAL_RELAY_DIR, "relay.spec")

EXCLUDE_EXTS = {".bk", ".bak"}

REQUIRED_KINKOO = [
    "window.kinkoo_xkzt",
    "window.kinkoo_bairen",
    "window.kinkoo_qk",
    "window.kinkoo_ab",
    "window.kinkoo_rank",
    "window.kinkoo_daka",
    "window.kinkoo_equip",
]

REQUIRED_PATCHES = [
    "BeatHeartReq",
    "SceneMoveRpt",
    "_messageBuff_receiveMessage",
    "if (this.manualBtn)",
]


def step(n, title):
    print(f"\n{'='*60}")
    print(f"[{n}] {title}")
    print(f"{'='*60}")


def die(msg):
    print(f"\n✗ 失败: {msg}", file=sys.stderr)
    sys.exit(1)


def sync_static():
    """清空 static/ → 平铺复制源目录内容"""
    if not os.path.isdir(SOURCE_GAME_DIR):
        die(f"源目录不存在: {SOURCE_GAME_DIR}")

    if os.path.isdir(STATIC_DIR):
        shutil.rmtree(STATIC_DIR)
    os.makedirs(STATIC_DIR, exist_ok=True)

    copied = 0
    for root, dirs, files in os.walk(SOURCE_GAME_DIR):
        rel_root = os.path.relpath(root, SOURCE_GAME_DIR)
        dst_root = os.path.join(STATIC_DIR, rel_root) if rel_root != "." else STATIC_DIR
        os.makedirs(dst_root, exist_ok=True)
        for f in files:
            src_file = os.path.join(root, f)
            ext = os.path.splitext(f)[1].lower()
            if ext in EXCLUDE_EXTS:
                continue
            shutil.copy2(src_file, os.path.join(dst_root, f))
            copied += 1

    print(f"✓ 已同步 {copied} 个文件 → static/")


def verify_static():
    """校验同步后的 static/ 完整性"""
    bundle = os.path.join(STATIC_DIR, "js", "bundle-3644536b44.js")
    if not os.path.isfile(bundle):
        die(f"bundle-3644536b44.js 不存在: {bundle}")

    with open(bundle, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()

    missing_kinkoo = [k for k in REQUIRED_KINKOO if k not in content]
    if missing_kinkoo:
        die(f"bundle 缺少 kinkoo 挂载: {missing_kinkoo}")
    print(f"✓ bundle 包含全部 {len(REQUIRED_KINKOO)} 处 kinkoo 挂载")

    missing_patch = [p for p in REQUIRED_PATCHES if p not in content]
    if missing_patch:
        die(f"bundle 缺少手动 patch 标记: {missing_patch}")
    print(f"✓ bundle 包含全部 {len(REQUIRED_PATCHES)} 处手动 patch")


def verify_config():
    """校验 relay_config.json 存在 + 无 BOM"""
    if not os.path.isfile(CONFIG_PATH):
        die(f"relay_config.json 不存在: {CONFIG_PATH}")

    with open(CONFIG_PATH, "rb") as f:
        raw = f.read()

    if raw.startswith(b"\xef\xbb\xbf"):
        print("⚠ 检测到 UTF-8 BOM，自动移除...")
        with open(CONFIG_PATH, "wb") as f:
            f.write(raw[3:])
        print("✓ 已移除 BOM")
    else:
        print("✓ relay_config.json 无 BOM")

    with open(CONFIG_PATH, "r", encoding="utf-8") as f:
        import json
        json.load(f)
    print("✓ relay_config.json JSON 合法")


def verify_spec_datas():
    """校验 relay.spec 已包含 config + static"""
    with open(SPEC_PATH, "r", encoding="utf-8") as f:
        spec = f.read()

    check_pairs = [
        ("('static', 'static')", "static 目录"),
        ("('relay_config.json', '.')", "relay_config.json"),
    ]
    for pattern, label in check_pairs:
        if pattern not in spec:
            die(f"relay.spec 未打包 {label}，请先修改 spec.datas")
        print(f"✓ relay.spec 已打包 {label}")


def _rmtree_with_retry(path, retries=3):
    for i in range(retries):
        try:
            shutil.rmtree(path)
            return True
        except PermissionError:
            import time
            time.sleep(1)
    return False


def cleanup_build():
    """清理旧的 build/dist"""
    for d in ("build", "dist"):
        p = os.path.join(LOCAL_RELAY_DIR, d)
        if os.path.isdir(p):
            try:
                shutil.rmtree(p, onexc=lambda func, fp, info: None)
            except Exception:
                pass
            if os.path.isdir(p):
                if not _rmtree_with_retry(p):
                    print(f"⚠ 无法清理 {d}/（可能被占用），将覆盖")
            else:
                print(f"✓ 已清理 {d}/")


def compile():
    """PyInstaller 编译"""
    cmd = [sys.executable, "-m", "PyInstaller", SPEC_PATH, "--clean"]
    print(f"执行: {' '.join(cmd)}")
    result = subprocess.run(cmd, cwd=LOCAL_RELAY_DIR)
    if result.returncode != 0:
        die(f"PyInstaller 编译失败 (exit={result.returncode})")

    exe = os.path.join(DIST_DIR, "relay.exe")
    if not os.path.isfile(exe):
        die(f"编译产物不存在: {exe}")

    size_mb = os.path.getsize(exe) / 1024 / 1024
    print(f"✓ 编译完成: relay.exe ({size_mb:.1f} MB)")


def main():
    os.chdir(LOCAL_RELAY_DIR)

    step(1, "同步游戏资源 → static/")
    sync_static()

    step(2, "校验 static/ 完整性")
    verify_static()

    step(3, "校验 relay_config.json")
    verify_config()

    step(4, "校验 relay.spec 打包配置")
    verify_spec_datas()

    step(5, "清理旧产物")
    cleanup_build()

    step(6, "PyInstaller 编译")
    compile()

    print(f"\n{'='*60}")
    print("✓ 全部完成: dist/relay.exe")
    print("  纯单文件，双击即可启动 http://127.0.0.1:8100")
    print(f"{'='*60}")


if __name__ == "__main__":
    main()