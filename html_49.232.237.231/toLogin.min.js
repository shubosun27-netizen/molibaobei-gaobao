
// const APPSECRET = '635dfa94ce564adfb386148671cc7473';
// const PSD_CODE = "h8d4n1j2";
// const PACKAGE_NAME = 'com.yofijoy.mlbbgl.h5';
// const CHANNEL_ID = 13000;
// const VERSION = '1.0.0';
// const VERSION_URL = 'v1'
// const PREFIX_URL = 'http://moli.u2ip.com:89/';


function paramsSign(e) {
    let a = APPSECRET
        , t = [];
    for (var n in e)
        t.push(n);
    t.sort();
    for (let n = 0; n < t.length; n++) {
        let o = t[n];
        a = a + o + e[o]
    }
    return a += APPSECRET,
        a = md5(a).toLowerCase()
}


function passwordEncode(e) {
    let a = PSD_CODE.charAt(0) + PSD_CODE.charAt(2) + e + PSD_CODE.charAt(5) + PSD_CODE.charAt(4);
    return a = md5(a).toLowerCase()
}

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
    const url = PREFIX_URL + "/sdk/api/" + VERSION_URL + "/player/login"
    // let extension = getURLParameters();
    // console.log("extension", extension);

    let params = _login(1, account, password);
    // params.extension = JSON.stringify(extension);
    // _setSign(params);


    $.ajax({
        type: "POST",
        url: url,
        data: params,
        // headers: getHeaders(),
        dataType: "json",
        success: function (data) {
            // doLoginCallback(data);
            console.log("getLoginToken ==> Response: ", data.data.accessToken)
            accessToken = data.data.accessToken;
            _userLogin(data.data.accessToken)
        },
        error: function (xhr, status, error) {
            console.log("Network error: " + error); // 输出错误信息
            // doLoginCallback({code:1,msg:"Network error: " + error});
        }
    })
}



function _userLogin(token) {
    const url = GameConf.HTTP_LOGIN_ADDR + "/userlogin";

    const headers = {
        "Accept": "application/json",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Accept-Language": "zh-CN,zh-TW;q=0.9,zh;q=0.8,en;q=0.7",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Host": "moli.u2ip.com:8089",
        "Origin": "http://moli.u2ip.com:89",
        "Pragma": "no-cache",
        "Referer": "http://moli.u2ip.com:89/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "cross-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36"
    };

    const formData = JSON.stringify({
        "ptid": 10,
        "channel": 13000,
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
