import urllib.parse
import requests
import json
import time


def _getLoginToken():
    # 请求的 URL
    url = "https://juhe.gateway.yofijoy.com/juhe/api/user/getLoginToken"

    headers = {
        "Accept": "application/json",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Accept-Language": "zh-CN,zh-TW;q=0.9,zh;q=0.8,en;q=0.7",
        "Access-Control-Request-Headers": "basedata",
        "Access-Control-Request-Method": "POST",
        "Content-Type": "application/x-www-form-urlencoded",
        "basedata": json.dumps({"os": 5, "sub_channel": None}),
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "cross-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36",
    }

    obj = {
        "extension": json.dumps(
            {
                "centerflag": "mlbb_gb8090",
                "sdkid": "200",
                "channelid": "80010",
                "account_id": "12306754",
                "server_id": "58",
                "time": "1735824727",
                "is_adult": "1",
                "sign": "ed0ba1a01d9d289f6f92eacbc24a9e4a",
                "juheChannel": "52",
            }
        ),
        "appId": "1000040",
        "channelId": "52",
        "timestamp": int(time.time() * 1000),
        "sign": setSign(_signInit()).sign,
    }

    # 将对象转换为 URL 编码的字符串
    encoded_string = urllib.parse.urlencode(obj)

    print("encoded_string", encoded_string, (obj))

    # 发送 POST 请求
    response = requests.post(url, data=encoded_string, headers=headers)
    response.raise_for_status()  # 检查请求是否成功
    data = response.json()
    print("_getLoginToken ==> Response: ", data)


def _signInit():
    # 获取当前页面的查询参数部分（即 ? 后面的部分）
    query_string = "&openID=52_12306754&loginKey=000af89db0232596637478f540f140a187c&isGuest=undefined&serverId=360058&originId=360058&ip=122.51.186.209&port=3006&serverName=%E9%AD%94%E5%8A%9B58%E5%8C%BA&serverUrlPrefix=https://mlgb-serverlist.bigrnet.com&bugUrlPrefix=http://account.quannijoy.com:7203&isShellLogin=1&sdkid=200&version=1.0&channelid=80010&gameDomain=wss://mlgb8090-gate.bigrnet.com/ws360058&accessToken=e98c9814d9998e915148e37e0c6c4cb6&channelId=52&userId=12306754&userName=&cpExtra=null&isWd=false&centerflag=mlbb_gb8090&account_id=12306754&server_id=58&time=1735824727&is_adult=1&sign=ed0ba1a01d9d289f6f92eacbc24a9e4a&juheChannel=52"

    # 将查询参数转换为对象
    query_params = dict(urllib.parse.parse_qsl(query_string))

    return query_params


# 假设 setSign 函数已经定义
def setSign(params):
    # 实现 setSign 函数的逻辑
    params["appId"] = JuheSDK.juheAppId
    params["channelId"] = JuheSDK.juheChannel
    params["timestamp"] = int(datetime.now().timestamp() * 1000)
    appKey = JuheSDK.juheAppKey
    arr = list(params.keys())
    arr.sort()
    str = ""
    for key in arr:
        str += key + str(params[key])
    str = appKey + str + appKey
    params["sign"] = hashlib.md5(str.encode()).hexdigest()
    return params
    pass


if __name__ == "__main__":
    _getLoginToken()
