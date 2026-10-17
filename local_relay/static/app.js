var GameConf = {
    VERSION : "1.0",//表示是否是审核服

    QUICKSDK:false,//quick
    YOFISDK:false, //是否是游斐sdk
    YOFISDKWEB:false,//游斐sdkh5版本
    onLoginSocket:true, //login是否是socket模式
    ENV : "dev",//目前无用
    SHOW_STAT : false,
    SHOW_LOG : false,//目前无用
    CHARGE:true, //是否支持充值

    // LANGUAGE:1,//语言版本    CN = 1,TW = 2,EN = 3,
    HTTP_LOGIN_ADDR: "http://82.157.103.203:7002",//http://newfgmoli.login.yofijoy.com

    BASE_URL : "",
    ACTION_LOG_URL: "http://82.157.103.203:89/action_log",
    SDK_SHELL:false,//是否是游斐sdk壳包
}
window["GameConf"] = GameConf;
