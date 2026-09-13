// 单元功能测试
function handleTestButtonClick() {
    // 获取装备列表
    const elist = contentFrame.contentWindow.kinkoo_equip.getEquipArray();
    // 获取可强化材料
    const cl = elist.reduce((acc, item) => {
        if (item.equipMeta.grade < 5 && item.lock == 0 && item.equipMeta.pos < 8) {
            console.error(item.id, item.equipMeta.grade, item.lock, item.equipMeta.pos, item.equipMeta.info_cn_1);

            acc.push({ type: 2, index: item.id, count: 1 });
        }
        return acc;
    }, []);

    console.warn('可强化材料:', cl);

    // 遍历角色，寻找可强化的装备
    contentFrame.contentWindow.me.userInfo.heroArray.some(hero => {
        for (let i = 1; i <= 4; i++) {
            const equip = hero.equipDict.data[i];
            if (equip.strengthLv < equip.equipMeta.enhance_limit) {
                contentFrame.contentWindow.forgeManager.reqStrengthen(1, hero.id, cl, i, 0);
                return true; // 找到可强化装备后立即返回
            }
        }
    });
}

// 添加访问令牌检查函数
function checkAccessToken() {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
        window.location.href = '/';
        return false;
    }
    // return true;
    // 与后台接口验证token
    return fetch('/v1/3rd/api/protected', {
        method: 'GET',
        headers: {
            'Authorization': accessToken
        }
    })
        .then(response => {
            if (response.status === 401) {
                // token无效或过期
                localStorage.removeItem('accessToken');
                // window.location.href = '/';
                return false;
            }
            return response.json();
        })
        .then(data => {
            if (data && data.success) {
                return true;
            }
            // 验证失败
            localStorage.removeItem('accessToken');
            alert('登录会话超时，请重新登录');
            // window.location.href = '/';
            return false;
        })
        .catch(error => {
            console.error('验证token失败:', error);
            alert('登录会话超时，请重新登录');
            localStorage.removeItem('accessToken');
            // window.location.href = '/';
            return false;
        });
}

