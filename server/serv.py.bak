import sqlite3
from flask import Flask, request, jsonify
import jwt
import datetime
from functools import wraps  # 添加这行导入
import json  # 新增导入json模块
from flask import request
from functools import wraps
import time
from rpa import get_hebei_gov


app = Flask(__name__)
app.config["SECRET_KEY"] = "1qaz@WSX!@#"  # 用于生成token的密钥


# 初始化数据库
def init_db():
    conn = sqlite3.connect("users.db")
    c = conn.cursor()

    # 检查表是否存在
    c.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='users'")
    table_exists = c.fetchone()

    if not table_exists:
        # 创建用户表
        c.execute(
            """CREATE TABLE users
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  phone TEXT UNIQUE NOT NULL,
                  invite_code TEXT NOT NULL,
                  expire_date DATETIME NOT NULL,
                  privileges TEXT)"""  # 新增privileges字段
        )
        # 创建游戏ID表
        c.execute(
            """CREATE TABLE user_game_ids
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  user_id INTEGER NOT NULL,
                  game_id TEXT NOT NULL,
                  FOREIGN KEY(user_id) REFERENCES users(id))"""
        )
        conn.commit()

    conn.close()


# 用户登录验证
@app.route("/v1/3rd/api/login", methods=["POST"])
def login():
    phone = request.json.get("phone")

    if not phone or not phone.isdigit() or len(phone) != 11:
        return jsonify({"success": False, "message": "请输入有效的手机号"})

    conn = sqlite3.connect("users.db")
    c = conn.cursor()

    # 查询用户是否存在
    c.execute("SELECT * FROM users WHERE phone=?", (phone,))
    user = c.fetchone()

    if user:
        # 计算剩余天数
        expire_date = datetime.datetime.strptime(user[3], "%Y-%m-%d %H:%M:%S")
        remaining_days = (expire_date - datetime.datetime.now()).days

        # 如果授权已过期
        if remaining_days < 0:
            return jsonify(
                {"success": False, "message": "授权已过期，请联系管理员！错误码：42000"}
            )

        # 获取用户权限
        privileges = json.loads(user[4]) if user[4] else []  # 解析JSON字符串

        # 生成accessToken
        # 生成accessToken时加入privileges
        token = jwt.encode(
            {
                "phone": phone,
                "privileges": privileges,  # 加入权限信息
                "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=24),
            },
            app.config["SECRET_KEY"],
        )

        conn.close()
        return jsonify(
            {
                "success": True,
                "message": "登录成功",
                "accessToken": token,
                "remainingDays": remaining_days,
                "privileges": privileges,  # 返回用户权限
            }
        )
    else:
        # 用户不存在，仅提示请联系管理员
        conn.close()
        return jsonify(
            {"success": False, "message": "账号已锁定，请联系管理员！错误码：41000"}
        )

    # 用户不存在，注册新用户并生成accessToken
    try:
        c.execute("INSERT INTO users (phone) VALUES (?)", (phone,))
        conn.commit()

        token = jwt.encode(
            {
                "phone": phone,
                "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=24),
            },
            app.config["SECRET_KEY"],
        )

        conn.close()
        return jsonify(
            {"success": True, "message": "注册并登录成功", "accessToken": token}
        )
    except sqlite3.IntegrityError:
        conn.close()
        return jsonify({"success": False, "message": "登录失败，请重试"})


# 验证accessToken的装饰器
def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get("Authorization")
        if not token:
            return jsonify({"success": False, "message": "缺少accessToken"}), 401

        try:
            # 验证token是否有效且未过期
            data = jwt.decode(token, app.config["SECRET_KEY"], algorithms=["HS256"])
            current_user = data["phone"]

            # 检查token是否过期
            if datetime.datetime.utcnow() > datetime.datetime.fromtimestamp(
                data["exp"]
            ):
                return jsonify({"success": False, "message": "accessToken已过期"}), 401

        except jwt.ExpiredSignatureError:
            return jsonify({"success": False, "message": "accessToken已过期"}), 401
        except jwt.InvalidTokenError:
            return jsonify({"success": False, "message": "无效的accessToken"}), 401

        return f(current_user, *args, **kwargs)

    return decorated


# 示例受保护的路由
@app.route("/v1/3rd/api/protected", methods=["GET"])
@token_required
def protected(current_user):
    return jsonify({"success": True, "message": f"欢迎回来, {current_user}"})


# 注册新用户
# 有效的邀请码列表
VALID_INVITE_CODES = ["CODE123", "CODE456", "CODE789"]


# 新增：用于存储IP和错误次数的字典
ip_attempts = {}


