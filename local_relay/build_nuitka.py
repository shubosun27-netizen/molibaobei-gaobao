"""local_relay Nuitka 一键编译脚本（B 方案，独立于 PyInstaller 的 build.py）

用途：用 Nuitka 把 relay.py 编译为本机二进制的单文件 EXE，彻底杜绝 pycdc 反编译。
- 复用 build.py 的：同步 static / 校验 bundle / 校验 config 逻辑
- 编译走 Nuitka：--onefile --include-data-dir=static=static --include-data-files=relay_config.json=.

产物：dist_nuitka/nuitka_relay.exe（单文件，内嵌 static + relay_config.json）
"""
import os
import sys
import shutil
import subprocess

# 强制 stdout/stderr 使用 UTF-8，避免中文/✓字符在 GBK 终端报 UnicodeEncodeError
try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

# 复用 build.py 的步骤函数与校验函数（PyInstaller 专有的 verify_spec_datas 不适用）
import build as B

LOCAL_RELAY_DIR = B.LOCAL_RELAY_DIR
STATIC_DIR = B.STATIC_DIR
CONFIG_PATH = B.CONFIG_PATH

DIST_DIR = os.path.join(LOCAL_RELAY_DIR, "dist_nuitka")
OUTPUT_NAME = "nuitka_relay.exe"


def step(n, title):
    print(f"\n{'='*60}")
    print(f"[{n}] {title}")
    print(f"{'='*60}")


def die(msg):
    print(f"\n✗ 失败: {msg}", file=sys.stderr)
    sys.exit(1)


def cleanup_nuitka_artifacts():
    """清理 Nuitka 编译产物目录 (dist_nuitka/ 与 relay.build/ relay.onefile-build/)"""
    for d in ("dist_nuitka", "relay.build", "relay.onefile-build"):
        p = os.path.join(LOCAL_RELAY_DIR, d)
        if os.path.isdir(p):
            try:
                shutil.rmtree(p, ignore_errors=True)
            except Exception:
                pass
            if os.path.isdir(p):
                print(f"⚠ 无法清理 {d}/，继续")
            else:
                print(f"✓ 已清理 {d}/")


def compile_nuitka():
    """Nuitka 单文件编译：relay.py + static + relay_config.json"""
    cmd = [
        sys.executable, "-m", "nuitka",
        "--onefile",
        "--assume-yes-for-downloads",
        "--follow-imports",
        "--windows-console-mode=force",  # 保留控制台日志
        f"--include-data-dir={STATIC_DIR}=static",
        f"--include-data-files={CONFIG_PATH}=relay_config.json",
        f"--output-dir={DIST_DIR}",
        f"--output-filename={OUTPUT_NAME}",
        os.path.join(LOCAL_RELAY_DIR, "relay.py"),
    ]
    print(f"执行: {' '.join(cmd)}")
    result = subprocess.run(cmd, cwd=LOCAL_RELAY_DIR)
    if result.returncode != 0:
        die(f"Nuitka 编译失败 (exit={result.returncode})")

    exe = os.path.join(DIST_DIR, OUTPUT_NAME)
    if not os.path.isfile(exe):
        die(f"编译产物不存在: {exe}")
    size_mb = os.path.getsize(exe) / 1024 / 1024
    print(f"✓ 编译完成: {OUTPUT_NAME} ({size_mb:.1f} MB)")


def main():
    os.chdir(LOCAL_RELAY_DIR)

    step(1, "同步游戏资源 → static/（复用 build.py）")
    B.sync_static()

    step(2, "校验 static/ 完整性（复用 build.py）")
    B.verify_static()

    step(3, "校验 relay_config.json（复用 build.py）")
    B.verify_config()

    step(4, "清理 Nuitka 编译产物")
    cleanup_nuitka_artifacts()

    step(5, "Nuitka 编译")
    compile_nuitka()

    print(f"\n{'='*60}")
    print(f"✓ 全部完成: dist_nuitka/{OUTPUT_NAME}")
    print("  Nuitka 本机二进制单文件，双击即可启动 http://127.0.0.1:8100")
    print(f"{'='*60}")


if __name__ == "__main__":
    main()