// 新增本地存储操作方法 ==============
// 生成SHA1哈希作为key
async function generateStorageKey() {
    const input = document.getElementById('gameurl-input').value;
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-1', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// 存储配置
async function setStorageItem(att, value) {
    // const key = await generateStorageKey();
    // let config = await getStorageItem();
    // config[att] = value;
    // localStorage.setItem(key, JSON.stringify(config));
}

// 读取配置
async function getStorageItem() {
    // const key = await generateStorageKey();
    // const value = JSON.parse(localStorage.getItem(key))
    // console.warn(localStorage.getItem(key), value);
    // return value;
}

// 账号登录
function handleAccountLoginButtonClick() {
    if (!gameUrlInput) {
        handleLoginButtonClick();
        return;
    }

    contentFrame.contentWindow.iframeCallBack();

}

function handleLoginButtonClick() {
    const account = document.getElementById('account-input').value;
    const password = document.getElementById('password-input').value;
    contentFrame.contentWindow.iframeCallBack_fugu(account, password);
}

// 快速战斗
function handleQuickBattleCheckboxClick() {
    const checkbox = document.getElementById('quick-battle-checkbox');
    if (checkbox.checked) {
        window.QuickBattle = true;
        console.log("快速战斗已启用");
        // 在这里添加启用快速战斗的逻辑
        contentFrame.contentWindow.startRptBattleEndTimer();
        setStorageItem('QuickBattle', true);
    } else {
        window.QuickBattle = false;
        console.log("快速战斗已禁用");
        // 在这里添加禁用快速战斗的逻辑
        contentFrame.contentWindow.stopRptBattleEndTimer();
        setStorageItem('QuickBattle', false);
    }
}

// 增加背包物品信息
function addItemToBag(bagInfo, itemInfo) {
    bagItemList.innerHTML = '';
    // 检查 itemInfo 是否存在
    if (itemInfo) {
        bagInfo.forEach(({ index, count }) => {
            // 从 itemInfo 中获取物品名称
            const name = itemInfo[index]?.info_cn_1;
            if (name) {
                const option = document.createElement('option');
                option.value = index;
                // 使用模板字符串构建文本内容
                option.textContent = `${name}(${count}个)`;
                bagItemList.appendChild(option);
            }
        });
    }
}


// 清空挂机地图列表
function clearMapList() {
    mapList.innerHTML = '';
}

// 增加地图列表
function addMapToList(mapId, mapName) {
    const option = document.createElement('option');
    option.value = mapId;
    option.textContent = mapName;
    mapList.appendChild(option);
}

// 偷菜排行榜列表
function addHunterToList(rank) {
    // 清空列表
    hunterList.innerHTML = '';
    // 遍历排行榜数据
    for (let i = 0; i < rank.length; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = rank[i].name;
        hunterList.appendChild(option);
    }
}

// 清空副本地图列表
function clearDungeonMapList() {
    dungeonMapList.innerHTML = '';
}
// 增加副本地图列表
function addDungeonMapToList(mapId, mapName) {
    const option = document.createElement('option');
    option.value = mapId;
    option.textContent = mapName;
    dungeonMapList.appendChild(option);
}

// 快速遇敌
function handleBattleMonsterButtonClick() {
    // console.log("点击了BattleMonstere按钮", battleMonsterButton.textContent);

    if (battleMonsterButton.textContent === "快速遇敌已启用") {
        window.QuicktBattleMonster = false;
        contentFrame.contentWindow.stopBattleMonsterTimer();
        battleMonsterButton.textContent = "快速遇敌已禁用";
        setStorageItem('QuicktBattleMonster', false);
        return;
    }
    window.QuicktBattleMonster = true;
    contentFrame.contentWindow.startBattleMonsterTimer();
    battleMonsterButton.textContent = "快速遇敌已启用";
    setStorageItem('QuicktBattleMonster', true);
}

// 进入游戏事件
function handleEnterGameButtonClick() {
    // 资源加载提示
    document.getElementById('overlay').style.display = 'block';

    
    // 适配1.0.73版本
    if (!gameUrlInput) {
        contentFrame.src = '/1.0.73.html?&openID=f45a5f0056a1b14379e633728de9a95b&loginKey=000bd0d93405f3489637bf8c5b52ef5afd6&isGuest=undefined&serverId=160030&originId=160030&ip=h5.gmfree.top&port=3002&serverName=%E6%B0%B4%E7%93%B6%E5%BA%A7(%E6%B0%B8%E4%B9%85%E5%8C%BA)&serverUrlPrefix=http://h5.gmfree.top:7200/&bugUrlPrefix=http://account.quannijoy.com:7203&isShellLogin=1&sdkAccessToken=ae7811497ffa83b9999c5a1736abf51900a3c32b6ec414f080b32151f2b5a8f7&yofisdk=1&version=1.0&channelid=13000&shellUrl=http%3A%2F%2Fh5.gmfree.top%3A99%2Fgame_moli_gaobao%2Fstart%2FindexQV.html%3Fyofisdk%3D1%26sdkshell%3D0%26channelid%3D13000%26sdkid%3D0%26centerflag%3Dmlbb_newfg&ts=' + Date.now()
        return
    }

    const gameUrl = new URL(gameUrlInput);

    // 获取openID
    const openID = gameUrl.searchParams.get('openID');
    if (!openID) {
        alert('URL中缺少openID参数');
        return;
    }

    // 获取当前登录的accessToken
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        window.location.href = '/';
        alert('请先登录');
        return;
    }

    // 验证openID是否已注册
    fetch('/v1/3rd/api/verifyOpenID', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        },
        body: JSON.stringify({ openID: openID })
    })
        .then(response => response.json())
        .then(data => {
            if (!data.success) {
                alert(data.message || '该openID未注册');
                return;
            }

            // 使用当前页面的完整URL（包含协议）
            const currentUrl = new URL(window.location.href);
            const protocol = currentUrl.protocol;

            // 将游戏地址加载到iframe中
            contentFrame.src = `${protocol}//${currentUrl.host}/1.0.221_JuheH5.html?${gameUrl.searchParams.toString()}`;
        })
        .catch(error => {
            console.error('Error:', error);
            alert('验证openID失败');
        });
}

