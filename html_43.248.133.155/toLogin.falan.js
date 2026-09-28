
function _getLoginToken() {

    const url = "https://juhe.gateway.yofijoy.com/juhe/api/user/getLoginToken";
    // let extension = getURLParameters();
    // 使用URL对象初始化并获取参数
    const iframe_url = new URL(window.location.href);
    const iframe_url_params = new URLSearchParams(iframe_url.search);
    let extension = {
        "centerflag": iframe_url_params.get('centerflag'),
        "sdkid": iframe_url_params.get('sdkid'),
        "channelid": iframe_url_params.get('channelid'),
        "clientType": iframe_url_params.get('clientType'),
        "sid": iframe_url_params.get('sid'),
        "account": iframe_url_params.get('userId'),
        "fcm": iframe_url_params.get('fcm'),
        "time": iframe_url_params.get('time'),
        "client": iframe_url_params.get('client'),
        "sign": iframe_url_params.get('sign'),
        "juheChannel": iframe_url_params.get('juheChannel')
    };

    console.log("extension", extension);

    let params = {};
    params.extension = JSON.stringify(extension);
    _setSign(params);

    $.ajax({
        type: "POST",
        url: JuheSDK.apiUrl + '/api/user/getLoginToken',
        data: params,
        headers: getHeaders(),
        dataType: "json",
        success: function (data) {
            // doLoginCallback(data);
            console.log("getLoginToken ==> Response: ", data.data.token)
            accessToken = data.data.token;
            _userLogin(data.data.token, extension.account)
        },
        error: function (xhr, status, error) {
            console.log("Network error: " + error); // 输出错误信息
            // doLoginCallback({code:1,msg:"Network error: " + error});
        }
    })
}

function _setSign(params) {
    params.appId = JuheSDK.juheAppId;
    params.channelId = JuheSDK.juheChannel;
    params.timestamp = new Date().getTime();
    var appKey = JuheSDK.juheAppKey;
    let arr = [];
    for (var key in params) {
        arr.push(key)
    }
    arr.sort();
    let str = '';
    for (var i = 0; i < arr.length; i++) {
        str += arr[i] + params[arr[i]]
    }
    str = appKey + '' + str + '' + appKey;
    params.sign = md5(str);
    return params;
}


function _userLogin(token, userId) {
    const url = "https://mlgb-login.bigrnet.com/userlogin";

    const headers = {
        "Accept": "application/json",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Accept-Language": "zh-CN,zh-TW;q=0.9,zh;q=0.8,en;q=0.7",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Host": "juhe.gateway.yofijoy.com",
        "Origin": "https://mlgbcdn.bigrnet.com",
        "Pragma": "no-cache",
        "Referer": "https://mlgbcdn.bigrnet.com/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "cross-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36"
    };

    const formData = JSON.stringify({
        "ptid": 6,
        "channel": 80010,
        "token": token,
        "channel_userid": userId,
        // "channel_userid": "3510000004978485", // 新平台需要替换
        "time": ""
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

            replaceInUrl(accessToken, loginKey)
        })
        .catch(error => console.error("Error:", error));
}
