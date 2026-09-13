(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["main"] = factory();
	else
		root["main"] = factory();
})(window, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * 获取登录令牌
 * @returns {Promise} 返回一个Promise，解析为包含登录令牌的JSON对象
 */

var loginKey = "";
var accessToken = "";
var openId = "";
var baoshibuy = false;
var baoshibuytime = 0;
var baoshishop3 = false;
var baoshishop4 = false;
window.baoshiList = [];
var intervalId_battleMonster; // 快速遇敌定时器的ID
var intervalId_rptBattleEnd; // 快速战斗定时器的ID

// 启动遇敌定时器
function startBattleMonsterTimer() {
  // 每秒触发一次_battleMonster函数
  if (intervalId_battleMonster) {
    return;
  }
  if (!parent.window.QuicktBattleMonster) {
    // 快速遇敌的变量
    return;
  }
  intervalId_battleMonster = setInterval(_battleMonster, 1000);
}

// 停止遇敌定时器
function stopBattleMonsterTimer() {
  // 销毁定时器
  clearInterval(intervalId_battleMonster);
  intervalId_battleMonster = null;
}

// 每秒触发一次遇敌
function _battleMonster() {
  // console.log("每秒触发一次遇敌");
  window.kinkoo_auto.prototype.onManualMode(); // 手动模式
  window.kinkoo_qk.reqTeamMazeBattleMonster(window.dungeon_id, 3); // 103 是迷宫id
}

// 遇敌成功通知
/**
 * 接收消息的方法
 * 该方法用于接收来自外部的消息，并根据消息内容执行相应的操作。
 * @function receiveMessage
 * @param {Object} event - 包含消息的事件对象
 * @returns {void} 无返回值
 */
function _battleMonster_receiveMessage() {
  stopBattleMonsterTimer(); // 停止遇敌定时器
  // 启动快速战斗定时器
  parent.window.QuickBattle = true;
}

// 战斗结束通知
function _battleEndNtfr_receiveMessage() {
  if (parent.window.QuicktBattleMonster) {
    startBattleMonsterTimer(); // 启动遇敌定时器
    // 停止快速战斗定时器
    parent.window.QuickBattle = false;
  }
  window.test_battleEnd = true;
  // parent.window.kinkoo_sell.onClickSmelt(); // 出售所有物品
}

// 启动快速战斗定时器
/**
 * 启动快速战斗定时器
 * 该函数用于启动一个定时器，每秒调用一次`_rptBattleEnd`函数，以实现快速战斗的功能。
 * @function startRptBattleEndTimer
 * @returns {void} 无返回值
 */
function startRptBattleEndTimer() {
  // 每秒触发一次_rptBattleEnd函数，用于快速战斗，触发下一回合
  if (intervalId_rptBattleEnd) {
    return;
  }
  intervalId_rptBattleEnd = setInterval(_rptBattleEnd, 1000);
  parent.window.QuickBattle = true;
}

// 停止快速战斗定时器
function stopRptBattleEndTimer() {
  // 销毁定时器
  clearInterval(intervalId_rptBattleEnd);
  intervalId_rptBattleEnd = null;
  parent.window.QuickBattle = false;
}

// 每秒触发一次战斗结束
function _rptBattleEnd() {
  // console.log("每秒触发一次战斗结束");
  if (parent.window.QuickBattle) {
    battleMgr.Singleton.rptBattleEnd(); // 快速战斗，触发下一回合
  }
}
function iframeCallBack() {
  var url = new URL(window.location.href);
  var params = new URLSearchParams(url.search);
  _getLoginToken();
}
function iframeCallBack_fugu(account, password) {
  _getLoginToken(account, password);
}
function testApi() {
  // console.log("testApi", window.kinkoo_buy);
  // console.log("testApi", window.kinkoo_send);
  // console.log("testApi", window.kinkoo_buy_params);
  // console.log("testApi", window.kinkoo_ab);
}
function getShopRefresh() {
  baoshibuy = true;
  baoshishop3 = true;
  baoshishop4 = true;
  if (baoshibuy && baoshishop3) {
    window.kinkoo_ab.reqMarketInfo(3);
  }
  if (baoshibuy && baoshishop4) {
    window.kinkoo_ab.reqMarketInfo(4);
  }
  baoshibuy = false;
  console.log("getShopRefresh");

  // 宝石商店id：3、4
  // window.kinkoo_ab.reqMarketInfo(3);
  // window.kinkoo_ab.reqMarketInfo(4);
}
function shopInfo(item) {
  if (item) {
    var buy = function buy() {
      baoshibuytime = Date.now();
      console.log("baoshibuytime", baoshibuytime); // 打印删除后的数组状态
      console.log("baoshiList", baoshiList); // 打印当前数组状态
      var kk = new window.kinkoo_buy(baoshiList[0]);
      console.log("kk to buy: ", baoshiList[0]);
      kk.onClickBuy();
      setTimeout(function () {
        console.log("autoBuyshop");
        getShopRefresh();
      }, 3000);
    };
    var baoshiList = [];
    baoshiList = baoshiList.concat(item.infos);
    // console.log("baoshiList", baoshiList);
    baoshiList.sort(function (a, b) {
      return b.price - a.price; // 从大到小排序
    });
    if (baoshishop3 && baoshiList.length > 0) {
      buy();
    } else if (baoshishop4 && baoshiList.length > 0) {
      buy();
    } else {
      baoshibuy = false;
    }
  }
}
function autoBuyshop() {
  var buy = new window.kinkoo_buy({});
}
function _getLoginToken_opt() {
  // 请求的 URL
  var url = "https://juhe.gateway.yofijoy.com/juhe/api/user/getLoginToken";

  // 请求的选项
  var options = {
    method: 'OPTIONS',
    headers: {
      'Accept': '*/*',
      'Accept-Encoding': 'gzip, deflate, br, zstd',
      'Accept-Language': 'zh-CN,zh-TW;q=0.9,zh;q=0.8,en;q=0.7',
      'Access-Control-Request-Headers': 'basedata',
      'Access-Control-Request-Method': 'POST',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Host': 'juhe.gateway.yofijoy.com',
      'Origin': 'https://mlgbcdn.bigrnet.com',
      'Pragma': 'no-cache',
      'Referer': 'https://mlgbcdn.bigrnet.com/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'cross-site',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36'
    }
  };

  // 发送 OPTIONS 请求
  fetch(url, options).then(function (response) {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }).then(function (data) {
    console.log('Success:', data);
  })["catch"](function (error) {
    console.error('Error:', error);
  });
}
function _signInit(params) {
  var url = window.location.href;

  // 解析 URL 中的查询参数
  var urlParams = new URLSearchParams(url.split('?')[1]);
  params.appId = JuheSDK.juheAppId;
  params.channelId = JuheSDK.juheChannel;
  params.timestamp = new Date().getTime();
  var appKey = JuheSDK.juheAppKey;
  var arr = [];
  for (var key in params) {
    arr.push(key);
  }
  arr.sort();
  var str = '';
  for (var i = 0; i < arr.length; i++) {
    str += arr[i] + params[arr[i]];
  }
  str = appKey + '' + str + '' + appKey;
  params.sign = md5(str);
  return params;
}
function initGameConfig() {
  var url = "https://juhe.gateway.yofijoy.com/juhe/api/gameconfig/init";
  var headers = {
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
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36",
    "baseData": JSON.stringify({
      "os": 5,
      "sub_channel": null
    }),
    "sec-ch-ua": "\"Not A(Brand\";v=\"8\", \"Chromium\";v=\"132\", \"Google Chrome\";v=\"132\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
  };
  var formData = new URLSearchParams();
  var params = {
    "openID": "52_12306754",
    "loginKey": "0001910d72f71af20079f1a2f3d0d34f715",
    "isGuest": "undefined",
    "serverId": "360058",
    "originId": "360058",
    "ip": "122.51.186.209",
    "port": "3006",
    "serverName": "%25E9%25AD%25E4%25E5%258A%258C58%25E5%258C%25BA",
    "serverUrlPrefix": "https%3A%2F%2Fmlgb-serverlist.bigrnet.com",
    "bugUrlPrefix": "http%3A%2F%2Faccount.quannijoy.com%3A7203",
    "isShellLogin": "1",
    "sdkid": "200",
    "version": "1.0",
    "channelid": "80010",
    "gameDomain": "wss%3A%2F%2Fmlgb8090-gate.bigrnet.com%2Fws360058",
    "accessToken": "fded1de0bb6c2b10d863618a0675e4e4",
    "channelId": "52",
    "userId": "12306754",
    "userName": "",
    "cpExtra": "null",
    "isWd": "false",
    "centerflag": "mlbb_gb8090",
    "account_id": "12306754",
    "server_id": "58",
    "time": "1735824727",
    "is_adult": "1",
    "sign": "b9a2249e2639cac04566ed745d86eaf0",
    "juheChannel": "52",
    "shellUrl": "https%253A%252F%252Fmlgbcdn.bigrnet.com%252Fstart%252FindexQV_JuheH5.html%253Fcenterflag%253Dmlbb_gb8090%2526sdkid%253D200%2526channelid%253D80010%2526account_id%253D12306754%2526server_id%253D58%2526time%253D1735824727%2526is_adult%253D1%2526sign%253Ded0ba1a01d9d289f6f92eacbc24a9e4a%2526juheChannel%253D52",
    "appId": "1000040",
    "timestamp": "1737944516542"
  };
  // 使用 Object.entries 和 URLSearchParams 简化表单数据构建
  Object.entries(params).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    return formData.append(key, value);
  });
  fetch(url, {
    method: "POST",
    headers: headers,
    body: formData
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return console.log("initGameConfig ==> Response: ", data);
  })["catch"](function (error) {
    return console.error("Error:", error);
  });
}

