const fs = require('fs');
const path = require('path');

const MARKDOWN_PATH = path.resolve(__dirname, '../../../工作心得/无广告，网页小游戏【1】.md');
const OUTPUT_PATH = path.resolve(__dirname, 'games.json');

const LOCAL_GAMES = [
    { name: '地牢RPG游戏', url: 'http://toolsa.cn/gameA.html' },
    { name: '刀锋幸存者：最终进化', url: 'http://toolsa.cn/gameB.html' },
    { name: '大明市井行商录', url: 'http://toolsa.cn:59973' },
    { name: '夹缝', url: 'http://toolsa.cn:59972' },
    { name: '守卫大作战', url: 'https://tos.qwpo2018.com/mp/game/web/inside/73c40a33e2151feac8cd5e33ccb5c644/index.html' },
];

const GROUP_PATTERNS = [
    { pattern: /^##\s*2025\s*1\.30更新/, group: '2025-01-30' },
    { pattern: /^##\s*2025\s*1\.12更新/, group: '2025-01-12' },
    { pattern: /^#\s*12\.13更新/, group: '2024-12-13' },
    { pattern: /^#\s*11\.18更新/, group: '2024-11-18' },
    { pattern: /^#\s*10\.30更新/, group: '2024-10-30' },
    { pattern: /^#\s*！！！最新更新/, group: '最新更新' },
];

const TAG_RULES = [
    { tag: '找茬', keywords: ['找茬', '找找', '找小熊', '找小猫', '找锤子', '找物', '找隐藏'] },
    { tag: '消除', keywords: ['消除', '消消', '连连消', '三消', '消一消', '凑十', '叠消', '对对碰'] },
    { tag: '模拟经营', keywords: ['模拟', '经营', '大亨', '摆摊', '开店', '餐厅', '酒店', '超市', '商录', '行商', '收租', '养女儿', '养女儿', '牧场', '农场', '探险团'] },
    { tag: '塔防', keywords: ['塔防', '守卫', '前哨', '庇护所', '守卫', '防御', '特攻队'] },
    { tag: '收纳', keywords: ['收纳', '整理', '物语'] },
    { tag: '脑洞', keywords: ['脑洞', '玩梗', '梗王', '派对', '群英传', '猜猜'] },
    { tag: '解压', keywords: ['解压'] },
    { tag: '修仙', keywords: ['修仙', '道', '摆烂', '成神', '天师', '孤勇者'] },
    { tag: '停车', keywords: ['挪车', '停车', '车了个车', '冲冲冲'] },
    { tag: '美食', keywords: ['烧烤', '做饭', '餐厅', '大厨', '煎饼', '沙威玛', '大排档', '串串', '餐车', '美食'] },
    { tag: '恐怖解谜', keywords: ['恐怖', '鬼', '怨', '阿姐鼓', '引魂', '背后灵', '档案', '诡', '敲门'] },
    { tag: '文字', keywords: ['文字', '汉字', '成语', '填词'] },
    { tag: 'RPG', keywords: ['RPG', '地牢', '冒险', '进化', '生存', '幸存者', '魔兽', '异世界'] },
    { tag: '射击动作', keywords: ['射击', '枪', '狙击', '战车', '僵尸', '大鹅', '羽毛球', '篮球', '摩托'] },
    { tag: '益智', keywords: ['螺丝', '打螺丝', '拼图', '解谜', '密室', '智力', '闯关', '迷宫'] },
    { tag: '钓鱼', keywords: ['钓鱼', '鱼'] },
];

const SKIP_NOTE_PATTERNS = [
    /^横屏:?$/,
    /^竖屏:?$/,
    /^合集链接:?$/,
    /^旧版本:?$/,
    /^新版本:?$/,
    /^老$/,
    /^新$/,
    /^（修改器/,
    /^修改器/,
    /^高等级设置/,
    /^\(必须通过/,
    /^3、点左上角/,
    /^电脑网页链接:?$/,
    /^手机链接:?$/,
    /^手机版无广告链接:?$/,
    /^桌面版无广告链接:?$/,
    /^手机端无广链接:?$/,
    /^电脑端无广链接:?$/,
];

function normalizeUrl(url) {
    return url.trim().replace(/&amp;/g, '&');
}

function inferTags(name) {
    const tags = [];
    for (const { tag, keywords } of TAG_RULES) {
        if (keywords.some(keyword => name.includes(keyword))) {
            tags.push(tag);
        }
    }
    return tags.length ? tags : ['其他'];
}

function shouldSkipNote(text) {
    const value = text.trim();
    if (!value) return true;
    if (SKIP_NOTE_PATTERNS.some(pattern => pattern.test(value))) return true;
    if (value.length > 80 && !/(口令|密码|GM|加载|后台|验证码|修改器|无广)/i.test(value)) return true;
    return false;
}

function createGame({ name, url, group, featured, note = '' }) {
    const cleanNote = note.trim();
    return {
        name,
        url,
        group,
        featured: !!featured,
        tags: inferTags(name),
        ...(cleanNote ? { note: cleanNote } : {}),
    };
}

function appendNote(game, noteText) {
    if (!game || shouldSkipNote(noteText)) return;
    const text = noteText.trim();
    game.note = game.note ? `${game.note}；${text}` : text;
}

function buildGamesJson() {
    const markdown = fs.readFileSync(MARKDOWN_PATH, 'utf8');
    const games = [];
    const seen = new Set();
    let currentGroup = '未分类';
    let lastGame = null;

    LOCAL_GAMES.forEach(game => {
        games.push(createGame({
            name: game.name,
            url: game.url,
            group: '本地推荐',
            featured: true,
        }));
        seen.add(game.url);
    });

    for (const line of markdown.split('\n')) {
        const trimmed = line.trim();
        const heading = GROUP_PATTERNS.find(item => item.pattern.test(trimmed));
        if (heading) {
            currentGroup = heading.group;
            continue;
        }

        const gameMatch = line.match(/^-\s+\*\*([^*]+)\*\*:?\s*(https?:\/\/[^\s]+)/);
        if (gameMatch) {
            const name = gameMatch[1].trim();
            const url = normalizeUrl(gameMatch[2]);
            if (seen.has(url)) {
                lastGame = games.find(game => game.url === url) || null;
                continue;
            }

            seen.add(url);
            lastGame = createGame({
                name,
                url,
                group: currentGroup,
                featured: false,
            });
            games.push(lastGame);
            continue;
        }

        const noteMatch = line.match(/^-\s+\*\*([^*]+)\*\*\s*$/);
        if (noteMatch && lastGame) {
            appendNote(lastGame, noteMatch[1].trim());
        }
    }

    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(games, null, 2), 'utf8');
    console.log(`Generated ${games.length} games -> ${OUTPUT_PATH}`);

    const groupStats = games.reduce((acc, game) => {
        acc[game.group] = (acc[game.group] || 0) + 1;
        return acc;
    }, {});
    console.log('Group stats:', groupStats);

    const tagStats = games.reduce((acc, game) => {
        game.tags.forEach(tag => {
            acc[tag] = (acc[tag] || 0) + 1;
        });
        return acc;
    }, {});
    console.log('Tag stats:', tagStats);
    console.log('Notes:', games.filter(game => game.note).length);
}

buildGamesJson();
