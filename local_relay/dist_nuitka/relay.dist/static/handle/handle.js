

// const url = "http://www.106u.com/ajax.php";
const url = "http://127.0.0.1/106u/ajax.php";

let stopFlag = false; // 创建控制器变量

const headers = {
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest",
    "Origin": "http://www.106u.com",
    "Referer": "http://www.106u.com/reg.php",
};

// 验证账号是否存在
async function check_account(username) {
    const data = {
        LOGIN_ACCOUNT: username,
        action: "checkUser",
        username: username
    };
    const urlEncodedData = new URLSearchParams(data).toString();
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: urlEncodedData
        });
        return await response.json();
    } catch (error) {
        console.error('Error checking account:', error);
        return null;
    }
}

// 注册账号
async function register_account(username, password, idcard, truename) {
    const data = {
        action: "register",
        post_mode: "withtml5",
        sp: "",
        username: username,
        password: password,
        // 以下是当前选中代码部分，使用 fetch 替代 axios
        passwordconfirm: password,
        email: username + "@qq.com",
        truename: truename,
        idcard: idcard
    };
    const urlEncodedData = new URLSearchParams(data).toString();
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: urlEncodedData
        });
        return await response.json();
    } catch (error) {
        console.error('Error registering account:', error);
        return null;
    }
}

// 准备账号信息
async function prepare_account(account, password, idcard, truename, start, end) {
    for (let i = start; i <= end; i++) {
        if (stopFlag) {
            stopFlag = false; // 重置标志，以便下次使用
            break;
        }
        accountStatus.innerText = "正在准备账号：" + account + i;
        await new Promise(resolve => setTimeout(resolve, 3000));
        let resp = await check_account(account + i);
        console.log(resp);
    }
}

// 停止定时循环的方法
function stopPrepareAccount() {
    stopFlag = true;
}