// 重置iframe的url
function replaceInUrl(accessToken, loginKey, openID) {
  // 获取当前网页的地址
  var currentUrl = window.location.href;

  // 使用URL对象解析URL
  var urlObj = new URL(currentUrl);

  // 获取URL中的查询参数
  var params = new URLSearchParams(urlObj.search);

  // 设置新的token值
  params.set('accessToken', accessToken);
  params.set('loginKey', loginKey);
  params.set('openID', openID);

  // 更新URL的查询参数
  urlObj.search = params.toString();
  var newUrl = urlObj.toString();
  window.parent.postMessage({
    type: "iframeMethodResult",
    result: newUrl
  });
  console.log("urlObj ==> ", newUrl);

  // 返回更新后的URL
  return newUrl;
}

// 获取背包信息
function getBagInfo() {
  parent.addItemToBag(window.me.userInfo.itemArray, window.meta.itemDict.data);
  // console.log("背包信息: ", window.me.userInfo.itemArray);
}

// 获取排行榜信息
function getRankInfo() {
  window.kinkoo_rank.reqRankInfo(0, 1, 100, true, true);
}

// 获取迷宫地图列表
function getDungeonList() {
  window.dungeonList = window.meta.getDungeonMetaAll();
  // console.warn('dungeon: ', window.dungeonList);

  // 清空地图列表
  parent.clearMapList();
  parent.clearDungeonMapList();
  for (index in window.dungeonList) {
    // console.log("item: ", dungeonList[index].info_cn_1, dungeonList[index].dungeon_id);
    parent.addMapToList(window.dungeonList[index].dungeon_id, window.dungeonList[index].info_cn_1 + "(" + window.dungeonList[index].exp_level + "级)");
    if (window.dungeonList[index].dungeon_type == 2) {
      parent.addDungeonMapToList(index, window.dungeonList[index].info_cn_1 + "(消耗：" + window.dungeonList[index].attack_cost[2] + "个)");
    }
    // 获取迷宫BOSS信息
    window.meta.getDungeonInfoMetasById(window.dungeonList[index].dungeon_id);
    window.meta.getDungeonMonsterMeta(window.dungeonList[index].dungeon_id * 100);
  }

  // 迷宫BOSS信息填充到列表
  var monsterInfo = meta.dungeonInfosDic.data;
  var monsterData = meta.dungeonMonsterDic.data;
  parent.clearDungeonBossMapList();
  for (index in monsterData) {
    parent.addDungeonBossMapToList(monsterData[index].id, monsterData[index].info_cn_1 + "(" + monsterData[index].level + "级)");
  }
}