// 进入地图事件
function handleEnterMapButtonClick() {
    const selectedMapId = mapList.value;
    console.log('当前选择的地图ID:', selectedMapId);
    contentFrame.contentWindow.enterDungeonEvent(selectedMapId);
    // 在这里执行进入地图的逻辑
    // 例如，跳转到对应的地图页面
    // window.location.href = `map.html?id=${selectedMapId}`;
}

// 宝石
function handleBuyBaoshiCheckboxClick() {
    const checkbox = document.getElementById('buy-baoshi-checkbox');
    setStorageItem('buyBaoshi', checkbox.checked);
    checkbox.checked ? contentFrame.contentWindow.scheduleFunction() : contentFrame.contentWindow.cancelBuyBaoshiTimer();
    setStorageItem('buyBaoshi', checkbox.checked);
}

// 自动打卡
function handleAutoDakaCheckboxClick() {
    const checkbox = document.getElementById('auto-daka-checkbox');
    checkbox.checked ? window.autoDaka = true : window.autoDaka = false;
    // 触发每日任务
    // contentFrame.contentWindow.scheduleEveryTask();
}

// 沙漏
function handleAutoShalouCheckboxClick() {
    const checkbox = document.getElementById('auto-shalou-checkbox');
    checkbox.checked ? window.autoShalou = true : window.autoShalou = false;
}

// 禁地
function handleJindiCheckboxClick() {
    const checkbox = document.getElementById('auto-jindi-checkbox');    // 获取禁地开关
    checkbox.checked ? window.autoJindi = true : window.autoJindi = false;  // 设置禁地开关
    const count = document.getElementById('auto-jindi-count');  // 获取禁地次数
    contentFrame.contentWindow.autoJindiCount = parseInt(count.value);  // 设置禁地次数
}

// 禁地，手动模式
function jindiManualmodeClick() {
    contentFrame.contentWindow.jindi = true;    // 设置禁地手动模式
    const count = document.getElementById('auto-jindi-count');  // 获取禁地次数
    contentFrame.contentWindow.autoJindiCount = parseInt(count.value);  // 设置禁地次数
    contentFrame.contentWindow.jindiEvent();    // 执行禁地事件
}

// 钓鱼
function handleAutoFishCheckboxClick() {
    const checkbox = document.getElementById('auto-fishing-checkbox');
    checkbox.checked ? window.autoFish = true : window.autoFish = false;
}

// 狩猎
function handleAutoHunterCheckboxClick() {
    const checkbox = document.getElementById('auto-hunting-checkbox');
    checkbox.checked ? contentFrame.contentWindow.autoMonsterHunter = true : contentFrame.contentWindow.autoMonsterHunter = false;
}

// 狩猎，手动模式
function huntingManualmodeClick() {
    contentFrame.contentWindow.monsterHunter();
}

// 星宫
function handleAutoStarPalaceCheckboxClick() {
    const checkbox = document.getElementById('auto-star-palace-checkbox');
    checkbox.checked ? contentFrame.contentWindow.autoStarPalace = true : contentFrame.contentWindow.autoStarPalace = false;
}

// 星空，手动模式
function starPalaceManualmodeClick() {
    contentFrame.contentWindow.starPalace();
}

