import requests  # 导入 requests 库
import time  # 导入 time 库

url = "http://www.106u.com/ajax.php"

headers = {
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest",
    "Origin": "http://www.106u.com",
    "Referer": "http://www.106u.com/reg.php",
}


# 验证账号是否存在
def check_account(username):
    data = {"LOGIN_ACCOUNT": username, "action": "checkUser", "username": username}
    response = requests.post(url, headers=headers, data=data)
    return response.text
    pass


# 注册账号
def register_account(username, password, idcard, truename):
    # 注册请求示例（对应最后一个entry）
    data = {
        "action": "register",
        "post_mode": "withtml5",
        "sp": "",
        "username": username,
        "password": password,
        "passwordconfirm": password,
        "email": username + "@qq.com",
        "truename": truename,  # 原值为URL编码的%E5%AD%99%E6%A0%91%E5%8D%9A
        "idcard": idcard,
    }

    response = requests.post(url, headers=headers, data=data)
    return response.text

    # http://www.106u.com/game.php?action=play&game_id=438&server_id=122566


if __name__ == "__main__":
    truename = "孙树博"  # 替换为实际的用户名
    idcard = "132201198505063774"  # 替换为实际的用户名
    password = "1q2w3e4r."  # 替换为实际的密码
    account_ext = "test"
    for i in range(1000, 1100):
        acc_resp = check_account(account_ext + str(i))
        reg_resp = register_account(account_ext + str(i), password, idcard, truename)
        # 添加 2 秒延迟
        time.sleep(3)
        print(account_ext + str(i) + ": ", acc_resp, reg_resp)
        pass