// 进入迷宫地图
function enterDungeonEvent(params) {
  window.kinkoo_qk.reqTeamMazeExit();
  setTimeout(function () {
    window.kinkoo_qk.reqTeamMazeEnter(parseInt(params));
    window.dungeon_id = parseInt(params);
  }, 1000);
}

// 宝石商店通知
function _shopInfoNtfr_receiveMessage(params) {
  console.log('宝石：', params);
  buyBaoshi(params);
}
function buyBaoshi(params) {
  // 3号商店作为触发条件，每次刷新都清空
  if (params.id == 3) {
    window.baoshiList = [];
  }

  // 梳理宝石列表
  if (params.infos) {
    for (index in params.infos) {
      window.baoshiList.push({
        marketId: params.id,
        wareId: params.infos[index].id,
        price: params.infos[index].price
      });
    }
  }
  // 宝石按价格排序
  window.baoshiList.sort(function (a, b) {
    return b.price - a.price; // 从大到小排序
  });
  if (params.id === 4 && window.baoshiList.length > 0) {
    // 4为第二个商店，开始准备抢宝石
    setTimeout(function () {
      console.log("buy baoshi: ", window.baoshiList[0]);
      window.kinkoo_ab.reqMarketBuy(window.baoshiList[0].marketId, window.baoshiList[0].wareId);
      window.kinkoo_ab.reqMarketInfo(3);
      window.kinkoo_ab.reqMarketInfo(4);
    }, 1000);
  }
}

// 宝石定时抢购
function baoshiEvent(params) {
  // 在这里编写您的函数逻辑
  console.log("宝石事件", params);
  window.kinkoo_ab.reqMarketInfo(3);
  window.kinkoo_ab.reqMarketInfo(4);
}

// 禁地事件
function jindiEvent() {
  window.jindiBattle = false;
  try {
    // 进入禁地
    window.kinkoo_qk.reqTeamMazeEnter(901, 90101, {
      x: 700,
      y: 700
    });
    console.log('成功进入禁地');
  } catch (error) {
    console.error('进入禁地操作失败:', error);
    alert('进入禁地操作失败');

    // 回城等待
    returnToCity();
    return;
  }

  // VIP扫荡逻辑
  if (window.me.userInfo.vipLevel > 2) {
    if (window.jindi_complete === true) {
      console.warn("禁地扫荡已完成，跳过禁地战斗");
      returnToCity();
      return;
    }
    setTimeout(function () {
      for (var _i = 0; _i < window.autoJindiCount; _i++) {
        window.kinkoo_qk.reqMopup(901);
      }
      window.jindi_complete = true;
    }, 3000);
  } else {
    // 禁地扫荡默认为2次，根据次数走
    // 考虑到VIP等级，暂时改为战斗模式
    // VIP2以下的战斗逻辑
    setTimeout(function () {
      if (window.jindi && window.autoJindiCount > 0 && window.jindi_complete === false) {
        // 减少挑战次数
        try {
          // 发起禁地战斗
          window.kinkoo_qk.reqTeamMazeBattle(901, 90101, 3);
          console.log('成功发起禁地战斗');
          window.autoJindiCount--;
          window.jindiBattle = true;
        } catch (error) {
          console.error('发起禁地战斗失败:', error);
          alert('发起禁地战斗失败');
        }
      } else {
        window.jindi = false;
        window.jindi_complete = true;

        // 回城等待
        returnToCity();
      }
    }, 3000);
  }
}

// 定义一个变量来存储定时器的ID
window.timerId = 0;

// 计算当前时间到下一个整点的时间差（以毫秒为单位）
function getTimeToNextHour(hour) {
  var now = new Date();
  var nextHour = new Date(now);
  nextHour.setHours(hour, 0, 0, 0);
  if (now > nextHour) {
    nextHour.setDate(nextHour.getDate() + 1); // 如果当前时间已经过了指定的小时，则设置为明天的同一时间
  }
  return nextHour - now;
}

// 设置定时器，在每天的指定时间运行函数
function scheduleFunction() {
  var hours = [9, 11, 13, 15, 17, 19, 20, 21, 22];
  var currentHourIndex = 0;

  // 获取当前时间的小时数
  var now = new Date();
  var currentHour = now.getHours();

  // 找到下一个时间点的索引
  for (var _i2 = 0; _i2 < hours.length; _i2++) {
    if (currentHour < hours[_i2]) {
      currentHourIndex = _i2;
      break;
    }
  }

  // 如果当前时间已经大于22点，设置定时器为第二天的9点
  if (currentHour >= 22) {
    currentHourIndex = 0;
  }

  // 定义一个内部函数来处理定时任务
  function runTask() {
    var currentHour = hours[currentHourIndex];
    var timeToNextHour = getTimeToNextHour(currentHour);

    // 设置定时器，在下一个时间点执行任务
    window.timerId = setTimeout(function () {
      baoshiEvent(); // 调用您的函数
      currentHourIndex = (currentHourIndex + 1) % hours.length; // 移动到下一个时间点
      runTask(); // 递归调用，继续执行下一个时间点的任务
    }, timeToNextHour);
  }

  // 启动定时任务
  runTask();
}

// 取消购买宝石的定时器
function cancelBuyBaoshiTimer() {
  clearTimeout(window.timerId);
}
function dakaEvent() {
  // 触发打卡信息
  console.warn("dakaEvent");
  window.kinkoo_daka.reqSigninInfo();
}

// 每天固定22点任务
function everyTask() {
  // 打卡
  dakaEvent();
  window.everyExp = false;
  // 勇士密令
  secretAwardEvent();
  if (parent.autoJindi) {
    // 自动打禁地
    console.warn("autoJindi");
    // 停止挂机
    parent.handleBattleMonsterButtonClick();
    window.jindi = true;

    // 等挂机完成，先回城，再执行禁地任务

    // 回城
    setTimeout(function () {
      returnToCity();
    }, 8000);

    // 10秒后进入禁地
    setTimeout(function () {
      enterJindi();
    }, 10000);
  }
}

// 进入禁地
function enterJindi() {
  try {
    // 进入禁地
    window.kinkoo_qk.reqTeamMazeEnter(901, 90101, {
      x: 700,
      y: 700
    });
    console.log('成功进入禁地');

    // 执行战斗事件
    jindiEvent();
  } catch (error) {
    console.error('进入禁地操作失败:', error);
  }
}