// 自动刷塔
function handleAutoPataeCheckboxClick() {
    const checkbox = document.getElementById('auto-pata-checkbox');
    checkbox.checked ? contentFrame.contentWindow.autoPata = true : contentFrame.contentWindow.autoPata = false;
}

// 刷塔，手动模式
function pataManualmodeClick() {
    contentFrame.contentWindow.pata();
}

// 百人
function handleManualmodeDao100Click() {
    dao100ManualMode.checked ? contentFrame.contentWindow.autoDao100 = true : contentFrame.contentWindow.autoDao100 = false;
}

// 自动刷挑战
function handleAutoDungeonCheckboxClick() {
    const checkbox = document.getElementById('auto-dungeon-checkbox');
    checkbox.checked ? window.autoDungeon = true : window.autoDungeon = false;
}

// 自动刷迷宫
function handleAutoDungeonBossCheckboxClick() {
    const checkbox = document.getElementById('auto-dungeon-boss-checkbox');
    checkbox.checked ? contentFrame.contentWindow.autoDungeonBoss = true : contentFrame.contentWindow.autoDungeonBoss = false;
}

// 清空迷宫地图列表
function clearDungeonBossMapList() {
    dungeonBossMapList.innerHTML = '';
}

// 增加迷宫地图列表
function addDungeonBossMapToList(mapId, mapName) {
    const option = document.createElement('option');
    option.value = mapId;
    option.textContent = mapName;
    dungeonBossMapList.appendChild(option);
}

// 手动刷挑战
function handleManualmodeDungeonClick() {
    if (contentFrame.contentWindow.fuben_zhandou) {
        contentFrame.contentWindow.fuben_zhandou = false;
        dungeonManualmode.textContent = "手动模式";
        dungeonManualmode.style.color = "";
    } else {
        handleAutoDungeonClick();
        dungeonManualmode.textContent = "停止手动";
        dungeonManualmode.style.color = "red";
    }
}

// 自动挑战函数
function handleAutoDungeonClick() {
    // 查询次数
    if (contentFrame.contentWindow.fuben && contentFrame.contentWindow.fuben.attackDungeonTimes == 0) {
        console.warn('副本次数已用完');
        return;
    }

    // 先停止挂机，再移动到副本地图，再购买材料，再打BOSS
    // 判断次数用完，自动返回挂机地点

    // 第一步,停止挂机
    if (window.QuicktBattleMonster) {
        handleBattleMonsterButtonClick();
    }

    // 获取剩余次数
    contentFrame.contentWindow.kinkoo_qk.reqTeamMaseInfo(0);

    // 第二步,移动到副本地图
    const selectedMapId = dungeonMapList.value;
    console.log('当前选择的地图ID:', selectedMapId);
    contentFrame.contentWindow.fuben_mapId = selectedMapId;
    contentFrame.contentWindow.autoDungeon_receiveMessage();
}

// 手动刷迷宫
function handleManualmodeDungeonBossClick() {
    const selectedMapId = parseInt(dungeonBossMapList.value);
    // console.warn('当前选择的迷宫地图ID:', selectedMapId / 100);
    const info = contentFrame.contentWindow.meta.dungeonInfosDic.data[(selectedMapId / 100)]
    // console.warn('迷宫地图信息:', info[info.length - 1].trigger_place);
    // 进入迷宫
    contentFrame.contentWindow.kinkoo_qk.reqTeamMazeEnter(selectedMapId / 100, info[info.length - 1].id, info[info.length - 1].trigger_place)

    setTimeout(() => {
        // 扫荡12次
        for (let i = 0; i < 12; i++) {
            contentFrame.contentWindow.kinkoo_qk.reqMopup(selectedMapId / 100);
        }
    }, 2000);

    // 购买次数, 1-8,2-10,3-12,4-14,5-16,6-18
    const buyCount = [8, 10, 12, 14, 16, 18];
    setTimeout(() => {
        const vip = contentFrame.contentWindow.me.userInfo.vipLevel
        for (let i = 0; i < buyCount[vip - 1]; i++) {
            contentFrame.contentWindow.kinkoo_qk.reqBuyBossCount(1);
            contentFrame.contentWindow.kinkoo_qk.reqMopup(selectedMapId / 100)
        }

        // 取消定时任务
        contentFrame.contentWindow.autoDungeonBoss_ok = false

        // 回城
        contentFrame.contentWindow.returnToCity();

        // 调用主函数
        contentFrame.contentWindow.mainEvent();
    }, 5000)

}