# 新增：IP限制装饰器
def ip_limit(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        ip = request.remote_addr
        now = time.time()

        # 清理过期记录
        ip_attempts[ip] = [
            t for t in ip_attempts.get(ip, []) if now - t < 300
        ]  # 5分钟窗口

        # 检查是否超过限制
        if len(ip_attempts.get(ip, [])) >= 3:
            return (
                jsonify(
                    {
                        "success": False,
                        "message": "尝试次数过多，请稍后再试！错误码：42000",
                    }
                ),
                429,
            )

        return f(*args, **kwargs)

    return decorated


# 修改：在需要限制的接口上添加装饰器
@app.route("/v1/3rd/api/register", methods=["POST"])
@ip_limit
def register():
    data = request.json
    invite_code = data.get("inviteCode")
    phone = data.get("phone")
    game_ids = data.get("gameIds", [])
    days = data.get("days", 30)
    privileges = data.get("privileges", [])  # 获取授权权益

    # 验证邀请码
    if not invite_code or invite_code not in VALID_INVITE_CODES:
        ip = request.remote_addr
        now = time.time()
        ip_attempts.setdefault(ip, []).append(now)
        return jsonify({"success": False, "message": "邀请码无效，请联系管理员！"})

    # 验证天数参数
    if not isinstance(days, int) or days < 1:
        return jsonify({"success": False, "message": "天数必须为正整数"})

    if not phone or not phone.isdigit() or len(phone) != 11:
        return jsonify({"success": False, "message": "请输入有效的手机号"})

    if not game_ids:
        return jsonify({"success": False, "message": "请至少输入一个游戏ID"})

    conn = sqlite3.connect("users.db")
    c = conn.cursor()

    try:
        # 计算授权过期时间
        expire_date = datetime.datetime.now() + datetime.timedelta(days=days)

        # 插入用户信息
        c.execute(
            "INSERT INTO users (phone, invite_code, expire_date, privileges) VALUES (?, ?, ?, ?)",
            (
                phone,
                invite_code,
                expire_date.strftime("%Y-%m-%d %H:%M:%S"),
                json.dumps(privileges),
            ),  # 存储为JSON字符串
        )
        user_id = c.lastrowid

        # 插入游戏ID
        for game_id in game_ids:
            # 验证game_id格式
            # if not isinstance(game_id, str) or not game_id.count("_") == 1:
            if not isinstance(game_id, str):
                raise ValueError(f"无效的游戏ID格式: {game_id}")

            c.execute(
                "INSERT INTO user_game_ids (user_id, game_id) VALUES (?, ?)",
                (user_id, game_id),
            )

        conn.commit()
        return jsonify({"success": True, "message": "注册成功"})
    except sqlite3.IntegrityError:
        return jsonify({"success": False, "message": "该手机号已注册"})
    except ValueError as e:
        conn.rollback()
        return jsonify({"success": False, "message": str(e)})
    except Exception as e:
        conn.rollback()
        return jsonify({"success": False, "message": "注册失败: " + str(e)})
    finally:
        conn.close()


@app.route("/v1/3rd/api/verifyOpenID", methods=["POST"])
@token_required
def verifyOpenID(current_user):
    data = request.json
    openID = data.get("openID")

    if not openID:
        return jsonify({"success": False, "message": "缺少openID参数"})

    conn = sqlite3.connect("users.db")
    c = conn.cursor()

    try:
        # 查询当前用户的openID
        c.execute(
            "SELECT * FROM user_game_ids WHERE user_id = (SELECT id FROM users WHERE phone = ?) AND game_id = ?",
            (current_user, openID),
        )
        result = c.fetchone()

        if not result:
            return jsonify({"success": False, "message": "该openID未注册"})

        return jsonify({"success": True})
    except Exception as e:
        return jsonify({"success": False, "message": str(e)})
    finally:
        conn.close()


@app.route("/v1/3rd/api/getUsers", methods=["GET"])
@ip_limit
@token_required
def get_users(current_user):

    conn = sqlite3.connect("users.db")
    c = conn.cursor()

    try:
        # 查询所有用户信息
        c.execute("SELECT id, phone, invite_code, expire_date, privileges FROM users")
        users = c.fetchall()

        # 格式化返回数据
        result = []
        for user in users:
            # 查询用户的游戏ID
            c.execute("SELECT game_id FROM user_game_ids WHERE user_id=?", (user[0],))
            game_ids = [row[0] for row in c.fetchall()]

            result.append(
                {
                    "phone": user[1],
                    "invite_code": user[2],
                    "expire_date": user[3],
                    "privileges": json.loads(user[4]) if user[4] else [],
                    "game_ids": game_ids,
                }
            )

        return jsonify({"success": True, "data": result})
    except Exception as e:
        return jsonify({"success": False, "message": str(e)})
    finally:
        conn.close()


# 定义允许的查询密钥
QUERY_AUTH_CODE = "YourSecureCode123"  # 替换为实际的密钥


@app.route("/v1/3rd/api/verifyAuthCode", methods=["POST"])
@token_required
def verify_auth_code(current_user):
    data = request.json
    auth_code = data.get("authCode")

    if not auth_code:
        return jsonify({"success": False, "message": "请输入查询密钥"})

    if auth_code != QUERY_AUTH_CODE:
        return jsonify({"success": False, "message": "查询密钥错误"})

    return jsonify({"success": True})


@app.route("/v1/3rd/api/updateUser", methods=["POST"])
@token_required
@ip_limit
def update_user(current_user):
    data = request.json
    invite_code = data.get("inviteCode")
    phone = data.get("phone")
    add_days = data.get("addDays", 0)
    game_ids = data.get("gameIds", [])
    privileges = data.get("privileges", None)

    # 验证邀请码
    if not invite_code or invite_code not in VALID_INVITE_CODES:
        ip = request.remote_addr
        now = time.time()
        ip_attempts.setdefault(ip, []).append(now)
        return jsonify({"success": False, "message": "邀请码无效，请联系管理员！"})

    if not phone or not phone.isdigit() or len(phone) != 11:
        return jsonify({"success": False, "message": "请输入有效的手机号"})

    conn = sqlite3.connect("users.db")
    c = conn.cursor()

    try:
        # 查询用户是否存在
        c.execute("SELECT * FROM users WHERE phone=?", (phone,))
        user = c.fetchone()
        if not user:
            return jsonify({"success": False, "message": "用户不存在"})

        # 更新授权天数
        if add_days > 0:
            # expire_date = datetime.datetime.strptime(user[3], "%Y-%m-%d %H:%M:%S")
            # new_expire_date = expire_date + datetime.timedelta(days=add_days)
            new_expire_date = datetime.datetime.now() + datetime.timedelta(days=add_days)
            c.execute(
                "UPDATE users SET expire_date=? WHERE phone=?",
                (new_expire_date.strftime("%Y-%m-%d %H:%M:%S"), phone),
            )

        # 更新权限
        if privileges is not None:
            c.execute(
                "UPDATE users SET privileges=? WHERE phone=?",
                (json.dumps(privileges), phone),
            )

        # 添加游戏ID
        # 首先获取当前用户的所有game_id
        c.execute("SELECT game_id FROM user_game_ids WHERE user_id=?", (user[0],))
        existing_ids = {row[0] for row in c.fetchall()}
        
        # 计算需要删除的ID（存在于数据库但不在新提交的列表中）
        ids_to_delete = existing_ids - set(game_ids)
        
        # 删除不再需要的ID
        for game_id in ids_to_delete:
            c.execute(
                "DELETE FROM user_game_ids WHERE user_id=? AND game_id=?",
                (user[0], game_id),
            )

        # 添加新的game_id
        for game_id in game_ids:
            if not isinstance(game_id, str):
                raise ValueError(f"无效的游戏ID格式: {game_id}")

            # 检查是否已存在
            if game_id not in existing_ids:
                c.execute(
                    "INSERT INTO user_game_ids (user_id, game_id) VALUES (?, ?)",
                    (user[0], game_id),
                )

        conn.commit()
        return jsonify({"success": True, "message": "用户信息更新成功"})
    except ValueError as e:
        conn.rollback()
        return jsonify({"success": False, "message": str(e)})
    except Exception as e:
        conn.rollback()
        return jsonify({"success": False, "message": "更新失败: " + str(e)})
    finally:
        conn.close()

@app.route("/v1/3rd/api/demo", methods=["GET"])
def demo():
    obj = {
        "article_groups": [
            {
                "id": 1,
                "name": "常务会议",
                "list": [
                    {
                        "id": 1,
                        "title": "2025年9月1日王正谱主持召开河北省政府常务会议 研究灾后恢复重建、经济运行、生态保护等工作",
                        "uri": "https://www.hebei.gov.cn/columns/5b47c431-a184-4cd1-bdc9-172f60c82cc6/202509/02/1a5c7b8b-cd10-4b1a-bb18-c3224dfc62fc.html",
                        "open_mode": 0,
                        "description": "会议传达学习了习近平总书记近期重要讲话精神，强调要统筹抓好防汛和灾后恢复重建，加快修复受损道路等基础设施，分类修缮加固受灾房屋，深入开展环境卫生整治，加强复盘总结和针对性查漏补缺，不断完善防洪工程体系、应急管理体系，健全水文、气象监测网络，切实提高防灾减灾救灾能力。",
                        "date": "2025-09-02",
                        "tag": "会议精神",
                        "image_url": "https://woa.wps.cn/****/***.png",
                        "is_read": False
                    },{
                        "id": 2,
                        "title": "2025年8月6日省长王正谱主持召开省政府常务会议 深入学习贯彻习近平总书记重要指示精神，研究经济运...",
                        "uri": "https://www.hebei.gov.cn/columns/5b47c431-a184-4cd1-bdc9-172f60c82cc6/202508/07/e85ea585-2fa6-44b6-ad61-357126073d91.html",
                        "open_mode": 0,
                        "description": "河北新闻网8月6日讯 今天，省长王正谱主持召开省政府常务会议，深入学习贯彻习近平总书记重要指示精神，研究经济运行、防汛救灾、审计整改、“燕赵友谊奖”评选表彰等工作。",
                        "date": "2025-08-07",
                        "tag": "会议精神",
                        "image_url": "https://woa.wps.cn/****/***.png",
                        "is_read": False
                    },{
                        "id": 3,
                        "title": "2025年5月26日王正谱主持召开省政府常务会议 研究我省“十五五”规划编制、主动服务和积极融入国内...",
                        "uri": "https://www.hebei.gov.cn/columns/5b47c431-a184-4cd1-bdc9-172f60c82cc6/202505/27/8b57ac8f-e604-4a4a-a3f1-f7aeeb0d393e.html",
                        "open_mode": 0,
                        "description": "会议强调，要深入学习贯彻习近平总书记对“十五五”规划编制工作作出的重要指示精神，坚持科学决策、民主决策、依法决策，准确把握河北在全国发展大局、京津冀协同发展中的功能定位，谋实重大战略目标任务、政策举措、工程项目等，高质量做好我省“十五五”规划编制工作。",
                        "date": "2025-05-27",
                        "tag": "会议精神",
                        "image_url": "https://woa.wps.cn/****/***.png",
                        "is_read": False
                    }
                ]
            },{
                "id": 2,
                "name": "政策解读",
                "list": [
                    {
                        "id": 1,
                        "title": "《河北省人民政府办公厅印发关于支持养老机构发展若干措施的通知》解读",
                        "uri": "https://www.hebei.gov.cn/columns/50679b44-048c-4322-8ebb-988337c07c46/202509/01/0bda01f9-1633-4231-8407-d2b23ee5db05.html",
                        "open_mode": 0,
                        "description": "我省自1999年进入老龄化社会以来，老年人口占比逐年攀升。随着高龄和失能老年人不断增多、家庭结构小型化和养老功能弱化，广大老年人入住养老机构的需求不断增多。为贯彻落实党中央、国务院决策部署和省委、省政府工作要求，进一步加大支持养老机构发展力度，不断扩大优质养老服务供给，研究出台了《若干措施》。",
                        "date": "2025-08-13",
                        "tag": "会议精神",
                        "image_url": "https://woa.wps.cn/****/***.png",
                        "is_read": False
                    },{
                        "id": 2,
                        "title": "《河北省县域快递物流中心建设行动计划》解读",
                        "uri": "https://www.hebei.gov.cn/columns/50679b44-048c-4322-8ebb-988337c07c46/202509/05/0fa217d9-c132-4cb6-abc2-395aacd654df.html",
                        "open_mode": 0,
                        "description": "《河北省县域快递物流中心建设行动计划》（冀政办字〔2025〕39号，以下简称《行动计划》）于2025年8月7日由省政府办公厅印发，现就相关内容进行如下解读：",
                        "date": "2025-08-09",
                        "tag": "会议精神",
                        "image_url": "https://woa.wps.cn/****/***.png",
                        "is_read": False
                    },{
                        "id": 3,
                        "title": "《河北省人民政府关于开展第四次全国农业普查的通知》解读",
                        "uri": "https://www.hebei.gov.cn/columns/50679b44-048c-4322-8ebb-988337c07c46/202508/05/05050a4c-6ed4-436b-b4ef-da92961f924d.html",
                        "open_mode": 0,
                        "description": "今年6月2日，国务院印发《关于开展第四次全国农业普查的通知》（国发〔2025〕9号），决定于2026年开展第四次全国农业普查。为做好我省第四次全国农业普查工作，省政府于7月31日印发《河北省人民政府关于开展第四次全国农业普查的通知》",
                        "date": "2025-08-02",
                        "tag": "会议精神",
                        "image_url": "https://woa.wps.cn/****/***.png",
                        "is_read": False
                    }
                ]
            }
        ],
        "display_type": 2,
        "view_more_url": "https://www.hebei.gov.cn/"
    }
    obj = get_hebei_gov()

    return obj

    return json.dumps(obj, ensure_ascii=False)


if __name__ == "__main__":
    init_db()
    app.run(debug=True)