// 每天打卡的定时器ID
window.daka_timerId = null;

// 计算当前时间到下一个22点的时间差（以毫秒为单位）
function getTimeToNext22() {
  var now = new Date();
  var next22 = new Date(now);
  next22.setHours(22, 0, 0, 0);
  if (now > next22) {
    next22.setDate(next22.getDate() + 1); // 如果当前时间已经过了22点，则设置为明天的22点
  }
  return next22 - now;
}

// 设置定时器，在每天的22点执行everyTask函数
function scheduleEveryTask() {
  var timeToNext22 = getTimeToNext22();
  window.daka_timerId = setTimeout(function () {
    everyTask(); // 调用everyDaka函数
    scheduleEveryTask(); // 递归调用，继续执行下一个22点的任务
  }, timeToNext22);
}

// 取消打卡定时器
function cancelEveryDakaTimer() {
  clearTimeout(window.daka_timerId);
}

// 魔物狩猎活动,每2秒执行一次
function monsterHunter() {
  // 获取狩猎基础信息
  window.kinkoo_shoulie.monsterHunterEnterReq();
  // 领取免费奖励
  window.kinkoo_shoulie.reqShopBuy(2, [1]);
  var count = 0;
  var intervalId = setInterval(function () {
    if (count <= 60) {
      window.kinkoo_shoulie.monsterHunterDiceReq(0);
      count++;
    } else {
      clearInterval(intervalId);
      // 查询狩猎商店信息
      window.kinkoo_shoulie.reqShopInfo(1);
    }
  }, 2000);
}

// 星宫活动
function starPalace() {
  window.kinkoo_xingkong.reqGetAwardShopFree();
  window.kinkoo_xingkong.reqLottery(0);
  for (var _index = 0; _index < 10; _index++) {
    window.kinkoo_xingkong.reqLottery(2);
  }
  for (var _index2 = 1; _index2 <= 12; _index2++) {
    window.kinkoo_xingkong.reqWeekAward(_index2);
  }
}

// 爬塔
function pata() {
  window.kinkoo_yuansu.reqPataReset();
  setTimeout(function () {
    window.kinkoo_yuansu.reqPataAutoBattle();
  }, 1000);
}

// 勇士事件
function secretAwardEvent() {
  // 触发条件
  window.kinkoo_yongshi.singleton.reqSecretAwardInfo();
}

// 勇士密令
function secretAwardTask() {
  // 领取任务
  if (kinkoo_yongshi.Singleton.taskList) {
    for (index in kinkoo_yongshi.Singleton.taskList) {
      window.kinkoo_yongshi.Singleton.reqTaskAward(kinkoo_yongshi.singleton.taskList[index].id);
    }
  }
  // 领取奖励
  for (var _index3 = 1; _index3 <= 50; _index3++) {
    window.kinkoo_yongshi.Singleton.reqReward(200 + _index3, 1);
  }
}

// 每日固定任务的定时器ID
window.dailyTaskTimerId = null;

// 每日固定任务函数
function dailyTask() {
  console.log('执行每日固定任务');
  // 星宫
  if (window.autoStarPalace) {
    starPalace();
  }
  // 狩猎
  if (window.autoMonsterHunter) {
    monsterHunter();
  }

  // 爬塔
  if (window.autoPata) {
    pata();
  }

  // 宠物召唤券
  if (window.autoCWZHJ) {
    autoCWZHJEvent();
  }

  // 心愿召唤券
  if (window.autoYWZHJ) {
    autoXYZHJEvent();
  }
  // 钓鱼
  // 这里可以添加具体的任务逻辑
}

// 计算当前时间到下一个00:01的时间差（以毫秒为单位）
function getTimeToNext2AM() {
  var now = new Date();
  var next2AM = new Date(now);
  next2AM.setHours(0, 1, 0, 0);
  if (now > next2AM) {
    next2AM.setDate(next2AM.getDate() + 1); // 如果当前时间已经过了凌晨2点，则设置为明天的凌晨2点
  }
  return next2AM - now;
}

// 设置定时器，在每天的凌晨2点执行dailyTask函数
function scheduleDailyTask() {
  var timeToNext2AM = getTimeToNext2AM();
  window.dailyTaskTimerId = setTimeout(function () {
    dailyTask(); // 调用dailyTask函数
    scheduleDailyTask(); // 递归调用，继续执行下一个凌晨2点的任务
  }, timeToNext2AM);
}

// 取消每日固定任务的定时器
function cancelDailyTask() {
  clearTimeout(window.dailyTaskTimerId);
}

// 判断背包物品数量
function checkBagItemCount(itemId) {
  // 检查背包物品数量是否大于等于指定数量
  // window.me.userInfo.itemArray
  // 遍历背包物品
  // 检查背包物品是否存在且数量是否足够
  if (window.me && window.me.userInfo && window.me.userInfo.itemArray) {
    var foundItem = window.me.userInfo.itemArray.find(function (item) {
      return item.index === itemId;
    });
    return foundItem ? foundItem.count : 0;
  }
}