// 偷菜
function handlehunterButtonClick() {
    const selectedHunterId = hunterList.value;
    console.log('当前选择的偷菜ID:', selectedHunterId, contentFrame.contentWindow.rankInfo[parseInt(selectedHunterId)]);
    let userId = contentFrame.contentWindow.rankInfo[parseInt(selectedHunterId)].userId;
    contentFrame.contentWindow.kinkoo_shoulie.monsterHunterEventReq(12);
    contentFrame.contentWindow.kinkoo_shoulie.reqEnterGate(userId);
}

// 自动购买物品
function handleAutoBuyCheckboxClick() {
    contentFrame.contentWindow.autoBuyItem();
}

// 卖垃圾
function handleSellItemButtonClick() {
    contentFrame.contentWindow.sellItem();
}

// 套圈
function handleTaoQuanButtonClick() {
    const pos = document.getElementById('tao-quan-pos');  // 套圈的位置
    contentFrame.contentWindow.kinkoo_huodong.reqActivityQWTQReward(parseInt(pos.value));
}

// 勇士小游戏得分
function handleMiniGameButtonClick(score, time) {
    const guan = document.getElementById('mini-game-value').value;
    contentFrame.contentWindow.kinkoo_game.reqReward(parseInt(guan), score, time);

}

// 数独游戏得分
function handleSudokuGameButtonClick(level, score, time) {
    contentFrame.contentWindow.kinkoo_shudu.reqReward(parseInt(level), parseInt(score), time);
}

// 奇妙魔石小游戏得分
function handleStoneGameButtonClick(level, score, time) {
    contentFrame.contentWindow.kinkoo_qimiaomoshi.reqReward(parseInt(level), parseInt(score), time);
}

// 食品店小游戏得分
function handleFoodGameButtonClick(level, score) {
    contentFrame.contentWindow.kinkoo_napanshipindian.reqReward(parseInt(level), parseInt(score));
}

// 消消乐小游戏得分
function handleXXLGameButtonClick(level, score, time) {
    contentFrame.contentWindow.kinkoo_xiaoxiaole.reqReward(parseInt(level), parseInt(score), time);
}

// 果蔬消消乐小游戏得分
function handleGSXXLGameButtonClick(level, score, time) {
    contentFrame.contentWindow.kinkoo_gsxxl.reqReward(parseInt(level), parseInt(score), time);
}

// 彩环叠叠乐小游戏得分
function handleCHDDLGameButtonClick(level, score, time) {
    contentFrame.contentWindow.kinkoo_caihuangame.reqReward(parseInt(level), parseInt(score), time);
}

// 勇闯魔窟
function handleYCMKGameButtonClick(level, score) {
    contentFrame.contentWindow.kinkoo_ycmk.reqReward(parseInt(level), parseInt(score));
}

// 消灭史莱姆
function handleXMSLMGameButtonClick(level, score) {
    contentFrame.contentWindow.kinkoo_xmslm.reqReward(parseInt(level), parseInt(score));
}

// 小鸭冲刺小游戏得分
function handleXYCCGameButtonClick(level, score) {
    let kk = parseInt(score);
    if (kk > 3500) {
        kk = 3500;
    }
    contentFrame.contentWindow.kinkoo_xycc.reqReward(parseInt(level), kk);
}

