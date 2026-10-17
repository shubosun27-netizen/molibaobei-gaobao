"""local_relay 离线包上传脚本

将 dist/离线版.zip 通过 scp 上传到远端服务器。

风险点：
  ⚠ 依赖本机已配置好 SSH key（或 scp 会交互式问密码）
  ⚠ 远端目录 g.toolsa.cn:/data/html_update/ 必须已存在且有写权限
  ⚠ Windows 下 zip 名含中文，路径务必用引号包裹
"""
import os
import sys
import subprocess

LOCAL_RELAY_DIR = os.path.dirname(os.path.abspath(__file__))
DIST_DIR = os.path.join(LOCAL_RELAY_DIR, "dist")
ZIP_NAME = "离线版.zip"
LOCAL_ZIP = os.path.join(DIST_DIR, ZIP_NAME)

REMOTE_HOST = "root@g.toolsa.cn"
REMOTE_DIR = "/data/html_update/"


def die(msg):
    print(f"\n✗ 失败: {msg}", file=sys.stderr)
    sys.exit(1)


def step(title):
    print(f"\n{'='*60}")
    print(f"  {title}")
    print(f"{'='*60}")


def check_zip():
    if not os.path.isfile(LOCAL_ZIP):
        die(f"{ZIP_NAME} 不存在: {LOCAL_ZIP}\n  请先运行 build.py 生成离线包")
    size_mb = os.path.getsize(LOCAL_ZIP) / 1024 / 1024
    print(f"✓ 本地文件: {LOCAL_ZIP} ({size_mb:.1f} MB)")


def upload():
    remote_target = f"{REMOTE_HOST}:{REMOTE_DIR}"
    print(f"→ 上传目标: {remote_target}")

    cmd = ["scp", LOCAL_ZIP, remote_target]
    print(f"执行: {' '.join(cmd)}")

    result = subprocess.run(cmd)
    if result.returncode != 0:
        die(f"scp 上传失败 (exit={result.returncode})")

    print(f"✓ 上传完成 → {remote_target}{ZIP_NAME}")


def main():
    os.chdir(LOCAL_RELAY_DIR)

    step("检查本地离线包")
    check_zip()

    step(f"scp 上传到 {REMOTE_HOST}")
    upload()

    print(f"\n{'='*60}")
    print("✓ 全部完成")
    print(f"{'='*60}")


if __name__ == "__main__":
    main()