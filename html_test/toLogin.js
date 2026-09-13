// 签名
// function paramsSign(e) {
//     let a = APPSECRET
//         , t = [];
//     for (var n in e)
//         t.push(n);
//     t.sort();
//     for (let n = 0; n < t.length; n++) {
//         let o = t[n];
//         a = a + o + e[o]
//     }
//     return a += APPSECRET,
//         a = md5(a).toLowerCase()
// }

function paramsSign(params) {
  let signStr = APPSECRET;
  let keys = [];
  for (var key in params) {
    keys.push(key);
  }
  keys.sort();
  for (let index = 0; index < keys.length; index++) {
    let key = keys[index];
    signStr = signStr + key + params[key];
  }
  signStr += APPSECRET;
  signStr = hex_md5(signStr).toLowerCase();
  return signStr;
}

// 密码加密
function passwordEncode(e) {
    let a = PSD_CODE.charAt(0) + PSD_CODE.charAt(2) + e + PSD_CODE.charAt(5) + PSD_CODE.charAt(4);
    return a = hex_md5(a).toLowerCase()
}


// 登录参数
// a=1 , t 手机号, n 密码
function _login(a, t, n) {
    let o, l;
    void 0 == t && (t = ""),
        void 0 == n && (n = ""),
        0 == a ? (o = t,
            l = "" == n ? passwordEncode(n) : n) : 1 == a && (o = "+86" + t,
                l = passwordEncode(n));
    let i = {
        channelId: CHANNEL_ID,
        loginType: a,
        loginName: o,
        password: l,
        timestamp: (new Date).getTime(),
        packageName: PACKAGE_NAME,
        version: VERSION,
        deviceId: window.pcMachineId || ""
    };
    i.sign = paramsSign(i)
    return i;
}


function _getLoginToken(account, password) {
    // http://sdk.gateway.yofijoy.com/sdk/api/v1/player/login
    const url = "http://127.0.0.1:84/moli/sdk/api/" + VERSION_URL + "/player/login"
    // const url = "http://127.0.0.1:83/moli/sdk/api/v1/player/login"

    let params = _login(1, account, password);
    

    $.ajax({
        type: "POST",
        url: url,
        data: params,
        // headers: {
        //     "Yofichannelid": 4,
        //     "Yofideviceid": "",
        //     "Yofipackagename": "com.yofijoy.mlbbgl.h5",
        //     "Yofisdkversion": "1.0.0",
        //     "Yofisystem": 5,
        //     "Yofiversion": "1.0.0",
        //     "Proxy-Connection": "keep-alive",
        // },
        dataType: "json",
        success: function (data) {
            console.log("getLoginToken ==> Response: ", data.data.accessToken)
            accessToken = data.data.accessToken;
            _userLogin(data.data.accessToken)
        },
        error: function (xhr, status, error) {
            console.log("Network error: " + error); // 输出错误信息
        }
    })
}


function _userLogin(token) {
    const url = "http://123.129.204.70:8089/userlogin";

    const headers = {
        "Accept": "application/json",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Accept-Language": "zh-CN,zh-TW;q=0.9,zh;q=0.8,en;q=0.7",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Host": "moli.weblogin.yofijoy.com",
        "Origin": "http://moli.weblogin.yofijoy.com",
        "Pragma": "no-cache",
        "Referer": "http://moli.weblogin.yofijoy.com/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "cross-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36"
    };

    const formData = JSON.stringify({
        "ptid": 5,
        "channel": 10007,
        "app_id": "1",
        "token": token,
        // "channel_userid": userId,
        // "channel_userid": "3510000004978485", // 新平台需要替换
        // "time": ""
    })

    fetch(url, {
        method: "POST",
        // headers: headers,
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log("toUserLogin ==> Response: ", data)
            loginKey = data.loginKey;
            openId = data.openId;

            replaceInUrl(accessToken, loginKey, openId)
            // scheduleEveryTask();
            // scheduleEveryAutoBuy();
        })
        .catch(error => console.error("Error:", error));
}