// 勇者闯地牢
function handleYZCDLGameButtonClick(level, score) {
    let kk = parseInt(score);
    if (kk > 3500) {
        kk = 3500;
    }
    contentFrame.contentWindow.kinkoo_YZCDL.reqReward(parseInt(level), kk);
}

// 勇者跳高高
function handleYZTGGGameButtonClick(level, score) {
    let kk = parseInt(score);
    if (kk > 3500) {
        kk = 3500;
    }
    contentFrame.contentWindow.kinkoo_yztgg.reqReward(parseInt(level), kk);
}

// 自动领红包
function handleAutoRedBagCheckboxClick() {
    const checkbox = document.getElementById('auto-redbag-checkbox');
    checkbox.checked ? contentFrame.contentWindow.autoRedBag = true : contentFrame.contentWindow.autoRedBag = false;
}

function handleMonitorShopItemsCheckboxClick() {
    const checkbox = document.getElementById('monitor-shop-items-checkbox');
    checkbox.checked ? contentFrame.contentWindow.autoMonitorShopItems = true : contentFrame.contentWindow.autoMonitorShopItems = false;
    contentFrame.contentWindow.autoMonitorShopItems ? contentFrame.contentWindow.scheduleMonitorShopItems() : contentFrame.contentWindow.cancelMonitorShopItems();
}

function monitorShopItemsManualmodeClick() {
    contentFrame.contentWindow.monitorShopItems();
}

// 群里之墓
function handleAutoGodAreCheckboxClick() {
    const checkbox = document.getElementById('auto-god-are-checkbox');
    checkbox.checked ? contentFrame.contentWindow.autoGadAre = true : contentFrame.contentWindow.autoGadAre = false;
    checkbox.checked ? contentFrame.contentWindow.autoGadAreEvent() : null;

}

// 自动星空之塔
function handleAutoXKZTCheckboxClick() {
    const checkbox = document.getElementById('auto-xkzt-checkbox');
    checkbox.checked ? contentFrame.contentWindow.autoXingkong = true : contentFrame.contentWindow.autoXingkong = false;
    contentFrame.contentWindow.kinkoo_xkzt.activityXKZTEnterReq(1, true);   // 进入地图
    checkbox.checked ? contentFrame.contentWindow.autoXKZTEvent() : null;
}

// 领取宠物召唤券
function handleAutoCWZHJCheckboxClick() {
    const checkbox = document.getElementById('auto-CWZHJ-checkbox');
    checkbox.checked ? contentFrame.contentWindow.autoCWZHJ = true : contentFrame.contentWindow.autoCWZHJ = false;
    checkbox.checked ? contentFrame.contentWindow.autoCWZHJEvent() : null;
}

// 领取心愿召唤券
function handleAutoYWZHJCheckboxClick() {
    const checkbox = document.getElementById('auto-YWZHJ-checkbox');
    checkbox.checked ? contentFrame.contentWindow.autoYWZHJ = true : contentFrame.contentWindow.autoYWZHJ = false;
    checkbox.checked ? contentFrame.contentWindow.autoYWZHJEvent() : null;
}

// 自动铸造装备
function handleAutoForgeCheckboxClick() {
    const autoForgeCheckbox = document.getElementById('auto-forge-checkbox');
    const autoForgeMinute = parseInt(document.getElementById('auto-forge-minute').value);
    autoForgeCheckbox.checked ? contentFrame.contentWindow.autoForge = true : contentFrame.contentWindow.autoForge = false;
    autoForgeCheckbox.checked ? contentFrame.contentWindow.autoForgeEvent(autoForgeMinute) : contentFrame.contentWindow.cancelAutoForgeTimer();
}

