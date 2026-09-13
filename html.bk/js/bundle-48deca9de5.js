var laya = function(e) {
    "use strict";
    var t, i, s;
    !function(e) {
        e.CN = "cn",
        e.TW = "tw",
        e.EN = "en",
        e.VN = "vi",
        e.TH = "th"
    }(t || (t = {})),
    function(e) {
        e[e.SDK_FIRST_VIEW = 1e3] = "SDK_FIRST_VIEW",
        e[e.SDK_INIT_VIEW = 2e3] = "SDK_INIT_VIEW",
        e[e.OPEN_START_SCENE = 3e3] = "OPEN_START_SCENE",
        e[e.SDK_LOGIN_CALL_ON_NATIVE = 4e3] = "SDK_LOGIN_CALL_ON_NATIVE",
        e[e.HTTP_LOGIN_REQ = 5e3] = "HTTP_LOGIN_REQ",
        e[e.HTTP_SERVER_ZONE_LIST_REQ = 6e3] = "HTTP_SERVER_ZONE_LIST_REQ",
        e[e.HTTP_HISTORY_SERVER_LIST_REQ = 7e3] = "HTTP_HISTORY_SERVER_LIST_REQ",
        e[e.HTTP_CURRENT_ZONE_SERVER_LIST_REQ = 8e3] = "HTTP_CURRENT_ZONE_SERVER_LIST_REQ",
        e[e.OPEN_SERVER_LIST_VIEW = 9e3] = "OPEN_SERVER_LIST_VIEW",
        e[e.GOTO_GAME_HTML = 1e4] = "GOTO_GAME_HTML",
        e[e.GAME_LOAD_RES_VIEW = 11e3] = "GAME_LOAD_RES_VIEW",
        e[e.INIT_RES_LOAD_COMPILE = 11500] = "INIT_RES_LOAD_COMPILE",
        e[e.CONNECT_GAME_SOCKET = 11750] = "CONNECT_GAME_SOCKET",
        e[e.ENTER_GAME_REQ = 11850] = "ENTER_GAME_REQ",
        e[e.SDK_LOGIN_CALL_ON_WEB = 12e3] = "SDK_LOGIN_CALL_ON_WEB",
        e[e.CREATE_HERO_NAME_VIEW = 13e3] = "CREATE_HERO_NAME_VIEW",
        e[e.ENTER_MAIN_SCENE = 14e3] = "ENTER_MAIN_SCENE"
    }(i || (i = {})),
    function(e) {
        e[e.FIRST_OPEN = 1] = "FIRST_OPEN",
        e[e.SIGIN_UP = 2] = "SIGIN_UP",
        e[e.LOGIN_SDK = 3] = "LOGIN_SDK"
    }(s || (s = {}));
    class n {
        isJson(e) {
            let t = [["[", "]"], ["{", "}"]];
            for (let i = 0; i < t.length; i++)
                if (e[0] == t[i][0] && e[e.length - 1] == t[i][1])
                    return !0;
            return !1
        }
    }
    n.Singleton = new n;
    let a = "\n100412*未知错误*未知錯誤**Lỗi không rõ*ข้อผิดพลาดที่ไม่ทราบที่มา←\n100413*参数错误*參數錯誤**Lỗi tham số*ตัวแปรผิดพลาด←\n100414*账户锁定中,请稍后再试*帳戶鎖定中,請稍後再試**Tài khoản đang khóa, hãy thử lại sau*กำลังล็อค ID อยู่ กรุณาลองใหม่อีกครั้ง←\n100415*账号验证失败，请稍后重试*帳號驗證失敗，請稍後重試**Xác minh tài khoản thất bại, lát sau thử lại*การยืนยัน ID ล้มเหลว กรุณาลองใหม่อีกครั้ง←\n100416*没有登录*沒有登錄**Chưa đăng nhập*ไม่ได้ล็อกอิน←\n100417*当前区服维护中，请稍后再试或选择其他区服*當前區服維護中，請稍後再試或選擇其他區服**Cụm server hiện đang bảo trì, lát sau thử lại hoặc chọn cụm SV khác*เซิร์ฟเวอร์นี้อยู่ระหว่างการปรับปรุง กรุณาลองใหม่อีกครั้งภายหลังหรือเลือกเซิร์ฟเวอร์อื่น←\n100418*服务器列表获取失败*伺服器列表獲取失敗**Nhận DS Server thất bại*การรับรายการเซิร์ฟเวอร์ล้มเหลว←\n100419*不在白名单中*不在白名單中**Không ở white list*ไม่ได้อยู่ในไวท์ลิสต์←\n100420*服务器访问失败，请重新尝试*伺服器訪問失敗，請重新嘗試**Truy cập server thất bại, thử lại*การเข้าถึงเซิร์ฟเวอร์ล้มเหลว กรุณาลองใหม่อีกครั้ง←\n100421*登录验证失败，请重新尝试*登錄驗證失敗，請重新嘗試**Xác minh đăng nhập thất bại, thử lại*ยืนยันล็อกอินล้มเหลว กรุณาลองใหม่อีกครั้ง←\n1*经验*經驗**EXP*EXP←\n2*魔币*魔幣**Xu Ma*เหรียญเวท←\n3*钻石*鑽石**Kim Cương*เพชร←\n4*绑钻*綁鑽**KC Khóa*เพชรผูกมัด←\n5*获得<span color='#00FF00'>%s*%s</span>*獲得<span color='#00FF00'>%s*%s</span>**Nhận&nbsp;<span color='#00FF00'>%s*%s</span>*ได้รับ<span color='#00FF00'>%s*%s</span>←\n6*消耗<span color='#00FF00'>%s*%s</span>*消耗<span color='#00FF00'>%s*%s</span>**Tốn&nbsp;<span color='#00FF00'>%s*%s</span>*ใช้จ่าย<span color='#00FF00'>%s*%s</span>←\n28*提示*提示**Nhắc*แจ้งเตือน←\n40*年*年**/*ปี←\n41*月*月**/*เดือน←\n42*日*日**/*วัน←\n74*确认*確認**Xác nhận*ยืนยัน←\n75*取消*取消**Hủy*ยกเลิก←\n108*区服信息已更新，请手动选择区服*區服資訊已更新，請手動選擇區服**Thông tin cụm server đã làm mới, chọn thủ công cụm SV*เซิร์ฟเวอร์อัปเดตข้อมูลแล้ว กรุณาเลือกเซิร์ฟเวอร์เอง←\n109*服务器暂未开启,开服时间详见公告*伺服器暫未開啟,開服時間詳見公告**Server hiện chưa mở, TG mở sv hãy xem thông báo*เซิร์ฟเวอร์ยังไม่เปิด รายละเอียดเวลาเปิดเซิร์ฟเวอร์สามารถดูได้ที่ประกาศ←\n110*服务器维护中，请稍后再试*伺服器維護中，請稍後再試**Server đang bảo trì, lát sau thử lại*เซิร์ฟเวอร์อยู่ระหว่างการปรับปรุง กรุณาลองใหม่อีกครั้ง←\n130*下一步*下一步**Bước Kế*ขั้นต่อไป←\n159*(%sS)*(%sS)**(%sS)*(%sS)←\n192*公告*公告**T.Báo*ประกาศ←\n315*连接服务器失败!*連接伺服器失敗!**Kết nối server thất bại!*เชื่อมต่อกับเซิร์ฟเวอร์ล้มเหลว!←\n316*断线重连中...*斷線重連中...**Rớt mạng kết nối lại...*กำลังเชื่อมต่อกับเซิร์ฟเวอร์...←\n1061*亲爱的玩家，由于您是未成年用户每日游戏时间上限为90分钟，今日剩余游戏时间已不足%s分钟*親愛的玩家，由於您是未成年用戶每日遊戲時間上限為90分鐘，今日剩餘遊戲時間已不足%s分鐘**Xin chào, do bạn là người dùng vị thành niên giới hạn chơi game mỗi ngày 90p, chơi game hôm nay còn không đủ %s p*ผู้เล่นที่เคารพ เนื่องจากคุณเป็น User ที่ยังไม่บรรลุนิติภาวะ เวลาเล่นเกมในแต่ละวันจะถูกกำหนดไว้ไม่เกิน 90 นาที เวลาเล่นเกมของวันนี้เหลือไม่ถึง%sนาทีแล้ว←\n1149*不再提示*不再提示**Không nhắc lại*ไม่ต้องแจ้งเตือนอีก←\n1175*区服选择*區服選擇**Chọn server*เลือกเซิร์ฟเวอร์←\n1176*流畅*流暢**Mượt*ราบรื่น←\n1177*繁忙*繁忙**Đông*หนาแน่น←\n1178*维护*維護**Bảo Trì*ปรับปรุง←\n1180*知道了*知道了**OK*รับทราบ←\n1183*抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。\n适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。*抵制不良遊戲，拒絕盜版遊戲。注意自我保護，謹防受騙上當。\n適度遊戲益腦，沉迷遊戲傷身。合理安排時間，享受健康生活。**Chơi game điều độ\nGiữ gìn sức khỏe.*ต่อต้านเกมที่ไม่ดี ปฏิเสธเกมเถื่อน รู้จักปกป้องตัวเอง ระวังอย่าถูกหลอกลวง\n เล่นเกมแต่พอดีดีต่อสมอง ติดเกมไม่พักทำลายสุขภาพ จัดการเวลาให้เหมาะสม ใช้ชีวิตด้วยสุขภาพที่ดี←\n1184*登录*登錄**Đăng Nhập*ล็อกอิน←\n1186*选区*選區**Chọn server*เลือกโซน←\n1911*请输入用户名*請輸入用戶名**Hãy nhập tên user*กรุณากรอก Username←\n1912*请输入密码*請輸入密碼**Hãy nhập mật khẩu*กรุณากรอก Password←\n1935*切换账号*切換帳號**Đổi TK*สับเปลี่ยน User←\n1936*操作失败*操作失敗***←\n2003*%s月%s日*%s月%s日**%s / %s*วันที่%s %s←\n2036*点击空白区域关闭窗口*點擊空白區域關閉視窗**Nhấp chỗ trống tắt cửa sổ*คลิกที่จุดว่างเปล่าเพื่อปิดหน้าต่าง←\n2065*账号格式错误*帳號格式錯誤**Lỗi cách thức tài khoản*รูปแบบ ID ผิดพลาด←\n2066*最近登录*最近登錄**Gần Đây*ล็อกอินล่าสุด←\n2236*服务器连接失败，请检查网络状态*伺服器連接失敗，請檢查網絡狀態**Kết nối server thất bại, hãy kiểm tra tình trạng mạng*การเชื่อมต่อเซิร์ฟเวอร์ล้มเหลว โปรดตรวจสอบสถานะเครือข่ายของคุณ←\n2237*认证失败，请重新认证*認證失敗，請重新認證**Xác thực thất bại, hãy thử lại*การยืนยันล้มเหลว กรุณายืนยันใหม่อีกครั้ง←\n2238*游戏维护中*遊戲維護中**Game đang bảo trì*เกมอยู่ระหว่างการปรับปรุง←\n2389*拉取不到服务器信息*拉取不到伺服器信息**Không thể lấy thông tin server*←\n2395*服务器开放时间%s*伺服器開放時間%s**Thời gian mở server: %s*←\n2402*启动版本：%s*啟動版本：%s**Khởi động phiên bản: %s*←\n2403*游戏版本：%s*遊戲版本：%s**Phiên bản: %s*←\n2404*渠道号：%s*渠道號：%s**Số Kênh: %s*←\n2458*服务器拥挤无法进入，建议选择其它服务器*伺服器擁擠無法進入，建議選擇其它伺服器***←\n2462*操作过于频繁****←\n2468*您的账号已被封禁，解禁时间%s*您的賬號已被封禁，解禁時間%s***←\n2480*超载*超載***←\n2481*抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。*抵制不良遊戲，拒絕盜版遊戲。注意自我保護，謹防受騙上當。適度遊戲益腦，沉迷遊戲傷身。合理安排時間，享受健康生活。**Chơi game điều độ Giữ gìn sức khỏe.*ต่อต้านเกมที่ไม่ดี ปฏิเสธเกมเถื่อน รู้จักปกป้องตัวเอง ระวังอย่าถูกหลอกลวง เล่นเกมแต่พอดีดีต่อสมอง ติดเกมไม่พักทำลายสุขภาพ จัดการเวลาให้เหมาะสม ใช้ชีวิตด้วยสุขภาพที่ดี←\n2482*出版机构名称：浙江大学电子音像出版社 著作权人：杭州天极峰数字娱乐有限公司 审批文号：科技与数字{2011}040号 ISBN  978-7-89988-011-4 软著：2009SR056112*出版机构名称：浙江大学电子音像出版社 著作权人：杭州天极峰数字娱乐有限公司 审批文号：科技与数字{2011}040号 ISBN  978-7-89988-011-4 软著：2009SR056112****←\n3022*注销*註銷****←\n3030*登录信息失效，请重新登录*登入資訊失效，請重新登入****←\n3031*是否注销账号*是否註銷帳號****←\n3032*兼容模式(关闭WebGL2渲染)*兼容模式(關閉WebGL2渲染)****←\n3033*进入游戏黑屏时请尝试勾选兼容模式*進入遊戲黑屏時請嘗試勾選兼容模式****←\n3034*清理缓存*清理緩存****←\n3035*设置*設置****←\n20001*点击登录华为账号****←\n20002*不能重复点击*不能重複點擊***←\n20003*\n游戏名称：魔力宝贝归来 审批文号：国新出审[2020]2994号 \n出版物号：ISBN 978-7-498-08560-3 \n著作权人：上海塔人网络科技股份有限公司 \n出版单位：华东师范大学电子音像出版社有限公司 \n运营单位：上海塔人网络科技股份有限公司*\n游戏名称：魔力宝贝归来 审批文号：国新出审[2020]2994号 \n出版物号：ISBN 978-7-498-08560-3 \n著作权人：上海塔人网络科技股份有限公司 \n出版单位：华东师范大学电子音像出版社有限公司 \n运营单位：上海塔人网络科技股份有限公司**←\n20004*\n游戏名称：魔力宝贝归来 审批文号：国新出审[2020]2994号 出版物号：ISBN 978-7-498-08560-3 著作权人：上海塔人网络科技股份有限公司 \n出版单位：华东师范大学电子音像出版社有限公司 运营单位：上海塔人网络科技股份有限公司*\n游戏名称：魔力宝贝归来 审批文号：国新出审[2020]2994号 出版物号：ISBN 978-7-498-08560-3 著作权人：上海塔人网络科技股份有限公司 \n出版单位：华东师范大学电子音像出版社有限公司 运营单位：上海塔人网络科技股份有限公司**←\n20005*\n出版单位名称：河北冠林数字出版有限公司 著作权人名称：广州霖橙科技有限公司 \n批文号： 新广出审[2017]10308号 游戏版号：ISBN 978-7-498-03058-0**←\n20006*\n游戏名称：魔力宝贝归来 审批文号：国新出审[2020]2994号 出版物号：ISBN 978-7-498-08560-3 著作权人：上海塔人网络科技股份有限公司 \n出版单位：华东师范大学电子音像出版社有限公司 运营单位：广州玩物欣荣科技有限公司*\n游戏名称：魔力宝贝归来 审批文号：国新出审[2020]2994号 出版物号：ISBN 978-7-498-08560-3 著作权人：上海塔人网络科技股份有限公司 \n出版单位：华东师范大学电子音像出版社有限公司 运营单位：广州玩物欣荣科技有限公司**←\n200004*本游戏是一款角色扮演类游戏，适用于16周岁及以上的用户，建议未成年人在家长监护下使用游戏产品<br><br>本游戏基于架空的故事背景和幻想世界观，画面色彩鲜明、配乐明快。游戏中的角色都是自主原创，不会与现实相混淆，游戏中有基于语言和文字的陌生人社交系统，但社交系统的管理遵循相关法律法规。<br><br>本游戏中有用户实名认证系统，认证为未成年人的用户将接受以下管理：<br>游戏中部分玩法和道具需要付费。未满8周岁的用户不能付费；8周岁以上未满16周岁的未成年人用户，单次充值金额不得超过50元人民币，每月充值金额累计不得超过200元人民币；16周岁以上的未成年用户，单次充值金额不得超过100元人民币，每月充值金额累计不得超过400元人民币。<br><br>未成年用户仅可在周五、周六、周日和法定节假日每日20时至21时使用1小时游戏服务，其他时间均不可使用<br><br>****←\n200005*适龄提示****←\n200006*游戏名称：魔力宝贝归来 审批文号：国新出审[2020]2994号  出版物号：ISBN 978-7-498-08560-3 著作权人：上海塔人网络科技股份有限公司  出版单位：华东师范大学电子音像出版社有限公司  运营单位：上海塔人网络科技股份有限公司****←\nlocal_1*账号登录成功*帳號登錄成功***←\nlocal_2*账号登录失败！*帳號登錄失敗！***←\nlocal_3*账号登录状态：*帳號登錄狀態：***←\nlocal_4*进入游戏中...*進入遊戲中...***←\nlocal_5*检查区服状态*檢查區服狀態***←\nlocal_6*登录中*登錄中***←\nlocal_7*登录成功*登錄成功***←\nlocal_8*登录失败*登錄失敗***←\nlocal_9*网络已断开*網路已斷開***←\nlocal_10*获取大区列表*獲取大區列表***←\nlocal_11*获取大区列表失败*獲取大區列表失敗***←\nlocal_12*获取最近登录列表*獲取最近登錄列表***←\nlocal_13*获取最近登录列表失败*獲取最近登錄列表失敗***←\nlocal_14*进入区服界面*進入區服介面***←\nlocal_15*登录验证中*登錄驗證中***←\nlocal_16*登录验证失败*登錄驗證失敗***←\nlocal_17*获取游戏版本号*獲取遊戲版本號***←\nlocal_18*获取游戏版本号失败*獲取遊戲版本號失敗***←\nlocal_19*登录失败!请重新登陆*登錄失敗!請重新登陸***←\nlocal_20*检查区服状态失败*檢查區服狀態失敗***←\nlocal_21*暂无可选服务器*暫無可選服務器***←\nlocal_22*当前版本过低，请前往下载更新最新版本*當前版本過低，請前往下載更新最新版本***←\n";
    class r extends Laya.Text {
        constructor() {
            super(...arguments),
            this.prevX = 0,
            this.prevY = 0
        }
        onShow() {
            this.overflow = "scroll",
            this.on(Laya.Event.MOUSE_DOWN, this, this.startScrollText)
        }
        onHide() {
            this.off(Laya.Event.MOUSE_DOWN, this, this.startScrollText)
        }
        startScrollText(e) {
            this.prevX = this.mouseX,
            this.prevY = this.mouseY,
            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.scrollText),
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.finishScrollText)
        }
        finishScrollText(e) {
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.scrollText),
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.finishScrollText)
        }
        scrollText(e) {
            var t = this.mouseX
              , i = this.mouseY;
            this.scrollX += this.prevX - t,
            this.scrollY += this.prevY - i,
            this.prevX = t,
            this.prevY = i
        }
    }
    class o {
        static set(e, t) {
            Laya.LocalStorage.setItem(e, t)
        }
        static get(e) {
            return Laya.LocalStorage.getItem(e)
        }
        static remove(e) {
            Laya.LocalStorage.removeItem(e)
        }
    }
    o.LAST_ACCOUNT_NAME = "LAST_ACCOUNT_NAME",
    o.LAST_SERVER_IDX = "LAST_SERVER_IDX",
    o.LAST_TEAM_BROADCAST_WORDS = "LAST_TEAM_BROADCAST_WORDS",
    o.CLOSE_MUSIC = "CLOSE_MUSIC",
    o.CLOSE_SOUND = "CLOSE_SOUND",
    o.LAST_ACCOUNT_PASS = "LAST_ACCOUNT_PASS",
    o.LAS_SDK_ACCOUNT_PASS_GUEST = "LAS_SDK_ACCOUNT_PASS_GUEST",
    o.LAS_SDK_ACCOUNT_PASS_PHONE = "LAS_SDK_ACCOUNT_PASS_PHONE",
    o.RECENTLY_SDK_QUICK = "RECENTLY_SDK_QUICK",
    o.RECENTLY_SDK_TOKEN = "RECENTLY_SDK_TOKEN",
    o.RECENTLY_SDK_LOGIN = "RECENTLY_SDK_LOGIN",
    o.LAST_SHIELD_SELECT = "LAST_SHIELD_SELECT",
    o.LIUHAIPING_SET = "LIUHAIPING_SET",
    o.LAST_CHAT_TIME = "LAST_CHAT_TIME",
    o.LAST_LOGIN_TIME = "LAST_LOGIN_TIME",
    o.IS_LAND_SCREEN = "IS_LAND_SCREEN",
    o.IS_FIRST_OPEN = "IS_FIRST_OPEN";
    class l {
        static getUrlParam() {
            if (Laya.Browser.onMiniGame)
                return {};
            if (!window.location || !window.location.search)
                return {};
            const e = {}
              , t = window.location.search.substr(1).split("&");
            for (let i = 0; i < t.length; i++) {
                const s = t[i].split("=");
                1 == s.length && s[0].length > 0 ? e[s[0]] = "1" : 2 == s.length && (e[s[0]] = s[1])
            }
            return e
        }
        static get urlParams() {
            return this._urlParams || (this._urlParams = this.getUrlParam()),
            this._urlParams
        }
        static get(e) {
            return this.urlParams[e]
        }
    }
    class h {
        init(e) {
            if (this.juheSdkObj = window.JuheSDK,
            this.juheSdkObj) {
                const e = {};
                I.data.JuheH5Sdk_Debug ? (e.juheAppId = 101,
                e.juheAppKey = "2e2cd6cc831246849d19503b75b25d9d",
                e.apiUrl = "https://sdktest.gateway.yofijoy.com/juhe") : (e.juheAppId = 1000040,
                e.juheAppKey = "15a613ffe433466cb6ce87dedf73c963",
                e.apiUrl = "https://juhe.gateway.yofijoy.com/juhe"),
                e.debug = !1,
                this.juheSdkObj.init(e, ( () => {}
                ))
            }
        }
        login(e, t) {
            this.juheSdkObj.login((e => {
                0 == e.code && (this.channelId = e.data.channelId,
                this.accessToken = e.data.accessToken,
                this.userId = e.data.userId,
                this.userName = e.data.userName,
                this.serverId = e.data.serverId,
                this.cpExtra = e.data.cpExtra,
                this.newUser = e.data.newUser,
                this.isWd = !!this.juheSdkObj.isWd(),
                t())
            }
            ))
        }
        getHrefStr(e) {
            const t = l.urlParams;
            let i = `&accessToken=${this.accessToken}&channelId=${this.channelId}&userId=${this.userId}&userName=${this.userName}&cpExtra=${this.cpExtra}&isWd=${this.isWd}`;
            for (let s in t)
                -1 == e.indexOf(s) && (i += `&${s}=${t[s]}`);
            return i
        }
        pay(e) {
            this.juheSdkObj.pay(e, (e => {}
            ))
        }
        reportEvent(e, t, i) {}
        logout() {
            this.juheSdkObj.logout()
        }
    }
    var c, d, g, u;
    h.Singleton = new h,
    function(e) {
        e[e.NONE = 0] = "NONE",
        e[e.H5_2144 = 45] = "H5_2144",
        e[e.H5_602 = 46] = "H5_602",
        e[e.H5_360WAN = 47] = "H5_360WAN",
        e[e.H5_BAIDU = 48] = "H5_BAIDU",
        e[e.H5_4XY = 49] = "H5_4XY",
        e[e.H5_4399 = 50] = "H5_4399"
    }(c || (c = {}));
    class S {
        init(e) {
            this.appid = 102031259,
            this.appkey = "LaaR3VivuugIgvvr",
            this.openid = Laya.Utils.getQueryString("openid"),
            this.openkey = Laya.Utils.getQueryString("openkey"),
            this.pf = Laya.Utils.getQueryString("pf"),
            this.pfkey = Laya.Utils.getQueryString("pfkey")
        }
        pay(e, t) {}
        logout(e, t) {}
        login(e, t) {}
        share(e, t) {}
        reportEvent(e, t, i) {}
        getLoginToken(e) {
            let t = {};
            return t.openid = S.Singleton.openid,
            t.openkey = S.Singleton.openkey,
            t.pfkey = S.Singleton.pfkey,
            t.pf = S.Singleton.pf,
            JSON.stringify(t)
        }
        getHrefStr(e) {
            let t = "";
            return t += "&access_token=" + Laya.Utils.getQueryString("access_token"),
            t += "&sdkopenid=" + this.openid,
            t += "&openkey=" + this.openkey,
            t += "&pf=" + this.pf,
            t += "&pfkey=" + this.pfkey,
            t += "&plat_openid=" + Laya.Utils.getQueryString("plat_openid"),
            t += "&plat_openkey=" + Laya.Utils.getQueryString("plat_openkey"),
            t
        }
    }
    S.Singleton = new S;
    class p {
        init(e) {
            this.wanOpenSdk = window.wanOpenSdk,
            this.wanOpenSdk && this.wanOpenSdk.ready(( () => {
                var e = this.wanOpenSdk.getSetting();
                if (e.share,
                e.showWechatAccount,
                e.verifyState && this.wanOpenSdk.getVerifyState((e => {
                    switch (e) {
                    case g.NONAGE0:
                    case g.NONAGE1:
                    case g.NONAGE2:
                    case g.NONE:
                    case g.ADULT:
                    }
                }
                )),
                e.supportApp && this.wanOpenSdk.isApp((e => {}
                )),
                e.supportService,
                e.supportVipService && this.wanOpenSdk.vipService((e => {}
                )),
                e.supportSvip,
                e.supportBindPhone) {
                    this.wanOpenSdk.isBindPhone({
                        pkey: "登录时pkey",
                        gkey: "登录时gkey",
                        openid: "登录时openid"
                    }, (e => {}
                    ))
                }
            }
            ))
        }
        login(e, t) {}
        getLoginToken(e) {
            let t = {};
            return t.pkey = parseInt(Laya.Utils.getQueryString("pkey")),
            t.gkey = parseInt(Laya.Utils.getQueryString("gkey")),
            t.time = parseInt(Laya.Utils.getQueryString("time")),
            t.guest = parseInt(Laya.Utils.getQueryString("guest")),
            t.issubscribe = parseInt(Laya.Utils.getQueryString("issubscribe")),
            Laya.Utils.getQueryString("skey") && (t.skey = parseInt(Laya.Utils.getQueryString("skey"))),
            t.sign = Laya.Utils.getQueryString("sign"),
            t.openid = Laya.Utils.getQueryString("openid"),
            JSON.stringify(t)
        }
        getHrefStr(e) {
            let t = "";
            return t += "&pkey=" + Laya.Utils.getQueryString("pkey"),
            t += "&gkey=" + Laya.Utils.getQueryString("gkey"),
            t += "&guest=" + Laya.Utils.getQueryString("guest"),
            t += "&issubscribe=" + Laya.Utils.getQueryString("issubscribe"),
            t += "&time=" + Laya.Utils.getQueryString("time"),
            t += "&sign=" + Laya.Utils.getQueryString("sign"),
            t += "&sdkopenid=" + Laya.Utils.getQueryString("openid"),
            Laya.Utils.getQueryString("skey") && (t += "&skey=" + Laya.Utils.getQueryString("skey")),
            t
        }
        pay(e) {
            this.wanOpenSdk.pay(e, (e => {}
            ))
        }
        downloadApp() {
            var e = {
                pkey: Laya.Utils.getQueryString("pkey"),
                gkey: Laya.Utils.getQueryString("gkey"),
                openid: Laya.Utils.getQueryString("openid")
            };
            this.wanOpenSdk.download(e, (e => {}
            ))
        }
        verifyState() {
            this.wanOpenSdk.verifyState((e => {
                switch (e) {
                case g.NONAGE0:
                case g.NONAGE1:
                case g.NONAGE2:
                case g.NONE:
                case g.ADULT:
                }
            }
            ))
        }
        share() {
            this.wanOpenSdk.share({}, (e => {
                e.errno
            }
            ))
        }
        getInviter() {
            this.wanOpenSdk.getInviter((function(e) {}
            ))
        }
        reportEvent(e, t, i) {
            let s = {
                gkey: parseInt(Laya.Utils.getQueryString("gkey")),
                skey: parseInt(Laya.Utils.getQueryString("skey")) || 1,
                openid: Laya.Utils.getQueryString("openid"),
                time: Laya.Utils.getQueryString("time")
            };
            if (e === u.serverlist)
                s.type = d.serverlist;
            this.wanOpenSdk.push(s, (e => {}
            ))
        }
        logout() {
            this.wanOpenSdk.logout()
        }
    }
    p.Singleton = new p,
    function(e) {
        e.serverlist = "serverlist",
        e.createrolescene = "createrolescene",
        e.createrole = "createrole",
        e.access = "access",
        e.firstscene = "firstscene",
        e.levelup = "levelup",
        e.gloadbegin = "gloadbegin",
        e.gloadend = "gloadend"
    }(d || (d = {})),
    function(e) {
        e[e.NONE = 0] = "NONE",
        e[e.NONAGE0 = -1] = "NONAGE0",
        e[e.NONAGE1 = -2] = "NONAGE1",
        e[e.NONAGE2 = -3] = "NONAGE2",
        e[e.ADULT = 1] = "ADULT"
    }(g || (g = {}));
    class L {
        init(e) {
            window.wanOpenSdk ? this.sdkObj = p.Singleton : L.isQQGameSdk() ? this.sdkObj = S.Singleton : L.isJuheSdk() && (this.sdkObj = h.Singleton),
            this.sdkObj && this.sdkObj.init(e)
        }
        pay(e, t) {
            this.sdkObj && this.sdkObj.pay(e, t)
        }
        logout(e, t) {
            this.sdkObj && this.sdkObj.logout(e, t)
        }
        login(e, t) {
            this.sdkObj && this.sdkObj.login(e, t)
        }
        share(e, t) {
            this.sdkObj && this.sdkObj.share(e, t)
        }
        reportEvent(e, t, i) {
            this.sdkObj && this.sdkObj.reportEvent(e, t, i)
        }
        static isH5WebSDK() {
            return window.wanOpenSdk || this.isQQGameSdk() || this.isJuheSdk()
        }
        static isWanOpenSdk() {
            return !!window.wanOpenSdk
        }
        static isQQGameSdk() {
            return 104 == I.data.SDKID
        }
        static isJuheSdk() {
            return 200 == I.data.SDKID
        }
        getLoginToken(e) {
            return this.sdkObj.getLoginToken(e)
        }
        getHrefStr(e) {
            return this.sdkObj.getHrefStr(e)
        }
    }
    L.Singleton = new L,
    function(e) {
        e[e.serverlist = 0] = "serverlist",
        e[e.createrolescene = 1] = "createrolescene",
        e[e.createrole = 2] = "createrole",
        e[e.access = 3] = "access",
        e[e.firstscene = 4] = "firstscene",
        e[e.levelup = 5] = "levelup",
        e[e.gloadbegin = 6] = "gloadbegin",
        e[e.gloadend = 7] = "gloadend"
    }(u || (u = {}));
    class y {
        getSdkMode() {
            if (null != I.data.SDKID) {
                if (0 == I.data.SDKID)
                    return 10;
                if (1 == I.data.SDKID)
                    return 2;
                if (2 == I.data.SDKID || 200 == I.data.SDKID)
                    return 6;
                if (3 == I.data.SDKID)
                    return 4;
                if (100 == I.data.SDKID)
                    return 8;
                if (101 == I.data.SDKID)
                    return 9;
                if (102 == I.data.SDKID)
                    return 5;
                if (103 == I.data.SDKID)
                    return 11;
                if (104 == I.data.SDKID)
                    return 12
            } else {
                if (10001 == I.data.CHANNEL_ID || 10002 == I.data.CHANNEL_ID || 10003 == I.data.CHANNEL_ID || 10004 == I.data.CHANNEL_ID || 10005 == I.data.CHANNEL_ID || 10006 == I.data.CHANNEL_ID || 10007 == I.data.CHANNEL_ID || 20001 == I.data.CHANNEL_ID)
                    return 10;
                if (I.data.YOFISDK)
                    return 2;
                if (I.data.YOFISDKWEB)
                    return 10;
                if (I.data.QUICKSDK)
                    return 4
            }
            return 0
        }
    }
    y.Singleton = new y,
    y.CHANNEL_OPPO = 10164,
    y.CHANNEL_VIVO = 10165,
    y.CHANNEL_HUAWEI = 10166,
    y.CHANNEL_XIAOMI = 10167,
    y.CHANNEL_JIUYOU = 10168,
    y.CHANNEL_BILIBILI = 10176,
    y.CHANNEL_4399 = 10180,
    y.CHANNEL_GOOGLEPC = 11007,
    y.CHANNEL_60003 = 60003,
    y.CHANNEL_60004 = 60004,
    y.CHANNEL_QQGAME = 70001;
    class I {
        static isOnNative() {
            return (Laya.Render.isConchApp || window.webkit || I.data.SDK_SHELL) && !L.isH5WebSDK()
        }
        static isGooglePc() {
            return I.data && I.data.CHANNEL_ID == y.CHANNEL_GOOGLEPC
        }
        static init() {
            if ("undefined" != typeof wx ? I.data.onWx = !0 : I.data.onWx = !1,
            window.navigator) {
                m.Debug(this, "###screen w:" + screen.width + " h:" + screen.height),
                m.Debug(this, "###userAgent:  " + window.navigator.userAgent);
                let e = /Safari/.test(window.navigator.userAgent) && !/Chrome/.test(window.navigator.userAgent);
                m.Debug(this, "onSafri: " + e),
                m.Debug(this, "onIE: " + Laya.Browser.onIE),
                m.Debug(this, "onChrome: " + /Chrome/.test(window.navigator.userAgent))
            }
            I.data.onWx && m.Debug(this, "###deviceinfo: " + wx.getSystemInfoSync().model)
        }
        static isAdapterScreen() {
            let e = o.get(o.LIUHAIPING_SET);
            if ("1" == e)
                return !0;
            if ("0" == e)
                return !1;
            let t = window.deviceDescribeName || " ";
            if (Laya.Browser.onAndroid)
                return t && I.androidWithoutLiuhai.indexOf(t) >= 0 ? (o.set(o.LIUHAIPING_SET, "0"),
                !1) : (o.set(o.LIUHAIPING_SET, "1"),
                !0);
            let i = -1 != t.indexOf("iPhone10,3") || -1 != t.indexOf("iPhone10,6") || -1 != t.indexOf("iPhone11") || -1 != t.indexOf("iPhone13");
            return i && o.set(o.LIUHAIPING_SET, "1"),
            i
        }
        static getDeviceInfo() {
            return window.navigator && window.navigator.userAgent ? window.navigator.userAgent : ""
        }
        static isLandScreen() {
            let e = o.get(o.IS_LAND_SCREEN);
            return null == e || "1" == e
        }
        static setLandScreenState(e) {
            o.set(o.IS_LAND_SCREEN, e)
        }
    }
    I.GAME_VERSION = window.GAME_VERSION,
    I.SDK_VERSION = "1.0.19",
    I.data = window.GameConf,
    I.androidWithoutLiuhai = ["HD1910", "GM1910", "MIX 3", "MIX 2S", "MIX 2", "MIX", "MI 6X", "MI 6", "MI 5X", "MI 5s Plus", "MI 5s", "MI 5", "SM-N9200", "SM-C7010", "SM-C5010", "SM-A9200", "SM-A9000", "SM-G6200", "SM-A6060", "TEL-AN00", "JMM-AL10", "HLK-AL10", "HLK-AL00", "LLD-AL00", "STF-AL10", "PRA-AL00", "BLN-AL40", "NX609J", "NX611J", "NX595J", "NX589J", "NX569J", "NX563J", "NX616J", "NX612J", "XT1929-15", "XT1710-08", "M5", "M5s", "M1816", "PRO 7 Plus", "PRO 6s", "PRO 5", "M1822", "MX6", "16th Plus", "16th", "16 X", "MP1605", "MP1710", "ZUK Z2151", "Lenovo L78032", "Lenovo L78031", "OS105", "DUK-AL20", "KNT-UL10", "PRA-AL00X", "PLK-TL01H", "KNT-AL10", "FRD-DL00", "EDI-AL10", "ATH-AL00", "PLK-AL10", "HUAWEI MLA-AL10", "RNE-AL00", "HUAWEI MLA-AL00", "TRT-AL00", "FLA-AL20", "LDN-AL00", "FIG-AL10", "DIG-AL00", "NCE-AL10", "STK-AL00", "VKY-AL00", "VTR-AL00", "HUAWEI CAZ-AL10", "WAS-TL10", "HWI-AL00", "BAC-AL00", "HUAWEI CAZ-TL10", "ALP-AL00", "HUAWEI NXT-TL00", "HUAWEI VNS-DL00", "HUAWEI MLA-TL10", "HUAWEI MLA-TL10", "ASUS_I001DA", "Redmi Pro", "Redmi Note 5A", "Redmi Note 5", "Redmi Note 4X", "Redmi K30 Pro", "Redmi K20", "Redmi 6", "Redmi 5", "Redmi 3S", "SHARK KLE-A0", "AWM-A0", "SKR-A0", "SKW-A0", "OD103", "OC105", "SM801", "SM901", "ZUK Z2131", "ZUK Z1", "vivo Y79A", "vivo Y75s", "vivo Y75A", "vivo Y71A", "vivo Y69A", "vivo Y67L", "vivo Y67A", "vivo Y67", "vivo Y66i A", "vivo Y66", "vivo Xplay5A", "vivo X9s Plus", "vivo X9s", "vivo X9i", "vivo X9", "vivo X7Plus", "vivo X6SPlus D", "vivo X6SPlus A", "vivo X6S", "vivo X6D", "vivo X6A", "V1836A", "V1829A", "vivo X20A", "vivo V3Max A", "V1832A", "V1831A", "V1821A", "vivo NEX A", "ASUS_I003DD", "RMX1851", "RMX1901", "PCAM00", "OPPO R9tm", "OPPO R9t", "OPPO R9st", "OPPO R9s Plus", "OPPO R9 Plusm A", "R7Plusm", "OPPO R11s Plus", "OPPO R11s", "OPPO R11 Plus", "OPPO R11", "PCGM00", "PAFM00", "OPPO A83", "OPPO A77", "OPPO A73", "OPPO A57", "OPPO A30", "MI MAX"];
    class m {
        static Debug(...e) {
            0
        }
        static DebugClearRes(e) {
            0
        }
        static objToString(e) {
            let t = "{";
            for (let i in e)
                t += i + ":" + e[i] + ",";
            return t = t.slice(0, -1),
            t += "}",
            t
        }
        static Print(e) {
            0
        }
    }
    m.logStr = "",
    m.label = void 0,
    m.btn = void 0,
    m.img = void 0,
    window.LogUtil = m;
    class w {
        constructor() {
            this.data = {},
            this.size = 0
        }
        set(e, t) {
            null != t && (this.data.hasOwnProperty(e) || this.size++,
            this.data[e] = t)
        }
        setN(e, t) {
            this.set(e.toString(), t)
        }
        get(e) {
            return this.data[e]
        }
        getN(e) {
            return this.get(e.toString())
        }
        remove(e) {
            this.data.hasOwnProperty(e) && (delete this.data[e],
            this.size--)
        }
        removeN(e) {
            this.remove(e.toString())
        }
        getData() {
            return this.data
        }
        removeAll() {
            for (let e in this.data)
                this.remove(e)
        }
        clone() {
            let e = new w;
            for (let t in this.data)
                e.set(t, this.data[t]);
            return e
        }
        getArray() {
            let e = [];
            for (let t in this.data)
                e.push(this.data[t]);
            return e
        }
        getKeys() {
            let e = [];
            for (let t in this.data)
                e.push(t);
            return e
        }
        getNKeys() {
            let e = [];
            for (let t in this.data)
                e.push(parseInt(t));
            return e
        }
        getSize() {
            return this.size
        }
        contain(e) {
            return null != this.get(e)
        }
        containN(e) {
            return null != this.getN(e)
        }
        static UnitTest() {
            let e = new w;
            e.set("name", "lxp"),
            e.set("age", "13");
            let t = e.getData();
            for (let e in t)
                0;
            e.remove("name"),
            t = e.getData();
            for (let e in t)
                0
        }
    }
    class _ {
        constructor() {
            this.edition = 1,
            this.languageDict = new w
        }
        init() {
            let e = a.split("←");
            for (let t = 0; t < e.length; t++) {
                let i = e[t].split("*");
                i[i.length - 1] = i[i.length - 1].replace("$", "");
                let s = i.shift();
                s = s.replace("\n", ""),
                this.languageDict.set(s, i)
            }
        }
        getInfoByLangID(e) {
            let t = this.languageDict.get(e.toString());
            if (!t)
                return "";
            switch (this.edition) {
            case 1:
                return t[0];
            case 2:
                return t[1];
            case 3:
                return t[2];
            case 4:
                return t[3];
            case 5:
                return t[4];
            default:
                return `系统错误[${e}]`
            }
        }
        getLocalInfoByLangId(e) {
            let t = this.languageDict.get("local_" + e);
            switch (this.edition) {
            case 1:
                return t[0];
            case 2:
                return t[1];
            case 3:
                return t[2];
            case 4:
                return t[3];
            case 5:
                return t[4];
            default:
                return `系统错误[${e}]`
            }
        }
        getSkinByURL(e) {
            let t = e.slice(0, e.lastIndexOf("/") + 1)
              , i = e.slice(e.lastIndexOf("/") + 1)
              , s = i.slice(0, i.lastIndexOf("_"))
              , n = i.slice(i.lastIndexOf("."));
            switch (this.edition) {
            case 1:
                return t + s + "_cn" + n;
            case 3:
                return t + s + "_en" + n;
            case 2:
                return t + s + "_tw" + n;
            case 4:
                return t + s + "_vn" + n;
            default:
                return "[getSkinByURL] language edition not found!"
            }
        }
        getInfoByJsonStr(e) {
            if (!n.Singleton.isJson(e))
                return e;
            {
                let t = JSON.parse(e);
                switch (this.edition) {
                case 1:
                    return t.cn;
                case 3:
                    return t.en;
                case 2:
                    return t.tw;
                case 4:
                    return t.vn;
                default:
                    return ""
                }
            }
        }
        get editionName() {
            switch (f.edition) {
            case 1:
            default:
                return t.CN;
            case 2:
                return t.TW;
            case 3:
                return t.EN;
            case 4:
                return t.VN;
            case 5:
                return t.TH
            }
        }
        formatByEdition(e) {
            return v.test(e) ? e.replace(v, `_${f.editionName}.`) : e
        }
        filterByEdition(e) {
            let t = v.exec(e);
            return !!t && t[1] != this.editionName
        }
    }
    _.Singleton = new _;
    const v = /_(cn|tw)\./g;
    let f = _.Singleton;
    class E {
        constructor() {}
        static getTopOffset() {
            return this.isLiuHaiFlag && !this.isLandFlag ? E.ipxTop : 0
        }
        static getLeftOffset() {
            return this.isLiuHaiFlag && this.isLandFlag ? E.ipxLeft : 0
        }
        static setLiuHaiFlag(e) {
            this.isLiuHaiFlag = e
        }
        static setLandFlag(e) {
            this.isLandFlag = e
        }
        static getLandFlag(e) {
            return !(e && !this.isDealLandScene(e)) && this.isLandFlag
        }
        static isDealLandScene(e) {
            return -1 == e.indexOf("scene/startWebsdk2/") && (-1 == e.indexOf("scene/startGame/") && (-1 == e.indexOf("scene/startCommon/") && (-1 == e.indexOf("scene/startCommon/") && (-1 == e.indexOf("scene/startInit/view/SetDlg") && -1 == e.indexOf("scene/startInit/view/SetItem")))))
        }
        static isTw() {
            return 2 == f.edition
        }
    }
    E.singleton = new E,
    E.ipxTop = 57,
    E.ipxLeft = 57,
    E.isLiuHaiFlag = !1,
    E.isLandFlag = !1;
    var C, k = Laya.View, T = Laya.Dialog, A = Laya.Scene, D = Laya.ClassUtils.regClass;
    !function(e) {
        !function(e) {
            !function(e) {
                class t extends k {
                    constructor() {
                        super()
                    }
                    createChildren() {
                        super.createChildren(),
                        this.loadScene("scene/startCommon/PopupView")
                    }
                }
                e.PopupViewUI = t,
                D("uimax.scene.startCommon.PopupViewUI", t)
            }(e.startCommon || (e.startCommon = {}))
        }(e.scene || (e.scene = {}))
    }(C || (C = {})),
    function(e) {
        !function(e) {
            !function(e) {
                class t extends A {
                    constructor() {
                        super()
                    }
                    createChildren() {
                        super.createChildren(),
                        this.loadScene("scene/startGame/GameLayerAntiAddiction")
                    }
                }
                e.GameLayerAntiAddictionUI = t,
                D("uimax.scene.startGame.GameLayerAntiAddictionUI", t);
                class i extends A {
                    constructor() {
                        super()
                    }
                    createChildren() {
                        super.createChildren(),
                        this.loadScene("scene/startGame/GameLayerAuthentication")
                    }
                }
                e.GameLayerAuthenticationUI = i,
                D("uimax.scene.startGame.GameLayerAuthenticationUI", i);
                class s extends A {
                    constructor() {
                        super()
                    }
                    createChildren() {
                        super.createChildren(),
                        this.loadScene("scene/startGame/GameLayerLogin")
                    }
                }
                e.GameLayerLoginUI = s,
                D("uimax.scene.startGame.GameLayerLoginUI", s);
                class n extends A {
                    constructor() {
                        super()
                    }
                    createChildren() {
                        super.createChildren(),
                        this.loadScene("scene/startGame/GameLayerPasswordReset")
                    }
                }
                e.GameLayerPasswordResetUI = n,
                D("uimax.scene.startGame.GameLayerPasswordResetUI", n);
                class a extends A {
                    constructor() {
                        super()
                    }
                    createChildren() {
                        super.createChildren(),
                        this.loadScene("scene/startGame/GameLayerRegister")
                    }
                }
                e.GameLayerRegisterUI = a,
                D("uimax.scene.startGame.GameLayerRegisterUI", a)
            }(e.startGame || (e.startGame = {}))
        }(e.scene || (e.scene = {}))
    }(C || (C = {})),
    function(e) {
        !function(e) {
            !function(e) {
                class t extends k {
                    constructor() {
                        super()
                    }
                    createChildren() {
                        super.createChildren(),
                        this.loadScene("scene/startInit/InitLayerAccount")
                    }
                }
                e.InitLayerAccountUI = t,
                D("uimax.scene.startInit.InitLayerAccountUI", t);
                class i extends k {
                    constructor() {
                        super()
                    }
                    createChildren() {
                        super.createChildren(),
                        this.loadScene("scene/startInit/InitLayerServer")
                    }
                }
                e.InitLayerServerUI = i,
                D("uimax.scene.startInit.InitLayerServerUI", i);
                class s extends A {
                    constructor() {
                        super()
                    }
                    createChildren() {
                        super.createChildren(),
                        this.loadScene("scene/startInit/InitScene")
                    }
                }
                e.InitSceneUI = s,
                D("uimax.scene.startInit.InitSceneUI", s);
                class n extends A {
                    constructor() {
                        super()
                    }
                    createChildren() {
                        super.createChildren(),
                        this.loadScene("scene/startInit/InitSceneLand")
                    }
                }
                e.InitSceneLandUI = n,
                D("uimax.scene.startInit.InitSceneLandUI", n)
            }(e.startInit || (e.startInit = {}))
        }(e.scene || (e.scene = {}))
    }(C || (C = {})),
    function(e) {
        !function(e) {
            !function(e) {
                !function(e) {
                    class t extends k {
                        constructor() {
                            super()
                        }
                        createChildren() {
                            super.createChildren(),
                            this.loadScene("scene/startInit/view/AgeTips")
                        }
                    }
                    e.AgeTipsUI = t,
                    D("uimax.scene.startInit.view.AgeTipsUI", t);
                    class i extends k {
                        constructor() {
                            super()
                        }
                        createChildren() {
                            super.createChildren(),
                            this.loadScene("scene/startInit/view/LoginNoticeContentItem")
                        }
                    }
                    e.LoginNoticeContentItemUI = i,
                    D("uimax.scene.startInit.view.LoginNoticeContentItemUI", i);
                    class s extends k {
                        constructor() {
                            super()
                        }
                        createChildren() {
                            super.createChildren(),
                            this.loadScene("scene/startInit/view/LoginNoticeView")
                        }
                    }
                    e.LoginNoticeViewUI = s,
                    D("uimax.scene.startInit.view.LoginNoticeViewUI", s);
                    class n extends k {
                        constructor() {
                            super()
                        }
                        createChildren() {
                            super.createChildren(),
                            this.loadScene("scene/startInit/view/PolicyView")
                        }
                    }
                    e.PolicyViewUI = n,
                    D("uimax.scene.startInit.view.PolicyViewUI", n);
                    class a extends T {
                        constructor() {
                            super()
                        }
                        createChildren() {
                            super.createChildren(),
                            this.loadScene("scene/startInit/view/SelectServerDlg")
                        }
                    }
                    e.SelectServerDlgUI = a,
                    D("uimax.scene.startInit.view.SelectServerDlgUI", a);
                    class r extends k {
                        constructor() {
                            super()
                        }
                        createChildren() {
                            super.createChildren(),
                            this.loadScene("scene/startInit/view/ServerGroupItem")
                        }
                    }
                    e.ServerGroupItemUI = r,
                    D("uimax.scene.startInit.view.ServerGroupItemUI", r);
                    class o extends k {
                        constructor() {
                            super()
                        }
                        createChildren() {
                            super.createChildren(),
                            this.loadScene("scene/startInit/view/ServerItem")
                        }
                    }
                    e.ServerItemUI = o,
                    D("uimax.scene.startInit.view.ServerItemUI", o);
                    class l extends k {
                        constructor() {
                            super()
                        }
                        createChildren() {
                            super.createChildren(),
                            this.loadScene("scene/startInit/view/SetDlg")
                        }
                    }
                    e.SetDlgUI = l,
                    D("uimax.scene.startInit.view.SetDlgUI", l);
                    class h extends k {
                        constructor() {
                            super()
                        }
                        createChildren() {
                            super.createChildren(),
                            this.loadScene("scene/startInit/view/SetItem")
                        }
                    }
                    e.SetItemUI = h,
                    D("uimax.scene.startInit.view.SetItemUI", h)
                }(e.view || (e.view = {}))
            }(e.startInit || (e.startInit = {}))
        }(e.scene || (e.scene = {}))
    }(C || (C = {})),
    function(e) {
        !function(e) {
            !function(e) {
                class t extends A {
                    constructor() {
                        super()
                    }
                    createChildren() {
                        super.createChildren(),
                        this.loadScene("scene/startSdk/YofiSdkFindPsd")
                    }
                }
                e.YofiSdkFindPsdUI = t,
                D("uimax.scene.startSdk.YofiSdkFindPsdUI", t);
                class i extends A {
                    constructor() {
                        super()
                    }
                    createChildren() {
                        super.createChildren(),
                        this.loadScene("scene/startSdk/YofiSdkLogin")
                    }
                }
                e.YofiSdkLoginUI = i,
                D("uimax.scene.startSdk.YofiSdkLoginUI", i);
                class s extends A {
                    constructor() {
                        super()
                    }
                    createChildren() {
                        super.createChildren(),
                        this.loadScene("scene/startSdk/YofiSdkRegister")
                    }
                }
                e.YofiSdkRegisterUI = s,
                D("uimax.scene.startSdk.YofiSdkRegisterUI", s)
            }(e.startSdk || (e.startSdk = {}))
        }(e.scene || (e.scene = {}))
    }(C || (C = {})),
    function(e) {
        !function(e) {
            !function(e) {
                class t extends A {
                    constructor() {
                        super()
                    }
                    createChildren() {
                        super.createChildren(),
                        this.loadScene("scene/startWebsdk2/WebSdk2LayerLogin")
                    }
                }
                e.WebSdk2LayerLoginUI = t,
                D("uimax.scene.startWebsdk2.WebSdk2LayerLoginUI", t);
                class i extends A {
                    constructor() {
                        super()
                    }
                    createChildren() {
                        super.createChildren(),
                        this.loadScene("scene/startWebsdk2/WebSdk2LayerPasswordReset")
                    }
                }
                e.WebSdk2LayerPasswordResetUI = i,
                D("uimax.scene.startWebsdk2.WebSdk2LayerPasswordResetUI", i);
                class s extends A {
                    constructor() {
                        super()
                    }
                    createChildren() {
                        super.createChildren(),
                        this.loadScene("scene/startWebsdk2/WebSdk2LayerRegister")
                    }
                }
                e.WebSdk2LayerRegisterUI = s,
                D("uimax.scene.startWebsdk2.WebSdk2LayerRegisterUI", s)
            }(e.startWebsdk2 || (e.startWebsdk2 = {}))
        }(e.scene || (e.scene = {}))
    }(C || (C = {}));
    class B extends C.scene.startGame.GameLayerAntiAddictionUI {
        constructor() {
            super()
        }
        onShow() {
            this.width = Laya.stage.width,
            this.height = Laya.stage.height,
            this.backBtn.clickHandler = Laya.Handler.create(this, this.onClose, void 0, !1),
            this.panel.vScrollBarSkin = ""
        }
        onHide() {
            this.backBtn.clickHandler && this.backBtn.clickHandler.recover(),
            this.backBtn.clickHandler = void 0
        }
        onClose() {
            Laya.Scene.close("scene/startGame/GameLayerAntiAddiction.scene")
        }
    }
    class b {
        constructor(e) {
            this.serverId = void 0,
            this.originId = void 0,
            this.serverName = void 0,
            this.url = void 0,
            this.port = void 0,
            this.ip = void 0,
            this.version = void 0,
            this.state = void 0,
            this.openTimestamp = void 0,
            this.serverZone = void 0,
            this.roleId = void 0,
            this.roleName = void 0,
            this.roleLevel = void 0,
            this.vipLevel = void 0,
            this.tarVersion = void 0,
            this.serverId = e.serverId,
            this.originId = e.originId,
            this.serverName = e.serverName,
            this.url = e.url,
            this.port = e.port,
            this.ip = e.ip,
            this.version = e.version,
            this.state = e.state,
            this.openTimestamp = e.openTimestamp,
            this.serverZone = e.serverZone,
            this.roleId = e.roleId,
            this.roleName = e.roleName,
            this.roleLevel = e.roleLevel,
            this.vipLevel = e.vipLevel,
            this.tarVersion = e.tarVersion,
            this.zoneFlag = e.zoneFlag,
            this.gameDomain = e.gameDomain
        }
    }
    class N {
    }
    N.LANGUAGE_UPDATE_SET = "LANGUAGE_UPDATE_SET",
    N.ON_SOCEKT_DISCONNECTED = "ON_SOCEKT_DISCONNECTED",
    N.CREATE_ROLE_ERROR = "CREATE_ROLE_ERROR",
    N.LOGIN_NOTICE_ITEM_ADD_TO_STATE = "LOGIN_NOTICE_ITEM_ADD_TO_STATE",
    N.TIP = "TIP",
    N.PLAYER_INFO_MENU_CLICK = "PLAYER_INFO_MENU_CLICK",
    N.WINDOW_CLOSE = "WINDOW_CLOSE",
    N.WINDOW_SHOW = "WINDOW_SHOW",
    N.FIRST_REFRESH_RED_POINT = "FIRST_REFRESH_RED_POINT",
    N.UI_OPEN_FULLSCREEN_OPTIMIZE = "UI_OPEN_FULLSCREEN_OPTIMIZE",
    N.FIGHT_RESULT_WIN_CLOSE = "FIGHT_RESULT_WIN_CLOSE",
    N.REMIND_LINK_CLOSE = "REMIND_LINK_CLOSE",
    N.CLICK_POP_MENU_CHAT_ITEM = "CLICK_POP_MENU_CHAT_ITEM",
    N.CLICK_CHAT_BUBBLE = "CLICK_CHAT_BUBBLE",
    N.DRAGON_ANI_LOAD_COMPLETE = "DRAGON_ANI_LOAD_COMPLETE",
    N.USER_INFO = "USER_INFO",
    N.HERO_EQUIP_CHANGE = "HERO_EQUIP_CHANGE",
    N.HERO_LEVEL_UP_NTF = "HERO_LEVEL_UP_NTF",
    N.HERO_LEVEL_CHANGE_AFTER = "HERO_LEVEL_CHANGE_AFTER",
    N.HERO_LEVEL_UP_NTF_FOR_UI = "HERO_LEVEL_UP_NTF_FOR_UI",
    N.UPDARE_MAP_POS = "UPDARE_MAP_POS",
    N.HERO_HP_CHANGE = "HERO_HP_CHANGE",
    N.HERO_COMBAT_CHANGE = "HERO_COMBAT_CHANGE",
    N.USER_TOTAL_COMBAT_CHANGE = "USER_TOTAL_COMBAT_CHANGE",
    N.USER_TOTAL_ATTRIBUTE_CHANGE = "USER_TOTAL_ATTRIBUTE_CHANGE",
    N.FIRST_RED_POINT = "FIRST_RED_POINT",
    N.FORCE_END_CUR_GUIDE = "FORCE_END_CUR_GUIDE",
    N.CHECK_GUIDE_NOW = "CHECK_GUIDE_NOW",
    N.FUNCTION_CLOSE_SERVE = "FUNCTION_CLOSE_SERVE",
    N.YOFISDK_OVERSEA_BIND_ACCOUNT = "YOFISDK_OVERSEA_BIND_ACCOUNT",
    N.BIND_GIFT_SUCCESS = "BIND_GIFT_SUCCESS",
    N.BIND_GIFT_UINFO = "BIND_GIFT_UINFO",
    N.SDK_LOGIN_SUCCEED = "SDK_LOGIN_SUCCEED";
    class H extends Laya.EventDispatcher {
        constructor() {
            super(),
            this.concurrent = 2
        }
        loopHandler() {
            if (this.eventList.length < 1)
                return;
            let e;
            for (let t = 0; t < this.concurrent; t++)
                this.eventList.length > 0 && (e = this.eventList.shift(),
                super.event(e[0], e[1]))
        }
        on(e, t, i, s) {
            return super.on(e + "", t, i, s)
        }
        event(e, t, i) {
            this.eventList || (this.eventList = [],
            Laya.timer.loop(3, this, this.loopHandler));
            for (let i = 0; i < this.eventList.length; i++)
                if (this.eventList[i][0] == e && this.eventList[i][1] == t)
                    return !1;
            return i ? super.event(e, t) : this.eventList.push([e, t]),
            !0
        }
        off(e, t, i, s) {
            return super.off(e + "", t, i, s)
        }
    }
    H.Singleton = new H;
    let R = H.Singleton;
    class x {
        constructor(e) {
            this.items = [],
            this.clazz = e
        }
        static create(e) {
            return new x(e)
        }
        static get(e) {
            return this.getPoolByCreator(e).get()
        }
        static put(e) {
            let t = Object.getPrototypeOf(e).constructor;
            this.getPoolByCreator(t).put(e)
        }
        static dispose(e) {
            let t = this.getPoolByCreator(e);
            if (t) {
                let e = t.guid;
                t.dispose(),
                delete this.poolMap[e]
            }
        }
        static getPoolByCreator(e) {
            let t = this.getGuid(e)
              , i = this.poolMap[t];
            return i || (this.poolMap[t] = i = new x(e),
            i.guid = t),
            i
        }
        static getGuid(e) {
            let t = Object.getOwnPropertyDescriptor(e, "$_GID");
            if (t)
                return t.value;
            let i = Laya.Utils.getGID();
            return Object.defineProperty(e, "$_GID", {
                value: i
            }),
            i
        }
        get() {
            return this.items.shift() || new this.clazz
        }
        put(e) {
            e && (e.reset && e.reset(),
            this.items.pushOnce(e))
        }
        dispose() {
            this.guid = 0,
            this.items.length = 0
        }
    }
    x.poolMap = {},
    window.pool = x;
    class O extends Laya.Sprite {
        constructor() {
            super(),
            this.mouseEnabled = !1
        }
        onEnable() {
            Laya.stage.on(Laya.Event.RESIZE, this, this.onStageResize)
        }
        onDisable() {
            Laya.stage.off(Laya.Event.RESIZE, this, this.onStageResize)
        }
        onStageResize() {
            this.width = Laya.stage.width,
            this.height = Laya.stage.height,
            this.zOrder = 1e4,
            Laya.stage.addChild(this)
        }
        static AddTipSimple(e, t="#FFFF00", i=3) {
            let s = x.get(P);
            s.type = 1,
            s.position = i,
            s.text = e,
            s.color = t,
            O.singleton.onAddTip([s])
        }
        onAddTip(e) {
            let t = 0
              , i = 0
              , s = 0;
            for (let n = 0; n < e.length; n++)
                1 == e[n].position ? t += 30 : 2 == e[n].position ? i += 30 : 3 == e[n].position && (s += 30);
            for (let e = 0; e < this.numChildren; e++) {
                let n = this.getChildAt(e);
                Laya.Tween.clearTween(n),
                1 == n.position ? n.targetBottom += t : 2 == n.position ? n.targetBottom += i : 3 == n.position && (n.targetBottom += s),
                Laya.Tween.to(n, {
                    bottom: n.targetBottom
                }, 400, Laya.Ease.linearNone)
            }
            t = 0,
            i = 0,
            s = 0;
            for (let n = 0; n < e.length; n++) {
                let a = e[n];
                if (1 != a.type)
                    continue;
                x.put(a);
                let r = x.get(U);
                r.setData(a),
                r.left = NaN,
                r.centerX = NaN;
                let o = a.position;
                r.position = o,
                1 == o ? (r.left = 0,
                r.bottom = 0,
                t += 30,
                r.targetBottom = t) : 2 == o ? (r.centerX = 0,
                r.bottom = 20,
                i += 30,
                r.targetBottom = r.bottom + i) : 3 == o && (r.centerX = 0,
                r.bottom = 350 + (Laya.stage.height - 1136 >> 1),
                s += 30,
                r.targetBottom = r.bottom + s),
                this.addChild(r),
                Laya.Tween.clearTween(r),
                Laya.Tween.to(r, {
                    bottom: r.targetBottom
                }, 300, Laya.Ease.linearNone),
                Laya.timer.once(2e3, null, (function(e) {
                    e.removeSelf(),
                    x.put(e)
                }
                ), [r])
            }
        }
    }
    O.singleton = new O;
    class P {
        constructor() {
            this.type = 1,
            this.text = "",
            this.color = "",
            this.position = 1
        }
    }
    class U extends Laya.Box {
        constructor() {
            super(),
            this.imgBg = void 0,
            this.label = void 0,
            this.htmlLabel = void 0,
            this.position = 1,
            this.targetBottom = 0,
            this.imgBg = new Laya.Image("atlas/ui/startInit/bg_init_view_tips.png"),
            this.imgBg.alpha = .6,
            this.imgBg.sizeGrid = "5,5,5,5",
            this.imgBg.height = 30,
            this.imgBg.x = -5,
            this.addChild(this.imgBg),
            this.label = new Laya.Label,
            this.label.height = 30,
            this.label.valign = "middle",
            this.label.fontSize = 22,
            this.addChild(this.label)
        }
        setData(e) {
            this.label && e && (this.label.text = e.text,
            this.label.color = e.color),
            this.imgBg && (this.imgBg.width = this.label.textField.textWidth + 10)
        }
    }
    window.loginCallback = (e, t) => {
        m.Debug("jsproxy", "Yofi_loginCallback: " + e),
        m.Debug("jsproxy", "Yofi_loginCallback: " + t),
        0 == e ? (ee.loginResponseData.accessToken = t.accessToken,
        ee.loginResponseData.sdktime = t.time || "",
        m.Debug("param.userId: " + t.userId),
        t.userId && (ee.loginResponseData.userId = t.userId),
        M.showLoadingLog(f.getLocalInfoByLangId(1)),
        M.resolve && M.resolve(t.accessToken)) : 1 == e ? O.AddTipSimple(f.getLocalInfoByLangId(2)) : 4 == e ? $.Singleton.windowReload() : M.showLoadingLog(f.getLocalInfoByLangId(3) + e)
    }
    ,
    window.setLanguage = e => {
        m.Debug("jsproxy", "setLanguage from native: " + e),
        I.data.LANGUAGE = f.edition = e,
        R.event(N.LANGUAGE_UPDATE_SET)
    }
    ,
    window.bindAccount = e => {
        M.isBindAccount = 0 == e,
        R.event(N.YOFISDK_OVERSEA_BIND_ACCOUNT)
    }
    ,
    window.switchCallBack = e => {
        m.Debug("jsproxy", "switchCallBack from native: " + e),
        0 != e ? (M.isBindAccount = 0 == e || 2 == e,
        R.event(N.YOFISDK_OVERSEA_BIND_ACCOUNT)) : window.location.reload()
    }
    ,
    window.getVersionCallback = (e, t) => {
        m.Debug("jsproxy", "Yofi_getVersionCallback: code:" + e),
        m.Debug("jsproxy", "Yofi_getVersionCallback: data:" + t),
        M.resolve(t)
    }
    ,
    window.setScreenCallback = (e, t) => {
        0 != e && (t = "2"),
        m.Debug("Yofi_setScreenCallback: data:" + t),
        M.resolve(t)
    }
    ;
    class M {
        static getYofiSdkAccessToken() {
            if (!I.isOnNative())
                return Promise.reject();
            if (I.data.SDK_SHELL)
                return new Promise(( (e, t) => {
                    M.resolve = e,
                    window.YoFiSDK.login(window.loginCallback)
                }
                ));
            var e = {
                value: "CommandAccessToken"
            };
            return new Promise(( (t, i) => {
                if (Laya.Browser.onAndroid) {
                    let i = M.PlatformClass.createClass(this.JSPROXY_CLASS_ANDROID);
                    i && i.callWithBack((function(e) {
                        var i = JSON.parse(e);
                        ee.loginResponseData.accessToken = i.value,
                        t(i.value)
                    }
                    ), "testAsyncCallback", JSON.stringify(e))
                } else
                    m.Debug(this, "window[webkit].messageHandlers.yofi.postMessage"),
                    M.resolve = t,
                    window.webkit.messageHandlers.yofi.postMessage({
                        method: "login",
                        param: "",
                        callback: "loginCallback"
                    }),
                    m.Debug(this, "----end-----")
            }
            ))
        }
        static yofiPay(e) {
            if (I.isOnNative())
                if (I.data.SDK_SHELL)
                    window.YoFiSDK.pay(e);
                else if (Laya.Browser.onAndroid) {
                    e.value = "CommandPay";
                    let t = M.PlatformClass.createClass(this.JSPROXY_CLASS_ANDROID);
                    t && t.callWithBack((function(e) {}
                    ), "testAsyncCallback", JSON.stringify(e))
                } else
                    m.Debug(this, "yofiPay start  amount:" + e.amount),
                    window.webkit.messageHandlers.yofi.postMessage({
                        method: "pay",
                        param: JSON.stringify(e),
                        callback: ""
                    }),
                    m.Debug(this, "yofiPay end")
        }
        static RoleLogin(e) {
            I.data.SDK_SHELL && I.isOnNative() && window.YoFiSDK.roleLogin(e)
        }
        static CreateRoleEnterGame(e) {
            if (I.isOnNative())
                if (I.data.SDK_SHELL)
                    window.YoFiSDK.createRole(e);
                else if (Laya.Browser.onAndroid) {
                    e.value = "CreateRoleEnterGame";
                    let t = M.PlatformClass.createClass(this.JSPROXY_CLASS_ANDROID);
                    t && t.callWithBack((function(e) {}
                    ), "testAsyncCallback", JSON.stringify(e))
                } else
                    m.Debug(this, "submitCreateRole start"),
                    window.webkit.messageHandlers.yofi.postMessage({
                        method: "submitCreateRole",
                        param: JSON.stringify(e),
                        callback: ""
                    }),
                    m.Debug(this, "submitCreateRole end")
        }
        static switchAccount() {
            if (I.isOnNative() && 5 != y.Singleton.getSdkMode() && 10 != y.Singleton.getSdkMode() && 6 != y.Singleton.getSdkMode() && 4 != y.Singleton.getSdkMode())
                if (Laya.Browser.onAndroid) {
                    let e = {
                        value: "switchAccount"
                    }
                      , t = M.PlatformClass.createClass(this.JSPROXY_CLASS_ANDROID);
                    t && t.callWithBack((function(e) {}
                    ), "testAsyncCallback", JSON.stringify(e))
                } else
                    m.Debug(this, "showSDK start"),
                    window.webkit.messageHandlers.yofi.postMessage({
                        method: "showSDK",
                        param: "",
                        callback: "switchCallBack"
                    }),
                    m.Debug(this, "showSDK end")
        }
        static showContact(e, t, i) {
            if (!I.isOnNative())
                return;
            let s = {
                value: "showContact",
                roleId: e,
                roleName: t,
                serverId: i
            };
            if (I.data.SDK_SHELL)
                window.YoFiSDK.showContact(s);
            else if (Laya.Browser.onAndroid) {
                let e = M.PlatformClass.createClass(this.JSPROXY_CLASS_ANDROID);
                e && e.callWithBack((function(e) {}
                ), "testAsyncCallback", JSON.stringify(s))
            } else
                m.Debug(this, "contactService start"),
                window.webkit.messageHandlers.yofi.postMessage({
                    method: "contactService",
                    param: JSON.stringify(s),
                    callback: ""
                }),
                m.Debug(this, "contactService end")
        }
        static showUserCenter() {
            I.isOnNative() && I.data.SDK_SHELL && window.YoFiSDK.showUserCenter()
        }
        static startGame() {
            I.isOnNative() && (m.Debug("JSProxy.startGame -> enter"),
            I.data.SDK_SHELL && window.YoFiSDK && window.YoFiSDK.startGame((e => {
                m.Debug("JSProxy.startGame -> back ", e)
            }
            )))
        }
        static showStartBGImage() {
            I.isOnNative() && window.YoFiSDK && window.YoFiSDK.showStartBGImage()
        }
        static showLoadingLog(e) {
            I.isOnNative() && window.YoFiSDK && window.YoFiSDK.showLoadingLog(e)
        }
        static getVersion() {
            return I.isOnNative() ? new Promise(( (e, t) => {
                window.YoFiSDK.getVersion(( (t, i) => {
                    e(i)
                }
                ))
            }
            )) : Promise.reject()
        }
        static setScreen() {
            return I.isOnNative() ? (m.Debug("JSProxy.setScreen -> enter"),
            new Promise(( (e, t) => {
                window.YoFiSDK.setScreen(( (t, i) => {
                    0 == t ? m.Debug("JSProxy.setScreen -> end" + t, i) : (i = "2",
                    m.Debug("JSProxy.setScreen -> end fail ")),
                    e(i)
                }
                ))
            }
            ))) : Promise.reject()
        }
        static gameStage(e) {
            I.isOnNative() && window.YoFiSDK.gameStage(e)
        }
        static logout(e) {
            I.isOnNative() && window.YoFiSDK && window.YoFiSDK.logout(e)
        }
        static clearCache() {
            I.isOnNative() && (m.Debug("clearCache() 开始清除缓存--------------"),
            window.YoFiSDK.clearCache && window.YoFiSDK.clearCache((e => {
                m.Debug("clearCache() 清除缓存完毕-------------- code: ", e),
                0 == e && $.Singleton.windowReload()
            }
            )))
        }
    }
    M.JSPROXY_CLASS_ANDROID = "demo.JSBridge",
    M.JSPROXY_CLASS_IOS = "JSBridge",
    M.PlatformClass = window.PlatformClass,
    M.isBindAccount = !1;
    class G {
        constructor() {
            this.version = void 0,
            this.reConnectToken = void 0,
            this.serverDiffTs = void 0,
            this.openServerTime = void 0,
            this.serverStage = void 0,
            this.isFirstEnterGame = !1,
            this.isInitCompleteGameScene = !1,
            this.serverUrlPrefix = void 0,
            this.bugUrlPrefix = void 0,
            this.secret = "f190da6f-78ac-479d-b7ff-a5d94a394069",
            this.zoneInfos = [],
            this.serverInfoSelect = void 0,
            this.recentServers = [],
            this.zoneServerInfoList = new w,
            this.deviceCode = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            this.deviceCodeKey = "MLBBDEVICE",
            this.deviceCodeLength = 16
        }
        genDeviceCode(e) {
            let t = "";
            for (let i = 0; i < e; i++)
                t += this.deviceCode[Math.floor(Math.random() * this.deviceCode.length)];
            return t
        }
        getDeviceCode() {
            let e = Laya.LocalStorage.getItem(this.deviceCodeKey);
            return e || (e = this.genDeviceCode(this.deviceCodeLength),
            Laya.LocalStorage.setItem(this.deviceCodeKey, e)),
            e
        }
    }
    var F;
    G.Singleton = new G,
    function(e) {
        e[e.EXP = 1] = "EXP",
        e[e.COIN = 2] = "COIN",
        e[e.DIAMOND = 3] = "DIAMOND",
        e[e.DIAMOND_BIND = 4] = "DIAMOND_BIND",
        e[e.TIP_ITEM_GET = 5] = "TIP_ITEM_GET",
        e[e.TIP_ITEM_COST = 6] = "TIP_ITEM_COST",
        e[e.NO_SERVER = 21] = "NO_SERVER",
        e[e.TIPS_TITLE = 28] = "TIPS_TITLE",
        e[e.TIME_YEAR = 40] = "TIME_YEAR",
        e[e.TIME_MONTH = 41] = "TIME_MONTH",
        e[e.TIME_DAY = 42] = "TIME_DAY",
        e[e.SURE = 74] = "SURE",
        e[e.CANCEL = 75] = "CANCEL",
        e[e.SYSTEM_LOGIN_SERVECHANGE = 108] = "SYSTEM_LOGIN_SERVECHANGE",
        e[e.SERVER_UN_OPEN = 109] = "SERVER_UN_OPEN",
        e[e.SYSTEM_LOGIN_INVALID = 110] = "SYSTEM_LOGIN_INVALID",
        e[e.BTN_LABEL_NEXT = 130] = "BTN_LABEL_NEXT",
        e[e.FIGTH_RESULT_COUNT_DOWN = 159] = "FIGTH_RESULT_COUNT_DOWN",
        e[e.CHANNEL_BARRAGE = 192] = "CHANNEL_BARRAGE",
        e[e.NET_STATUS_CONNECT_FAIL = 315] = "NET_STATUS_CONNECT_FAIL",
        e[e.NET_STATUS_RECONNECT = 316] = "NET_STATUS_RECONNECT",
        e[e.INDULGE = 1061] = "INDULGE",
        e[e.NO_DES = 1149] = "NO_DES",
        e[e.SERVE_SELECT = 1175] = "SERVE_SELECT",
        e[e.SMOOTH = 1176] = "SMOOTH",
        e[e.FIRE_OUT = 1177] = "FIRE_OUT",
        e[e.SAFEGUARD = 1178] = "SAFEGUARD",
        e[e.KNOW = 1180] = "KNOW",
        e[e.GAME_TIP = 1183] = "GAME_TIP",
        e[e.GAME_TIP_LAND = 2481] = "GAME_TIP_LAND",
        e[e.GAME_TIP2_LAND = 2482] = "GAME_TIP2_LAND",
        e[e.LOGIN = 1184] = "LOGIN",
        e[e.SELECT_OU = 1186] = "SELECT_OU",
        e[e.STR_1911 = 1911] = "STR_1911",
        e[e.STR_1912 = 1912] = "STR_1912",
        e[e.STR_1935 = 1935] = "STR_1935",
        e[e.STR_1936 = 1936] = "STR_1936",
        e[e.STR_2003 = 2003] = "STR_2003",
        e[e.STR_2036 = 2036] = "STR_2036",
        e[e.STR_2065 = 2065] = "STR_2065",
        e[e.STR_2066 = 2066] = "STR_2066",
        e[e.STR_2236 = 2236] = "STR_2236",
        e[e.STR_2237 = 2237] = "STR_2237",
        e[e.STR_2238 = 2238] = "STR_2238",
        e[e.STR_2389 = 2389] = "STR_2389",
        e[e.STR_2395 = 2395] = "STR_2395",
        e[e.STR_2402 = 2402] = "STR_2402",
        e[e.STR_2403 = 2403] = "STR_2403",
        e[e.STR_2404 = 2404] = "STR_2404",
        e[e.STR_2458 = 2458] = "STR_2458",
        e[e.STR_2462 = 2462] = "STR_2462",
        e[e.STR_2468 = 2468] = "STR_2468",
        e[e.STR_2480 = 2480] = "STR_2480",
        e[e.STR_3022 = 3022] = "STR_3022",
        e[e.STR_3030 = 3030] = "STR_3030",
        e[e.STR_3031 = 3031] = "STR_3031",
        e[e.STR_3032 = 3032] = "STR_3032",
        e[e.STR_3033 = 3033] = "STR_3033",
        e[e.STR_3034 = 3034] = "STR_3034",
        e[e.STR_3035 = 3035] = "STR_3035",
        e[e.STR_20001 = 20001] = "STR_20001",
        e[e.STR_20002 = 20002] = "STR_20002",
        e[e.STR_100421 = 100421] = "STR_100421",
        e[e.GAME_NAME_INFO = 20003] = "GAME_NAME_INFO",
        e[e.GAME_NAME_INFO_LAND = 20004] = "GAME_NAME_INFO_LAND",
        e[e.GAME_NAME_INFO_YOMA = 20005] = "GAME_NAME_INFO_YOMA",
        e[e.GAME_NAME_INFO_LAND_QQ = 20006] = "GAME_NAME_INFO_LAND_QQ",
        e[e.GAME_AGE_TIPS = 200004] = "GAME_AGE_TIPS",
        e[e.GAME_AGE_TIPS_TITLE = 200005] = "GAME_AGE_TIPS_TITLE",
        e[e.STR_200006 = 200006] = "STR_200006"
    }(F || (F = {}));
    var K = new class {
        constructor() {
            this.isGuest = 0,
            this.isUseCondition = !0,
            this.openID = void 0,
            this.loginKey = void 0,
            this.targetID = 0,
            this.noticeServerAddr = void 0,
            this.banShuopenId = void 0,
            this.banShuchannelUserId = void 0,
            this.banShutoken = void 0,
            this.banShuAppId = void 0,
            this.banShuPackageId = void 0,
            this.age = 18,
            this.openLog = !1
        }
    }
    ;
    window.me = K;
    class V {
        send(e, t, i="text", s=!0, n="post", a=null) {
            return new Promise(( (s, r) => {
                let o = new Laya.HttpRequest;
                o.once(Laya.Event.COMPLETE, null, (function(e) {
                    s(e)
                }
                )),
                o.once(Laya.Event.ERROR, null, (function(e, t=-1) {
                    r(e)
                }
                )),
                o.send(e, t, n, i, a)
            }
            ))
        }
    }
    V.Singleton = new V;
    class W {
        static formatDate(e, t="HH:MM:SS", i=2) {
            let s = e / 86400 >> 0
              , n = this.pad((e / 3600 >> 0) % 24, i)
              , a = this.pad(e % 3600 / 60 >> 0, i)
              , r = this.pad(e % 60, i)
              , o = {
                D: s,
                DD: s,
                h: n,
                hh: n,
                H: n,
                HH: n,
                m: a,
                mm: a,
                M: a,
                MM: a,
                s: r,
                ss: r,
                S: r,
                SS: r
            };
            return t = t.replace(this.timeRegExp, (e => o[e]))
        }
        static getYMDHMS(e) {
            var t = new Date(e)
              , i = t.getFullYear()
              , s = t.getMonth() + 1
              , n = t.getDate()
              , a = t.getHours()
              , r = t.getMinutes()
              , o = t.getSeconds();
            return i + "-" + W.pad(s) + "-" + W.pad(n) + " " + W.pad(a) + ":" + W.pad(r) + ":" + W.pad(o)
        }
        static getYMDHMS3(e) {
            var t = new Date(e)
              , i = t.getMonth() + 1
              , s = t.getDate()
              , n = t.getHours()
              , a = t.getMinutes()
              , r = t.getSeconds();
            return W.pad(i) + "-" + W.pad(s) + " " + W.pad(n) + ":" + W.pad(a) + ":" + W.pad(r)
        }
        static getHMS(e) {
            var t = new Date(e)
              , i = t.getHours()
              , s = t.getMinutes()
              , n = t.getSeconds();
            return W.pad(i) + ":" + W.pad(s) + ":" + W.pad(n)
        }
        static getYMDHMS2(e, t=!0) {
            var i = new Date(e)
              , s = i.getFullYear()
              , n = i.getMonth() + 1
              , a = i.getDate()
              , r = i.getHours()
              , o = i.getMinutes()
              , l = i.getSeconds();
            let h = "";
            return h = t ? s + f.getInfoByLangID(F.TIME_YEAR) + W.pad(n) + f.getInfoByLangID(F.TIME_MONTH) + W.pad(a) + f.getInfoByLangID(F.TIME_DAY) + "" + W.pad(r) + ":" + W.pad(o) + ":" + W.pad(l) : s + f.getInfoByLangID(F.TIME_YEAR) + W.pad(n) + f.getInfoByLangID(F.TIME_MONTH) + W.pad(a) + f.getInfoByLangID(F.TIME_DAY) + "" + W.pad(r) + ":" + W.pad(o),
            h
        }
        static getYMDHMS4(e, t=!0) {
            var i = new Date(e)
              , s = i.getMonth() + 1
              , n = i.getDate()
              , a = i.getHours()
              , r = i.getMinutes()
              , o = i.getSeconds();
            let l = "";
            return l = t ? W.pad(s) + f.getInfoByLangID(F.TIME_MONTH) + W.pad(n) + f.getInfoByLangID(F.TIME_DAY) + "" + W.pad(a) + ":" + W.pad(r) + ":" + W.pad(o) : W.pad(s) + f.getInfoByLangID(F.TIME_MONTH) + W.pad(n) + f.getInfoByLangID(F.TIME_DAY) + "" + W.pad(a) + ":" + W.pad(r),
            l
        }
        static getMDH(e) {
            var t = new Date(e)
              , i = t.getMonth() + 1
              , s = t.getDate();
            return f.getInfoByLangID(F.STR_2003).format(W.pad(i), W.pad(s))
        }
        static getShowTimeDHMString(e) {
            let t = "";
            return e > 86400 ? t = this.formatDate(e, "Dd", 1) : e < 3600 ? (e < 60 && (e = 60),
            t = this.formatDate(e, "Mmin", 1)) : t = this.formatDate(e, "HHh", 1),
            t
        }
        static pad(e, t=2) {
            let i = String(e);
            for (; i.length < t; )
                i = "0" + i;
            return i
        }
    }
    W.defaultDateFormat = "yyyy-mm-dd HH:MM:ss",
    W.timeRegExp = /D{1,4}|l{1,4}|yy(?:yy)?|([HMSD])\1?|[LloSZWN]/g;
    class Y extends Laya.Sprite {
        constructor() {
            super(),
            this.blockBg = new Laya.Image("atlas/ui/startInit/bg_init_mask_black.png"),
            this.blockBg.size(Laya.stage.width, Laya.stage.height),
            this.blockBg.alpha = 0,
            this.addChild(this.blockBg),
            this.blockBg.mouseEnabled = this.mouseEnabled = !0,
            this.img = new Laya.Image("atlas/ui/startInit/img_init_loading.png"),
            this.img.size(85, 85),
            this.img.pivot(42.5, 42.5),
            this.img.visible = !1,
            this.addChild(this.img),
            this.img.pos(Laya.stage.width >> 1, Laya.stage.height >> 1),
            this.img.mouseEnabled = !1
        }
        show() {
            this.img.visible = !1,
            Laya.timer.once(100, this, this.showAnimation)
        }
        showAnimation() {
            this.img.visible = !0,
            Laya.timer.loop(1, this, this.playAnimation)
        }
        hide() {
            Laya.timer.clear(this, this.playAnimation),
            Laya.timer.clearAll(this),
            this.img.visible = !1
        }
        playAnimation() {
            this.img.rotation += 3
        }
    }
    class z {
        constructor() {
            this.isInitEvent = !1,
            this.isFocus = !0,
            I.data.onWx && (laya.wx.mini.MiniAdpter.window.wx.onShow(this.onShowWX),
            laya.wx.mini.MiniAdpter.window.wx.onHide(this.onHideWX),
            Laya.SoundManager.autoStopMusic = !1)
        }
        static get Singleton() {
            return z._Singleton || (z._Singleton = new z),
            z._Singleton
        }
        onShowWX() {
            Laya.SoundManager.muted = !1
        }
        onHideWX() {
            Laya.SoundManager.muted = !0
        }
        initEvents() {
            !this.isInitEvent && Laya.stage && (this.isInitEvent = !0,
            Laya.SoundManager.autoStopMusic = !1,
            Laya.stage.on(Laya.Event.BLUR, this, this._stageOnBlur),
            Laya.stage.on(Laya.Event.FOCUS, this, this._stageOnFocus),
            Laya.stage.on(Laya.Event.VISIBILITY_CHANGE, this, this._visibilityChange))
        }
        _visibilityChange() {
            Laya.stage.isVisibility ? this._stageOnFocus() : this._stageOnBlur()
        }
        _stageOnBlur() {
            z.Singleton.isFocus = !1,
            Laya.Browser.onAndroid ? Laya.SoundManager.setMusicVolume(0) : this.musicChannel && (this.musicChannel.stop(),
            this.musicChannel.offAll(),
            this.musicChannel = null),
            Laya.stage.once(Laya.Event.MOUSE_DOWN, this, this._stageOnFocus)
        }
        _stageOnFocus() {
            z.Singleton.isFocus = !0,
            this.checkMutedState()
        }
        checkMutedState() {
            let e = "1" == o.get(o.CLOSE_MUSIC);
            Laya.Browser.onAndroid ? Laya.SoundManager.setMusicVolume(e ? 0 : 1) : (m.Debug("手机音乐——> 关闭:" + e),
            e && this.musicChannel && (this.musicChannel.stop(),
            this.musicChannel.offAll(),
            this.musicChannel = null)),
            e || this.playMusic(this.musicName, !0)
        }
        playMusic(e, t=!0) {}
        playSound(e, t=!1) {
            if (!e)
                return;
            if (!z.Singleton.isFocus)
                return;
            if ("1" == o.get(o.CLOSE_SOUND))
                return;
            let i = t ? 0 : 1
              , s = "mp3";
            Laya.Render.isConchApp && (s = "ogg"),
            Laya.SoundManager.playSound(`res/audio/sound/${s}/${e}.${s}`, i)
        }
        init() {
            this.initEvents(),
            this.checkMutedState()
        }
    }
    class Q {
        btnIsDisabled(e) {
            let t = e;
            if (t && (t.disabled || t.gray))
                return !0;
            let i = e;
            return !(!i || !i.disabled && !i.gray)
        }
        play(e) {
            "btnEnterGame" == e.name ? z.Singleton.playSound("cgsys02") : this.btnIsDisabled(e) ? z.Singleton.playSound("cgsys04") : z.Singleton.playSound("cgsys00")
        }
        stop() {
            R.offAllCaller(this)
        }
        playForWin(e) {
            e ? z.Singleton.playSound("cgsys05") : z.Singleton.playSound("cgsys06")
        }
    }
    Q.Singleton = new Q;
    class q extends C.scene.startCommon.PopupViewUI {
        constructor() {
            super(),
            this.optionData = void 0,
            this.zOrder = 9999
        }
        onShow() {
            R.on(N.LANGUAGE_UPDATE_SET, this, this.onUpdateLanguage),
            this.onStageResize(),
            this.onUpdateLanguage()
        }
        onHide() {
            this.quxiaoBtn.clickHandler && this.quxiaoBtn.clickHandler.recover(),
            this.quxiaoBtn.clickHandler = void 0,
            this.querenBtn.clickHandler && this.querenBtn.clickHandler.recover(),
            this.querenBtn.clickHandler = void 0,
            this.quxiaoBtn.visible = !0,
            this.querenBtn.visible = !0,
            this.closeBg.off(Laya.Event.CLICK, this, this.onClickClose),
            Laya.timer.clearAll(this),
            R.offAllCaller(this)
        }
        onStageResize() {
            this.width = Laya.stage.width,
            this.height = Laya.stage.height
        }
        init(e) {
            this.optionData = e
        }
        onUpdateLanguage() {
            this.quxiaoBtn.clickHandler = Laya.Handler.create(this, this.onClickCanel, null, !1),
            this.querenBtn.clickHandler = Laya.Handler.create(this, this.onClickSure, null, !1),
            this.closeBg.on(Laya.Event.CLICK, this, this.onClickClose),
            this.closeTipLb.text = f.getInfoByLangID(F.STR_2036),
            this.querenBtn.label = f.getInfoByLangID(F.SURE),
            this.quxiaoBtn.label = f.getInfoByLangID(F.CANCEL),
            this.closeTipLb.visible = !(this.optionData && this.optionData.hideCloseBg),
            this.optionData.title ? this.titleLb.text = this.optionData.title : this.titleLb.text = f.getInfoByLangID(F.TIPS_TITLE),
            this.setSureButtonUI(),
            this.setCancelButtonUI(),
            this.setTipLableUI(),
            this.setTimeLabelUI(),
            this.quxiaoBtn.visible && this.querenBtn.visible ? (this.quxiaoBtn.x = 0,
            this.querenBtn.x = 246) : this.quxiaoBtn.visible ? this.quxiaoBtn.x = 123 : this.querenBtn.x = 123
        }
        onClickSure() {
            this.optionData ? (this.optionData.sureHandler && (this.optionData.sureHandler.runWith(this.optionData.arg),
            this.optionData.sureHandler && this.optionData.sureHandler.recover(),
            this.optionData.sureHandler = void 0),
            this.optionData.cancelHandler && (this.optionData.cancelHandler.recover(),
            this.optionData.cancelHandler = void 0)) : $.Singleton.windowReload(),
            this.optionData = void 0,
            this.removeSelf()
        }
        onClickClose() {
            this.optionData && this.optionData.hideCloseBg || this.onClickCanel()
        }
        onClickCanel() {
            this.optionData ? (this.optionData.cancelHandler && (this.optionData.cancelHandler.run(),
            this.optionData.cancelHandler && this.optionData.cancelHandler.recover(),
            this.optionData.cancelHandler = void 0),
            this.optionData.sureHandler && (this.optionData.sureHandler.recover(),
            this.optionData.sureHandler = void 0)) : $.Singleton.windowReload(),
            this.optionData = void 0,
            this.removeSelf()
        }
        setSureButtonUI() {
            this.optionData.cancelLabel ? this.quxiaoBtn.label = this.optionData.cancelLabel : this.quxiaoBtn.label = f.getInfoByLangID(F.CANCEL),
            this.optionData.sureLabel ? this.querenBtn.label = this.optionData.sureLabel : this.querenBtn.label = f.getInfoByLangID(F.SURE),
            null == this.optionData.showSureBtn || null == this.optionData.showSureBtn ? this.querenBtn.visible = !0 : this.querenBtn.visible = this.optionData.showSureBtn,
            this.querenBtn.gray = !1,
            this.querenBtn.mouseEnabled = !0
        }
        setCancelButtonUI() {
            this.optionData.cancelLabel ? this.quxiaoBtn.label = this.optionData.cancelLabel : this.quxiaoBtn.label = f.getInfoByLangID(F.CANCEL),
            null == this.optionData.showCancelBtn || null == this.optionData.showCancelBtn ? this.quxiaoBtn.visible = !0 : this.quxiaoBtn.visible = this.optionData.showCancelBtn
        }
        setTipLableUI() {
            this.contentHTML.style.width = 420,
            this.contentHTML.width = 420,
            this.contentHTML.style.font = "Arial",
            this.contentHTML.style.color = "#F1F1F3",
            this.contentHTML.style.fontSize = 20,
            this.contentHTML.style.leading = 5,
            this.contentHTML.style.valign = "middle",
            this.contentHTML.style.align = "center",
            this.optionData.color ? this.contentHTML.style.color = this.optionData.color : this.contentHTML.style.color = "#574F19",
            this.contentHTML.innerHTML = this.optionData.content,
            this.contentHTML.style.width = this.contentHTML.contextWidth + 20,
            this.contentHTML.width = this.contentHTML.contextWidth,
            this.contentHTML.style.height = this.contentHTML.contextHeight,
            this.contentHTML.height = this.contentHTML.contextHeight,
            this.contentHTML.x = .5 * (this.layerBg.width - this.contentHTML.width),
            this.contentHTML.y = 60 + .5 * (200 - this.contentHTML.height)
        }
        setTimeTextUI(e) {
            this.timeLb.text = f.getInfoByLangID(F.FIGTH_RESULT_COUNT_DOWN).format(e)
        }
        setTimeLabelUI() {
            if (this.timeLb.visible = !1,
            this.timeLb.x = 223,
            this.timeLb.y = 397,
            this.optionData.autoSureClose) {
                this.timeLb.visible = !0;
                let e = 10;
                this.timeOverDealSureCancel(e, !0)
            } else
                this.optionData.timeType && (this.timeLb.visible = !0,
                this.timeLb.x = 317,
                this.timeLb.y = 331,
                this.DelayShowSureButton())
        }
        timeOverDealSureCancel(e, t=!0) {
            this.setTimeTextUI(e),
            Laya.timer.loop(1e3, this, ( () => {
                --e <= 0 ? (this.timeLb.visible = !1,
                Laya.timer.clearAll(this),
                t ? this.onClickSure() : this.onClickCanel()) : this.setTimeTextUI(e)
            }
            ))
        }
        DelayShowSureButton() {
            this.querenBtn.gray = !0,
            this.querenBtn.mouseEnabled = !1;
            let e = 10;
            this.setTimeTextUI(e),
            Laya.timer.loop(1e3, this, ( () => {
                e--,
                e <= 0 ? (this.timeLb.visible = !1,
                this.querenBtn.gray = !1,
                this.querenBtn.mouseEnabled = !0,
                Laya.timer.clearAll(this)) : this.setTimeTextUI(e)
            }
            ))
        }
    }
    let X = new class {
        constructor() {
            this.mainUIBgShowCount = 0,
            this.uiloading = !1,
            this.serverLoading = !1,
            this.logLabel = void 0,
            this.permissionLabel = void 0,
            this.uiList = [],
            this.blockBgs = [],
            this.mainUIBgs = [],
            this.catcheDic = new w,
            R.on(N.ON_SOCEKT_DISCONNECTED, this, this.onSocketDisconnected)
        }
        setGameScene() {
            this.loadingviewLayer = new Laya.Sprite,
            this.loadingviewLayer.mouseEnabled = !0,
            this.loadingviewLayer.mouseThrough = !1,
            this.maskLayer = new Laya.Sprite,
            this.maskLayer.graphics.clear(),
            this.maskLayer.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "0x000000"),
            this.maskLayer.size(Laya.stage.width, Laya.stage.height),
            this.maskLayer.alpha = .7,
            this.maskLayer.visible = !1,
            this.maskLayer.mouseEnabled = !0,
            this.uiContainer.addChild(this.loadingviewLayer),
            this.uiContainer.addChild(this.maskLayer),
            this.adaptDevice()
        }
        showLoadingLog(e) {
            this.logLabel || (this.logLabel = new Laya.Label,
            this.logLabel.font = "Arial",
            this.logLabel.fontSize = 28,
            this.logLabel.color = "#F1F1F1",
            this.logLabel.width = 350,
            this.logLabel.wordWrap = !0,
            this.logLabel.mouseEnabled = !1,
            this.logLabel.align = "center",
            this.logLabel.valign = "middle",
            this.permissionLabel = new Laya.Label,
            this.permissionLabel.font = "Arial",
            this.permissionLabel.fontSize = 16,
            this.permissionLabel.color = "#F1F1F1",
            this.permissionLabel.width = Laya.stage.width,
            this.permissionLabel.height = 140,
            this.permissionLabel.wordWrap = !0,
            this.permissionLabel.mouseEnabled = !1,
            this.permissionLabel.align = "center",
            this.permissionLabel.valign = "bottom",
            this.permissionLabel.bottom = 30,
            this.permissionLabel.text = f.getInfoByLangID(F.GAME_NAME_INFO_LAND_QQ),
            E.getLandFlag() ? (this.logLabel.x = (Laya.stage.width - this.logLabel.width) / 2,
            this.logLabel.y = Laya.stage.height - 140,
            80006 == I.data.CHANNEL_ID && Laya.stage.addChild(this.permissionLabel)) : (this.logLabel.x = (Laya.stage.width - this.logLabel.width) / 2,
            this.logLabel.y = Laya.stage.height - 180),
            Laya.stage.addChild(this.logLabel)),
            this.logLabel.visible = !0,
            this.logLabel.text = e
        }
        hideLoadingLog() {
            this.logLabel.visible = !1,
            this.permissionLabel.visible = !1
        }
        adaptDevice() {}
        showAlert(e) {
            return new Promise(( (t, i) => {
                if (!this.alertView)
                    return this.create(q).then((e => {
                        Laya.timer.callLater(this, ( () => {
                            this.alertView = e,
                            this.alertView.height = Laya.stage.height,
                            s(e)
                        }
                        ))
                    }
                    ));
                function s(i) {
                    i.init(e),
                    e.container ? (e.container.addChild(i),
                    R.event(N.WINDOW_SHOW, [i]),
                    Q.Singleton.playForWin(!0)) : (Laya.stage.addChild(i),
                    R.event(N.WINDOW_SHOW, [i]),
                    Q.Singleton.playForWin(!0)),
                    t()
                }
                s(this.alertView)
            }
            ))
        }
        create(e, t) {
            let i = this;
            return new Promise((s => {
                i.showUiLoading(),
                new e(t).resolve = s
            }
            )).then((e => (this.hideUiLoading(),
            e)))
        }
        setWinBg() {
            let e;
            for (let t = this.uiList.length - 1; t >= 0; t--) {
                let i = this.uiList[t];
                if (i.isFullscreen && i.visible) {
                    e = i;
                    break
                }
            }
            let t = !1;
            for (let e = this.uiList.length - 1; e >= 0; e--) {
                let i = this.uiList[e];
                if (!i.isFullscreen && i.visible) {
                    t = !0,
                    i.addBg();
                    break
                }
            }
            t || (this.maskLayer.visible = !1)
        }
        showLoadingView() {
            $.Singleton.isRelogining || (this.loadingView || (this.loadingView = new Y),
            null == this.loadingView.parent && (this.loadingviewLayer ? this.loadingviewLayer.addChild(this.loadingView) : Laya.stage.addChild(this.loadingView),
            this.loadingView.show()))
        }
        hideLoadingView() {
            0 == this.serverLoading && 0 == this.uiloading && this.loadingView && (this.loadingView.hide(),
            this.loadingView.removeSelf())
        }
        showServerLoading() {
            this.loadingviewLayer && !this.serverLoading && (this.serverLoading = !0,
            this.showLoadingView())
        }
        hideServerLoading() {
            this.loadingviewLayer && this.serverLoading && (this.serverLoading = !1,
            this.hideLoadingView())
        }
        showUiLoading() {
            this.uiloading || (this.uiloading = !0,
            this.showLoadingView())
        }
        hideUiLoading() {
            this.uiloading && (this.uiloading = !1,
            this.hideLoadingView())
        }
        hasAlertOnShow() {
            return !!(this.alertView && this.alertView.parent && this.alertView.visible)
        }
        onSocketDisconnected() {
            this.showLoadingLog(f.getLocalInfoByLangId(9))
        }
    }
    ;
    window.ui = X;
    class J {
        get setMap() {
            if (!this._setMap) {
                let e = Laya.LocalStorage.getItem(J.LOCAL_SET);
                this._setMap = e ? JSON.parse(e) : {}
            }
            return this._setMap
        }
        getSetValue(e) {
            return this.setMap[e]
        }
        setSetValue(e, t) {
            this.setMap[e] = t,
            Laya.LocalStorage.setItem(J.LOCAL_SET, JSON.stringify(this.setMap))
        }
    }
    var j;
    J.Singleton = new J,
    J.LOCAL_SET = "LOCAL_SET",
    function(e) {
        e.Compatible = "Compatible"
    }(j || (j = {}));
    class Z {
        constructor() {
            this.RED = "#FF0000",
            this.WHITE = "#FFFFFF",
            this.GREEN = "#00FF00"
        }
    }
    Z.Singleton = new Z;
    Z.Singleton;
    class $ {
        constructor() {
            this.isBeingKicked = !1,
            this.isRelogining = !1,
            this.httpErrorCur = 0,
            this.httpErrorMax = 5
        }
        loginYoFiSdk() {
            I.isOnNative() ? (this.reqStateHttp(i.SDK_LOGIN_CALL_ON_NATIVE),
            X.showLoadingLog(f.getLocalInfoByLangId(6)),
            this.nativeGetAccessToken()) : ee.init()
        }
        nativeGetAccessToken() {
            M.getYofiSdkAccessToken().then(( () => {
                m.Debug("acquire accessToken success : " + ee.loginResponseData.accessToken),
                R.event(N.SDK_LOGIN_SUCCEED, null, !0),
                this.quickLogin()
            }
            )).catch((e => {
                X.showLoadingLog(f.getLocalInfoByLangId(8)),
                X.showAlert({
                    content: f.getLocalInfoByLangId(19),
                    sureHandler: Laya.Handler.create(this, ( () => {
                        this.nativeGetAccessToken()
                    }
                    )),
                    hideCloseBg: !0,
                    showCancelBtn: !1
                })
            }
            ))
        }
        reqLoginHttp(e="test111") {
            let t = {};
            return t.ptid = y.Singleton.getSdkMode(),
            t.channel = I.data.CHANNEL_ID || 0,
            "true" == Laya.Utils.getQueryString("isgm") ? (t.openId = Laya.Utils.getQueryString("openid"),
            t.token = Laya.Utils.getQueryString("token"),
            t.channel_userid = Laya.Utils.getQueryString("channel_userid"),
            t.package_id = "-1") : I.data.YOFISDK || I.data.YOFISDKWEB ? 6 == t.ptid || 4 == t.ptid || 9 == t.ptid || 8 == t.ptid ? (t.token = ee.loginResponseData.accessToken,
            t.channel_userid = ee.loginResponseData.userId,
            t.time = ee.loginResponseData.sdktime || "") : (t.app_id = "1",
            t.token = ee.loginResponseData.accessToken) : L.isH5WebSDK() ? L.isJuheSdk() ? (t.token = h.Singleton.accessToken,
            t.channel_userid = h.Singleton.userId,
            t.channel = I.data.CHANNEL_ID,
            t.time = "") : t.token = L.Singleton.getLoginToken() : (t.openId = e,
            t.channel_userid = e),
            this.reqStateHttp(i.HTTP_LOGIN_REQ),
            this.reqGooglePcState(s.LOGIN_SDK),
            m.Debug("httpLoginObj:" + JSON.stringify(t)),
            V.Singleton.send(I.data.HTTP_LOGIN_ADDR + "/userlogin", JSON.stringify(t), "json").then((e => e.result && 0 != e.result ? (6 == e.result ? O.AddTipSimple(f.getInfoByLangID(F.STR_2468).format(W.getYMDHMS(1e3 * e.ts))) : 1 == e.result || O.AddTipSimple(f.getInfoByLangID(F.STR_2237)),
            Promise.reject(e.result)) : (K.isGuest = e.isTourist,
            K.openID = e.openId,
            K.loginKey = e.loginKey,
            K.noticeServerAddr = e.noticeServerAddr,
            K.openLog = e.openLog,
            o.set(o.LAST_ACCOUNT_NAME, K.openID),
            e)))
        }
        reqStateHttp(e) {
            if (y.Singleton.getSdkMode() <= 0)
                return Promise.resolve();
            window.isIOS && window.isIOS() && M.gameStage(e);
            let t = y.Singleton.getSdkMode()
              , i = "device=" + G.Singleton.getDeviceCode() + "&action_id=" + e + "&ptid=" + t;
            return V.Singleton.send(I.data.ACTION_LOG_URL, i).then((e => e))
        }
        reqGooglePcState(e) {
            if (I.isGooglePc() && window.gtag)
                switch (e) {
                case s.FIRST_OPEN:
                    return void (o.get(o.IS_FIRST_OPEN) || (o.set(o.IS_FIRST_OPEN, "1"),
                    window.gtag("event", "first_open")));
                case s.SIGIN_UP:
                    return void window.gtag("event", "sign_up");
                case s.LOGIN_SDK:
                    return void window.gtag("event", "login");
                default:
                    return
                }
        }
        getLanguageString() {
            if (I.data.CENTER_FLAG)
                return I.data.CENTER_FLAG;
            if (5 == y.Singleton.getSdkMode() || 10 == y.Singleton.getSdkMode() || 6 == y.Singleton.getSdkMode())
                return "mlbb_newfg";
            switch (f.edition) {
            case 1:
                return "zh_cn";
            case 2:
            default:
                return "zh";
            case 3:
                return "en";
            case 4:
                return "vi";
            case 5:
                return "th"
            }
        }
        processServerList(e, t) {
            e ? (m.Debug(this, e),
            G.Singleton.serverUrlPrefix = e,
            G.Singleton.bugUrlPrefix = t,
            this.httpErrorCur = 0,
            this.getServerList()) : O.AddTipSimple(f.getInfoByLangID(F.STR_2238))
        }
        getServerList() {
            let e = G.Singleton.serverUrlPrefix + "/api/v1/server/zone/list?centerFlag=" + this.getLanguageString() + "&version=" + I.data.VERSION;
            window.webkit ? e += "&os=2" : e += "&os=1",
            this.reqStateHttp(i.HTTP_SERVER_ZONE_LIST_REQ),
            X.showLoadingLog(f.getLocalInfoByLangId(10)),
            V.Singleton.send(e).then((e => {
                let t = JSON.parse(e);
                m.Debug(this, t),
                0 == t.code ? 0 != t.data.length ? (G.Singleton.zoneInfos = t.data,
                this.httpErrorCur = 0,
                this.getRoleList()) : O.AddTipSimple(f.getInfoByLangID(F.STR_2389)) : O.AddTipSimple(t.msg)
            }
            )).catch((e => {
                this.httpErrorCur++,
                this.httpErrorCur >= this.httpErrorMax ? (X.showLoadingLog(f.getLocalInfoByLangId(11)),
                X.showAlert({
                    content: f.getLocalInfoByLangId(11),
                    sureHandler: Laya.Handler.create(this, ( () => {
                        this.httpErrorCur = 0,
                        this.getServerList()
                    }
                    )),
                    hideCloseBg: !0,
                    showCancelBtn: !1
                })) : this.getServerList()
            }
            ))
        }
        getRoleList() {
            let e = G.Singleton.serverUrlPrefix + "/api/v1/getRoleList?centerFlag=" + this.getLanguageString() + "&uuid=" + K.openID + "&version=" + I.data.VERSION;
            window.webkit ? e += "&os=2" : e += "&os=1",
            this.reqStateHttp(i.HTTP_HISTORY_SERVER_LIST_REQ),
            X.showLoadingLog(f.getLocalInfoByLangId(12)),
            V.Singleton.send(e).then((e => {
                let t = JSON.parse(e);
                if (m.Debug(this, t),
                0 == t.code) {
                    for (let e of t.data)
                        G.Singleton.recentServers.push(new b(e));
                    this.httpErrorCur = 0,
                    this.getFirstZoneServerInfo()
                } else
                    O.AddTipSimple(t.msg)
            }
            )).catch((e => {
                this.httpErrorCur++,
                this.httpErrorCur >= this.httpErrorMax ? (X.showLoadingLog(f.getLocalInfoByLangId(13)),
                X.showAlert({
                    content: f.getLocalInfoByLangId(13),
                    sureHandler: Laya.Handler.create(this, ( () => {
                        this.httpErrorCur = 0,
                        this.getRoleList()
                    }
                    )),
                    hideCloseBg: !0,
                    showCancelBtn: !1
                })) : this.getRoleList()
            }
            ))
        }
        getFirstZoneServerInfo() {
            let e = G.Singleton.zoneInfos
              , t = []
              , i = [];
            e.forEach((e => {
                "fugu" == e.zoneFlag ? i.push(e) : t.push(e)
            }
            ));
            let s = [];
            t.length > 0 && s.push(this.getZoneServerInfo(t.shift().zoneId)),
            i.length > 0 && s.push(this.getZoneServerInfo(i.shift().zoneId)),
            Promise.all(s).then(( () => {
                if (window.wanOpenSdk && Laya.Utils.getQueryString("skey")) {
                    let e = parseInt(Laya.Utils.getQueryString("skey")) + 22e4;
                    this.enterGameByServerId(e)
                } else
                    L.isJuheSdk() ? h.Singleton.serverId ? this.enterGameByServerId(parseInt(h.Singleton.serverId)) : h.Singleton.newUser ? (G.Singleton.serverInfoSelect = G.Singleton.zoneServerInfoList.getN(G.Singleton.zoneInfos[0].zoneId)[0],
                    this.skipServerListViewAndEnterGame()) : this.openServerListView() : this.openServerListView()
            }
            )).catch((e => {
                this.httpErrorCur++,
                this.httpErrorCur >= this.httpErrorMax ? X.showAlert({
                    content: "获取当前区服列表失败",
                    sureHandler: Laya.Handler.create(this, ( () => {
                        this.httpErrorCur = 0,
                        this.getFirstZoneServerInfo()
                    }
                    )),
                    hideCloseBg: !0,
                    showCancelBtn: !1
                }) : this.getFirstZoneServerInfo()
            }
            ))
        }
        enterGameByServerId(e) {
            let t = e
              , i = !1;
            G.Singleton.zoneInfos.forEach((e => {
                G.Singleton.zoneServerInfoList.getN(e.zoneId).forEach((e => {
                    if (e.serverId == t)
                        return G.Singleton.serverInfoSelect = e,
                        i = !0,
                        void this.skipServerListViewAndEnterGame()
                }
                ))
            }
            )),
            i || this.openServerListView()
        }
        skipServerListViewAndEnterGame() {
            let e = G.Singleton.serverInfoSelect;
            e ? 0 != e.state ? e.ip ? 4 != e.state ? 3 == e.state ? this.queryServerStatusIsOk().then((t => {
                t || this.queryIsHasRoleInServer(e.serverId) ? (o.set(o.LAST_SERVER_IDX, JSON.stringify(e)),
                this.reqStateHttp(i.GOTO_GAME_HTML),
                this.openGameUrl()) : X.showAlert({
                    content: f.getInfoByLangID(F.STR_2458),
                    showCancelBtn: !1,
                    hideCloseBg: !0,
                    sureHandler: Laya.Handler.create(this, this.openServerListView)
                })
            }
            )).catch((e => {
                X.showAlert({
                    content: f.getLocalInfoByLangId(20),
                    showCancelBtn: !1
                })
            }
            )) : (o.set(o.LAST_SERVER_IDX, JSON.stringify(e)),
            this.reqStateHttp(i.GOTO_GAME_HTML),
            this.openGameUrl()) : X.showAlert({
                content: f.getInfoByLangID(F.SYSTEM_LOGIN_INVALID),
                showCancelBtn: !1,
                color: Z.Singleton.WHITE,
                hideCloseBg: !0,
                sureHandler: Laya.Handler.create(this, this.openServerListView)
            }) : X.showAlert({
                content: f.getInfoByLangID(F.SERVER_UN_OPEN),
                showCancelBtn: !1,
                color: Z.Singleton.WHITE,
                hideCloseBg: !0,
                sureHandler: Laya.Handler.create(this, this.openServerListView)
            }) : X.showAlert({
                content: f.getInfoByLangID(F.STR_2395).format(W.getYMDHMS2(1e3 * e.openTimestamp)),
                showCancelBtn: !1,
                color: Z.Singleton.WHITE,
                hideCloseBg: !0,
                sureHandler: Laya.Handler.create(this, this.openServerListView)
            }) : X.showAlert({
                content: f.getInfoByLangID(F.SYSTEM_LOGIN_SERVECHANGE),
                showCancelBtn: !1,
                color: Z.Singleton.WHITE,
                hideCloseBg: !0,
                sureHandler: Laya.Handler.create(this, this.openServerListView)
            })
        }
        openServerListView() {
            this.reqStateHttp(i.OPEN_SERVER_LIST_VIEW),
            X.showLoadingLog(f.getLocalInfoByLangId(14)),
            Laya.Scene.open("scene/startInit/InitLayerServer.scene", !0)
        }
        getZoneServerInfo(e) {
            this.reqStateHttp(i.HTTP_CURRENT_ZONE_SERVER_LIST_REQ);
            let t = G.Singleton.serverUrlPrefix + "/api/v1/server/query/list";
            return t += "?centerFlag=" + this.getLanguageString(),
            window.webkit ? t += "&os=2" : t += "&os=1",
            t += "&version=" + I.data.VERSION,
            t += "&zoneId=" + e,
            V.Singleton.send(t).then((t => {
                let i = JSON.parse(t);
                if (m.Debug(this, e + "大区列表: " + i),
                0 != i.code)
                    return void O.AddTipSimple(i.msg);
                let s = [];
                for (let e of i.data)
                    s.push(new b(e));
                G.Singleton.zoneServerInfoList.setN(e, s)
            }
            ))
        }
        quickLogin() {
            X.showLoadingLog(f.getLocalInfoByLangId(15)),
            this.httpErrorCur = 0,
            this.verificationLogin()
        }
        verificationLogin() {
            this.reqLoginHttp().then((e => {
                this.processServerList(e.listServerAddr, e.bugServerAddr)
            }
            )).catch((e => {
                if (e && 1 == e)
                    return X.showAlert({
                        content: f.getInfoByLangID(F.STR_3030),
                        sureHandler: Laya.Handler.create(this, ( () => {
                            this.windowReload()
                        }
                        )),
                        hideCloseBg: !0,
                        showCancelBtn: !1
                    }),
                    void o.remove(o.RECENTLY_SDK_TOKEN);
                this.httpErrorCur++,
                this.httpErrorCur >= this.httpErrorMax ? (X.showLoadingLog(f.getLocalInfoByLangId(16)),
                X.showAlert({
                    content: f.getInfoByLangID(F.STR_100421),
                    sureHandler: Laya.Handler.create(this, ( () => {
                        this.httpErrorCur = 0,
                        this.windowReload()
                    }
                    )),
                    hideCloseBg: !0,
                    showCancelBtn: !1
                })) : this.verificationLogin()
            }
            ))
        }
        windowReload() {
            M.showStartBGImage(),
            window.location.reload()
        }
        queryIsHasRoleInServer(e) {
            for (let t of G.Singleton.recentServers)
                if (t.serverId == e)
                    return !0;
            return !1
        }
        queryServerStatusIsOk() {
            let e = G.Singleton.serverUrlPrefix + "/api/v1/server/getStatus";
            e += "?centerFlag=" + this.getLanguageString(),
            window.webkit ? e += "&os=2" : e += "&os=1",
            e += "&version=" + I.data.VERSION;
            let t = G.Singleton.serverInfoSelect.serverId;
            return e += "&serverId=" + t,
            V.Singleton.send(e).then((e => {
                let i = JSON.parse(e);
                return m.Debug(this, t + "区状态: " + JSON.stringify(i)),
                0 != i.code ? (O.AddTipSimple(i.msg),
                Promise.reject(null)) : 0 == i.data.onlineStatus
            }
            ))
        }
        openGameUrl() {
            let e = G.Singleton.serverInfoSelect.tarVersion;
            e ? this.openVersionGame(e) : (X.showLoadingLog(f.getLocalInfoByLangId(17)),
            this.httpErrorCur = 0,
            this.openNewestGameUrl())
        }
        openNewestGameUrl() {
            this.getNewestVersion().then((e => {
                let t = G.Singleton.serverInfoSelect
                  , i = t.tarVersion = "fugu" == t.zoneFlag ? e.fuguGameVersion : e.gameVersion;
                this.openVersionGame(i)
            }
            )).catch((e => {
                this.httpErrorCur++,
                this.httpErrorCur >= this.httpErrorMax ? (X.showLoadingLog(f.getLocalInfoByLangId(18)),
                X.showAlert({
                    content: f.getLocalInfoByLangId(18),
                    sureHandler: Laya.Handler.create(this, ( () => {
                        this.httpErrorCur = 0,
                        this.openNewestGameUrl()
                    }
                    )),
                    hideCloseBg: !0,
                    showCancelBtn: !1
                })) : this.openNewestGameUrl()
            }
            ))
        }
        getNewestVersion() {
            let e = G.Singleton.serverUrlPrefix + "/api/v1/center/getVersion";
            return e += "?centerFlag=" + this.getLanguageString(),
            V.Singleton.send(e).then((e => {
                let t = JSON.parse(e);
                if (m.Debug(this, "游戏最新版本号: " + t),
                0 == t.code)
                    return t.data;
                O.AddTipSimple(t.msg)
            }
            ))
        }
        openVersionGame(e) {
            let t = G.Singleton.serverInfoSelect
              , i = "fugu" == t.zoneFlag ? I.data.fuguUrl : I.data.gameUrl
              , s = i + e + ".html?";
            L.isWanOpenSdk() ? s = i + e + "_188wan.html?" : L.isQQGameSdk() ? s = i + e + "_QQGame.html?" : L.isJuheSdk() && (s = i + e + "_JuheH5.html?"),
            s += "&openID=" + K.openID,
            s += "&loginKey=" + K.loginKey,
            s += "&isGuest=" + K.isGuest,
            s += "&serverId=" + t.serverId,
            s += "&originId=" + t.originId,
            s += "&ip=" + t.ip,
            s += "&port=" + t.port,
            s += "&serverName=" + encodeURI(t.serverName),
            s += "&serverUrlPrefix=" + G.Singleton.serverUrlPrefix,
            G.Singleton.bugUrlPrefix && (s += "&bugUrlPrefix=" + G.Singleton.bugUrlPrefix),
            s += "&isShellLogin=1",
            ee.loginResponseData && ee.loginResponseData.accessToken && (s += "&sdkAccessToken=" + ee.loginResponseData.accessToken),
            ee.loginResponseData && ee.loginResponseData.sdktime && (s += "&sdktime=" + ee.loginResponseData.sdktime),
            I.data.SDK_SHELL && (s += "&sdkshell=" + (I.data.SDK_SHELL ? 1 : 0)),
            I.data.YOFISDK && (s += "&yofisdk=" + (I.data.YOFISDK ? 1 : 0)),
            I.data.SDKID && (s += "&sdkid=" + I.data.SDKID),
            I.data.YOFISDKWEB && (s += "&yofisdkweb=" + (I.data.YOFISDKWEB ? 1 : 0)),
            I.data.VERSION && (s += "&version=" + I.data.VERSION),
            I.data.CHANNEL_ID && (s += "&channelid=" + I.data.CHANNEL_ID),
            I.data.LANGUAGE && (s += "&language=" + I.data.LANGUAGE),
            t.gameDomain && (s += "&gameDomain=" + t.gameDomain),
            -1 != [4, 6].indexOf(y.Singleton.getSdkMode()) && (L.isJuheSdk() || (s += "&sdkuserid=" + ee.loginResponseData.userId)),
            K.openLog && (s += "&vconsole=1"),
            L.isH5WebSDK() && (s += L.Singleton.getHrefStr(s)),
            "1" == J.Singleton.getSetValue(j.Compatible) && (s += "&compatible=1"),
            s += "&shellUrl=" + encodeURIComponent(window.location.href),
            M.showStartBGImage(),
            M.showLoadingLog(f.getLocalInfoByLangId(4)),
            window.location.href = s
        }
    }
    $.Singleton = new $,
    window.YoFiSdkConfigResponseCB = e => {
        ee.responseCB(e)
    }
    ;
    class ee {
        constructor() {}
        static init() {
            let e = y.Singleton.getSdkMode();
            switch (e) {
            case 2:
            case 5:
            case 10:
                ee.sdk = window.YoFiSdk;
                break;
            default:
                return void O.AddTipSimple("当前 SdkMode 不支持 " + e)
            }
            ee.sdk.init("hello yofisdk from game!", ee.initCb)
        }
        static initCb(e) {
            switch (e) {
            case 0:
            default:
                break;
            case 1:
                m.Debug("[YoFiSdkConfig]  receive from yofisdk");
                let e = y.Singleton.getSdkMode();
                switch (e) {
                case 2:
                    {
                        let e = o.get(o.RECENTLY_SDK_TOKEN);
                        e ? Laya.Utils.getQueryString("pcLogout") ? (o.remove(o.RECENTLY_SDK_TOKEN),
                        Laya.Scene.open("scene/startWebsdk2/WebSdk2LayerLogin.scene", !1)) : (o.set(o.RECENTLY_SDK_QUICK, "1"),
                        m.Debug("[YoFiSdkConfig token]", e),
                        ee.loginResponseData = JSON.parse(e),
                        $.Singleton.quickLogin()) : Laya.Scene.open("scene/startWebsdk2/WebSdk2LayerLogin.scene", !1)
                    }
                    break;
                case 10:
                case 5:
                    Laya.Scene.open("scene/startGame/GameLayerLogin.scene", !1);
                    break;
                default:
                    O.AddTipSimple("当前 SdkMode 不支持 " + e)
                }
                ee.checkSdkStage(10)
            }
        }
        static responseCB(e) {
            m.Debug("[YoFiSdkConfig responseCB]", e);
            let t = JSON.parse(e);
            0 != t.code ? O.AddTipSimple(t.msg) : (Laya.Scene.close("scene/startGame/GameLayerLogin.scene"),
            Laya.Scene.close("scene/startGame/GameLayerRegister.scene"),
            Laya.Scene.close("scene/startGame/GameLayerPasswordReset.scene"),
            Laya.Scene.close("scene/startWebsdk2/WebSdk2LayerLogin.scene"),
            Laya.Scene.close("scene/startWebsdk2/WebSdk2LayerRegister.scene"),
            Laya.Scene.close("scene/startWebsdk2/WebSdk2LayerPasswordReset.scene"),
            ee.loginResponseData = t.data,
            ee.cacheAccount(),
            ee.loginResponseData && ee.loginResponseData.isRegGame && 1 == ee.loginResponseData.isRegGame && (ee.checkSdkStage(20),
            $.Singleton.reqGooglePcState(s.SIGIN_UP)),
            ee.checkSdkStage(30),
            $.Singleton.quickLogin())
        }
        static responseThirdCB(e) {}
        static cacheAccount() {
            switch (y.Singleton.getSdkMode()) {
            case 10:
            case 5:
                ee.cacheAccountYoFiCn();
                break;
            case 2:
                ee.cacheAccountYoFiHw()
            }
        }
        static cacheAccountYoFiCn() {
            if (0 == ee.loginResponseData.userType) {
                if (ee.loginResponseData.password) {
                    let e = [ee.loginResponseData.userType, ee.loginResponseData.loginName, ee.loginResponseData.password].toString();
                    o.set(o.LAS_SDK_ACCOUNT_PASS_GUEST, e)
                }
            } else if (1 == ee.loginResponseData.userType) {
                if (!ee.recentlyAccount || !ee.recentlyPassword)
                    return;
                let e, t = o.get(o.RECENTLY_SDK_LOGIN);
                if (t) {
                    e = JSON.parse(t);
                    for (let t = 0; t < e.length; t++) {
                        const i = e[t];
                        if (i[0] == ee.recentlyAccount) {
                            e.remove(i);
                            break
                        }
                    }
                    e.length >= 5 && e.pop()
                } else
                    e = [];
                let i = [ee.recentlyAccount, ee.recentlyPassword];
                e.unshift(i),
                t = JSON.stringify(e),
                o.set(o.RECENTLY_SDK_LOGIN, t),
                ee.recentlyAccount = void 0,
                ee.recentlyPassword = void 0
            }
        }
        static cacheAccountYoFiHw() {
            if (o.set(o.RECENTLY_SDK_TOKEN, JSON.stringify(ee.loginResponseData)),
            ee.loginResponseData.isBindEmail && 1 == ee.loginResponseData.isBindEmail) {
                if (!ee.recentlyAccount || !ee.recentlyPassword)
                    return;
                let e, t = o.get(o.RECENTLY_SDK_LOGIN);
                if (t) {
                    e = JSON.parse(t);
                    for (let t = 0; t < e.length; t++) {
                        const i = e[t];
                        if (i[0] == ee.recentlyAccount) {
                            e.remove(i);
                            break
                        }
                    }
                    e.length >= 5 && e.pop()
                } else
                    e = [];
                let i = [ee.recentlyAccount, ee.recentlyPassword];
                e.unshift(i),
                t = JSON.stringify(e),
                o.set(o.RECENTLY_SDK_LOGIN, t),
                ee.recentlyAccount = void 0,
                ee.recentlyPassword = void 0
            }
        }
        static responseNoteCB(e) {
            0 != JSON.parse(e).code ? O.AddTipSimple("获取短信验证码失败") : O.AddTipSimple("短信验证码已经发出请查收"),
            m.Debug("[YoFiSdkConfig]  ", e)
        }
        static responsEmailCB(e) {
            let t = JSON.parse(e);
            if (0 != t.code) {
                let e = t.msg;
                e.length > 0 ? O.AddTipSimple(e) : O.AddTipSimple("獲取郵件驗證碼失敗")
            } else
                O.AddTipSimple("郵件驗證碼已經發出請查收");
            m.Debug("[YoFiSdkConfig]  ", e)
        }
        static responsePayCB(e) {
            m.Debug("[YoFiSdkConfig]  ", "YoFiSdkConfig.responsePayCB", e)
        }
        static responseVerificationCB(e) {
            m.Debug("[YoFiSdkConfig]  ", "YoFiSdkConfig.responseVerificationCB", e),
            0 == e.code ? (ee.checkSdkStage(50),
            ee.loginResponseData.age = e.data && e.data.age || 18,
            Laya.Scene.close("scene/startGame/GameLayerAuthentication.scene"),
            ee.loginResponseData.age) : O.AddTipSimple(e.msg)
        }
        static checkSdkStage(e) {
            let t = Laya.LocalStorage.getItem(`SDK_STAGE_${e}`);
            t && "1" == t || ee.sdk.sdkStage(e, ee.responseSdkStageCB)
        }
        static responseSdkStageCB(e, t) {
            m.Debug("[YoFiSdkConfig]  ", "YoFiSdkConfig.responseSdkStageCB", e),
            0 == e.code && Laya.LocalStorage.setItem(`SDK_STAGE_${t}`, "1")
        }
    }
    ee.loginResponseData = {},
    ee.sdk = void 0;
    class te {
        static showHtmlText(e, t, i=300, s=20, n="c4ad77", a="left", r=0, o=20, l=!0, h=null) {
            e.style.font = "Arial",
            e.style.fontSize = o,
            e.style.width = i,
            e.style.align = a,
            e.style.leading = r,
            e.style.color = n,
            e.style.wordWrap = l,
            h && (e.style.valign = h),
            e.width = i,
            e.height = s,
            e.innerHTML = t
        }
    }
    class ie extends C.scene.startGame.GameLayerAuthenticationUI {
        constructor() {
            super()
        }
        onShow() {
            this.width = Laya.stage.width,
            this.height = Laya.stage.height,
            ee.checkSdkStage(40),
            this.idInput.type = Laya.Input.TYPE_NUMBER,
            ee.loginResponseData && ee.loginResponseData.isForceAuthentication && 1 == ee.loginResponseData.isForceAuthentication ? (this.backBtn.visible = !1,
            this.affirmBtn.x = 220,
            this.affirmBtn.clickHandler = Laya.Handler.create(this, this.onAffirm, void 0, !1),
            this.skipBtn.visible = !1) : (this.backBtn.visible = !0,
            this.backBtn.clickHandler = Laya.Handler.create(this, this.onClose, void 0, !1),
            this.affirmBtn.x = 107,
            this.affirmBtn.clickHandler = Laya.Handler.create(this, this.onAffirm, void 0, !1),
            this.skipBtn.visible = !0,
            this.skipBtn.clickHandler = Laya.Handler.create(this, this.onClose, void 0, !1)),
            this.tipText1.text = "1. 姓名、身份证、手机号须同属一人",
            this.tipText2.text = "2. 实名认证通过后，不可更改，请如实填写",
            te.showHtmlText(this.tipDiv, "3.应国家未成年人防沉迷政策要求，将限制未成年人每日游戏时间、充值等，详情查看<span color='#FF513a' href='antiAddiction'>《防沉迷政策》</span>", 440, 100, "#555555", "left", 0, 18, !0),
            this.tipDiv.on(Laya.Event.LINK, this, this.onAntiAddiction)
        }
        onHide() {
            this.backBtn.clickHandler && this.backBtn.clickHandler.recover(),
            this.backBtn.clickHandler = void 0,
            this.affirmBtn.clickHandler && this.affirmBtn.clickHandler.recover(),
            this.affirmBtn.clickHandler = void 0,
            this.skipBtn.clickHandler && this.skipBtn.clickHandler.recover(),
            this.skipBtn.clickHandler = void 0,
            this.tipDiv.off(Laya.Event.LINK, this, this.onAntiAddiction)
        }
        onAffirm() {
            let e = this.nameInput.text
              , t = this.idInput.text;
            ee.sdk.verification(ee.loginResponseData.accessToken, e, t, ee.responseVerificationCB)
        }
        onClose() {
            Laya.Scene.close("scene/startGame/GameLayerAuthentication.scene")
        }
        onAntiAddiction() {
            Laya.Scene.open("scene/startGame/GameLayerAntiAddiction.scene", !1)
        }
    }
    class se extends C.scene.startGame.GameLayerLoginUI {
        constructor() {
            super()
        }
        onShow() {
            this.width = Laya.stage.width,
            this.height = Laya.stage.height,
            this.accountInput.maxChars = 11,
            this.passwordInput.maxChars = 20,
            this.passwordInput.type = Laya.Input.TYPE_PASSWORD,
            this.hidePasswordBtn.visible = !0,
            this.showPasswordBtn.visible = !1,
            this.arrowUpBtn.visible = !1,
            this.arrowDownBtn.visible = !0,
            this.historyAccountList.visible = !1;
            let e = o.get(o.RECENTLY_SDK_LOGIN);
            if (e) {
                let t = JSON.parse(e);
                if (t.length > 0) {
                    let e = t[0];
                    this.accountInput.text = e[0],
                    this.passwordInput.text = e[1]
                } else
                    this.arrowDownBtn.visible = !1
            } else
                this.arrowDownBtn.visible = !1;
            this.arrowUpBtn.on(Laya.Event.CLICK, this, this.onArrowUp),
            this.arrowDownBtn.on(Laya.Event.CLICK, this, this.onArrowDown),
            this.historyAccountList.renderHandler = Laya.Handler.create(this, this.onListRender, null, !1),
            this.historyAccountList.selectEnable = !0,
            this.hidePasswordBtn.clickHandler = Laya.Handler.create(this, this.onClickHidePassword, null, !1),
            this.showPasswordBtn.clickHandler = Laya.Handler.create(this, this.onClickShowPassword, null, !1),
            this.forgetText.on(Laya.Event.CLICK, this, this.onClickForget),
            this.loginBtn.clickHandler = Laya.Handler.create(this, this.onClickLogin, null, !1),
            this.checkBg.on(Laya.Event.CLICK, this, this.onClickCheck),
            te.showHtmlText(this.agreementDiv, "同意并接受《<span color='#527ce8' href='licenseServiceAgreement'>游斐游戏许可及服务协议</span>》", 200, 40, "c4ad77", "center", 0, 14, !1),
            this.agreementDiv.on(Laya.Event.LINK, this, this.onAgreementLink),
            this.registerBtn.clickHandler = Laya.Handler.create(this, this.onClickRegister, null, !1)
        }
        onHide() {
            this.arrowUpBtn.off(Laya.Event.CLICK, this, this.onArrowUp),
            this.arrowDownBtn.off(Laya.Event.CLICK, this, this.onArrowDown),
            this.historyAccountList.renderHandler && this.historyAccountList.renderHandler.recover(),
            this.historyAccountList.renderHandler = void 0,
            this.hidePasswordBtn.clickHandler && this.hidePasswordBtn.clickHandler.recover(),
            this.hidePasswordBtn.clickHandler = void 0,
            this.showPasswordBtn.clickHandler && this.showPasswordBtn.clickHandler.recover(),
            this.showPasswordBtn.clickHandler = void 0,
            this.forgetText.off(Laya.Event.CLICK, this, this.onClickForget),
            this.loginBtn.clickHandler && this.loginBtn.clickHandler.recover(),
            this.loginBtn.clickHandler = void 0,
            this.checkBg.off(Laya.Event.CLICK, this, this.onClickCheck),
            this.agreementDiv.off(Laya.Event.LINK, this, this.onAgreementLink),
            this.registerBtn.clickHandler && this.registerBtn.clickHandler.recover(),
            this.registerBtn.clickHandler = void 0
        }
        onArrowUp() {
            this.historyAccountList.visible = !1,
            this.arrowDownBtn.visible = !0,
            this.arrowUpBtn.visible = !1
        }
        onArrowDown() {
            let e = o.get(o.RECENTLY_SDK_LOGIN);
            if (!e)
                return;
            let t = JSON.parse(e);
            t.length <= 0 || (this.historyAccountList.visible = !0,
            this.arrowDownBtn.visible = !1,
            this.arrowUpBtn.visible = !0,
            this.historyAccountList.array = t,
            this.historyAccountList.selectedIndex = -1)
        }
        onListRender(e, t) {
            e.getChildByName("accountText").text = e.dataSource[0],
            this.historyAccountList.selectedIndex == t && (this.onArrowUp(),
            this.accountInput.text = e.dataSource[0],
            this.passwordInput.text = e.dataSource[1])
        }
        onClickForget() {
            Laya.Scene.open("scene/startGame/GameLayerPasswordReset.scene", !1),
            Laya.Scene.close("scene/startGame/GameLayerLogin.scene")
        }
        onClickLogin() {
            this.ckeckImg.visible ? 6 <= this.accountInput.text.length ? 0 != this.passwordInput.text.length ? (ee.recentlyAccount = this.accountInput.text,
            ee.recentlyPassword = this.passwordInput.text,
            ee.sdk.login(ee.responseCB, 1, this.accountInput.text, this.passwordInput.text)) : O.AddTipSimple("密码不能为空") : O.AddTipSimple("手机号位数不对") : O.AddTipSimple("请勾选协议")
        }
        onClickCheck() {
            this.ckeckImg.visible = !this.ckeckImg.visible
        }
        onAgreementLink(e) {
            var t = Laya.Browser.window.document.createElement("iframe");
            t.id = "agreementFrame",
            t.setAttribute("src", ee.sdk.agreementUrl(e)),
            t.setAttribute("frameborder", 0);
            var i = Laya.Browser.window.document.getElementsByTagName("body")[0];
            i.appendChild(t);
            let s = Laya.Browser.window.document.body.clientWidth
              , n = s * Laya.stage.height / Laya.stage.width;
            t.setAttribute("width", s),
            t.setAttribute("height", n),
            t.setAttribute("style", "position: absolute; z-index: 100009;");
            var a = Laya.Browser.window.document.createElement("div");
            a.id = "agreementCloseButton",
            i.appendChild(a),
            a.setAttribute("style", "position: absolute; z-index: 100010; height: 30px; width: 30px; right: 30px; top: 10px; background-image: url('./atlas/ui/startYofisdk/btn_close.png'); background-size: 100% 100%"),
            a.addEventListener("click", (function() {
                var e = Laya.Browser.window.document.getElementById("agreementFrame");
                e && e.parentNode.removeChild(e);
                var t = Laya.Browser.window.document.getElementById("agreementCloseButton");
                t && t.parentNode.removeChild(t)
            }
            ))
        }
        onClickRegister() {
            Laya.Scene.open("scene/startGame/GameLayerRegister.scene", !1),
            Laya.Scene.close("scene/startGame/GameLayerLogin.scene")
        }
        onClickShowPassword() {
            this.showPasswordBtn.visible = !1,
            this.hidePasswordBtn.visible = !0,
            this.passwordInput.type = Laya.Input.TYPE_PASSWORD;
            let e = this.passwordInput.text;
            this.passwordInput.text = "",
            this.passwordInput.text = e
        }
        onClickHidePassword() {
            this.showPasswordBtn.visible = !0,
            this.hidePasswordBtn.visible = !1,
            this.passwordInput.type = Laya.Input.TYPE_TEXT;
            let e = this.passwordInput.text;
            this.passwordInput.text = "",
            this.passwordInput.text = e
        }
    }
    class ne extends C.scene.startGame.GameLayerPasswordResetUI {
        constructor() {
            super()
        }
        onShow() {
            this.width = Laya.stage.width,
            this.height = Laya.stage.height,
            this.accountInput.maxChars = 11,
            this.passwordInput.maxChars = 20,
            this.passwordInput.type = Laya.Input.TYPE_PASSWORD,
            this.hidePasswordBtn.visible = !0,
            this.showPasswordBtn.visible = !1,
            this.backBtn.clickHandler = Laya.Handler.create(this, this.onClickBack, null, !1),
            this.verificationBtn.clickHandler = Laya.Handler.create(this, this.onClickVerification, null, !1),
            this.hidePasswordBtn.clickHandler = Laya.Handler.create(this, this.onClickHidePassword, null, !1),
            this.showPasswordBtn.clickHandler = Laya.Handler.create(this, this.onClickShowPassword, null, !1),
            this.confirmBtn.clickHandler = Laya.Handler.create(this, this.onClickConfirm, null, !1)
        }
        onHide() {
            this.backBtn.clickHandler && this.backBtn.clickHandler.recover(),
            this.backBtn.clickHandler = void 0,
            this.verificationBtn.clickHandler && this.verificationBtn.clickHandler.recover(),
            this.verificationBtn.clickHandler = void 0,
            this.hidePasswordBtn.clickHandler && this.hidePasswordBtn.clickHandler.recover(),
            this.hidePasswordBtn.clickHandler = void 0,
            this.showPasswordBtn.clickHandler && this.showPasswordBtn.clickHandler.recover(),
            this.showPasswordBtn.clickHandler = void 0,
            this.confirmBtn.clickHandler && this.confirmBtn.clickHandler.recover(),
            this.confirmBtn.clickHandler = void 0
        }
        onClickBack() {
            Laya.Scene.open("scene/startGame/GameLayerLogin.scene", !1),
            Laya.Scene.close("scene/startGame/GameLayerPasswordReset.scene")
        }
        onClickVerification() {
            6 <= this.accountInput.text.length ? ee.sdk.sendNode(+this.accountInput.text, ee.responseNoteCB) : O.AddTipSimple("手机号位数不对")
        }
        onClickShowPassword() {
            this.showPasswordBtn.visible = !1,
            this.hidePasswordBtn.visible = !0,
            this.passwordInput.type = Laya.Input.TYPE_PASSWORD;
            let e = this.passwordInput.text;
            this.passwordInput.text = "",
            this.passwordInput.text = e
        }
        onClickHidePassword() {
            this.showPasswordBtn.visible = !0,
            this.hidePasswordBtn.visible = !1,
            this.passwordInput.type = Laya.Input.TYPE_TEXT;
            let e = this.passwordInput.text;
            this.passwordInput.text = "",
            this.passwordInput.text = e
        }
        onClickConfirm() {
            if (6 <= this.accountInput.text.length)
                if (0 != this.verificationInput.text.length)
                    if (0 != this.passwordInput.text.length)
                        if (this.passwordInput.text.length < 6)
                            O.AddTipSimple("密码最短为6位");
                        else {
                            /^[a-zA-Z0-9_]{6,20}$/.test(this.passwordInput.text) ? (ee.recentlyAccount = this.accountInput.text,
                            ee.recentlyPassword = this.passwordInput.text,
                            ee.sdk.retrievePass(this.passwordInput.text, this.accountInput.text, this.verificationInput.text, ee.responseCB)) : O.AddTipSimple("密码格式不规范")
                        }
                    else
                        O.AddTipSimple("密码不能为空");
                else
                    O.AddTipSimple("验证码不能为空");
            else
                O.AddTipSimple("手机号位数不对")
        }
    }
    class ae extends C.scene.startGame.GameLayerRegisterUI {
        constructor() {
            super()
        }
        onShow() {
            this.width = Laya.stage.width,
            this.height = Laya.stage.height,
            this.accountInput.maxChars = 11,
            this.passwordInput.maxChars = 20,
            this.passwordInput.type = Laya.Input.TYPE_PASSWORD,
            this.hidePasswordBtn.visible = !0,
            this.showPasswordBtn.visible = !1,
            this.backBtn.clickHandler = Laya.Handler.create(this, this.onClickBack, null, !1),
            this.verificationBtn.clickHandler = Laya.Handler.create(this, this.onClickVerification, null, !1),
            this.hidePasswordBtn.clickHandler = Laya.Handler.create(this, this.onClickHidePassword, null, !1),
            this.showPasswordBtn.clickHandler = Laya.Handler.create(this, this.onClickShowPassword, null, !1),
            this.checkBg.on(Laya.Event.CLICK, this, this.onClickCheck),
            this.agreementDiv.innerHTML = "我已阅读并同意<span color='#FF513a' href='userAgreement'>用户协议</span>和<span color='#FF513a' href='privacyPolicy'>隐私协议</span>",
            this.agreementDiv.on(Laya.Event.LINK, this, this.onAgreementLink),
            this.confirmBtn.clickHandler = Laya.Handler.create(this, this.onClickConfirm, null, !1)
        }
        onHide() {
            this.backBtn.clickHandler && this.backBtn.clickHandler.recover(),
            this.backBtn.clickHandler = void 0,
            this.verificationBtn.clickHandler && this.verificationBtn.clickHandler.recover(),
            this.verificationBtn.clickHandler = void 0,
            this.hidePasswordBtn.clickHandler && this.hidePasswordBtn.clickHandler.recover(),
            this.hidePasswordBtn.clickHandler = void 0,
            this.showPasswordBtn.clickHandler && this.showPasswordBtn.clickHandler.recover(),
            this.showPasswordBtn.clickHandler = void 0,
            this.checkBg.off(Laya.Event.CLICK, this, this.onClickCheck),
            this.confirmBtn.clickHandler && this.confirmBtn.clickHandler.recover(),
            this.confirmBtn.clickHandler = void 0
        }
        onClickBack() {
            Laya.Scene.open("scene/startGame/GameLayerLogin.scene", !1),
            Laya.Scene.close("scene/startGame/GameLayerRegister.scene")
        }
        onClickVerification() {
            6 <= this.accountInput.text.length ? ee.sdk.sendNode(+this.accountInput.text, ee.responseNoteCB) : O.AddTipSimple("手机号位数不对")
        }
        onClickShowPassword() {
            this.showPasswordBtn.visible = !1,
            this.hidePasswordBtn.visible = !0,
            this.passwordInput.type = Laya.Input.TYPE_PASSWORD;
            let e = this.passwordInput.text;
            this.passwordInput.text = "",
            this.passwordInput.text = e
        }
        onClickHidePassword() {
            this.showPasswordBtn.visible = !0,
            this.hidePasswordBtn.visible = !1,
            this.passwordInput.type = Laya.Input.TYPE_TEXT;
            let e = this.passwordInput.text;
            this.passwordInput.text = "",
            this.passwordInput.text = e
        }
        onClickCheck() {
            this.ckeckImg.visible = !this.ckeckImg.visible
        }
        onAgreementLink(e) {
            var t = Laya.Browser.window.document.createElement("iframe");
            t.id = "agreementFrame",
            t.setAttribute("src", ee.sdk.agreementUrl(e)),
            t.setAttribute("frameborder", 0);
            var i = Laya.Browser.window.document.getElementsByTagName("body")[0];
            i.appendChild(t);
            let s = Laya.Browser.window.document.body.clientWidth
              , n = s * Laya.stage.height / Laya.stage.width;
            t.setAttribute("width", s),
            t.setAttribute("height", n),
            t.setAttribute("style", "position: absolute; z-index: 100009;");
            var a = Laya.Browser.window.document.createElement("div");
            a.id = "agreementCloseButton",
            i.appendChild(a),
            a.setAttribute("style", "position: absolute; z-index: 100010; height: 30px; width: 30px; right: 30px; top: 10px; background-image: url('./atlas/ui/startYofisdk/btn_close.png'); background-size: 100% 100%"),
            a.addEventListener("click", (function() {
                var e = Laya.Browser.window.document.getElementById("agreementFrame");
                e && e.parentNode.removeChild(e);
                var t = Laya.Browser.window.document.getElementById("agreementCloseButton");
                t && t.parentNode.removeChild(t)
            }
            ))
        }
        onClickConfirm() {
            if (this.ckeckImg.visible)
                if (6 <= this.accountInput.text.length)
                    if (0 != this.verificationInput.text.length)
                        if (0 != this.passwordInput.text.length)
                            if (this.passwordInput.text.length < 6)
                                O.AddTipSimple("密码最短为6位");
                            else {
                                /^[a-zA-Z0-9_]{6,20}$/.test(this.passwordInput.text) ? (ee.recentlyAccount = this.accountInput.text,
                                ee.recentlyPassword = this.passwordInput.text,
                                ee.sdk.register(this.passwordInput.text, this.accountInput.text, this.verificationInput.text, ee.responseCB)) : O.AddTipSimple("密码格式不规范")
                            }
                        else
                            O.AddTipSimple("密码不能为空");
                    else
                        O.AddTipSimple("验证码不能为空");
                else
                    O.AddTipSimple("手机号位数不对");
            else
                O.AddTipSimple("请勾选协议")
        }
    }
    class re {
        constructor() {
            this.speed = 1
        }
        setSpeed(e) {
            this.speed = e,
            Laya.timer.once(2500, this, this.resetSpeed, null, !0)
        }
        getSpeed() {
            return this.speed
        }
        resetSpeed() {
            this.speed = re.defaultSpeed
        }
        getTimeDelta() {
            let e = Laya.timer.delta / 1e3;
            return e > .05 && (e = .05),
            e * this.speed
        }
        getTimeDeltaTruely() {
            let e = Laya.timer.delta / 1e3;
            return e > .05 && (e = .05),
            e
        }
    }
    re.Singleton = new re,
    re.defaultSpeed = 1;
    class oe {
        constructor(e, t) {
            this.x = 0,
            this.y = 0,
            this.x = e,
            this.y = t
        }
        equal(e) {
            return null != e && (this.x == e.x && this.y == e.y)
        }
        static Add(e, t) {
            return new oe(e.x + t.x,e.y + t.y)
        }
        static Equal(e, t) {
            return e.x == t.x && e.y == t.y
        }
        add(e) {
            return this.x += e.x,
            this.y += e.y,
            this
        }
        negative() {
            this.x = -this.x,
            this.y = -this.y
        }
        static Sub(e, t) {
            return new oe(e.x - t.x,e.y - t.y)
        }
        sub(e) {
            this.x -= e.x,
            this.y -= e.y
        }
        static Mul(e, t) {
            return new oe(e.x * t,e.y * t)
        }
        mul(e) {
            return this.x *= e,
            this.y *= e,
            this
        }
        mid() {
            return new oe(this.x / 2,this.y / 2)
        }
        getLength() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }
        getLengthSQ() {
            return this.x * this.x + this.y * this.y
        }
        normalize() {
            let e = this.getLength();
            return 0 == e || (this.x = this.x / e,
            this.y = this.y / e),
            this
        }
        dot(e) {
            return this.x * e.x + this.y * e.y
        }
        toString() {
            return "(" + this.x + "," + this.y + ")"
        }
        static CalcDistance(e, t) {
            return oe.Sub(e, t).getLength()
        }
        static CalcDistanceSQ(e, t) {
            return oe.Sub(e, t).getLengthSQ()
        }
    }
    oe.ZERO = new oe(0,0);
    class le {
        constructor() {}
        static showNtfListeners() {
            let e = R._$0__events;
            m.Debug(this, e);
            let t = 0
              , i = 0;
            for (let s in e)
                t++,
                e[s]instanceof Array ? i += e[s].length : i++;
            m.Debug(this, "typeCount:" + t, "listenerCount:" + i)
        }
        static showAtalsBigMap() {
            m.Debug(this, Laya.Resource._urlResourcesMap)
        }
        static showLoadedResource() {
            m.Debug(this, Laya.Loader.loadedMap)
        }
        static showTextAtlasInfo() {
            Laya.TextRender.textRenderInst.printDbgInfo()
        }
        static showResourceListByUrlPrefix(e) {
            let t = []
              , i = Laya.Loader.loadedMap;
            for (let s in i) {
                -1 != s.indexOf("/" + e + "/") && t.push(s);
                let i = s.lastIndexOf("-")
                  , n = s.slice(0, i);
                if (n += ".atlas",
                n.indexOf(e + ".atlas") >= 0 && t.unshift(s),
                -1 != s.indexOf("/" + e + ".atlas") && t.unshift(s),
                -1 != e.indexOf(".") && -1 != s.indexOf("/" + e) && t.unshift(s),
                -1 != e.indexOf("/*.")) {
                    let i = e.substring(e.lastIndexOf(".") + 1)
                      , n = e.substring(0, e.lastIndexOf("/"));
                    if (-1 != s.indexOf(n)) {
                        i == s.substring(s.lastIndexOf(".") + 1) && t.push(s)
                    }
                }
            }
            return t
        }
        static showTextAtlas(e) {
            let t = new Laya.Panel;
            t.width = Laya.stage.width,
            t.height = Laya.stage.height,
            t.vScrollBarSkin = "",
            t.hScrollBarSkin = "";
            let i = Laya.TextRender.textRenderInst.showAtlas(e, "#ff0000", 0, 0, 2048, 2048);
            i.width = 2048,
            i.height = 2048,
            t.addChild(i),
            t.on(Laya.Event.DOUBLE_CLICK, this, (e => {
                e.removeSelf()
            }
            ), [t]),
            Laya.stage.addChild(t)
        }
        static showCpuMem() {
            0
        }
        static showGpuMem() {
            0
        }
    }
    window.resDebug = le;
    class he {
        constructor() {
            this.FunctionId_TO_RESKEY = {},
            this.waitDestoryRes = [],
            this.dragonCacheRes = [],
            this.mcDataMap = {},
            this.curTime = .001 * (new Date).getTime() >> 0,
            Laya.stage.timer.loop(1e3, this, ( () => {
                this.curTime++,
                this.waitDestoryRes.forEach((e => {
                    -1 != e.destroyTime && this.curTime > e.destroyTime && (this.destroyResNow(e.key),
                    e.destroyTime = -1)
                }
                ));
                for (let e = this.dragonCacheRes.length - 1; e >= 0; e--) {
                    let t = this.dragonCacheRes[e];
                    if (t && -1 != t.destroyTime && this.curTime > t.destroyTime) {
                        let t = this.dragonCacheRes.splice(e, 1)[0];
                        this.destroyResNow(t.url),
                        m.Debug(this, "destroy龙骨Templet: key=" + t.key)
                    }
                }
            }
            ))
        }
        static get Singleton() {
            return null == this._Singleton && (this._Singleton = new he),
            this._Singleton
        }
        destroyResNow(e, t=!0) {
            let i = le.showResourceListByUrlPrefix(e);
            for (let e of i) {
                Laya.loader.clearTextureRes(e),
                Laya.loader.clearRes(e);
                for (let t in this.mcDataMap)
                    if (e.indexOf(t) >= 0) {
                        delete this.mcDataMap[t];
                        break
                    }
                0
            }
        }
        loadArrayP(e, t=null) {
            return new Promise(( (i, s) => {
                let n = Laya.Handler.create(null, (t => {
                    t ? i(t) : s({
                        message: "load urlArray error " + e
                    })
                }
                ));
                Laya.loader.load(e, n, t)
            }
            ))
        }
        loadTextP(e) {
            return new Promise(( (t, i) => {
                let s = Laya.Handler.create(null, (e => {
                    null != e ? t(e) : i({
                        message: "load text error"
                    })
                }
                ));
                Laya.loader.load(e, s, null, Laya.Loader.TEXT)
            }
            ))
        }
        loadJsonP(e, t=-1) {
            return new Promise(( (i, s) => {
                let n = Laya.Handler.create(null, (e => {
                    null != e ? i(e) : s({
                        message: "load json error"
                    })
                }
                ))
                  , a = 1;
                e.indexOf("res/model/") >= 0 && (a = 3),
                Laya.loader.load(e, n, null, Laya.Loader.JSON, t >= 0 ? t : a)
            }
            ))
        }
        loadImageP(e) {
            return e = Laya.URL.formatURL(e),
            new Promise(( (t, i) => {
                let s = Laya.Handler.create(this, (n => {
                    if (null != n) {
                        let i = n;
                        if (i instanceof Laya.Texture2D)
                            return void Laya.loader.load(e, s, null, Laya.Loader.IMAGE, 1, !0, null, !1, !0);
                        i.url = e,
                        t(i)
                    } else
                        i({
                            message: "load image error  " + e
                        })
                }
                ))
                  , n = 1;
                e.indexOf("res/model/") >= 0 && (n = 3),
                Laya.loader.load(e, s, null, Laya.Loader.IMAGE, n, !0, null, !1, !0)
            }
            ))
        }
        setMcData(e) {
            this.mcDataMap[e.getUrl()] = e
        }
        getMcData(e) {
            return this.mcDataMap[e]
        }
        clearMcData() {
            for (let e in this.mcDataMap)
                delete this.mcDataMap[e]
        }
        getDragon(e) {
            let t = this.dragonCacheRes.indexKeyIn("key", e);
            return t ? (t.count <= 0 && m.Debug(this, "clear龙骨Templet: key=" + e + "    取消倒计时....."),
            t.count++,
            t.destroyTime = -1,
            m.Debug(this, "重用龙骨Templet: key=" + e + "count=" + t.count),
            t.res) : null
        }
        setDragon(e, t, i) {
            if (!this.dragonCacheRes.indexKeyIn("key", e)) {
                m.Debug(this, "缓存龙骨Templet: key=" + e + "    url=" + t);
                let s = new ce;
                s.key = e,
                s.url = t,
                s.res = i,
                s.destroyTime = -1,
                s.count = 1,
                this.dragonCacheRes.push(s)
            }
        }
        clearDragon(e, t=5) {
            let i = this.dragonCacheRes.indexKeyIn("key", e);
            i && (i.count--,
            i.count <= 0 && (m.Debug(this, "clear龙骨Templet: key=" + e + "    倒计时中....."),
            i.destroyTime = this.curTime + t))
        }
    }
    class ce {
    }
    class de {
        constructor(e, t, i, s) {
            this.url = null,
            this.frameRate = 0,
            this.frameCount = 0,
            this.frameMap = null,
            this.url = e,
            this.frameRate = t,
            this.frameCount = i,
            this.frameMap = s
        }
        clear() {
            this.url = null,
            this.frameMap = null
        }
        getUrl() {
            return this.url
        }
        getFrameRate() {
            return this.frameRate
        }
        setFrameRate(e) {
            this.frameRate = e
        }
        getFrameCount() {
            return this.frameCount
        }
        setFrameCount(e) {
            this.frameCount = e
        }
        getFrameMap() {
            return this.frameMap
        }
        getFrame(e) {
            let t = `${this.url}#${e}`;
            return this.frameMap[t]
        }
    }
    class ge extends Laya.Sprite {
        constructor(e=oe.ZERO, t=0) {
            super(),
            this.url = null,
            this.loop = !0,
            this.mcData = null,
            this.graphicsArray = [],
            this.frameHandler = [],
            this.pos(e.x, e.y),
            this.zOrder = t
        }
        onDestroy() {
            this.url = null,
            this.mcData = null,
            this.graphicsArray = null,
            this.frameHandler = null
        }
        clear() {
            this.url = null,
            this.mcData = null,
            this.graphicsArray.length = 0,
            this.frameIndexs = null,
            this.frameHandler.length = 0
        }
        addFrameHandler(e, t) {
            this.frameIndexs || (this.frameIndexs = e),
            this.frameHandler.push(t)
        }
        clearFrameHandler(e) {
            e ? (this.frameHandler.remove(e),
            0 == this.frameHandler.length && (this.frameIndexs = null)) : (this.frameHandler.length = 0,
            this.frameIndexs = null)
        }
        play(e, t=!1, i, s=1, n=1, a=!1) {
            return !(e == this.url && t && !i) && (this.url == e && this.graphicsArray.length > 0 && null != this.mcData || (this.url = e,
            this.loop = t,
            this.mcData = he.Singleton.getMcData(e),
            null == this.mcData ? (this.graphics = null,
            this.loadRes(this.url),
            !1) : (this.graphicsArray = this.createGraphicsArray(this.mcData),
            this.setGraphics(0),
            !0)))
        }
        setGraphics(e) {
            if (this.graphics = this.graphicsArray[e],
            this.frameIndexs && this.frameIndexs.indexOf(e) >= 0) {
                let t = this.frameHandler.concat();
                for (let i of t)
                    i.runWith(e)
            }
        }
        gotoFrame(e) {
            e >= 0 && e < this.graphicsArray.length && this.setGraphics(e)
        }
        loadRes(e) {
            let t = e.substr(0, e.lastIndexOf(".")) + ".png"
              , i = e
              , s = this;
            Promise.all([he.Singleton.loadJsonP(e), he.Singleton.loadImageP(t)]).then((e => {
                i == s.url && (s.mcData = he.Singleton.getMcData(i),
                null == s.mcData && (s.mcData = s.createMcData(i, e[0], e[1]),
                he.Singleton.setMcData(s.mcData)),
                s.graphicsArray = s.createGraphicsArray(s.mcData),
                s.setGraphics(0))
            }
            )).catch((e => {
                0
            }
            ))
        }
        createMcData(e, t, i) {
            let s = null;
            for (let e in t.mc) {
                s = t.mc[e];
                break
            }
            let n = s.frameRate
              , a = s.frames.length
              , r = {};
            for (let n = 0; n < a; n++) {
                let a = s.frames[n];
                if (a.res) {
                    let s = t.res[a.res];
                    r[e + "#" + n] = Laya.Texture.create(i, s.x, s.y, s.w, s.h, a.x, a.y)
                }
            }
            return new de(e,n,a,r)
        }
        createGraphicsArray(e) {
            this.graphicsArray.length = 0;
            for (let e = 0; e < this.mcData.getFrameCount(); e++) {
                let t = new Laya.Graphics;
                t.drawImage(this.mcData.getFrame(e), 0, 0),
                this.graphicsArray.push(t)
            }
            return this.graphicsArray
        }
        getMcData() {
            return this.mcData
        }
        getTotalFrame() {
            return this.mcData ? this.mcData.getFrameCount() : 0
        }
    }
    class ue extends ge {
        constructor(e=oe.ZERO, t=0, i=null, s=!0) {
            super(e, t),
            this.completeHandler = null,
            this.completeClear = !1,
            this.intervalFrame = 1,
            this.specialLog = !1,
            this.timeElapsed = 0,
            this.speed = 1,
            this.nextFrameIdx = 0,
            this.isPause = !1,
            this.completeHandler = i,
            this.completeClear = s
        }
        onDestroy() {
            super.onDestroy()
        }
        onUpdate() {
            if (null == this.mcData)
                return void this.specialLog;
            if (this.isPause)
                return void this.specialLog;
            if (!this.loop && this.nextFrameIdx >= this.mcData.getFrameCount())
                return this.specialLog,
                null != this.completeHandler && (this.specialLog,
                this.isPause = !0,
                this.completeHandler.run()),
                void (this.completeClear && (this.graphics = null));
            this.specialLog,
            this.timeElapsed += re.Singleton.getTimeDelta();
            let e = this.timeElapsed * this.speed;
            e > 1 / this.mcData.getFrameRate() && (e %= 1 / this.mcData.getFrameRate(),
            this.timeElapsed = e / this.speed,
            this.gotoNextFrame())
        }
        play(e, t=!1, i, s=1, n=1, a=!1) {
            if (e == this.url && t && !i)
                return !1;
            this.timeElapsed = 0,
            this.nextFrameIdx = 0,
            this.isPause = !1,
            this.speed = s,
            this.intervalFrame = n,
            this.specialLog = a;
            let r = super.play(e, t, i, s, n, this.specialLog);
            return this.nextFrameIdx += this.intervalFrame,
            this.specialLog,
            r
        }
        stop(e=-1) {
            this.isPause = !0,
            this.gotoFrame(e)
        }
        start() {
            this.isPause = !1
        }
        setCompleteHandler(e) {
            this.completeHandler = e
        }
        gotoNextFrame() {
            this.nextFrameIdx %= this.mcData.getFrameCount(),
            this.gotoFrame(this.nextFrameIdx),
            this.specialLog,
            this.nextFrameIdx += this.intervalFrame
        }
    }
    class Se extends ue {
        constructor(e=oe.ZERO, t=0, i=null, s=!0) {
            super(e, t, i, s),
            this.param = null
        }
        onShow() {
            Laya.timer.frameLoop(1, this, this.onUpdate)
        }
        onHide() {
            Laya.timer.clearAll(this)
        }
    }
    class pe extends Se {
        onUpdate() {
            if (null == this.mcData)
                return;
            if (this.isPause)
                return;
            if (!this.loop && this.nextFrameIdx >= this.mcData.getFrameCount())
                return null != this.completeHandler && this.completeHandler.run(),
                this.completeClear && (this.graphics = null),
                void (this.isPause = !0);
            this.timeElapsed += re.Singleton.getTimeDeltaTruely();
            let e = this.timeElapsed * this.speed;
            e > 1 / this.mcData.getFrameRate() && (e %= 1 / this.mcData.getFrameRate(),
            this.timeElapsed = e / this.speed,
            this.gotoNextFrame())
        }
    }
    class Le extends C.scene.startInit.InitLayerAccountUI {
        constructor() {
            super(),
            this.meteorMcSpriteUI = void 0,
            this.lastLoginTime = 0
        }
        onShow() {
            if (Laya.stage.on(Laya.Event.RESIZE, this, this.onStageResize),
            this.onStageResize(),
            this.lastLoginTime = (new Date).getTime(),
            this.btnLogin.visible = !1,
            this.btnLogin.clickHandler = Laya.Handler.create(this, this.onClickLogin, null, !1),
            I.data.YOFISDK || I.data.YOFISDKWEB || L.isH5WebSDK())
                this.inputLoginName.visible = !1,
                this.inputPassword.visible = !1,
                I.data.CHANNEL_ID == y.CHANNEL_HUAWEI ? (this.btnLogin.label = f.getInfoByLangID(F.STR_20001),
                this.btnLogin.width = 240) : (this.btnLogin.label = f.getInfoByLangID(F.LOGIN),
                this.btnLogin.width = 140),
                (6 == y.Singleton.getSdkMode() && !L.isJuheSdk() || 4 == y.Singleton.getSdkMode() || 8 == y.Singleton.getSdkMode() || 9 == y.Singleton.getSdkMode()) && (this.btnLogin.visible = !0);
            else {
                this.btnLogin.visible = !0;
                let e = o.get(o.LAST_ACCOUNT_NAME);
                this.inputLoginName.text = e || ""
            }
            Laya.timer.loop(2e3, this, this.onPlayMeteor),
            M.startGame(),
            R.on(N.LANGUAGE_UPDATE_SET, this, this.onUpdateLanguage),
            R.on(N.SDK_LOGIN_SUCCEED, this, this.onSdkLoginSucceed)
        }
        onHide() {
            this.btnLogin.clickHandler && this.btnLogin.clickHandler.recover(),
            this.btnLogin.clickHandler = void 0,
            this.meteorMcSpriteUI && (this.meteorMcSpriteUI.removeSelf(),
            this.meteorMcSpriteUI = void 0),
            Laya.stage.offAllCaller(this),
            Laya.timer.clear(this, this.onPlayMeteor),
            R.offAllCaller(this)
        }
        onStageResize() {
            this.width = Laya.stage.width,
            this.height = Laya.stage.height
        }
        onPlayMeteor() {
            let e = 0
              , t = 0;
            E.getLandFlag() ? (e = 50 + 900 * Math.random(),
            t = 200 * Math.random()) : (e = 50 + 600 * Math.random(),
            t = 400 * Math.random()),
            this.meteorMcSpriteUI || (this.meteorMcSpriteUI = new pe),
            this.meteorMcSpriteUI.pos(e, t),
            this.meteorMcSpriteUI.play("res/effect/scene/startInit/meteor_liuxing_cjh.json", !1, !0),
            this.meteorMcSpriteUI.scale(1, 1),
            this.addChild(this.meteorMcSpriteUI)
        }
        onUpdateLanguage() {
            this.inputLoginName && (this.inputLoginName.prompt = f.getInfoByLangID(F.STR_1911),
            this.inputPassword.prompt = f.getInfoByLangID(F.STR_1912),
            this.tipsLb.text = f.getInfoByLangID(F.GAME_TIP))
        }
        onSdkLoginSucceed() {
            this.btnLogin.visible = !1
        }
        onClickLogin() {
            if (6 == y.Singleton.getSdkMode() || 4 == y.Singleton.getSdkMode() || 8 == y.Singleton.getSdkMode() || 9 == y.Singleton.getSdkMode()) {
                let e = (new Date).getTime();
                return e - this.lastLoginTime < 5e3 ? void O.AddTipSimple(f.getInfoByLangID(F.STR_20002)) : (this.lastLoginTime = e,
                void $.Singleton.loginYoFiSdk())
            }
            let e = this.inputLoginName.text.trim();
            this.checkLoginName(e) ? this.customLogin(e) : O.AddTipSimple(f.getInfoByLangID(F.STR_2065))
        }
        customLogin(e) {
            $.Singleton.reqLoginHttp(e).then((e => {
                e && e.result && 0 != e.result ? O.AddTipSimple(f.getLocalInfoByLangId(8)) : $.Singleton.processServerList(e.listServerAddr, e.bugServerAddr)
            }
            )).catch((e => {
                X.showLoadingLog(f.getLocalInfoByLangId(16))
            }
            ))
        }
        checkLoginName(e) {
            return null != e && "" != e
        }
    }
    class ye extends C.scene.startInit.view.LoginNoticeContentItemUI {
        constructor() {
            super(),
            this.noticeData = void 0,
            this.ageTipsData = void 0,
            this.isAgeTips = !1,
            this.index = 0
        }
        onInit() {
            this.autoSize = !0
        }
        update(e) {
            this.noticeData = e,
            this.isAgeTips = !1
        }
        updateAgeTips(e) {
            this.ageTipsData = e,
            this.isAgeTips = !0
        }
        onShow() {
            let e = ""
              , t = "";
            this.noticeData && !this.isAgeTips ? (e = f.getInfoByJsonStr(this.noticeData.header),
            t = f.getInfoByJsonStr(this.noticeData.text)) : this.ageTipsData && this.isAgeTips && (e = this.ageTipsData.header,
            t = this.ageTipsData.text),
            this.titleTF.text = e,
            E.getLandFlag() ? te.showHtmlText(this.contentDiv, t, 670, 20, "#DDDADA", "left", 8, 16) : te.showHtmlText(this.contentDiv, t, 460, 20, "#DDDADA", "left", 8, 16),
            this.height = this.contentDiv.y + this.contentDiv.contextHeight + 2
        }
    }
    class Ie extends C.scene.startInit.view.LoginNoticeViewUI {
        constructor() {
            super(),
            this.noticeArr = void 0,
            this.dataIndex = void 0,
            this.clickByte = 0
        }
        onShow() {
            if (this.panel.vScrollBarSkin = "",
            this.panel.vScrollBar.isVertical = !0,
            this.closeBtn.clickHandler = Laya.Handler.create(this, this.onClickClose, null, !1),
            this.closeBtn2.clickHandler = Laya.Handler.create(this, this.onClickClose, null, !1),
            this.tabList.selectEnable = !0,
            this.tabList.renderHandler = Laya.Handler.create(this, this.onRenderTab, null, !1),
            this.tabList.selectHandler = Laya.Handler.create(this, this.onSelectTab, null, !1),
            this.clickBg.on(Laya.Event.CLICK, this, this.onClickClose),
            this.closeTipsLb.text = f.getInfoByLangID(F.STR_2036),
            this.onStageResize(),
            this.tabList.visible = !1,
            this.closeBtn2.visible = !1,
            this.noticeArr) {
                let e = [];
                this.closeBtn.visible = !0,
                this.closeBtn2.visible = !0;
                for (let t = 0; t < this.noticeArr.length; t++) {
                    let i = f.getInfoByJsonStr(this.noticeArr[t].header);
                    if (0 == this.noticeArr[t].visible)
                        continue;
                    let s = {
                        text: i,
                        isNew: +this.noticeArr[t].new
                    };
                    e.push(s)
                }
                return this.noticeArr[0] && (this.clickByte = +localStorage.getItem(this.noticeArr[0].version + ee.loginResponseData.userId)),
                this.tabList.array = e,
                void (this.tabList.visible = !0)
            }
            let e;
            e = K.noticeServerAddr && K.noticeServerAddr.length > 0 ? K.noticeServerAddr + (I.data.CHANNEL_ID || 0) : "http://49.234.214.179:8080/gameapi/app/mxdxc/api/initialinfo/index.php?channel=" + (I.data.CHANNEL_ID || 0),
            V.Singleton.send(e).then((e => {
                if (!this.stage || !this.parent)
                    return;
                let t = JSON.parse(e)
                  , i = [];
                this.noticeArr = t.announcement,
                this.noticeArr.sort(( (e, t) => e.sort > t.sort ? 1 : -1)),
                this.clickByte = Number(localStorage.getItem(this.noticeArr[0].version + ee.loginResponseData.userId));
                for (let e = 0; e < this.noticeArr.length; e++) {
                    let t = f.getInfoByJsonStr(this.noticeArr[e].header);
                    if (0 == this.noticeArr[e].visible)
                        continue;
                    let s = {
                        text: t,
                        isNew: Number(this.noticeArr[e].new)
                    };
                    i.push(s)
                }
                R.on(N.LANGUAGE_UPDATE_SET, this, this.onUpdateLanguage),
                this.tabList.array = i,
                this.tabList.visible = !0,
                this.tabList.selectedIndex = 0,
                this.onUpdateLanguage(),
                this.closeBtn.visible = !0,
                this.closeBtn2.visible = !0
            }
            )).catch((e => {}
            ))
        }
        onHide() {
            this.panel.vScrollBar && this.panel.vScrollBar.stopScroll(),
            this.closeBtn.clickHandler && this.closeBtn.clickHandler.recover(),
            this.closeBtn.clickHandler = void 0,
            this.closeBtn2.clickHandler && this.closeBtn2.clickHandler.recover(),
            this.closeBtn2.clickHandler = void 0,
            R.offAllCaller(this)
        }
        onStageResize() {
            this.width = Laya.stage.width,
            this.height = Laya.stage.height,
            this.x = 0,
            this.y = 0
        }
        onUpdateLanguage() {
            this.titleLb.text = f.getInfoByLangID(F.CHANNEL_BARRAGE),
            this.closeBtn2.label = f.getInfoByLangID(F.KNOW)
        }
        onRenderTab(e, t) {
            e.getChildByName("nameLb").text = e.dataSource.text,
            e.getChildByName("selectImg").visible = t == this.tabList.selectedIndex,
            e.getChildByName("redPointImg").visible = 1 == e.dataSource.isNew && this.clickByte >> t == 0
        }
        onSelectTab(e) {
            if (this.addItems(e),
            this.noticeArr) {
                let t = 1 << e;
                this.clickByte >> e == 0 && Number(localStorage.getItem(this.noticeArr[0].version + ee.loginResponseData.userId)) != t && (this.clickByte = 1 << e,
                localStorage.setItem(this.noticeArr[0].version + ee.loginResponseData.userId, this.clickByte.toString()))
            }
        }
        onClickClose() {
            this.removeSelf()
        }
        addItems(e=0) {
            this.dataIndex = e,
            this.panel.removeChildren(),
            this.addItemToLast()
        }
        addItemToLast() {
            let e = x.get(ye);
            e.update(this.noticeArr[this.dataIndex]),
            this.panel.addChild(e)
        }
    }
    class me extends C.scene.startInit.view.SelectServerDlgUI {
        constructor(e) {
            super(),
            this.initLayerServer = void 0,
            this.selectServerIdx = 0,
            this.maxServerIdx = 0,
            this.isInit = !1,
            this.gameType = 0,
            this.initLayerServer = e[0],
            this.gameType = e[1]
        }
        setGameType(e) {
            this.gameType = e,
            this.isInit = !1
        }
        onShow() {
            this.onStageResize(),
            this.listServer.vScrollBarSkin = "",
            this.listServer.selectEnable = !0,
            this.listServer.renderHandler = new Laya.Handler(this,this.onUpdateServerItem,null,!1),
            this.listServer.selectHandler = new Laya.Handler(this,this.onSelectServerItem,null,!1),
            this.listServerGroup.vScrollBarSkin = "",
            this.listServerGroup.selectEnable = !0,
            this.listServerGroup.renderHandler = new Laya.Handler(this,this.onUpdateServerGroupItem,null,!1),
            this.listServerGroup.selectHandler = new Laya.Handler(this,this.onSelectServerGroupItem,null,!1),
            this.recentView.on(Laya.Event.CLICK, this, this.onClickRecent),
            this.clickBg.on(Laya.Event.CLICK, this, this.onClickClose),
            0 != this.maxServerIdx && (this.updateServerGroupList(),
            this.showRecentServers(),
            this.isInit = !0),
            this.update(),
            R.on(N.LANGUAGE_UPDATE_SET, this, this.onUpdateLanguage),
            this.onUpdateLanguage(!0)
        }
        onHide() {
            this.listServer.renderHandler && this.listServer.renderHandler.recover(),
            this.listServer.renderHandler = void 0,
            this.listServer.selectHandler && this.listServer.selectHandler.recover(),
            this.listServer.selectHandler = void 0,
            this.listServerGroup.renderHandler && this.listServerGroup.renderHandler.recover(),
            this.listServerGroup.renderHandler = void 0,
            this.listServerGroup.selectHandler && this.listServerGroup.selectHandler.recover(),
            this.listServerGroup.selectHandler = void 0,
            this.recentView.off(Laya.Event.CLICK, this, this.onClickRecent),
            this.clickBg.off(Laya.Event.CLICK, this, this.onClickClose)
        }
        onStageResize() {
            this.width = Laya.stage.width,
            this.height = Laya.stage.height,
            this.x = 0,
            this.y = 0
        }
        onUpdateLanguage(e=!1) {
            this.closeTipsLb.text = f.getInfoByLangID(F.STR_2036),
            this.titleSelectLb.text = f.getInfoByLangID(F.SERVE_SELECT),
            this.statusFluentLb.text = f.getInfoByLangID(F.SMOOTH),
            this.statusBusyLb.text = f.getInfoByLangID(F.FIRE_OUT),
            this.statusMaintainLb.text = f.getInfoByLangID(F.SAFEGUARD),
            this.statusOverLb.text = f.getInfoByLangID(F.STR_2480),
            this.recentView.labelName.text = f.getInfoByLangID(F.STR_2066),
            e || (this.listServer.refresh(),
            this.listServerGroup.refresh())
        }
        update() {
            this.isInit || (this.isInit = !0,
            this.updateServerGroupList(),
            this.showRecentServers())
        }
        onClickClose() {
            this.removeSelf(),
            this.initLayerServer.showBoxBottom()
        }
        updateServerGroupList() {
            this.listServerGroup.array = G.Singleton.zoneInfos.filter((e => 1 == this.gameType ? "fugu" == e.zoneFlag : "fugu" != e.zoneFlag))
        }
        onUpdateServerGroupItem(e, t) {
            e.init(t, this.listServerGroup.getItem(t)),
            e.showSelected(this.listServerGroup.selectedIndex)
        }
        onSelectServerGroupItem(e) {
            if (-1 == e)
                return;
            this.recentView.imgSelected.visible = !1,
            this.listServerGroup.cells.forEach((e => {
                e.showSelected(this.listServerGroup.selectedIndex)
            }
            ));
            let t = this.listServerGroup.getItem(e)
              , i = G.Singleton.zoneServerInfoList.getN(t.zoneId);
            i ? this.listServer.array = i : $.Singleton.getZoneServerInfo(t.zoneId).then(( () => {
                this.listServer.array = G.Singleton.zoneServerInfoList.getN(t.zoneId)
            }
            ))
        }
        onUpdateServerItem(e, t) {
            e.init(this.listServer.getItem(t))
        }
        onSelectServerItem(e) {
            if (-1 == e)
                return;
            let t = this.listServer.getItem(e);
            this.initLayerServer.onSelectServer(t),
            this.onClickClose(),
            this.listServer.selectedIndex = -1
        }
        showRecentServers() {
            this.recentView.imgSelected.visible = !0,
            this.listServer.array = G.Singleton.recentServers.filter((e => 1 == this.gameType ? "fugu" == e.zoneFlag : "fugu" != e.zoneFlag))
        }
        onClickRecent() {
            this.listServerGroup.selectedIndex = -1,
            this.listServerGroup.cells.forEach((e => {
                e.showSelected(-1)
            }
            )),
            this.showRecentServers()
        }
    }
    class we extends C.scene.startInit.view.AgeTipsUI {
        constructor() {
            super()
        }
        onShow() {
            this.stage && this.parent ? (this.visible = !0,
            this.onStageResize(),
            this.closeBtn.clickHandler = Laya.Handler.create(this, this.onClickClose, null, !1),
            this.closeBtn2.clickHandler = Laya.Handler.create(this, this.onClickSure, null, !1),
            this.closeBtn2.label = f.getInfoByLangID(F.KNOW),
            this.titleLb.text = f.getInfoByLangID(F.TIPS_TITLE),
            this.panel.vScrollBarSkin = "",
            this.panel.removeChildren(),
            this.updatePanel()) : this.visible = !1
        }
        onHide() {
            this.closeBtn.clickHandler && this.closeBtn.clickHandler.recover(),
            this.closeBtn.clickHandler = void 0,
            this.closeBtn2.clickHandler && this.closeBtn2.clickHandler.recover(),
            this.closeBtn2.clickHandler = void 0
        }
        onStageResize() {
            this.width = Laya.stage.width,
            this.height = Laya.stage.height,
            this.x = 0,
            this.y = 0
        }
        updatePanel() {
            let e = x.get(ye);
            e.updateAgeTips({
                header: f.getInfoByLangID(F.GAME_AGE_TIPS_TITLE),
                text: f.getInfoByLangID(F.GAME_AGE_TIPS)
            }),
            this.panel.addChild(e)
        }
        onClickClose() {
            this.removeSelf()
        }
        onClickSure() {
            this.removeSelf()
        }
    }
    class _e extends C.scene.startInit.view.SetDlgUI {
        constructor() {
            super()
        }
        onInit() {
            this.titleLb.text = f.getInfoByLangID(F.STR_3035),
            this.lblTip.text = f.getInfoByLangID(F.STR_3033),
            this.viewCompatible.lblTitle.text = f.getInfoByLangID(F.STR_3032),
            this.closeTipsLb.text = f.getInfoByLangID(F.STR_2036),
            this.closeBtn.clickHandler = new Laya.Handler(this,this.onBtnCloseClick),
            this.clickBg.on(Laya.Event.CLICK, this, this.onBtnCloseClick)
        }
        onShow() {
            this.updateSetView(this.viewCompatible, j.Compatible),
            this.onStageResize()
        }
        updateSetView(e, t) {
            let i = J.Singleton.getSetValue(t);
            e.imgSelect.visible = "1" == i,
            e.on(Laya.Event.CLICK, this, ( () => {
                J.Singleton.setSetValue(t, "1" == i ? "0" : "1"),
                e.imgSelect.visible = !e.imgSelect.visible
            }
            ))
        }
        onBtnCloseClick() {
            this.destroy()
        }
        onStageResize() {
            this.width = Laya.stage.width,
            this.height = Laya.stage.height,
            this.x = 0,
            this.y = 0
        }
    }
    var ve;
    !function(e) {
        e.compareVersion = function(e, t, i) {
            return i(+e.replace(".", ""), +t.replace(".", ""))
        }
        ,
        e.getCenterFlg = function() {
            return I.data.CENTER_FLAG || "mlbb_newfg"
        }
    }(ve || (ve = {}));
    class fe extends C.scene.startInit.InitLayerServerUI {
        constructor() {
            super(),
            this.serverView = void 0,
            this.noticeView = void 0,
            this.ageTipsView = void 0,
            this.storageKey = "GameType",
            this._gameType = 0
        }
        onInit() {
            this.btn0.clickHandler = new Laya.Handler(this,this.onBtn0Click),
            this.btn1.clickHandler = new Laya.Handler(this,this.onBtn1Click),
            this.btnSet.clickHandler = new Laya.Handler(this,this.onBtnSetClick),
            this.btnSet.label = f.getInfoByLangID(F.STR_3035),
            this.btnClear.visible = I.data.YOFISDK,
            this.btnClear.label = f.getInfoByLangID(F.STR_3034),
            this.btnClear.clickHandler = new Laya.Handler(this,this.onBtnClearClick)
        }
        onBtnClearClick() {
            I.data.YOFISDKWEB ? window.clearPcCache && window.clearPcCache() : M.clearCache()
        }
        onShow() {
            this.onStageResize(),
            X.hideLoadingLog(),
            this.nextStepBtn.name = "btnEnterGame";
            let e = fe.LogoDic[I.data.CHANNEL_ID];
            e || (e = 2),
            this.IOStipBox.visible = !1,
            window.isIOS && window.isIOS() && 1 == f.edition ? (this.logoImg.skin = "atlas/ui/startInit/bg_logo_cn.png",
            this.IOStipBox.visible = !0,
            E.getLandFlag() || (this.tipBox.bottom = 0)) : (this.logoImg.skin = f.getSkinByURL(`atlas/ui/startInit/icon_init_logo_${e}_cn.png`),
            0 == e && (this.imgShadow.skin = f.getSkinByURL(`atlas/ui/startInit/bg_login_projection_${e}_cn.png`)),
            E.getLandFlag() ? this.tipBox.bottom = 0 : this.tipBox.bottom = 82),
            this.logoImg.visible = ![60001, 60002].includes(I.data.CHANNEL_ID) && !["mlbb_yomagb"].includes(ve.getCenterFlg()),
            this.imgShadow.visible = this.logoImg.visible && 0 == e,
            60002 == I.data.CHANNEL_ID && (this.layerBg.skin = "atlas/ui/startInit/bg_init_login_land2.jpg");
            let t = Laya.LocalStorage.getItem(this.storageKey);
            t && (this._gameType = +t),
            this.updateGameType(),
            this.showNotice(),
            this.onUpdateLanguage(),
            this.nextStepBtn.clickHandler = Laya.Handler.create(this, this.onClickEnter, null, !1),
            this.serverSelectBtn.clickHandler = Laya.Handler.create(this, this.onClickSelectServer, null, !1),
            this.noticeBtn.clickHandler = Laya.Handler.create(this, this.onClickNotice, null, !1),
            this.logoutBtn.clickHandler = Laya.Handler.create(this, this.onClickLogout, null, !1),
            this.cadpaBtn.clickHandler = Laya.Handler.create(this, this.onClickCadpa, null, !1),
            this.cadpaBtn.visible = 1 == f.edition,
            Laya.stage.on(Laya.Event.RESIZE, this, this.onStageResize);
            let i = I.data.CENTER_FLAG;
            i || 5 != y.Singleton.getSdkMode() && 10 != y.Singleton.getSdkMode() && 6 != y.Singleton.getSdkMode() || (i = "mlbb_newfg");
            this.btn0.visible = false,
            this.btn1.visible = false,
            L.Singleton.reportEvent(u.serverlist)
        }
        onHide() {
            this.serverView = void 0,
            this.noticeView = void 0,
            this.ageTipsView = void 0,
            this.nextStepBtn.clickHandler && this.nextStepBtn.clickHandler.recover(),
            this.nextStepBtn.clickHandler = void 0,
            this.serverSelectBtn.clickHandler && this.serverSelectBtn.clickHandler.recover(),
            this.serverSelectBtn.clickHandler = void 0,
            this.noticeBtn.clickHandler && this.noticeBtn.clickHandler.recover(),
            this.noticeBtn.clickHandler = void 0,
            this.logoutBtn.clickHandler && this.logoutBtn.clickHandler.recover(),
            this.logoutBtn.clickHandler = void 0,
            this.cadpaBtn.clickHandler && this.cadpaBtn.clickHandler.recover(),
            this.cadpaBtn.clickHandler = void 0,
            Laya.stage.off(Laya.Event.RESIZE, this, this.onStageResize),
            R.offAllCaller(this)
        }
        onUpdateLanguage() {
            this.noticeBtn.label = f.getInfoByLangID(F.CHANNEL_BARRAGE),
            this.nextStepBtn.skin = _.Singleton.getSkinByURL("atlas/ui/startInit/text_login_nextstep_cn.png"),
            this.selectLb.text = f.getInfoByLangID(F.SELECT_OU);
            let e = I.data.CHANNEL_ID == y.CHANNEL_BILIBILI || I.data.CHANNEL_ID == y.CHANNEL_4399 || I.data.CHANNEL_ID == y.CHANNEL_QQGAME;
            E.getLandFlag() ? (this.tipsLb.text = f.getInfoByLangID(F.GAME_TIP_LAND),
            e && (this.tipsLb.text += f.getInfoByLangID(L.isQQGameSdk() ? F.GAME_NAME_INFO_LAND_QQ : F.GAME_NAME_INFO_LAND))) : (this.tipsLb.text = f.getInfoByLangID(F.GAME_TIP),
            e && (this.tipsLb.text += f.getInfoByLangID(F.GAME_NAME_INFO))),
            ["mlbb_yomagb"].includes(ve.getCenterFlg()) && (this.tipsLb.text = f.getInfoByLangID(F.GAME_NAME_INFO_YOMA) + "\n" + this.tipsLb.text),
            this.imgTip.height = this.tipsLb.textField.height + (E.getLandFlag() ? 37 : 8),
            E.isTw() && (this.tipsLb.visible = !1);
            let t = y.Singleton.getSdkMode();
            I.data.YOFISDKWEB && 2 == t ? (this.logoutBtn.visible = !0,
            this.logoutBtn.label = f.getInfoByLangID(F.STR_3022)) : I.isOnNative() ? (this.logoutBtn.visible = !0,
            this.logoutBtn.label = f.getInfoByLangID(F.STR_1935)) : this.logoutBtn.visible = !1,
            this.sdkVersionLbl.text = f.getInfoByLangID(F.STR_2402).format(I.GAME_VERSION),
            this.gameVersionLbl.visible = !1,
            this.channelVersionLbl.text = f.getInfoByLangID(F.STR_2404).format(I.data.CHANNEL_ID),
            this.appVersionL.text = "应用版本：0.1",
            I.isOnNative() && M.getVersion().then((e => {
                e && this.appVersionL && (this.appVersionL.text = "应用版本：" + e)
            }
            )),
            this.updateStatus()
        }
        updateStatus() {
            let e = G.Singleton.serverInfoSelect;
            e ? (this.serverNameLb.text = e.serverName,
            2 == e.state ? (this.serverStatusImg.skin = "atlas/ui/startInit/icon_init_busy.png",
            this.serverStatusLb.text = f.getInfoByLangID(F.FIRE_OUT)) : 3 == e.state ? (this.serverStatusImg.skin = "atlas/ui/startInit/icon_init_overload.png",
            this.serverStatusLb.text = f.getInfoByLangID(F.STR_2480)) : 1 == e.state ? (this.serverStatusImg.skin = "atlas/ui/startInit/icon_init_fluent.png",
            this.serverStatusLb.text = f.getInfoByLangID(F.SMOOTH)) : 4 != e.state && 0 != e.state || (this.serverStatusImg.skin = "atlas/ui/startInit/icon_init_maintain.png",
            this.serverStatusLb.text = f.getInfoByLangID(F.SAFEGUARD))) : this.serverNameLb.text = _.Singleton.getLocalInfoByLangId(F.NO_SERVER)
        }
        onStageResize() {
            this.width = Laya.stage.width,
            this.height = Laya.stage.height,
            E.getLandFlag() ? (this.versionImg.left = E.getLeftOffset() + 10,
            this.cadpaBtn.left = E.getLeftOffset() + 10) : (this.versionImg.top = E.getTopOffset() + 20,
            this.cadpaBtn.top = E.getTopOffset() + 130,
            this.layerBg.y = this.height - this.layerBg.height >> 1)
        }
        showBoxBottom() {
            this.boxBottom.visible = !0
        }
        onSelectServer(e) {
            G.Singleton.serverInfoSelect = e,
            this.updateStatus()
        }
        onClickSelectServer() {
            this.boxBottom.visible = !1,
            this.serverView ? (this.serverView.setGameType(this._gameType),
            this.addChild(this.serverView)) : X.create(me, [this, this.gameType]).then((e => {
                Laya.timer.callLater(null, ( () => {
                    this.serverView = e,
                    this.addChild(this.serverView)
                }
                ))
            }
            ))
        }
        onClickEnter() {
            X.showLoadingLog(f.getLocalInfoByLangId(5));
            let e = G.Singleton.serverInfoSelect;
            e ? 0 != e.state ? e.ip ? 4 != e.state ? 3 == G.Singleton.serverInfoSelect.state ? $.Singleton.queryServerStatusIsOk().then((t => {
                t || $.Singleton.queryIsHasRoleInServer(e.serverId) ? this.onEnterGame() : X.showAlert({
                    content: f.getInfoByLangID(F.STR_2458),
                    showCancelBtn: !1
                })
            }
            )).catch((e => {
                X.showAlert({
                    content: f.getLocalInfoByLangId(20),
                    showCancelBtn: !1
                })
            }
            )) : L.isQQGameSdk() && !localStorage.getItem("qq_policy" + S.Singleton.openid) ? Laya.Scene.open("scene/startInit/view/PolicyView.scene", !1, this.onEnterGame.bind(this)) : this.onEnterGame() : X.showAlert({
                content: f.getInfoByLangID(F.SYSTEM_LOGIN_INVALID),
                showCancelBtn: !1,
                color: Z.Singleton.WHITE
            }) : X.showAlert({
                content: f.getInfoByLangID(F.SERVER_UN_OPEN),
                showCancelBtn: !1,
                color: Z.Singleton.WHITE
            }) : X.showAlert({
                content: f.getInfoByLangID(F.STR_2395).format(W.getYMDHMS2(1e3 * e.openTimestamp)),
                showCancelBtn: !1,
                color: Z.Singleton.WHITE
            }) : X.showAlert({
                content: f.getInfoByLangID(F.SYSTEM_LOGIN_SERVECHANGE),
                showCancelBtn: !1,
                color: Z.Singleton.WHITE
            })
        }
        onEnterGame() {
            let e = G.Singleton.serverInfoSelect;
            this.nextStepBtn.clickHandler && this.nextStepBtn.clickHandler.recover(),
            this.nextStepBtn.clickHandler = void 0,
            o.set(o.LAST_SERVER_IDX, JSON.stringify(e)),
            $.Singleton.reqStateHttp(i.GOTO_GAME_HTML),
            $.Singleton.openGameUrl()
        }
        onClickNotice() {
            this.showNotice()
        }
        showNotice() {
            this.noticeView ? this.addChild(this.noticeView) : X.create(Ie, this).then((e => {
                Laya.timer.callLater(null, ( () => {
                    this.noticeView = e,
                    this.addChild(this.noticeView)
                }
                ))
            }
            ))
        }
        onClickLogout() {
            let e = y.Singleton.getSdkMode();
            I.data.YOFISDKWEB && 2 == e ? (o.remove(o.RECENTLY_SDK_TOKEN),
            $.Singleton.windowReload()) : I.isOnNative() ? M.logout(( (e, t) => {
                0 == e ? $.Singleton.windowReload() : O.AddTipSimple(f.getInfoByLangID(F.STR_1936))
            }
            )) : L.isH5WebSDK() && L.Singleton.logout({}, ( (e, t) => {
                0 == e ? $.Singleton.windowReload() : O.AddTipSimple(f.getInfoByLangID(F.STR_1936))
            }
            ))
        }
        onClickCadpa() {
            this.ageTipsView ? this.addChild(this.ageTipsView) : X.create(we, this).then((e => {
                Laya.timer.callLater(null, ( () => {
                    this.ageTipsView = e,
                    this.addChild(this.ageTipsView)
                }
                ))
            }
            ))
        }
        onBtn0Click() {
            this.gameType = 0,
            Laya.LocalStorage.setItem(this.storageKey, "0")
        }
        onBtn1Click() {
            this.gameType = 1,
            Laya.LocalStorage.setItem(this.storageKey, "1")
        }
        onBtnSetClick() {
            X.create(_e).then((e => {
                this.addChild(e)
            }
            ))
        }
        set gameType(e) {
            this._gameType != e && (this._gameType = e,
            this.updateGameType())
        }
        get gameType() {
            return this._gameType
        }
        updateGameType() {
            let e = "atlas/ui/startInit/btn_login_select.png"
              , t = "atlas/ui/startInit/btn_login_unchecked.png";
            this.btn0.skin = 0 == this._gameType ? e : t,
            this.btn1.skin = 1 == this._gameType ? e : t,
            this.btnImage0.skin = _.Singleton.getSkinByURL(0 == this._gameType ? "atlas/ui/startInit/text_login_returnselect_cn.png" : "atlas/ui/startInit/text_login_returnunchecked_cn.png"),
            this.btnImage1.skin = _.Singleton.getSkinByURL(1 == this._gameType ? "atlas/ui/startInit/text_login_retroselect_cn.png" : "atlas/ui/startInit/text_login_retrounchecked_cn.png"),
            G.Singleton.serverInfoSelect = null;
            let i = G.Singleton.recentServers;
            if (i && i.length > 0 && (G.Singleton.serverInfoSelect = i.filter((e => 1 == this.gameType ? "fugu" == e.zoneFlag : "fugu" != e.zoneFlag))[0]),
            !G.Singleton.serverInfoSelect) {
                let e = G.Singleton.zoneInfos;
                e = e.filter((e => 1 == this.gameType ? "fugu" == e.zoneFlag : "fugu" != e.zoneFlag));
                let t = e[0];
                if (t) {
                    let e = G.Singleton.zoneServerInfoList.getN(t.zoneId);
                    e && (G.Singleton.serverInfoSelect = e[0])
                }
            }
            this.updateStatus(),
            G.Singleton.serverInfoSelect || O.AddTipSimple("serverInfoSelect 没有服务器可选!")
        }
    }
    fe.LogoDic = {
        20001: 1,
        20002: 1,
        20005: 1,
        11029: 1,
        11030: 1,
        11031: 1,
        11032: 1,
        13e3: 1,
        10012: 1,
        11038: 1,
        20003: 2,
        50002: 3,
        50001: 4,
        20006: 5,
        20007: 6,
        20008: 7,
        20010: 8
    };
    class Ee extends C.scene.startInit.InitSceneUI {
        constructor() {
            super()
        }
        onShow() {
            Laya.stage.on(Laya.Event.RESIZE, this, this.onStageResize),
            this.onStageResize(),
            this.initLayerAccount.onUpdateLanguage(),
            this.initLayerAccount.visible = !0
        }
        onHide() {
            Laya.stage.offAllCaller(this)
        }
        onStageResize() {
            this.width = Laya.stage.width,
            this.height = Laya.stage.height
        }
    }
    class Ce extends C.scene.startInit.view.PolicyViewUI {
        constructor() {
            super()
        }
        onShow() {
            this.onStageResize(),
            this.quxiaoBtn.clickHandler = Laya.Handler.create(this, this.onClickCanel, null, !1),
            this.querenBtn.clickHandler = Laya.Handler.create(this, this.onClickSure, null, !1),
            this.querenBtn.label = f.getInfoByLangID(F.SURE),
            this.quxiaoBtn.label = f.getInfoByLangID(F.CANCEL),
            this.contentHTML.style.width = 400,
            this.contentHTML.width = 400,
            this.contentHTML.style.font = "Arial",
            this.contentHTML.style.color = "#F1F1F3",
            this.contentHTML.style.fontSize = 30,
            this.contentHTML.style.leading = 15,
            this.contentHTML.style.valign = "top",
            this.contentHTML.innerHTML = "为了保护您的个人权益和隐私安全,请详细阅读并同意《<span color='#527ce8' href='licenseServiceAgreement'>游斐游戏许可及服务协议</span>》",
            this.contentHTML.style.width = this.contentHTML.contextWidth + 20,
            this.contentHTML.width = this.contentHTML.contextWidth,
            this.contentHTML.style.height = this.contentHTML.contextHeight,
            this.contentHTML.height = this.contentHTML.contextHeight,
            this.contentHTML.on(Laya.Event.LINK, this, this.onAgreementLink)
        }
        onHide() {
            this.quxiaoBtn.clickHandler && this.quxiaoBtn.clickHandler.recover(),
            this.quxiaoBtn.clickHandler = void 0,
            this.querenBtn.clickHandler && this.querenBtn.clickHandler.recover(),
            this.querenBtn.clickHandler = void 0,
            this.quxiaoBtn.visible = !0,
            this.querenBtn.visible = !0
        }
        onOpened(e) {
            this.completeCB = e
        }
        onStageResize() {
            this.width = Laya.stage.width,
            this.height = Laya.stage.height
        }
        onClickSure() {
            Laya.LocalStorage.setItem("qq_policy" + S.Singleton.openid, "1"),
            this.completeCB(),
            this.removeSelf()
        }
        onClickCanel() {
            this.removeSelf()
        }
        onAgreementLink(e) {
            var t = Laya.Browser.window.document.createElement("iframe");
            t.id = "agreementFrame",
            t.setAttribute("src", "https://sdk.gateway.yofijoy.com/sdk/api/v1/h5/privacyPolicy.html"),
            t.setAttribute("frameborder", 0);
            var i = Laya.Browser.window.document.getElementsByTagName("body")[0];
            i.appendChild(t);
            let s = Laya.Browser.window.document.body.clientWidth
              , n = s * Laya.stage.height / Laya.stage.width;
            t.setAttribute("width", s),
            t.setAttribute("height", n),
            t.setAttribute("style", "position: absolute; z-index: 100009;");
            var a = Laya.Browser.window.document.createElement("div");
            a.id = "agreementCloseButton",
            i.appendChild(a),
            a.setAttribute("style", `position: absolute; z-index: 100010; height: 100px; width: 100px; right: 30px; top: 50px; background-image: url('${Laya.URL.formatURL("./atlas/ui/startInit/policy_close.png")}'); background-size: 100% 100%`),
            a.addEventListener("click", (function() {
                var e = Laya.Browser.window.document.getElementById("agreementFrame");
                e && e.parentNode.removeChild(e);
                var t = Laya.Browser.window.document.getElementById("agreementCloseButton");
                t && t.parentNode.removeChild(t)
            }
            ))
        }
    }
    class ke extends C.scene.startInit.view.ServerGroupItemUI {
        constructor() {
            super(),
            this.uiidx = 0
        }
        init(e, t) {
            this.uiidx = e,
            this.labelName.text = t.zoneName,
            this.imgBg.skin = `atlas/ui/startInit/bg_login_colorseparation_0${1 == +t.zoneFlag ? 1 : 2}.png`
        }
        showSelected(e) {
            this.imgSelected.visible = this.uiidx == e
        }
    }
    class Te extends C.scene.startInit.view.ServerItemUI {
        constructor() {
            super()
        }
        init(e) {
            switch (this.labelName.text = e.serverName,
            e.state) {
            case 0:
            case 4:
                this.statusImg.skin = "atlas/ui/startInit/icon_init_maintain.png";
                break;
            case 1:
                this.statusImg.skin = "atlas/ui/startInit/icon_init_fluent.png";
                break;
            case 2:
                this.statusImg.skin = "atlas/ui/startInit/icon_init_busy.png";
                break;
            case 3:
                this.statusImg.skin = "atlas/ui/startInit/icon_init_overload.png"
            }
        }
    }
    class Ae extends C.scene.startSdk.YofiSdkFindPsdUI {
        constructor() {
            super(),
            this.a = !0
        }
        onInit() {
            this.backBtn.clickHandler = Laya.Handler.create(this, this.onBackClick, null, !1),
            this.phoneInput.on(Laya.Event.CHANGE, this, this.onPhonInputChange),
            this.codeInput.on(Laya.Event.CHANGE, this, this.onCodeInputChange),
            this.passwordInput.on(Laya.Event.CHANGE, this, this.onPsdInputChange),
            this.phoneInput.maxChars = 11,
            this.codeInput.maxChars = 6,
            this.passwordInput.maxChars = 11,
            this.verifyCodeBtn.clickHandler = Laya.Handler.create(this, this.onCodeBtnClick, null, !1),
            this.registerBtn.clickHandler = Laya.Handler.create(this, this.onRegisterBtn, null, !1),
            this.passwordBtn.clickHandler = Laya.Handler.create(this, this.onPsdwordClick, null, !1)
        }
        onShow() {
            this.width = Laya.stage.width,
            this.height = Laya.stage.height
        }
        onHide() {}
        onPhonInputChange() {}
        onCodeInputChange() {}
        onPsdInputChange() {}
        onCodeBtnClick() {
            6 <= this.phoneInput.text.length ? ee.sdk.sendNode(+this.phoneInput.text, ee.responseNoteCB) : O.AddTipSimple("手机号位数不对")
        }
        onBackClick() {
            Laya.Scene.close("scene/sdk/YofiSdkFindPsd.scene"),
            Laya.Scene.open("scene/sdk/YofiSdkLogin.scene", !1)
        }
        onRegisterBtn() {
            6 <= this.phoneInput.text.length ? 0 != this.codeInput.text.length ? 0 != this.passwordInput.text.length ? ee.sdk.retrievePass(this.passwordInput.text, this.phoneInput.text, this.codeInput.text, ee.responseCB) : O.AddTipSimple("密码不能为空") : O.AddTipSimple("验证码不能为空") : O.AddTipSimple("手机号位数不对")
        }
        onPsdwordClick() {
            this.a ? this.passwordInput.type = "text" : this.passwordInput.type = "password",
            this.passwordInput.textField.text = this.passwordInput.text,
            this.a = !this.a
        }
    }
    class De extends C.scene.startSdk.YofiSdkLoginUI {
        constructor() {
            super()
        }
        onInit() {
            this.guestBtn.clickHandler = Laya.Handler.create(this, this.onGuestClick, null, !1),
            this.registerBtn.clickHandler = Laya.Handler.create(this, this.onRegisterClick, null, !1),
            this.loginBtn.clickHandler = Laya.Handler.create(this, this.onClickLogin, null, !1),
            this.forgetBtn.clickHandler = Laya.Handler.create(this, this.onForgetClick, null, !1)
        }
        onShow() {
            this.width = Laya.stage.width,
            this.height = Laya.stage.height
        }
        onHide() {
            this.guestBtn.clickHandler.recover()
        }
        onForgetClick() {
            Laya.Scene.close("scene/sdk/YofiSdkLogin.scene"),
            Laya.Scene.open("scene/sdk/YofiSdkFindPsd.scene", !1)
        }
        onGuestClick() {
            ee.sdk.login(ee.responseCB, 0)
        }
        onRegisterClick() {
            Laya.Scene.close("scene/sdk/YofiSdkLogin.scene"),
            Laya.Scene.open("scene/sdk/YofiSdkRegister.scene", !1)
        }
        onClickLogin() {
            6 <= this.phoneInput.text.length ? 0 != this.psdInput.text.length ? (De.phoneNumber = +this.phoneInput.text,
            De.psd = this.psdInput.text,
            ee.sdk.login(ee.responseCB, 1, this.phoneInput.text, this.psdInput.text)) : O.AddTipSimple("密码不能为空") : O.AddTipSimple("手机号位数不对")
        }
    }
    class Be extends C.scene.startSdk.YofiSdkRegisterUI {
        constructor() {
            super(),
            this.a = !0
        }
        onInit() {
            this.backBtn.clickHandler = Laya.Handler.create(this, this.onBackClick, null, !1),
            this.phoneInput.on(Laya.Event.CHANGE, this, this.onPhonInputChange),
            this.codeInput.on(Laya.Event.CHANGE, this, this.onCodeInputChange),
            this.passwordInput.on(Laya.Event.CHANGE, this, this.onPsdInputChange),
            this.phoneInput.maxChars = 11,
            this.codeInput.maxChars = 6,
            this.passwordInput.maxChars = 11,
            this.verifyCodeBtn.clickHandler = Laya.Handler.create(this, this.onCodeBtnClick, null, !1),
            this.registerBtn.clickHandler = Laya.Handler.create(this, this.onRegisterBtn, null, !1),
            this.passwordBtn.clickHandler = Laya.Handler.create(this, this.onPsdwordClick, null, !1)
        }
        onShow() {
            this.width = Laya.stage.width,
            this.height = Laya.stage.height
        }
        onHide() {}
        onPhonInputChange() {}
        onCodeInputChange() {}
        onPsdInputChange() {}
        onCodeBtnClick() {
            6 <= this.phoneInput.text.length ? ee.sdk.sendNode(+this.phoneInput.text, ee.responseNoteCB) : O.AddTipSimple("手机号位数不对")
        }
        onBackClick() {
            Laya.Scene.close("scene/sdk/YofiSdkRegister.scene"),
            Laya.Scene.open("scene/sdk/YofiSdkLogin.scene", !1)
        }
        onRegisterBtn() {
            6 <= this.phoneInput.text.length ? 0 != this.codeInput.text.length ? 0 != this.passwordInput.text.length ? ee.sdk.register(this.passwordInput.text, this.phoneInput.text, this.codeInput.text, ee.responseCB) : O.AddTipSimple("密码不能为空") : O.AddTipSimple("验证码不能为空") : O.AddTipSimple("手机号位数不对")
        }
        onPsdwordClick() {
            this.a ? this.passwordInput.type = "text" : this.passwordInput.type = "password",
            this.a = !this.a
        }
    }
    class be extends C.scene.startWebsdk2.WebSdk2LayerLoginUI {
        constructor() {
            super()
        }
        onShow() {
            this.width = Laya.stage.width,
            this.height = Laya.stage.height,
            this.accountInput.prompt = "請輸入郵箱",
            this.passwordInput.prompt = "請輸入密碼",
            this.passwordInput.maxChars = 20,
            this.passwordInput.type = Laya.Input.TYPE_PASSWORD;
            let e = o.get(o.RECENTLY_SDK_LOGIN);
            if (e) {
                let t = JSON.parse(e);
                if (t.length > 0) {
                    let e = t[0];
                    this.accountInput.text = e[0],
                    this.passwordInput.text = e[1]
                }
            }
            this.forgotPsd.text = "忘記密碼?",
            this.forgotPsd.on(Laya.Event.CLICK, this, this.onClickForget),
            this.registerBtn.text.text = "註冊賬號",
            this.registerBtn.clickHandler = Laya.Handler.create(this, this.onClickRegister, null, !1),
            this.loginBtn.text.text = "登入",
            this.loginBtn.clickHandler = Laya.Handler.create(this, this.onClickLogin, null, !1),
            this.facebookBtn.clickHandler = Laya.Handler.create(this, this.onClickFacebook, null, !1),
            this.appleBtn.clickHandler = Laya.Handler.create(this, this.onClickApple, null, !1),
            this.googleBtn.clickHandler = Laya.Handler.create(this, this.onClickGoogle, null, !1),
            window.createThirdWindow ? (this.facebookBtn.visible = !0,
            this.appleBtn.visible = !0,
            this.googleBtn.visible = !0) : (this.facebookBtn.visible = !1,
            this.appleBtn.visible = !1,
            this.googleBtn.visible = !1)
        }
        onHide() {
            this.forgotPsd.off(Laya.Event.CLICK, this, this.onClickForget),
            this.loginBtn.clickHandler && this.loginBtn.clickHandler.recover(),
            this.loginBtn.clickHandler = void 0,
            this.registerBtn.clickHandler && this.registerBtn.clickHandler.recover(),
            this.registerBtn.clickHandler = void 0,
            this.facebookBtn.clickHandler && this.facebookBtn.clickHandler.recover(),
            this.facebookBtn.clickHandler = void 0,
            this.appleBtn.clickHandler && this.appleBtn.clickHandler.recover(),
            this.appleBtn.clickHandler = void 0,
            this.googleBtn.clickHandler && this.googleBtn.clickHandler.recover(),
            this.googleBtn.clickHandler = void 0
        }
        onClickForget() {
            Laya.Scene.open("scene/startWebsdk2/WebSdk2LayerPasswordReset.scene", !1),
            Laya.Scene.close("scene/startWebsdk2/WebSdk2LayerLogin.scene")
        }
        onClickRegister() {
            Laya.Scene.open("scene/startWebsdk2/WebSdk2LayerRegister.scene", !1),
            Laya.Scene.close("scene/startWebsdk2/WebSdk2LayerLogin.scene")
        }
        onClickLogin() {
            if (/^([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(this.accountInput.text))
                if (0 != this.passwordInput.text.length)
                    if (this.passwordInput.text.length < 6 || this.passwordInput.text.length > 20)
                        O.AddTipSimple("密碼長度為6-20位");
                    else {
                        /^[a-zA-Z0-9]{6,20}$/.test(this.passwordInput.text) ? (ee.recentlyAccount = this.accountInput.text,
                        ee.recentlyPassword = this.passwordInput.text,
                        ee.sdk.login(ee.responseCB, 8, this.accountInput.text, this.passwordInput.text)) : O.AddTipSimple("密碼只能由大小寫字母和數字組成")
                    }
                else
                    O.AddTipSimple("密碼不能為空");
            else
                O.AddTipSimple("郵箱格式不正確")
        }
        onClickFacebook() {
            ee.sdk.thirdLogin(6)
        }
        onClickApple() {
            ee.sdk.thirdLogin(5)
        }
        onClickGoogle() {
            ee.sdk.thirdLogin(7)
        }
    }
    class Ne extends C.scene.startWebsdk2.WebSdk2LayerPasswordResetUI {
        constructor() {
            super()
        }
        onShow() {
            this.width = Laya.stage.width,
            this.height = Laya.stage.height,
            this.accountInput.prompt = "請輸入郵箱",
            this.passwordInput.prompt = "請輸入密碼",
            this.passwordInput.maxChars = 20,
            this.passwordInput.type = Laya.Input.TYPE_PASSWORD,
            this.passwordInput2.prompt = "請重複輸入密碼",
            this.passwordInput2.maxChars = 20,
            this.passwordInput2.type = Laya.Input.TYPE_PASSWORD,
            this.codeInput.prompt = "請輸入驗證碼",
            this.codeBtn.text.text = "獲取驗證碼",
            this.codeBtn.clickHandler = Laya.Handler.create(this, this.onClickCode, null, !1),
            this.cancelBtn.text.text = "取消",
            this.cancelBtn.clickHandler = Laya.Handler.create(this, this.onClickCancel, null, !1),
            this.commitBtn.text.text = "確認",
            this.commitBtn.clickHandler = Laya.Handler.create(this, this.onClickCommit, null, !1)
        }
        onHide() {
            this.codeBtn.clickHandler && this.codeBtn.clickHandler.recover(),
            this.codeBtn.clickHandler = void 0,
            this.cancelBtn.clickHandler && this.cancelBtn.clickHandler.recover(),
            this.cancelBtn.clickHandler = void 0,
            this.commitBtn.clickHandler && this.commitBtn.clickHandler.recover(),
            this.commitBtn.clickHandler = void 0
        }
        onClickCode() {
            /^([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(this.accountInput.text) ? ee.sdk.sendEmail(this.accountInput.text, 2, ee.responsEmailCB) : O.AddTipSimple("郵箱格式不正確")
        }
        onClickCancel() {
            Laya.Scene.open("scene/startWebsdk2/WebSdk2LayerLogin.scene", !1),
            Laya.Scene.close("scene/startWebsdk2/WebSdk2LayerPasswordReset.scene")
        }
        onClickCommit() {
            if (0 != this.codeInput.text.length) {
                if (/^([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(this.accountInput.text))
                    if (0 != this.passwordInput.text.length)
                        if (this.passwordInput.text.length < 6)
                            O.AddTipSimple("密碼最短為6位");
                        else {
                            /^[a-zA-Z0-9]{6,20}$/.test(this.passwordInput.text) ? this.passwordInput.text == this.passwordInput2.text ? (ee.recentlyAccount = this.accountInput.text,
                            ee.recentlyPassword = this.passwordInput.text,
                            ee.sdk.retrievePass(this.passwordInput.text, this.accountInput.text, this.codeInput.text, ee.responseCB)) : O.AddTipSimple("兩次輸入的密碼不同") : O.AddTipSimple("密碼格式不規範")
                        }
                    else
                        O.AddTipSimple("密碼不能為空");
                else
                    O.AddTipSimple("郵箱格式不正確")
            } else
                O.AddTipSimple("驗證碼不能為空")
        }
    }
    class He extends C.scene.startWebsdk2.WebSdk2LayerRegisterUI {
        constructor() {
            super()
        }
        onShow() {
            this.width = Laya.stage.width,
            this.height = Laya.stage.height,
            this.accountInput.prompt = "請輸入郵箱",
            this.passwordInput.prompt = "請輸入密碼",
            this.passwordInput.maxChars = 20,
            this.passwordInput.type = Laya.Input.TYPE_PASSWORD,
            this.passwordInput2.prompt = "請重複輸入密碼",
            this.passwordInput2.maxChars = 20,
            this.passwordInput2.type = Laya.Input.TYPE_PASSWORD,
            this.codeInput.prompt = "請輸入驗證碼",
            this.codeBtn.text.text = "獲取驗證碼",
            this.codeBtn.clickHandler = Laya.Handler.create(this, this.onClickCode, null, !1),
            this.cancelBtn.text.text = "取消",
            this.cancelBtn.clickHandler = Laya.Handler.create(this, this.onClickCancel, null, !1),
            this.commitBtn.text.text = "確認",
            this.commitBtn.clickHandler = Laya.Handler.create(this, this.onClickCommit, null, !1)
        }
        onHide() {
            this.codeBtn.clickHandler && this.codeBtn.clickHandler.recover(),
            this.codeBtn.clickHandler = void 0,
            this.cancelBtn.clickHandler && this.cancelBtn.clickHandler.recover(),
            this.cancelBtn.clickHandler = void 0,
            this.commitBtn.clickHandler && this.commitBtn.clickHandler.recover(),
            this.commitBtn.clickHandler = void 0
        }
        onClickCode() {
            /^([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(this.accountInput.text) ? ee.sdk.sendEmail(this.accountInput.text, 1, ee.responsEmailCB) : O.AddTipSimple("郵箱格式不正確")
        }
        onClickCancel() {
            Laya.Scene.open("scene/startWebsdk2/WebSdk2LayerLogin.scene", !1),
            Laya.Scene.close("scene/startWebsdk2/WebSdk2LayerRegister.scene")
        }
        onClickCommit() {
            if (0 != this.codeInput.text.length) {
                if (/^([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(this.accountInput.text))
                    if (0 != this.passwordInput.text.length)
                        if (this.passwordInput.text.length < 6 || this.passwordInput.text.length > 20)
                            O.AddTipSimple("密碼長度為6-20位");
                        else {
                            /^[a-zA-Z0-9]{6,20}$/.test(this.passwordInput.text) ? this.passwordInput.text == this.passwordInput2.text ? (ee.recentlyAccount = this.accountInput.text,
                            ee.recentlyPassword = this.passwordInput.text,
                            ee.sdk.register(this.passwordInput.text, this.accountInput.text, this.codeInput.text, ee.responseCB)) : O.AddTipSimple("兩次輸入的密碼不同") : O.AddTipSimple("密碼格式不規範")
                        }
                    else
                        O.AddTipSimple("密碼不能為空");
                else
                    O.AddTipSimple("郵箱格式不正確")
            } else
                O.AddTipSimple("驗證碼不能為空")
        }
    }
    class Re {
        constructor() {}
        static init() {
            var e = Laya.ClassUtils.regClass;
            e("ui/scene/startGame/GameLayerAntiAddiction.ts", B),
            e("ui/scene/startGame/GameLayerAuthentication.ts", ie),
            e("ui/scene/startGame/GameLayerLogin.ts", se),
            e("ui/scene/startGame/GameLayerPasswordReset.ts", ne),
            e("ui/scene/startGame/GameLayerRegister.ts", ae),
            e("ui/scene/startInit/InitLayerAccount.ts", Le),
            e("ui/scene/startInit/InitLayerServer.ts", fe),
            e("ui/scene/startInit/InitScene.ts", Ee),
            e("ui/scene/startInit/view/AgeTips.ts", we),
            e("ui/scene/startInit/view/LoginNoticeContentItem.ts", ye),
            e("ui/scene/startInit/view/LoginNoticeView.ts", Ie),
            e("ui/scene/startInit/view/PolicyView.ts", Ce),
            e("ui/scene/startInit/view/SelectServerDlg.ts", me),
            e("ui/scene/startInit/view/ServerGroupItem.ts", ke),
            e("ui/scene/startInit/view/ServerItem.ts", Te),
            e("ui/scene/startSdk/YofiSdkFindPsd.ts", Ae),
            e("ui/scene/startSdk/YofiSdkLogin.ts", De),
            e("ui/scene/startSdk/YofiSdkRegister.ts", Be),
            e("ui/scene/startWebsdk2/WebSdk2LayerLogin.ts", be),
            e("ui/scene/startWebsdk2/WebSdk2LayerPasswordReset.ts", Ne),
            e("ui/scene/startWebsdk2/WebSdk2LayerRegister.ts", He)
        }
    }
    Re.width = 640,
    Re.height = 1136,
    Re.scaleMode = "showall",
    Re.screenMode = "none",
    Re.alignV = "middle",
    Re.alignH = "center",
    Re.startScene = "scene/startInit/InitScene.scene",
    Re.sceneRoot = "",
    Re.debug = !1,
    Re.stat = !0,
    Re.physicsDebug = !1,
    Re.exportSceneToJson = !0,
    Re.init();
    !function() {
        let e;
        e = String.prototype,
        e.format || (e.format = function() {
            let e = this.toString()
              , t = 0;
            if (e = e.replace(/(%s|%d|%%)/g, (e => "%%" === e ? "%" : `{${t++}}`)),
            !arguments.length)
                return e;
            let i = typeof arguments[0]
              , s = "string" == i || "number" == i ? arguments : arguments[0];
            for (let t in s)
                e = e.replace(RegExp("\\{" + t + "\\}", "gi"), s[t]);
            return e
        }
        ),
        e.formatColorHtml || (e.formatColorHtml = function() {
            let e = this.toString();
            return e = e.replace(/\[#([0-9a-fA-F]+) ([^\[]+)\]/g, "<span color='#$1'>$2</span>"),
            e
        }
        ),
        e = Date.prototype,
        e.serverTime || (e.serverTime = function() {
            return .001 * (this.getTime() - G.Singleton.serverDiffTs) >> 0
        }
        ),
        e = Array.prototype,
        e.remove = function(...e) {
            e.forEach((e => {
                let t = this.indexOf(e);
                -1 != t && this.splice(t, 1)
            }
            ))
        }
        ,
        e.pushOnce = function(...e) {
            e.forEach((e => {
                -1 == this.indexOf(e) && this.push(e)
            }
            ))
        }
        ,
        e.sortOn = function(e, t=!0) {
            return this.sort(( (i, s) => {
                let n;
                n = e.indexOf(",") > -1 ? e.split(",") : [e];
                for (let e = 0; e < n.length; e++) {
                    let a = n[e];
                    if (i[a] > s[a])
                        return t ? 1 : -1;
                    if (i[a] < s[a])
                        return t ? -1 : 1
                }
                return 0
            }
            )),
            this
        }
        ,
        e.indexKeyIn = function(e, t) {
            for (let i = 0; i < this.length; i++)
                if (this[i] && this[i][e] == t)
                    return this[i];
            return null
        }
        ,
        e.updateKeyIn = function(e, t, i) {
            for (let s = 0; s < this.length; s++)
                if (this[s] && this[s][e] == t) {
                    this[s] = i;
                    break
                }
        }
        ,
        e.removeKeyIn = function(e, t) {
            for (let i = 0; i < this.length; i++)
                if (this[i] && this[i][e] == t)
                    return this.splice(i, 1)[0];
            return null
        }
        ,
        Object.defineProperty(e, "remove", {
            enumerable: !1
        }),
        Object.defineProperty(e, "pushOnce", {
            enumerable: !1
        }),
        Object.defineProperty(e, "sortOn", {
            enumerable: !1
        }),
        Object.defineProperty(e, "indexKeyIn", {
            enumerable: !1
        }),
        e = Laya.Scene.prototype,
        e.await = function() {
            return new Promise((e => this.resolve = e))
        }
        ,
        e.loadScene = function(e) {
            if (E.getLandFlag(e)) {
                if (-1 == e.indexOf("Land.")) {
                    -1 == e.indexOf(".") && (e += "Land")
                }
            }
            var t = e.indexOf(".") > -1 ? e : e + ".scene"
              , i = Laya.loader.getRes(t);
            if (i)
                this.createView(i);
            else {
                Laya.loader.resetProgress();
                var s = new Laya.SceneLoader;
                s.on(Laya.Event.COMPLETE, this, this._onSceneLoaded, [t]),
                s.load(t)
            }
        }
        ,
        e = Laya.Node.prototype,
        e.onEnable = function() {
            Laya.timer.callLater(this, ( () => {
                this.onShow()
            }
            ))
        }
        ,
        e.onDisable = function() {
            this.onHide()
        }
        ,
        e.onShow = function() {}
        ,
        e.onHide = function() {}
        ,
        e = Laya.Handler.prototype,
        e.runWith = function(e) {
            if (null == this.method)
                return null;
            var t = this._id;
            if (null == e)
                var i = this.method.apply(this.caller, this.args);
            else
                i = this.args || e.unshift ? this.args ? this.method.apply(this.caller, this.args.concat(e)) : this.method.apply(this.caller, e) : this.method.call(this.caller, e);
            if (e && e.type == Laya.Event.CLICK && e.target.guide_button) {
                let t = e.target.guide_button;
                e.target.guide_button = null,
                R.event("guide_click_btn", t, !0)
            }
            return this._id === t && this.once && this.recover(),
            i
        }
        ,
        e = Laya.Panel.prototype,
        e.changeScroll = function() {
            this._scrollChanged = !1;
            var e = this.contentWidth || 1
              , t = this.contentHeight || 1
              , i = this._vScrollBar
              , s = this._hScrollBar
              , n = i && t > this._height
              , a = s && e > this._width
              , r = n ? this._width - i.width : this._width
              , o = a ? this._height - s.height : this._height;
            i && (i.x = this._width - i.width,
            i.y = 0,
            i.height = this._height - (a ? s.height : 0),
            i.scrollSize = Math.max(.033 * this._height, 1),
            i.thumbPercent = o / t,
            i.setScroll(0, t - o, i.value)),
            s && (s.x = 0,
            s.y = this._height - s.height,
            s.width = this._width - (n ? i.width : 0),
            s.scrollSize = Math.max(.033 * this._width, 1),
            s.thumbPercent = r / e,
            s.setScroll(0, e - r, s.value)),
            this.updateShow()
        }
        ,
        e.setContentSize = function(e, t) {
            var i = this._content;
            i.width = e,
            i.height = t,
            i._style.scrollRect || (i.scrollRect = Laya.Rectangle.create()),
            i._style.scrollRect.setTo(0, 0, e, t),
            i.scrollRect = i.scrollRect,
            this.updateShow()
        }
        ,
        e.onScrollBarChange = function(e) {
            var t = this._content._style.scrollRect;
            if (t) {
                var i = Math.round(e.value);
                e.isVertical ? t.y = i : t.x = i,
                this._content.scrollRect = t,
                this.updateShow()
            }
        }
        ,
        e.scrollTo = function(e, t) {
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            this.vScrollBar && (this.vScrollBar.value = t),
            this.hScrollBar && (this.hScrollBar.value = e),
            this.updateShow()
        }
        ,
        e.updateShow = function() {
            var e = this._vScrollBar
              , t = this._hScrollBar;
            if (e) {
                let e = this.content.scrollRect.y;
                for (let t = 0; t < this.content.numChildren; t++) {
                    let i = this.content.getChildAt(t);
                    i.y + i.height < e || i.y > e + this._height ? i.visible = !1 : i.visible = !0
                }
            }
            if (t) {
                let e = this.content.scrollRect.x;
                for (let t = 0; t < this.content.numChildren; t++) {
                    let i = this.content.getChildAt(t);
                    i.x + i.width < e || i.x > e + this._width ? i.visible = !1 : i.visible = !0
                }
            }
        }
        ,
        e = HTMLElement.prototype,
        e.renderSelfToGraphic = function(e, t, i, s) {
            var n = this.style
              , a = this._getWords();
            if (a && (a.length,
            n)) {
                var r = n.font
                  , o = n.color;
                if (n.stroke) {
                    var l = n.stroke;
                    l = parseInt(l);
                    var h = n.strokeColor;
                    e.fillBorderWords(a, t, i, r, o, h, l)
                } else
                    e.fillWords(a, t, i, r, o);
                if (this.href) {
                    var c = a[a.length - 1]
                      , d = c.y + c.height;
                    if ("none" != n.textDecoration)
                        if (a[0].y != a[a.length - 1].y) {
                            let t, i = 0;
                            for (; ; ) {
                                if (a[i].y != a[i + 1].y) {
                                    t = i;
                                    break
                                }
                                i++
                            }
                            let s = a[0].y + a[0].height;
                            e.drawLine(a[0].x, s, a[t].x + a[t].width, s, o, 1);
                            let n = a[t + 1].y + a[t + 1].height;
                            e.drawLine(a[t + 1].x, n, c.x + c.width, n, o, 1)
                        } else
                            e.drawLine(a[0].x, d, c.x + c.width, d, o, 1);
                    if (a[0].y != a[a.length - 1].y) {
                        let e, t = 0;
                        for (; ; ) {
                            if (a[t].y != a[t + 1].y) {
                                e = t;
                                break
                            }
                            t++
                        }
                        var g = Laya.HTMLHitRect.create();
                        g.rec.setTo(a[0].x, a[0].y, a[e].x + a[e].width - a[0].x, a[0].height),
                        g.href = this.href,
                        s.push(g);
                        var u = Laya.HTMLHitRect.create();
                        u.rec.setTo(a[e + 1].x, a[e + 1].y, c.x + c.width - a[e + 1].x, a[e + 1].height),
                        u.href = this.href,
                        s.push(u)
                    } else {
                        var S = Laya.HTMLHitRect.create();
                        S.rec.setTo(a[0].x, c.y, c.x + c.width - a[0].x, c.height),
                        S.href = this.href,
                        s.push(S)
                    }
                }
            }
        }
        ,
        Laya.URL.formatURL = function(e) {
            if (!e)
                return "null path";
            if (e.indexOf(":") > 0)
                return e;
            if (e = f.formatByEdition(e),
            null != Laya.URL.customFormat && (e = Laya.URL.customFormat(e)),
            e.indexOf(":") > 0)
                return e;
            var t = e.charAt(0);
            if ("." === t)
                return Laya.URL._formatRelativePath(Laya.URL._basePath + e);
            if ("~" === t)
                return Laya.URL.rootPath + e.substring(1);
            if ("d" === t) {
                if (0 === e.indexOf("data:image"))
                    return e
            } else if ("/" === t)
                return e;
            return Laya.URL.basePath + e
        }
        ,
        Laya.Scene.open = function(e, t=!0, i=null, s=null, n=null) {
            if (E.getLandFlag(e)) {
                if (-1 == e.indexOf("Land.scene")) {
                    let t = e.indexOf(".scene");
                    t > -1 && (e = e.slice(0, t) + "Land.scene")
                }
            }
            Laya.Scene.showLoadingPage(),
            Laya.Scene.load(e, Laya.Handler.create(null, Laya.Scene._onSceneLoaded, [t, s, i]), n)
        }
        ,
        Laya.Scene.close = function(e, t="") {
            if (E.getLandFlag(e)) {
                if (-1 == e.indexOf("Land.scene")) {
                    let t = e.indexOf(".scene");
                    t > -1 && (e = e.slice(0, t) + "Land.scene")
                }
            }
            for (var i = !1, s = Laya.Scene.unDestroyedScenes, n = 0, a = s.length; n < a; n++) {
                var r = s[n];
                r && r.parent && r.url === e && r.name == t && (r.close(),
                i = !0)
            }
            return i
        }
        ,
        e = Laya.ResourceVersion,
        e.addVersionPrefix = function(e) {
            e = Laya.URL.getAdptedFilePath(e);
            let t = Laya.ResourceVersion.manifest;
            if (t && t[e]) {
                if (Laya.ResourceVersion.type == Laya.ResourceVersion.FILENAME_VERSION) {
                    let i = e.split(".");
                    return i[0] + "-" + t[e] + "." + i[1]
                }
                return t[e] + "/" + e
            }
            return e
        }
        ,
        e = Laya.Loader.prototype,
        e.onLoaded = function(e=null) {
            var t = this._type;
            if (t == Laya.Loader.PLFB)
                this.parsePLFBData(e),
                this.complete(e);
            else if (t == Laya.Loader.PLF)
                this.parsePLFData(e),
                this.complete(e);
            else if (t === Laya.Loader.IMAGE) {
                let t;
                if (e instanceof ArrayBuffer) {
                    let i;
                    switch (Laya.Utils.getFileExtension(this._url)) {
                    case "ktx":
                        i = Laya.TextureFormat.ETC1RGB;
                        break;
                    case "pvr":
                        i = Laya.TextureFormat.PVRTCRGBA_4BPPV;
                        break;
                    default:
                        return
                    }
                    t = new Laya.Texture2D(0,0,i,!1,!1),
                    t.wrapModeU = Laya.WarpMode.Clamp,
                    t.wrapModeV = Laya.WarpMode.Clamp,
                    t.setCompressData(e),
                    t._setCreateURL(this.url)
                } else
                    e instanceof Laya.Texture2D ? t = e : (t = new Laya.Texture2D(e.width,e.height,1,!1,!1),
                    t.wrapModeU = Laya.WarpMode.Clamp,
                    t.wrapModeV = Laya.WarpMode.Clamp,
                    t.loadImageSource(e, !0),
                    t._setCreateURL(e.src));
                var i = new Laya.Texture(t);
                i.url = this._url,
                this.complete(i)
            } else if (t === Laya.Loader.SOUND || "nativeimage" === t)
                this.complete(e);
            else if ("htmlimage" === t) {
                let t = new Laya.Texture2D(e.width,e.height,1,!1,!1);
                t.wrapModeU = Laya.WarpMode.Clamp,
                t.wrapModeV = Laya.WarpMode.Clamp,
                t.loadImageSource(e, !0),
                t._setCreateURL(e.src),
                this.complete(t)
            } else if (t === Laya.Loader.ATLAS) {
                if (e.frames) {
                    var s = [];
                    if (!this._data) {
                        if (this._data = e,
                        e.meta && e.meta.image) {
                            s = e.meta.image.split(",");
                            var n = this._url.indexOf("/") >= 0 ? "/" : "\\"
                              , a = this._url.lastIndexOf(n)
                              , r = a >= 0 ? this._url.substr(0, a + 1) : ""
                              , o = null;
                            Laya.Browser.onAndroid && e.meta.compressTextureAndroid && (o = ".ktx"),
                            Laya.Browser.onIOS && e.meta.compressTextureIOS && (o = ".pvr");
                            for (var l = 0, h = s.length; l < h; l++)
                                s[l] = o ? r + s[l].replace(".png", o) : r + s[l]
                        } else
                            s = [this._url.replace(".json", ".png")];
                        s.reverse(),
                        e.toLoads = s,
                        e.pics = []
                    }
                    return this.event(Laya.Event.PROGRESS, .3 + 1 / s.length * .6),
                    this._loadResourceFilter(Laya.Loader.IMAGE, s.pop())
                }
                if (!(e instanceof Laya.Texture2D)) {
                    let t = new Laya.Texture2D(e.width,e.height,1,!1,!1);
                    t.wrapModeU = Laya.BaseTexture.WARPMODE_CLAMP,
                    t.wrapModeV = Laya.BaseTexture.WARPMODE_CLAMP,
                    t.loadImageSource(e, !0),
                    t._setCreateURL(e.src),
                    e = t
                }
                if (this._data.pics.push(e),
                this._data.toLoads.length > 0)
                    return this.event(Laya.Event.PROGRESS, .3 + 1 / this._data.toLoads.length * .6),
                    this._loadResourceFilter(Laya.Loader.IMAGE, this._data.toLoads.pop());
                var c = this._data.frames
                  , d = this._url.split("?")[0]
                  , g = this._data.meta && this._data.meta.prefix ? this._data.meta.prefix : d.substring(0, d.lastIndexOf(".")) + "/"
                  , u = this._data.pics
                  , S = Laya.URL.formatURL(this._url)
                  , p = Laya.Loader.atlasMap[S] || (Laya.Loader.atlasMap[S] = []);
                p.dir = g;
                var L = 1;
                if (this._data.meta && this._data.meta.scale && 1 != this._data.meta.scale)
                    for (var y in L = parseFloat(this._data.meta.scale),
                    c) {
                        var I, m = c[y], w = u[m.frame.idx ? m.frame.idx : 0], _ = g + y;
                        if (!f.filterByEdition(_))
                            w.scaleRate = L,
                            I = Laya.Texture._create(w, m.frame.x, m.frame.y, m.frame.w, m.frame.h, m.spriteSourceSize.x, m.spriteSourceSize.y, m.sourceSize.w, m.sourceSize.h, Laya.Loader.getRes(_)),
                            Laya.Loader.cacheTexture(_, I),
                            I.url = _,
                            p.push(_)
                    }
                else
                    for (y in c) {
                        w = u[(m = c[y]).frame.idx ? m.frame.idx : 0];
                        _ = g + y;
                        f.filterByEdition(_) || (I = Laya.Texture._create(w, m.frame.x, m.frame.y, m.frame.w, m.frame.h, m.spriteSourceSize.x, m.spriteSourceSize.y, m.sourceSize.w, m.sourceSize.h, Laya.Loader.getRes(_)),
                        Laya.Loader.cacheTexture(_, I),
                        I.url = _,
                        p.push(_))
                    }
                this.complete(this._data)
            } else if (t === Laya.Loader.FONT) {
                if (!e._source)
                    return this._data = e,
                    this.event(Laya.Event.PROGRESS, .5),
                    this._loadResourceFilter(Laya.Loader.IMAGE, this._url.replace(".fnt", ".png"));
                var v = new Laya.BitmapFont;
                v.parseFont(this._data, new Laya.Texture(e));
                var E = this._url.split(".fnt")[0].split("/")
                  , C = E[E.length - 1];
                Laya.Text.registerBitmapFont(C, v),
                this._data = v,
                this.complete(this._data)
            } else if (t === Laya.Loader.PREFAB) {
                var k = new Laya.Prefab;
                k.json = e,
                this.complete(k)
            } else
                this.complete(e)
        }
    }();
    class xe extends Laya.Button {
        constructor() {
            super(),
            this.scaleNum = .9,
            this._oldPivotX = 0,
            this._oldPivotY = 0,
            this.downMode = !1,
            this.offX = 0,
            this.offY = 0,
            this.labelBold = !0
        }
        onShow() {
            this.on(Laya.Event.MOUSE_DOWN, this, this.scaleDown),
            this.on(Laya.Event.MOUSE_UP, this, this.scaleUp),
            this.on(Laya.Event.MOUSE_OUT, this, this.scaleUp)
        }
        onHide() {
            this.off(Laya.Event.MOUSE_DOWN, this, this.scaleDown),
            this.off(Laya.Event.MOUSE_UP, this, this.scaleUp),
            this.off(Laya.Event.MOUSE_OUT, this, this.scaleUp)
        }
        scaleUp() {
            this.downMode && (this.x += this.offX,
            this.y += this.offY,
            this.scaleX = 1,
            this.scaleY = 1,
            this.downMode = !1,
            Q.Singleton.play(this))
        }
        scaleDown() {
            if (this.downMode)
                return;
            let e = this.displayWidth * (1.05 * this.scaleNum)
              , t = this.displayHeight * (1.05 * this.scaleNum);
            this.offX = (e - this.displayWidth) / 2,
            this.offY = (t - this.displayHeight) / 2,
            this.x -= this.offX,
            this.y -= this.offY,
            this.scaleX = 1.05 * this.scaleNum,
            this.scaleY = 1.05 * this.scaleNum,
            this.downMode = !0
        }
    }
    class Oe {
        constructor() {}
        init() {
            M.showLoadingLog("正在初始化…"),
            Config.useWebGL2 = !1,
            Laya.URL.exportSceneToJson = Re.exportSceneToJson,
            window.Laya3D ? Laya3D.init(Re.width, Re.height) : Laya.init(Re.width, Re.height, Laya.WebGL),
            I.init();
            let e = Laya.Utils.getQueryString("orientation")
              , t = !1;
            null == e ? t = I.isLandScreen() : (t = "1" == e,
            I.setLandScreenState(e)),
            t ? (Re.width = 1136,
            Re.height = 640,
            window.screenOrientation = "landscape") : (Re.width = 640,
            Re.height = 1136,
            window.screenOrientation = "portrait"),
            Laya.stage.width = Re.width,
            Laya.stage.height = Re.height,
            !t && Laya.Browser.clientHeight / Laya.Browser.clientWidth < 1.775 || t && Laya.Browser.clientWidth / Laya.Browser.clientHeight < 1.775 ? Laya.stage.scaleMode = "showall" : Laya.Browser.onMobile && !Laya.Browser.onIPad ? Laya.stage.scaleMode = t ? "fixedheight" : "fixedwidth" : Laya.stage.scaleMode = "showall",
            Laya.stage.screenMode = "none",
            Laya.stage.alignH = "center",
            Laya.stage.alignV = "middle",
            Laya.stage.frameRate = "fast",
            (Re.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(),
            Laya.Utils.getQueryString("addr") && (I.data.SOCKET_ADDR = Laya.Utils.getQueryString("addr")),
            Laya.Utils.getQueryString("centerflag") && (I.data.CENTER_FLAG = Laya.Utils.getQueryString("centerflag")),
            Laya.Utils.getQueryString("loginAddr") && (I.data.HTTP_LOGIN_ADDR = Laya.Utils.getQueryString("loginAddr")),
            Laya.Utils.getQueryString("quicksdk") && (I.data.QUICKSDK = !!+Laya.Utils.getQueryString("quicksdk"));
            let i = Laya.Utils.getQueryString("sdkshell");
            i && (I.data.SDK_SHELL = !!+i || 1 == i.search("1"));
            let s = Laya.Utils.getQueryString("yofisdk");
            s && (I.data.YOFISDK = !!+s || 1 == s.search("1")),
            Laya.Utils.getQueryString("sdkid") && (I.data.SDKID = +Laya.Utils.getQueryString("sdkid").replace('"', "").replace('"', "")),
            Laya.Utils.getQueryString("yofisdkweb") && (I.data.YOFISDKWEB = !!+Laya.Utils.getQueryString("yofisdkweb")),
            Laya.Utils.getQueryString("version") && (I.data.VERSION = Laya.Utils.getQueryString("version"));
            let n = Laya.Utils.getQueryString("channelid");
            n && (I.data.CHANNEL_ID = +n),
            null != I.data.LANGUAGE && (f.edition = I.data.LANGUAGE),
            Laya.Utils.getQueryString("language") && (f.edition = I.data.LANGUAGE = +Laya.Utils.getQueryString("language")),
            Laya.Utils.getQueryString("centerflag") && (I.data.CENTER_FLAG = Laya.Utils.getQueryString("centerflag")),
            Re.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(),
            Re.stat && I.data.SHOW_STAT && Laya.Stat.show(),
            null == I.data.CHARGE && (I.data.CHARGE = !0),
            "true" == Laya.Utils.getQueryString("stat") && Laya.Stat.show(),
            L.Singleton.init(),
            Laya.alertGlobalError(!0),
            Laya.WorkerLoader.workerPath = getWorker(),
            Laya.WorkerLoader.enableWorkerLoader(),
            z.Singleton.init(),
            _.Singleton.init(),
            O.singleton.onStageResize(),
            E.setLandFlag(t),
            E.setLiuHaiFlag(I.isAdapterScreen()),
            L.isJuheSdk() && !Laya.Browser.onPC && (Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL),
            Laya.View.regComponent("Button", xe);
            let a = I.data.BASE_URL;
            a && a.length > 0 && (Laya.URL.basePath = a),
            m.Debug("Laya.Browser.clientWidth:" + Laya.Browser.clientWidth, "Laya.Browser.clientHeight:" + Laya.Browser.clientHeight + ", lang = " + Laya.Utils.getQueryString("orientation")),
            "1" == Laya.Utils.getQueryString("vconsole") && ("undefined" != typeof VConsole && new VConsole,
            DEBUG = !0),
            this.deleteEmbedAd()
        }
        run() {
            Laya.ResourceVersion.enable(getVersion(), Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION)
        }
        onVersionLoaded() {
            Laya.loader.clearRes(getVersion()),
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded))
        }
        onConfigLoaded() {
            $.Singleton.reqStateHttp(i.OPEN_START_SCENE),
            $.Singleton.reqGooglePcState(s.FIRST_OPEN),
            this.openStartScene()
        }
        openStartScene() {
            Laya.Scene.open(Re.startScene, !1, null, Laya.Handler.create(this, ( () => {
                L.isH5WebSDK() ? L.isJuheSdk() ? h.Singleton.login({}, ( () => {
                    $.Singleton.quickLogin()
                }
                )) : $.Singleton.quickLogin() : I.data.YOFISDKWEB ? ee.init() : I.data.YOFISDK && $.Singleton.loginYoFiSdk()
            }
            )))
        }
        deleteEmbedAd() {
            var e = document.getElementsByTagName("iframe")[0];
            if (e) {
                for (var t = e, i = t.parentNode; i && "BODY" != i.tagName; )
                    i = (t = i).parentNode;
                i && i.removeChild(t)
            }
        }
    }
    return Oe.Singleton = new Oe,
    Oe.Singleton.init(),
    Oe.Singleton.run(),
    e.Application = Oe,
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e
}({});
