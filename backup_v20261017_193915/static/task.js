/**
 * 生成一个长度为 6 个中文字的游戏名字
 * @returns {string} 生成的游戏名字
 */
function generateGameName() {
    const adjectives = '英勇果敢睿智聪慧善良温柔坚韧顽强豪爽侠义优雅妩媚娇艳冷峻孤傲霸气洒脱';
    // 真实姓氏库（单姓+复姓）
    const surnames = '赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹窦章苏潘葛范彭郎鲁韦昌马苗凤花方任袁柳史唐费廉岑薛雷贺倪汤滕殷罗郝邬安常乐于时傅皮卞齐康伍余元卜顾孟平黄穆萧尹';
    // 真实名字库（分男女）
    const givenNames = '浩宇子轩浩然梓宸梓萱晨曦俊豪诗雨欣怡博文佳琪瑾瑜梦瑶致远俊杰雪怡欣妍文博雨泽天佑思聪美琳明轩思琪雨婷';

    // 生成形容词部分（2字）
    let adjPart = '';
    for (let i = 0; i < 2; i++) {
        adjPart += adjectives.charAt(Math.floor(Math.random() * adjectives.length));
    }

    // 生成真实姓名（1-2字姓氏 + 1-2字名字）
    let namePart = '';
    // 20%概率使用复姓
    if (Math.random() < 0.2) {
        const compoundSurnames = ['欧阳', '上官', '司徒', '南宫', '诸葛', '司马', '夏侯', '东方', '公孙', '慕容'];
        namePart += compoundSurnames[Math.floor(Math.random() * compoundSurnames.length)];
    } else {
        namePart += surnames.charAt(Math.floor(Math.random() * surnames.length));
    }

    // 生成名字部分（1-2字）
    const nameLength = Math.random() < 0.7 ? 2 : 1; // 70%概率2字名
    for (let i = 0; i < nameLength; i++) {
        namePart += givenNames.charAt(Math.floor(Math.random() * givenNames.length));
    }

    // 生成两位随机数字
    const randomDigits = Math.floor(Math.random() * 90) + 10;

    return adjPart + namePart + randomDigits;
}


window.test_stage_start = false;

// 定义一个数组来存储定时器ID
let timeoutIds = [];

function handleLevelButtonClick() {

    window.test_stage = parseInt(testLevelStage.value);
    testLevelMain();
    window.test_stage_start = true;
}