// 自动精炼装备
function handleAutoRefineCheckboxClick() {

    if (contentFrame.contentWindow.refineManager && contentFrame.contentWindow.refineManager.autoRefine) {
        contentFrame.contentWindow.refineManager.autoRefine = false;
        return;
    }

    contentFrame.contentWindow.refineManager = {}
    contentFrame.contentWindow.refineManager.equipId = parseInt(equipList.value);
    contentFrame.contentWindow.refineManager.refineId = parseInt(refineList.value);
    contentFrame.contentWindow.refineManager.heroId = parseInt(heroList.value);
    contentFrame.contentWindow.refineManager.indexId = parseInt(indexList.value);
    contentFrame.contentWindow.refineManager.selectedIndex = equipList.selectedIndex + 1;
    contentFrame.contentWindow.refineManager.autoRefine = true;

    contentFrame.contentWindow.autoRefineEvent();

}

// 增加装备列表
function addEquipToList(equipId, equipName) {
    const option = document.createElement('option');
    option.value = equipId;
    option.textContent = equipName;
    equipList.appendChild(option);
}

// 增加角色列表
function addHeroToList(heroId, heroName) {
    const option = document.createElement('option');
    option.value = heroId;
    option.textContent = heroName;
    heroList.appendChild(option);
}

// 清空角色列表
function clearHeroList() {
    heroList.innerHTML = '';
}

// 增加精炼属性列表
function addRefineToList(refineId, refineName) {
    const option = document.createElement('option');
    option.value = refineId;
    option.textContent = refineName;
    refineList.appendChild(option);
}

// 处理角色列表变化
function handleHeroListChange() {
    const selectedHeroId = parseInt(heroList.value);
    if (selectedHeroId >= 0) {
        const equipDict = contentFrame.contentWindow.me.userInfo.heroArray[selectedHeroId].equipDict.data
        equipList.innerHTML = '';
        Object.entries(equipDict).forEach(([key, equip]) => {
            addEquipToList(equip.index, equip.equipMeta.info_cn_1);
        });
    }
}

// 处理装备列表变化
function handleEquipListChange() {
    window.selectedEquipIndex = this.selectedIndex + 1;
}

// 手动鉴定圣印
function handleManualSealsCheckboxClick() {
    const itemDict = contentFrame.contentWindow.meta.itemDict.data;
    const itemArray = contentFrame.contentWindow.me.userInfo.itemArray;
    let itemList = []
    let totalNum = 0;

    itemArray.forEach(item => {
        if (itemDict[item.index].type == 53) {
            console.warn(itemDict[item.index].info_cn_1, item.index, item.count);
            // 计算剩余可添加的数量
            const remaining = 50 - totalNum;
            if (remaining > 0) {
                const addNum = Math.min(item.count, remaining);
                itemList.push({ itemIndex: item.index, num: addNum });
                totalNum += addNum;
            }
        }
    })
    if (itemList.length > 0) {
        contentFrame.contentWindow.kinkoo_useItem.reqUseItems(itemList);
        contentFrame.contentWindow.AccountManager.Singleton.getUserBagPacker()
    } else {
        console.warn("没有可鉴定的圣印或已达到数量限制");
    }
}

// 检查是否已登录
const isLoggedIn = true; // 这里可以替换为实际的登录状态检查

if (!isLoggedIn) {
    // 如果未登录，跳转到登录页面
    window.location.href = 'login.html';
}

