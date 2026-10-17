"""前端 JS 处理：把指向真实私服 IP 的地址改写为本地中继地址

目的：让浏览器所有请求都打到 127.0.0.1:8100（同源），
再由中继伪造 Host/Origin/Referer 转发到真实私服。
"""
import os
import re
import shutil

# 私服原始地址（按原型 html_82.157.103.203）
ORIGINAL_HOSTS = [
    "http://82.157.103.203:89",
    "http://82.157.103.203:8089",
]

LOCAL_BASE = "http://127.0.0.1:8100"


def patch_file(path):
    """将指定文件内的私服地址改写为本地地址，返回是否改动"""
    try:
        with open(path, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
    except OSError:
        return False

    original = content
    for host in sorted(ORIGINAL_HOSTS, key=len, reverse=True):
        content = content.replace(host, LOCAL_BASE)

    if content != original:
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        return True
    return False


def patch_tree(game_dir):
    """整个游戏目录内所有文本文件执行地址改写（跳过二进制）"""
    changed = []
    text_ext = {".js", ".html", ".json", ".css", ".txt", ".htm"}
    for root, _, files in os.walk(game_dir):
        for name in files:
            path = os.path.join(root, name)
            ext = os.path.splitext(name)[1].lower()
            if ext not in text_ext:
                continue
            if patch_file(path):
                changed.append(os.path.relpath(path, game_dir))
    return changed


def ensure_local_copy(src_game_dir, dst_static_served_dir):
    """把原版 html_82.157.103.203 复制到中继的 static/ 目录（首次）"""
    if not os.path.isdir(dst_static_served_dir):
        os.makedirs(os.path.dirname(dst_static_served_dir), exist_ok=True)
        shutil.copytree(src_game_dir, dst_static_served_dir)
        return True
    return False


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description="改写前端JS中的私服地址")
    parser.add_argument("game_dir", help="游戏静态目录")
    parser.add_argument("--no-copy", action="store_true", help="不复制，仅改写已存在的目录")
    args = parser.parse_args()

    # 目标：中继的 static 下的同名目录
    served_dir = os.path.join("static", os.path.basename(args.game_dir.rstrip("/\\")))
    if not args.no_copy:
        created = ensure_local_copy(args.game_dir, served_dir)
        print(f"{'已复制' if created else '已存在'} -> {served_dir}")
    changed = patch_tree(served_dir)
    print(f"改写文件数: {len(changed)}")
    for c in changed[:30]:
        print("  ", c)