function testLevelMain() {
    let delay = 0;
    let npc = 10;
    const delayStep = 1000; // 每个操作之间的延迟间隔，单位：毫秒
    let lineNumber = 1; // 初始化行号


    // 停止所有定时器
    for (let id of timeoutIds) {
        clearTimeout(id);
    }
    // 清空数组
    timeoutIds = [];


    if (window.test_stage === 1) {
        console.log(`开始执行第${window.test_stage}阶段脚本...`);

        // 第一阶段
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.AccountManager.Singleton.reqCreateHero(generateGameName(), 100012, 0); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqSceneMoveRpt(1, 268435928, { x: 721.06, y: 467.21 }); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10001); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.guide.reqGuideSetInfo(101, 1); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.guide.reqGuideSetInfo(102, 1); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqJumpMapRpt(103, 2330, 845); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqSceneMoveRpt(0, 268438314, { x: 1848, y: 476.55 }); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqSceneMoveRpt(0, 268438314, { x: 1848, y: 463.05 }); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10009); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_huodong.reqActivityOpenList(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_jiadian.reqChangePoint([{ key: 1, value: 100 }, { key: 2, value: 200 }, { key: 4, value: 100 }], 0); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqJumpMapRpt(101, 576, 540); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqSceneMoveRpt(1, 268438315, { x: 721.06, y: 467.22 }); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10001); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_huodong.reqActivityOpenList(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqJumpMapRpt(204, 920, 740); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqSceneMoveRpt(6, 268438315, { x: 479.97, y: 486 }); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10013); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqJumpMapRpt(203, 2000, 1650); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10019); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_zhuangbei.reqEquip(0, [1, 2, 3, 4], [2, 3, 4, 5]); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_huodong.reqActivityOpenList(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqJumpMapRpt(1000, 6375, 3090); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqSceneMoveRpt(2, 268438318, { x: 6656.91, y: 3186 }); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10027); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_pet.reqCatchPet(7409, 40900, 1, 20, false); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.battleMgr.Singleton.rptBattleEnd(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_pet.reqSetPetFightOrder(1, 1); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_pet.reqPetUpgrade(1, 2, 0, 0); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_pet.reqChangePetPoint([{ key: 2, value: 100 }], 1); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_pet.reqPetUpgradeStepFailNum(1); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_pet.reqPetUpgradeStep(1, [3, 2]); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqJumpMapRpt(1001, 1440, 1160); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10101); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqJumpMapRpt(205, 1080, 800); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqSceneMoveRpt(12, 268438333, { x: 469.23, y: 378 }); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10102); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqJumpMapRpt(4041, 1800, 900); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqSceneMoveRpt(12, 268438334, { x: 911.16, y: 846 }); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10100); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqMainTaskKillMonster(2); }, delay = lineNumber * delayStep)); lineNumber += npc;
    }

    // 6级
    // 打怪结束以后再执行

    if (window.test_stage === 2) {
        // 第二阶段
        console.log(`开始执行第${window.test_stage}阶段脚本...`);


        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqSceneMoveRpt(12, 268438334, { x: 577, y: 594 }); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10103); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqJumpMapRpt(205, 1080, 800); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqSceneMoveRpt(12, 268438333, { x: 469.23, y: 378 }); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10104); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.guide.reqGuideSetInfo(1801, 1); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_job.reqRoleCreer(0, 3); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_skill.reqFuncOpenSet(6); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.skillMgr.reqSkillUpgrade(9001, 0, 0); }, delay = lineNumber * delayStep)); lineNumber++;
        for (let i = 0; i < 10; i++) {
            timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.skillMgr.Singleton.reqSkillUpgrade(9001, 0, 0); }, delay = lineNumber * delayStep)); lineNumber++;
        }
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10104); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqJumpMapRpt2(1002); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_task_yudi.reqMissionKillMonster(1); }, delay = lineNumber * delayStep)); lineNumber += npc;
    }

    if (window.test_stage === 3) {
        // 第三阶段
        console.log(`开始执行第${window.test_stage}阶段脚本...`);

        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqJumpMapRpt(205, 1080, 800); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqSceneMoveRpt(12, 268438333, { x: 469.23, y: 378 }); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10104); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10104); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_zhizao.reqProduItem(2, 1, undefined, undefined, undefined, undefined); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_zhuangbei.reqEquip(0, [1, 2, 3, 5, 6, 7], [11, 12, 7, 8, 9, 10]); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10104); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_jiadian.reqChangePoint([{ key: 1, value: 900 }, { key: 2, value: 1800 }, { key: 4, value: 900 }], 0); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqJumpMapRpt(324, 1100, 885); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqSceneMoveRpt(12, 268438347, { x: 625, y: 865 }); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10201); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqSceneMoveRpt(12, 268438347, { x: 334, y: 666 }); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10202); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        // 祠堂
        console.warn('祠堂任务开始了');
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqJumpMapRpt(207, 1420, 340); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.guide.reqGuideSetInfo(2902, 1); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.guide.reqGuideSetInfo(3001, 1); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.guide.reqGuideSetInfo(3002, 1); }, delay = lineNumber * delayStep)); lineNumber++;
        console.warn('打小怪');

        // 自动挂机
        for (let i = 0; i < 10; i++) {

            timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_auto.prototype.onAutoMode(); }, delay = lineNumber * delayStep)); lineNumber++;
            timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_auto.prototype.onManualMode(); }, delay = lineNumber * delayStep)); lineNumber++;
            timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqMainTaskKillMonster(1); }, delay = lineNumber * delayStep)); lineNumber++;
        }

        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_auto.prototype.onAutoMode(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqMainTaskKillMonster(1); }, delay = lineNumber * delayStep)); lineNumber += npc;
    }



    if (window.test_stage === 4) {
        // 第四阶段
        console.log(`开始执行第${window.test_stage}阶段脚本...`);

        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        // 祠堂
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqJumpMapRpt(208, 2620, 1130); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqSceneMoveRpt(12, 268438347, { x: 334, y: 666 }); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10203); }, delay = lineNumber * delayStep)); lineNumber += 5;
        console.warn('打大怪');

        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqMainTaskKillMonster(2); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqMainTaskKillMonster(2); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqMainTaskKillMonster(2); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqMainTaskKillMonster(2); }, delay = lineNumber * delayStep)); lineNumber++;
    }


    if (window.test_stage === 5) {
        console.log(`开始执行第${window.test_stage}阶段脚本...`);

        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqJumpMapRpt(324, 1100, 885); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqSceneMoveRpt(12, 268438347, { x: 334, y: 666 }); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10202); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqJumpMapRpt(209, 3255, 1175); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqSceneMoveRpt(12, 268438366, { x: 909, y: 1674 }); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10206); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        // window.kinkoo_player.onChangeEquipBtn()
        for (let i = 5; i < 8; i++) {
            for (let k = 10; k < 20; k++) {
                timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_zhuangbei.reqEquip(0, [i], [k]); }, delay = lineNumber * delayStep)); lineNumber++;
            }
        }
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqJumpMapRpt(205, 1080, 800); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqSceneMoveRpt(12, 268438333, { x: 469.23, y: 378 }); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10104); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqJumpMapRpt2(1003); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.guide.reqGuideSetInfo(3601, 1); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_task_yudi.reqMissionKillMonster(1); }, delay = lineNumber * delayStep)); lineNumber += npc;
    }

    if (window.test_stage === 6) {
        console.log(`开始执行第${window.test_stage}阶段脚本...`);

        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqJumpMapRpt(205, 1080, 800); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqSceneMoveRpt(12, 268438333, { x: 469.23, y: 378 }); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10104); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_skill.reqFuncOpenSet(21); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_chenghao.reqActiveTitle(0, 2100); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_chenghao.reqActiveTitle(0, 2301); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.skillMgr.reqSkillUpgrade(9001, 0, 0); }, delay = lineNumber * delayStep)); lineNumber++;
        for (let i = 0; i < 10; i++) {
            timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.skillMgr.reqSkillUpgrade(9001, 0, 0); }, delay = lineNumber * delayStep)); lineNumber++;
        }
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqJumpMapRpt(1157, 6550, 4915); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqSceneMoveRpt(12, 268438388, { x: 6091, y: 5454 }); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10207); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqSceneMoveRpt(12, 268438388, { x: 6481, y: 5183 }); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(2001); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqJumpMapRpt(103, 2330, 845); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqSceneMoveRpt(12, 268438401, { x: 575, y: 1583 }); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10208); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqJumpMapRpt(4037, 1022, 224); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.guide.reqGuideSetInfo(4301, 1); }, delay = lineNumber * delayStep)); lineNumber++;
        // 打怪
        // 自动挂机
        for (let i = 0; i < 10; i++) {

            timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_auto.prototype.onAutoMode(); }, delay = lineNumber * delayStep)); lineNumber++;
            timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_auto.prototype.onManualMode(); }, delay = lineNumber * delayStep)); lineNumber++;
            timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqMainTaskKillMonster(1); }, delay = lineNumber * delayStep)); lineNumber++;
        }

        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_auto.prototype.onAutoMode(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqMainTaskKillMonster(1); }, delay = lineNumber * delayStep)); lineNumber += npc;
    }

    if (window.test_stage === 7) {
        console.log(`开始执行第${window.test_stage}阶段脚本...`);


        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqJumpMapRpt(4038, 1516, 760); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.guide.reqGuideSetInfo(4401, 1); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqSceneMoveRpt(12, 268438403, { x: 477, y: 414 }); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10209); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_pet.reqPetUpgrade(1, 2, 0, 0); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_pet.reqChangePetPoint([{ key: 2, value: 1300 }], 1); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqJumpMapRpt(4039, 1250, 1000); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqSceneMoveRpt(12, 268438404, { x: 958, y: 755 }); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10200); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqMainTaskKillMonster(2); }, delay = lineNumber * delayStep)); lineNumber += npc;
    }


    if (window.test_stage === 8) {
        console.log(`开始执行第${window.test_stage}阶段脚本...`);


        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqSceneMoveRpt(12, 268438404, { x: 430, y: 791 }); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10210); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqJumpMapRpt(1157, 6550, 4915); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.guide.reqGuideSetInfo(4901, 1); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqSceneMoveRpt(12, 268438388, { x: 6091, y: 5454 }); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10207); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        for (let i = 2; i < 20; i++) {
            timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_useItem.reqEquipSmelt([i], 1); }, delay = lineNumber * delayStep)); lineNumber++;
        }
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqJumpMapRpt(1125, 780, 910); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqSceneMoveRpt(12, 268438406, { x: 1107, y: 1026 }); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10301); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10301); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqJumpMapRpt(4035, 685, 1970); }, delay = lineNumber * delayStep)); lineNumber++;

        // 自动挂机
        for (let i = 0; i < 10; i++) {

            timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_auto.prototype.onAutoMode(); }, delay = lineNumber * delayStep)); lineNumber++;
            timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_auto.prototype.onManualMode(); }, delay = lineNumber * delayStep)); lineNumber++;
            timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqMainTaskKillMonster(1); }, delay = lineNumber * delayStep)); lineNumber++;
        }

        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_auto.prototype.onAutoMode(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqMainTaskKillMonster(1); }, delay = lineNumber * delayStep)); lineNumber += npc;
    }

    if (window.test_stage === 9) {
        console.log(`开始执行第${window.test_stage}阶段脚本...`);


        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqJumpMapRpt(4036, 3816, 1242); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqSceneMoveRpt(12, 268438408, { x: 861, y: 1242 }); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10300); }, delay = lineNumber * delayStep)); lineNumber++;

        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqMainTaskKillMonster(2); }, delay = lineNumber * delayStep)); lineNumber += npc;
    }

    if (window.test_stage === 10) {
        console.log(`开始执行第${window.test_stage}阶段脚本...`);


        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqJumpMapRpt(1126, 2850, 1575); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqSceneMoveRpt(12, 268438409, { x: 2733, y: 1873 }); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10501); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10501); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqJumpMapRpt2(1004); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.guide.reqGuideSetInfo(6001, 1); }, delay = lineNumber * delayStep)); lineNumber++;

        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_task_yudi.reqMissionKillMonster(1); }, delay = lineNumber * delayStep)); lineNumber += npc;
    }

    if (window.test_stage === 11) {
        console.log(`开始执行第${window.test_stage}阶段脚本...`);


        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqJumpMapRpt(1126, 2850, 1575); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqSceneMoveRpt(12, 268438409, { x: 2733, y: 1873 }); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10501); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mv.Singleton.reqNpcTalk(10501); }, delay = lineNumber * delayStep)); lineNumber++;
        timeoutIds.push(setTimeout(() => { contentFrame.contentWindow.kinkoo_mainTask.singleton.reqMainTaskGetReward(); }, delay = lineNumber * delayStep)); lineNumber++;
    }

    console.log('结束执行脚本...');

}