// 副本事件
function autoDungeon_receiveMessage() {
  window.kinkoo_fuben = {
    num: 0,
    mapId: 0,
    missionId: 0
  };
  var pos = parseInt(window.fuben_mapId);

  // 检查 window.dungeonList 是否存在，以及 pos 是否在有效索引范围内
  if (window.dungeonList && pos >= 0 && pos < window.dungeonList.length) {
    console.log("item: ", window.dungeonList[pos].info_cn_1, window.dungeonList[pos].dungeon_id);
    window.kinkoo_fuben.num = window.dungeonList[pos].attack_cost[2];
    window.kinkoo_fuben.mapId = window.dungeonList[pos].dungeon_id;
    window.kinkoo_fuben.missionId = window.dungeonList[pos].mission_id;

    // 获取副本信息
    window.kinkoo_qk.reqTeamMaseInfo(0);
    try {
      // 进入副本
      enterDungeonEvent(window.kinkoo_fuben.mapId);
    } catch (error) {
      console.error('进入副本失败:', error);
    }
    try {
      // 检查挑战卷数量
      var juanCount = checkBagItemCount(1013);
      // console.error('现有挑战券:', juanCount);
      // 所需挑战券数量
      var needJuanCount = window.kinkoo_fuben.num * 30;
      // console.error('所需挑战券数量:', needJuanCount);
      if (juanCount < needJuanCount) {
        // 购买挑战卷
        window.kinkoo_TB.reqStoreBuy([15, 1511, needJuanCount - juanCount]);
      }
    } catch (error) {
      console.error('购买挑战券失败:', error);
    }
    try {
      var _rewardTimesMap$vleve;
      // 判断VIP等级，0为非VIP，0-1为1次，2为2次，3为3次，4为4次，5为5次，6为5次
      var vlevel = window.me.userInfo.vipLevel;
      // 定义一个数组来映射 VIP 等级和奖励次数
      var rewardTimesMap = [1, 1, 2, 3, 4, 5, 5];
      // 从映射数组中获取对应 VIP 等级的奖励次数，若 VIP 等级不在 0 - 6 范围，默认为 0
      var rewardTimes = (_rewardTimesMap$vleve = rewardTimesMap[vlevel]) !== null && _rewardTimesMap$vleve !== void 0 ? _rewardTimesMap$vleve : 1;
      // 设置奖励次数
      window.kinkoo_qk.TeamMazeSetBossRewardTimesReq(rewardTimes);
    } catch (error) {
      console.error('设置奖励次数失败:', error);
    }
    try {
      // 挑战副本
      setTimeout(function () {
        autoDungeonBattle_receiveMessage();
      }, 2000);
    } catch (error) {
      console.error('挑战副本失败:', error);
    }

    // 设置战斗变量，防止跳出
    window.fuben_zhandou = true;
  } else {
    console.error('副本信息无效:', pos);
  }
}

// 副本战斗事件
function autoDungeonBattle_receiveMessage() {
  // 检查是否有挑战次数
  if (window.fuben.attackDungeonTimes > 0) {
    window.kinkoo_qk.reqTeamMazeBattle(window.kinkoo_fuben.mapId, window.kinkoo_fuben.missionId, 3);
  } else {
    window.kinkoo_fuben = null;
    window.fuben_zhandou = false;
    window.fuben_complete = true;
    // 回城等待
    returnToCity();
  }
}

// 封装回城函数
function returnToCity() {
  try {
    window.kinkoo_qk.reqTeamMazeExit();
    console.log('成功回城');
  } catch (error) {
    console.error('回城操作失败:', error);
  }
}

// 逻辑主函数
function mainEvent() {
  // 先回城
  returnToCity();

  // 禁地，未完成禁地任务是触发
  if (window.jindi && !window.jindi_complete) {
    jindiEvent();
    return;
  }

  // 副本
  if (parent.autoDungeon && window.fuben && !window.fuben_complete) {
    parent.handleAutoDungeonClick();
    // autoDungeon_receiveMessage();
    return;
  }

  // 再次回城
  returnToCity();
  setTimeout(function () {
    // 继续挂机
    try {
      // 进入地图
      parent.handleEnterMapButtonClick();
      console.log('成功进入地图');
    } catch (error) {
      console.error('进入地图操作失败:', error);
    }
  }, 2000);
  setTimeout(function () {
    try {
      // 挂机
      parent.handleBattleMonsterButtonClick();
      console.log('成功开始挂机');
    } catch (error) {
      console.error('开始挂机操作失败:', error);
    }
  }, 4000);
}

// 百人事件
function autoDao100Event() {
  // 触发条件
  var curr = window.kinkoo_bairen.currentEnterLevel;
  window.kinkoo_bairen.reqDao100Battle(curr);
}

// 每天打卡的定时器ID
window.autoBuy_timerId = null;

// 计算当前时间到下一个8点的时间差（以毫秒为单位）
function getTimeToNext8() {
  var now = new Date();
  var next8 = new Date(now);
  next8.setHours(8, 0, 0, 0);
  if (now > next8) {
    next8.setDate(next8.getDate() + 1); // 如果当前时间已经过了8点，则设置为明天的8点
  }
  return next8 - now;
}

// 设置定时器，在每天的8点执行everyTask函数
function scheduleEveryAutoBuy() {
  var timeToNext8 = getTimeToNext8();
  window.autoBuy_timerId = setTimeout(function () {
    autoBuyItem(); // 调用everyDaka函数
    scheduleEveryAutoBuy(); // 递归调用，继续执行下一个8点的任务
  }, timeToNext8);
}

// 取消打卡定时器
function cancelEveryAutoBuyTimer() {
  clearTimeout(window.autoBuy_timerId);
}

// 每日自动购买物品
function autoBuyItem() {
  setTimeout(function () {
    return window.kinkoo_TB.reqStoreBuy([15, 1521, 3]);
  }, 1000); // 购买升星

  setTimeout(function () {
    return window.kinkoo_TB.reqStoreBuy([15, 1530, 10]);
  }, 2000); // 购买精粹

  setTimeout(function () {
    return window.kinkoo_TB.reqStoreBuy([15, 1502, 6]);
  }, 3000); // 购买沙漏

  setTimeout(function () {
    return window.kinkoo_TB.reqStoreBuy([15, 1501, 10]);
  }, 3000); // 购买水晶

  setTimeout(function () {
    return window.kinkoo_daka.reqReceiveSignReward(1);
  }, 4000); // 累计登录

  setTimeout(function () {
    return window.kinkoo_daka.reqReceiveSignReward(2);
  }, 5000); // 每日登录

  setTimeout(function () {
    return window.kinkoo_daka.reqReceiveSignReward(3);
  }, 6000); // 特权激活

  setTimeout(function () {
    return window.kinkoo_huodong.reqActPointAward(1);
  }, 8000); // 每日活跃

  setTimeout(function () {
    return window.kinkoo_huodong.reqActPointAward(2);
  }, 9000); // 每日活跃

  setTimeout(function () {
    return window.kinkoo_huodong.reqActPointAward(3);
  }, 10000); // 每日活跃

  setTimeout(function () {
    return window.kinkoo_huodong.reqActPointAward(4);
  }, 11000); // 每日活跃

  var sk = {
    id: 1212,
    info_cn_1: '120级首饰盒',
    shop_type: 12,
    sequence: 1,
    item_type: 1,
    buy_term_type: 0,
    buy_terms: 0,
    buy_times: 10,
    buy_type: 1,
    cost_item: 11012,
    cost_type: 1,
    item_count: 1,
    item_id: 27212,
    level_show: 120,
    price: 0,
    size: 10,
    vip_buy_level: 0
  };
  setTimeout(function () {
    return window.kinkoo_duihuan.reqJewelryShopBuy(sk, [12, 1212, 10]);
  }, 12000); // 兑换120级首饰
}

