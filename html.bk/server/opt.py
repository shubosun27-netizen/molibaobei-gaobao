import requests

url = "https://juhe.gateway.yofijoy.com/juhe/api/user/getLoginToken"

headers = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Accept-Language": "zh-CN,zh-TW;q=0.9,zh;q=0.8,en;q=0.7",
    "Access-Control-Request-Headers": "basedata",
    "Access-Control-Request-Method": "POST",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Host": "juhe.gateway.yofijoy.com",
    "Origin": "https://mlgbcdn.bigrnet.com",
    "Pragma": "no-cache",
    "Referer": "https://mlgbcdn.bigrnet.com/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "cross-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36"
}

response = requests.options(url, headers=headers)

# 输出响应状态码和响应头
print("Status Code:", response.status_code)
print("Response Headers:", response.headers)