function analyzeMessageHistory() {
    try {
        const messageHistory = JSON.parse(localStorage.getItem('websocketMessageHistory') || '[]');

        // 调试：打印原始数据
        console.log('Raw message history:', messageHistory);

        // 统计发送和接收总数
        const sendCount = messageHistory.filter(m => m.direction === 'send').length;
        const receiveCount = messageHistory.filter(m => m.direction === 'receive').length;

        // 按消息类型分类
        const messageTypes = {};
        messageHistory.forEach(msg => {
            if (!msg || !msg.type) return;  // 跳过无效数据

            if (!messageTypes[msg.type]) {
                messageTypes[msg.type] = [];
            }
            messageTypes[msg.type].push(msg);
        });

        // 调试：打印分类结果
        console.log('Message types:', messageTypes);

        // 生成服务端逻辑分析报告
        const analysisReport = {
            totalMessages: messageHistory.length,
            sendCount,
            receiveCount,
            messageTypeCounts: messageTypes,
            commonPatterns: {},
            suggestedServerLogic: {}
        };

        // 分析每种消息类型
        Object.keys(messageTypes).forEach(type => {
            const messages = messageTypes[type];
            analysisReport.messageTypeCounts[type] = messages.length;

            // 分析数据结构
            const sampleData = messages[0].data;
            const dataStructure = {};

            // 递归分析数据结构
            function analyzeDataStructure(obj, result) {
                for (const key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        const value = obj[key];
                        const type = typeof value;

                        if (type === 'object' && value !== null) {
                            result[key] = { type: 'object', properties: {} };
                            analyzeDataStructure(value, result[key].properties);
                        } else {
                            result[key] = { type };
                        }
                    }
                }
            }

            analyzeDataStructure(sampleData, dataStructure);

            // 添加到分析报告
            analysisReport.suggestedServerLogic[type] = {
                dataStructure,
                examplePayload: sampleData,
                frequency: messages.length / messageHistory.length
            };
        });

        // 保存分析报告
        localStorage.setItem('serverLogicAnalysis', JSON.stringify(analysisReport));
        console.log('Server logic analysis completed:', analysisReport);

        return analysisReport;
    } catch (error) {
        console.error('Analysis failed:', error);
        return null;
    }
}

function createAnalysisUI() {
    const report = analyzeMessageHistory();
    if (!report) return;

    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.right = '0';
    container.style.width = '400px';
    container.style.height = '100vh';
    container.style.overflow = 'auto';
    container.style.backgroundColor = '#fff';
    container.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
    container.style.zIndex = '9999';
    container.style.padding = '20px';

    // 添加标题
    const title = document.createElement('h2');
    title.textContent = 'WebSocket 消息分析';
    container.appendChild(title);

    // 添加摘要信息
    const summary = document.createElement('div');
    summary.innerHTML = `
        <p>总消息数: ${report.totalMessages}</p>
        <p>发送消息数: ${report.sendCount || 0}</p>
        <p>接收消息数: ${report.receiveCount || 0}</p>
    `;
    container.appendChild(summary);

    // 添加消息类型列表
    const typeList = document.createElement('div');
    typeList.innerHTML = '<h3>消息类型统计</h3>';

    const typeTable = document.createElement('table');
    typeTable.style.width = '100%';
    typeTable.style.borderCollapse = 'collapse';

    // 表头
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th>消息类型</th><th>发送</th><th>接收</th><th>匹配率</th>';
    typeTable.appendChild(headerRow);

    // 表格内容
    Object.keys(report.messageTypeCounts).forEach(type => {
        const row = document.createElement('tr');
        const messages = report.messageTypeCounts[type];
        const sendCount = Array.isArray(messages) ?
            messages.filter(m => m.direction === 'send').length : 0;
        const receiveCount = Array.isArray(messages) ?
            messages.filter(m => m.direction === 'receive').length : 0;
        const matchRate = sendCount && receiveCount ?
            `${Math.min(sendCount, receiveCount) * 100 / Math.max(sendCount, receiveCount)}%` : '0%';

        row.innerHTML = `
            <td>${type}</td>
            <td>${sendCount}</td>
            <td>${receiveCount}</td>
            <td>${matchRate}</td>
        `;
        typeTable.appendChild(row);
    });

    typeList.appendChild(typeTable);
    container.appendChild(typeList);

    // 添加关闭按钮
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '关闭';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '10px';
    closeBtn.style.right = '10px';
    closeBtn.onclick = () => container.remove();
    container.appendChild(closeBtn);

    // 在方法最后添加这行代码，将容器附加到body
    document.body.appendChild(container);

    return container; // 可选：返回容器引用以便后续操作
}