// 卖垃圾
function sellItem() {
  // 获取背包信息
  window.AccountManager.Singleton.getUserBagPacker();
  // 打印物品字典数据
  console.warn(window.meta.itemDict.data);
  // 使用数组解构直接初始化空数组
  var smeltList = [],
    spliceList = [];
  // 遍历物品
  me.userInfo.itemArray.forEach(function (nl, index) {
    var itemMeta = window.meta.itemDict.data[nl.index];
    // 检查物品类型和价格限制
    if (itemMeta && itemMeta.type === 7 && itemMeta.price_limit[0] < 100) {
      console.warn(itemMeta, nl.count);
      smeltList.push(nl);
      spliceList.push(index);
    }
  });
  // 出售垃圾
  var sell = new window.kinkoo_smelt([smeltList, true]);
  sell.smeltGoods();
  // 删除垃圾数据，倒序删除避免索引混乱
  for (var _index4 = spliceList.length - 1; _index4 >= 0; _index4--) {
    me.userInfo.itemArray.splice(spliceList[_index4], 1);
  }
}

// 监控交易行
function monitorShopItems() {
  setTimeout(function () {
    window.kinkoo_sale.reqExchangeInfo(2, 6, 0, 0, 0, 2, [], 0, 0, []);
  }, 1000); // 宠物公示
  setTimeout(function () {
    window.kinkoo_sale.reqExchangeInfo(2, 1, 0, 0, null, 2, [], 0, 0, [1, 2, 3, 4, 6, 7, 8, 9, 11]);
  }, 1500); // # 道具公示
  setTimeout(function () {
    window.kinkoo_sale.reqExchangeInfo(2, 2, 0, 0, 1, 1, [], 0, 0, []);
  }, 2000); // # 武器公示
  setTimeout(function () {
    window.kinkoo_sale.reqExchangeInfo(2, 2, 0, 0, 2, 1, [], 0, 0, []);
  }, 3000); // # 防具公示
  setTimeout(function () {
    window.kinkoo_sale.reqExchangeInfo(2, 2, 0, 0, 3, 1, [], 0, 0, []);
  }, 4000); // 首饰公示
  setTimeout(function () {
    window.kinkoo_sale.reqExchangeInfo(2, 2, 0, 0, 5, 2, [], 0, 0, []);
  }, 5000); // 材料公示
  setTimeout(function () {
    window.kinkoo_sale.reqExchangeInfo(2, 1, 1, 0, 0, 1, [], 0, 0, [10]);
  }, 6000); // 料理公示
  setTimeout(function () {
    window.kinkoo_sale.reqExchangeInfo(2, 8, 0, 0, 0, 1, [], 0, 0, []);
  }, 7000); // 魂石公示
  setTimeout(function () {
    window.kinkoo_sale.reqExchangeInfo(2, 9, 0, 0, 0, 1, [], 0, 0, []);
  }, 8000); // 符文公示
}

// 定时监控交易行
function scheduleMonitorShopItems() {
  // 创建个定时器，每10分钟执行一次，可以手动取消定时器
  monitorShopItems();
  window.monitorShopItemsTimerId = setInterval(function () {
    monitorShopItems();
  }, 10 * 60 * 1000);
}

// 停止监控交易行
function cancelMonitorShopItems() {
  clearInterval(window.monitorShopItemsTimerId);
}

// 自动群里之墓
function autoGadAreEvent() {
  // 打BOSS
  window.kinkoo_godare.reqGodAreaBattle(102, 3);
}

// 自动星空之塔
function autoXKZTEvent() {
  // 触发条件
  window.kinkoo_xkzt.activityXKZTBattleReq(3);
}

// 自动领取宠物召唤券
function autoCWZHJEvent() {
  window.kinkoo_chongwuzhaohuan.reqReward(1, 0, 14);
}

// 自动领取心愿召唤券
function autoXYZHJEvent() {
  window.kinkoo_chongwuzhaohuan.reqReward(1, 0, 60);
}

// 自动铸造
function autoForgeFun() {
  // 获取装备列表
  var elist = window.kinkoo_equip.getEquipArray();
  // 获取可强化材料
  var cl = elist.reduce(function (acc, item) {
    if (item.equipMeta.grade < 5 && item.lock == 0 && item.equipMeta.pos < 8) {
      acc.push({
        type: 2,
        index: item.id,
        count: 1
      });
    }
    return acc;
  }, []);

  // 遍历角色，寻找可强化的装备
  window.me.userInfo.heroArray.some(function (hero) {
    for (var _i3 = 1; _i3 <= 4; _i3++) {
      var equip = hero.equipDict.data[_i3];
      if (equip.strengthLv < equip.equipMeta.enhance_limit) {
        window.forgeManager.reqStrengthen(1, hero.id, cl, _i3, 0);
        return true; // 找到可强化装备后立即返回
      }
    }
  });
}

// 自动铸造触发事件
function autoForgeEvent(minute) {
  // 立即执行一次
  autoForgeFun();

  // 清除可能存在的旧定时器
  if (window.forgeTimerId) {
    clearInterval(window.forgeTimerId);
  }

  // 设置定时器，每10分钟执行一次
  window.forgeTimerId = setInterval(function () {
    console.log('自动强化定时器执行'); // 添加日志用于调试
    autoForgeFun();
  }, minute * 60 * 1000);
}

// 取消自动强化定时器
function cancelAutoForgeTimer() {
  clearInterval(window.forgeTimerId);
}

// 凌晨3点执行任务
function scheduleEveryTaskAt3AM() {
  var timeToNext3AM = getTimeToNext3AM();
  window.daka_timerId = setTimeout(function () {
    window.autoDungeonBoss_ok = true; // 调用everyDaka函数
    scheduleEveryTaskAt3AM(); // 递归调用，继续执行下一个22点的任务
  }, timeToNext3AM);
}

