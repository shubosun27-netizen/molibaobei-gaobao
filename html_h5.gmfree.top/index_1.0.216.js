/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "sensor_landscape";

function getVersion() {
    return "version-ac45d4aa7b.json"
}

function getWorker() {
    return "libs/laya/min/workerloader.min.js"
}

function isIOS() {
    return /iPhone|iPod|iPad|Mac/gi.test(navigator.userAgent)
}

function toSdk(data) {
    if (DEBUG) {
        console.log(JSON.stringify(data.param));
    }
    if (isIOS() && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.yofi) {
        data.param = JSON.stringify(data.param)
        window.webkit.messageHandlers.yofi.postMessage(data);
    } else {
        var methodName = data.method;
        if (window.yofi && window.yofi[methodName]) {
            window.yofi[methodName](JSON.stringify(data));
        }
    }
}

toSdk({
    callback: '',
    method: 'showLoadingLog',
    param: "正在更新资源…"
});

//不支持promise的环境，加载promise包
var globalNS = (function () {
    if (typeof self !== 'undefined') {
        return self;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if (typeof global !== 'undefined') {
        return global;
    }
    throw new Error('unable to locate global object');
})();

//兼容低端版本不支持console
if (!("Promise" in globalNS)) {
    window.console = window.console || (function () {
        var c = {};
        c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile
            = c.clear = c.exception = c.trace = c.assert = function () { };
        return c;
    })();
}

if (!("Promise" in globalNS)) {
    console.log('不支持Promise, 准备使用兼容模式')
    loadLib("libs/polyfill.min.js")
}

//<!--libs-file-start-->
loadLib("libs/engine-351995fad3.js");
//<!--libs-file-end-->

//<!--module-file-start-->
loadLib("libs/sdk/MlYoFiSDKConfig.js");
loadLib("libs/pre-04f9bea833.js");
loadLib("errorPromptLayer-294f875bd0.js");
loadLib("libs/vconsole/vconsole.min.js");
loadLib("libs/proto/proto_1.0.216.js");
//<!--module-file-end-->

//<!--game-file-start-->
loadLib("app.js");
loadLib("js/bundle-343312f34e.js");
//<!--game-file-end-->


