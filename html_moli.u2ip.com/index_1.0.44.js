/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "sensor_landscape";

function getVersion() {
    return "version-a3794669cd.json"
}

function getWorker() {
    return "libs/laya/min/workerloader.min.js"
}

function isIOS() {
    return /iPhone|iPod|iPad|Mac/gi.test(navigator.userAgent)
}

function toSdk(data) {
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
loadLib("libs/engine-9ff1ebbcd5.js");
//<!--libs-file-end-->

//<!--module-file-start-->
loadLib("libs/sdk/MlYoFiSDKConfig.js");
loadLib("libs/pre-5af4c4dd15.js");
loadLib("errorPromptLayer-4e2ed094d2.js");
loadLib("libs/vconsole/vconsole.min.js");
//<!--module-file-end-->

//<!--game-file-start-->
loadLib("app.js");
loadLib("js/bundle-48deca9de5.js");
//<!--game-file-end-->