// 计算当前时间到下一个凌晨3点的时间差（以毫秒为单位）
function getTimeToNext3AM() {
  var now = new Date();
  var next22 = new Date(now);
  next22.setHours(3, 0, 0, 0);
  if (now > next22) {
    next22.setDate(next22.getDate() + 1); // 如果当前时间已经过了22点，则设置为明天的22点
  }
  return next22 - now;
}

// send消息转存到本地
function _messageBuff_sendMessageToLocal(_x, _x2, _x3, _x4) {
  return _messageBuff_sendMessageToLocal2.apply(this, arguments);
} // 接收消息转存到本地
function _messageBuff_sendMessageToLocal2() {
  _messageBuff_sendMessageToLocal2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(msg, params, t, transId) {
    var messageData, messageHistory;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          // 记录发送的消息
          try {
            messageData = {
              type: msg,
              direction: 'send',
              timestamp: Date.now(),
              data: JSON.parse(JSON.stringify(params)),
              transId: t ? transId + 1 : 0
            }; // 获取现有记录或初始化空数组
            messageHistory = localStorage.getItem('websocketMessageHistory') || '[]';
            messageHistory = JSON.parse(messageHistory);

            // 添加新记录
            messageHistory.push(messageData);

            // 保存回本地存储
            localStorage.setItem('websocketMessageHistory', JSON.stringify(messageHistory));
          } catch (error) {
            console.error('Failed to save sent message:', error);
          }
        case 1:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _messageBuff_sendMessageToLocal2.apply(this, arguments);
}
function _messageBuff_receiveMessageToLocal(_x5, _x6, _x7) {
  return _messageBuff_receiveMessageToLocal2.apply(this, arguments);
} // 接受消息主函数
function _messageBuff_receiveMessageToLocal2() {
  _messageBuff_receiveMessageToLocal2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(msg, params, transId) {
    var messageData, messageHistory;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          // 将消息数据保存到本地存储
          try {
            messageData = {
              type: msg,
              direction: 'receive',
              timestamp: Date.now(),
              data: JSON.parse(JSON.stringify(params)),
              // 深拷贝数据
              transId: transId
            };
            messageHistory = localStorage.getItem('websocketMessageHistory') || '[]';
            messageHistory = JSON.parse(messageHistory);
            messageHistory.push(messageData);
            localStorage.setItem('websocketMessageHistory', JSON.stringify(messageHistory));
          } catch (error) {
            console.error('Failed to save received message:', error);
          }
        case 1:
          return _context2.a(2);
      }
    }, _callee2);
  }));
  return _messageBuff_receiveMessageToLocal2.apply(this, arguments);
}
function _messageBuff_receiveMessage(msg, params) {
  console.warn('_messageBuff_receiveMessage: ', msg, params);
  // 排行榜
  if (msg == 'RankInfoAck') {
    // 排行榜信息
    window.rankInfo = params.infos;
    // parent.addHunterToList(params.infos);
  }

  // 打卡
  if (msg == 'GuildArenaGetRegInfoAck') {
    // 触发打卡
    dakaEvent();
  }

  // 战斗结束
  if (msg == 'BattleEndNtf') {
    // 测试小号
    if (parent.window.test_stage_start) {
      parent.window.test_stage += 1;
      parent.testLevelMain();
    }

    // 禁地
    // if (window.jindi && !jindi_complete) {
    //     setInterval(() => {
    //         jindiEvent();
    //     }, 1000 * 60);
    //     return;
    // }

    // 副本
    if (window.kinkoo_fuben && window.fuben_zhandou) {
      setTimeout(function () {
        autoDungeonBattle_receiveMessage();
      }, 3000);
      return;
    }

    // 百人
    if (window.autoDao100) {
      setTimeout(function () {
        autoDao100Event();
      }, 5000);
    }

    // 星空之塔
    if (window.autoXingkong) {
      setTimeout(function () {
        autoXKZTEvent();
      }, 3000);
    }

    // 神界
    if (window.autoGadAre) {
      setTimeout(function () {
        autoGadAreEvent();
      }, 3000);
      return;
    }

    // 禁地
    if (window.jindiBattle) {
      // 先回城
      returnToCity();
      setTimeout(function () {
        jindiEvent();
      }, 3000);
    }

    // 挑战
    if (window.autoDungeonBoss && window.autoDungeonBoss_ok) {
      // 停止遇敌
      parent.handleBattleMonsterButtonClick();

      // 先回城
      returnToCity();
      setTimeout(function () {
        parent.handleManualmodeDungeonBossClick();
      }, 3000);
    }

    // 通知战斗结束
    _battleEndNtfr_receiveMessage();
  }

  // 宝石信息
  if (msg == 'MarketInfoAck') {
    // 宝石商店
    _shopInfoNtfr_receiveMessage(params);
    // shopInfo(l.id === 3 || l.id === 4 ? l : ''),
  }

  // 打卡+沙漏
  if (msg == 'SignRewardAck') {
    if (!params.vigorReward) {
      // 打卡
      if (parent.window.autoDaka) {
        window.kinkoo_TB.reqStoreBuy([15, 1501, 10]); // 购买水晶
        setTimeout(function () {
          // 错开间隔
          window.kinkoo_daka.reqReceiveSignReward(5); // 打卡
        }, 2000);
      }

      // 沙漏
      if (parent.window.autoShalou) {
        window.kinkoo_TB.reqStoreBuy([15, 1502, 6]); // 购买沙漏
        // 错开间隔
        if (!window.everyExp) {
          window.kinkoo_shalon.reqMissionHangAward(3, 0); // 领取极速经验，第一次
          window.kinkoo_shalon.reqMissionHangAward(3, 0); // 领取极速经验，第二次
          window.everyExp = true;
        }
        setTimeout(function () {
          window.kinkoo_shalon.reqMissionHangAward(2, 360); // 使用沙漏，默认为360个，多余的请手动吃
        }, 4000);
      }
    }
  }

  // 狩猎事件
  if (msg == 'MonsterHunterDiceAck') {
    // 被守卫抓住
    if (params.steps.length >= 2) {
      window.kinkoo_shoulie.reqOutGate();
    }
  }

  // 狩猎基础信息
  if (msg == 'MonsterHunterEnterAck') {
    // monsterHunter();
    // console.log('MonsterHunterEnterAck', params);
    // 狩猎事件
    // 事件ID ， 5，12，13
    // 13 = 金银岛
    // 5，12 = 偷菜
    window.shoulie_event = params.myMap.readyEventIds;

    // 转盘次数params.monsterHuntertLotteryScore
    var count = Math.floor(params.monsterHuntertLotteryScore / 50);
    for (var _index5 = 0; _index5 < count; _index5++) {
      window.kinkoo_shoulie.reqTurntableAward();
    }
  }

  // 狩猎商店物品信息
  if (msg == 'MonsterHunterShopAck') {
    console.log('MonsterHunterShopAck', params.shopInfos);
    var shopList = [];
    for (i in params.shopInfos) {
      var info = window.kinkoo_shoulie_shop_query.query(params.shopInfos[i].id);
      if (info.rate > 20) {
        shopList.push(params.shopInfos[i].uid);
        shopList.push(1);
      }
    }
    console.log('shopList', shopList);
    // 购买狩猎商店
    if (shopList.length > 0) {
      window.kinkoo_shoulie.reqShopBuy(1, shopList);
    }
  }

  // 自动副本
  if (msg == 'TeamMazeInfoAck') {
    // 进入副本
    window.fuben = params;
  }

  // 勇士密令
  if (msg == 'SecretOrderInfoAck') {
    // 信息
    window.kinkoo_secretOrder = params;
    // 领取任务
    secretAwardTask();
  }

  // 红包
  if (msg == 'RedBagNtf') {
    // 领取红包
    if (window.autoRedBag) {
      window.kinkoo_hongbao.openRedPacket(params.batchId);
    }
  }

  // SignRewardAck
  // 登录成功后触发信息
  if (msg == 'UserOnlineInitAck') {
    // 登录游戏成功后

    // 初始化地图
    getDungeonList();

    // 初始化每日任务
    scheduleDailyTask();

    // 获取排行榜信息
    getRankInfo();

    // 获取背包信息
    getBagInfo();

    // 每日任务
    scheduleEveryTask();

    // 自动购买物品, 临时取消了, 以后可以再开
    // scheduleEveryAutoBuy();
  }
  if (msg == 'CompressAck') {
    // 取消资源加载提示
    parent.document.getElementById('overlay').style.display = 'none';
  }

  // 购物信息更新
  if (msg == 'TradeMallBuyAck') {
    // 购买成功
    getBagInfo();
  }

  // 交易行，公示信息
  if (msg == 'ExchangeInfoAck') {
    // params.infos
    // params.infos[0].item
    // params.infos[0].item.index
    // params.infos[0].price
    // params.infos[0].item.count
    // params.infos[0].createTime

    for (index in params.infos) {
      if (index === 'updateKeyIn') {
        return;
      }
      var id = params.infos[index].item.index;
      var price = params.infos[index].price;
      var _count = params.infos[index].item.count;
      var createTime = params.infos[index].createTime;
      var item = meta.itemDict.data[id];
      var info_cn = item ? item.info_cn_1 : "未知物品";
      console.warn('ExchangeInfoAck: ', info_cn, index, price, _count, createTime);

      // 计算createTime与当前时间的时间差是否接近60分钟
      var currentTime = new Date();
      var timeDifference = currentTime - createTime * 1000;
      // 将时间差从毫秒转换为分钟
      var minutesDifference = Math.floor(timeDifference / (1000 * 60));
      // 计算距离公示结束还剩的分钟数
      var minutesLeft = 60 - minutesDifference;
      console.warn('距离公示结束还剩: ' + minutesLeft + '分钟');

      // 发消息到https://xz.wps.cn/api/v1/webhook/send?key=fd564cc2113b270b5169efd57324d105
      if (minutesLeft > 0) {
        var message = {
          msgtype: "text",
          text: {
            content: "\u53D1\u73B0\u65B0\u7269\u54C1\uFF1A".concat(info_cn, "\n\u4EF7\u683C\uFF1A").concat(price, "\n\u6570\u91CF\uFF1A").concat(_count, "\n\u516C\u793A\u7ED3\u675F\u8FD8\u5269\uFF1A").concat(minutesLeft, "\u5206\u949F")
          }
        };
        fetch('http://127.0.0.1/api/v1/webhook/send?key=fd564cc2113b270b5169efd57324d105', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(message)
        }).then(function (response) {
          if (!response.ok) {
            throw new Error('网络响应不正常');
          }
          return response.json();
        }).then(function (data) {
          console.log('消息发送成功:', data);
        })["catch"](function (error) {
          console.error('消息发送失败:', error);
        });
      }
    }
  }

  // 钓鱼
  if (msg == 'FishingAck') {
    // 获得物品
    if (params.items.length > 0) {
      console.warn('钓鱼获得物品:', params.items[0], meta.itemDict.data[params.items[0].confId]);
    }
  }

  // 钓鱼订单
  if (msg == 'FishingOrderAck') {
    window.fishingOrder = [];
    // 订单信息
    // params.curOrders
    var curOrders = params.curOrders;
    // 遍历订单
    for (var _i4 = 0; _i4 < curOrders.length; _i4++) {
      window.kinkoo_fish.getTaskOrderByFishId(curOrders[_i4].id);
    }
  }

  // 组队消息
  if (msg == 'SysMsgNtf') {
    // [429009,"卓诗婷",40,9,120,200,0,false,65535,"小号进队"]

    if (typeof params.args === 'string' && params.args.indexOf('小号进队') !== -1) {
      var jsonArgs = JSON.parse(params.args);
      console.log('解析后的 JSON 数据:', jsonArgs);
      if (jsonArgs[9] === '小号进队') {
        console.log('在组队消息中找到了 "小号进队"');
        var e = jsonArgs[2];
        var t = jsonArgs[3];
        var p = jsonArgs[6];
        window.kinkoo_zudui.reqJoinTeam(e, t, p);
      }
      // 这里可以添加你在找到 "小号进队" 字符串后要执行的逻辑
    }
  }

  // 技能修改
  if (msg == 'SkillMasteryAck') {
    // params.masterys[1]= 590
  }
  // BattleRoundBeginNtf
  // BattleEndRpt
}
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});