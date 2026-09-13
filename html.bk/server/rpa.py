import requests
from bs4 import BeautifulSoup

# 设置请求头，模拟浏览器访问
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Connection": "keep-alive"
}

# 定义不同类型的内容关键词
CONTENT_TYPES = {
    'government_docs': '政府文件',
    'policy_interpretation': '政策解读',
    'provincial_meetings': '省政府会议'
}

def parse_executive_meeting_details(meeting_url):
    """解析省政府常务会议详情页，提取class为listli的列表项信息"""
    meeting_details = []
    # 添加一个集合用于存储已处理的标题，确保唯一性
    processed_titles = set()
    
    try:
        # 请求省政府常务会议详情页面
        response = requests.get(meeting_url, headers=headers, timeout=10)
        response.encoding = response.apparent_encoding
        response.raise_for_status()
        
        # 解析页面内容
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # 查找class为listli的列表项
        list_items = soup.find_all(class_='listli')
        # print(f"在页面 {meeting_url} 找到 {len(list_items)} 个class为listli的列表项")
        
        # 遍历列表项，提取标题、日期和链接
        for item in list_items:
            # 提取链接 - 查找第一个包含href且非空的a标签
            valid_a_tags = [a for a in item.find_all('a') 
                           if a.get_text(strip=True) and 'href' in a.attrs]
            
            if not valid_a_tags:
                print(f"  警告: 列表项中未找到有效的a标签")
                continue
            
            # 获取第一个有效的a标签
            a_tag = valid_a_tags[0]
            link = a_tag['href']
            
            # 处理相对路径
            if not link.startswith('http'):
                base_url = 'https://www.hebei.gov.cn'  # 直接使用基础域名
                if link.startswith('/'):
                    link = base_url + link
                else:
                    link = base_url + '/' + link
            
            # 提取标题 - 从a标签获取文本
            title = a_tag.get_text().strip()
            
            # 提取日期 - 从span标签中获取
            span_tag = item.find('span')
            date = span_tag.get_text().strip() if span_tag else ''
            
            # 如果span中没有日期，尝试从整个列表项文本中提取
            if not date:
                item_text = item.get_text()
                # 简单的日期提取逻辑
                if '年' in item_text or '-' in item_text:
                    # 尝试匹配常见日期格式
                    import re
                    date_match = re.search(r'\d{4}[年-]\d{1,2}[月-]\d{1,2}[日]?', item_text)
                    if date_match:
                        date = date_match.group()
            
            # 标题唯一性检查
            if title and link:
                # 使用标题的前100个字符作为唯一标识（避免过长）
                title_key = title[:100]
                if title_key not in processed_titles:
                    # 将提取的信息添加到结果列表
                    meeting_details.append({
                        'title': title,
                        'date': date,
                        'link': link
                    })
                    processed_titles.add(title_key)
                    # print(f"  - 提取: 标题='{title}', 日期='{date}', 链接='{link}'")
        
    except requests.exceptions.RequestException as e:
        print(f"请求省政府常务会议详情页失败: {meeting_url}, 错误: {e}")
    except Exception as e:
        print(f"解析省政府常务会议详情页失败: {meeting_url}, 错误: {e}")
    
    return meeting_details


def parse_government_docs_details(gov_doc_url):
    """解析政府文件详情页，提取class为zwgk_nzlist的列表项信息"""
    docs_details = []
    processed_titles = set()  # 用于存储已处理的标题，确保唯一性
    
    try:
        # 请求政府文件详情页面
        response = requests.get(gov_doc_url, headers=headers, timeout=10)
        response.encoding = response.apparent_encoding
        response.raise_for_status()
        
        # 解析页面内容
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # 查找class为zwgk_nzlist的div标签
        list_items = soup.find_all(class_='zwgk_nzlist')
        # print(f"在政府文件页面 {gov_doc_url} 找到 {len(list_items)} 个class为zwgk_nzlist的列表项")
        
        # 遍历列表项，提取标题、日期和链接
        for item in list_items:
            # 提取标题和链接
            title_div = item.find(class_='zwgk_nzbt')
            if not title_div:
                print(f"  警告: 列表项中未找到zwgk_nzbt类的div标签")
                continue
            
            a_tag = title_div.find('a')
            if not a_tag or 'href' not in a_tag.attrs:
                print(f"  警告: 标题div中未找到有效的a标签")
                continue
            
            # 提取标题和链接
            title = a_tag.get_text().strip()
            link = a_tag['href']
            
            # 处理相对路径
            if not link.startswith('http'):
                base_url = 'https://www.hebei.gov.cn'  # 直接使用基础域名
                if link.startswith('/'):
                    link = base_url + link
                else:
                    link = base_url + '/' + link
            
            # 提取日期
            date_div = item.find(class_='zwgk_nzsj')
            date = date_div.get_text().strip() if date_div else ''
            
            # 标题唯一性检查
            if title and link:
                # 使用标题的前100个字符作为唯一标识（避免过长）
                title_key = title[:100]
                if title_key not in processed_titles:
                    # 将提取的信息添加到结果列表
                    docs_details.append({
                        'title': title,
                        'date': date,
                        'link': link
                    })
                    processed_titles.add(title_key)
                    # print(f"  - 提取: 标题='{title}', 日期='{date}', 链接='{link}'")

        
    except requests.exceptions.RequestException as e:
        print(f"请求政府文件详情页失败: {gov_doc_url}, 错误: {e}")
    except Exception as e:
        print(f"解析政府文件详情页失败: {gov_doc_url}, 错误: {e}")
    
    return docs_details

def crawl_hebei_gov_all():
    """一次请求获取所有类型的链接：政府文件、政策解读和省政府会议"""
    url = "https://www.hebei.gov.cn/"
    results = {
        'government_docs': [],
        'policy_interpretation': [],
        'provincial_meetings': [],
        'provincial_executive_meetings': [],  # 省政府常务会议
        'executive_meeting_details': []  # 省政府常务会议详情页信息
    }
    
    try:
        # 只发送一次GET请求获取网页内容
        response = requests.get(url, headers=headers, timeout=10)
        response.encoding = response.apparent_encoding  # 自动设置编码
        response.raise_for_status()  # 如果请求失败，抛出异常
        
        # 使用BeautifulSoup解析HTML
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # 方案1：直接查找包含关键词文本的a标签
        for content_type, keyword in CONTENT_TYPES.items():
            a_tags = soup.find_all('a', string=lambda text: text and keyword in text)
            for tag in a_tags:
                if 'href' in tag.attrs:
                    href = tag['href']
                    # 处理相对路径
                    if not href.startswith('http'):
                        href = url.rstrip('/') + '/' + href.lstrip('/')
                    if href not in results[content_type]:
                        results[content_type].append(href)
                        # print(f"找到{keyword}链接: {href}")
        
        # 如果方案1没有找到所有类型的链接，尝试方案2：查找包含关键词的父元素中的a标签
        for content_type, keyword in CONTENT_TYPES.items():
            if not results[content_type]:  # 只处理还没找到链接的类型
                # print(f"方案1未找到{keyword}，尝试方案2...")
                elements = soup.find_all(string=lambda text: text and keyword in text)
                for element in elements:
                    # 获取包含该文本的a标签
                    a_tag = element.find_parent('a')
                    if a_tag and 'href' in a_tag.attrs:
                        href = a_tag['href']
                        # 处理相对路径
                        if not href.startswith('http'):
                            href = url.rstrip('/') + '/' + href.lstrip('/')
                        if href not in results[content_type]:
                            results[content_type].append(href)
                            # print(f"找到{keyword}链接: {href}")
        
        # 如果仍然没有找到所有类型的链接，尝试方案3：查找可能的容器元素
        for content_type, keyword in CONTENT_TYPES.items():
            if not results[content_type]:  # 只处理还没找到链接的类型
                # print(f"方案2未找到{keyword}，尝试方案3...")
                # 查找可能的容器元素
                containers = soup.find_all(['div', 'li', 'ul', 'ol'], 
                                          class_=lambda c: c and (
                                              'gov' in c.lower() or 
                                              'doc' in c.lower() or 
                                              'meeting' in c.lower() or 
                                              'policy' in c.lower()
                                          ))
                for container in containers:
                    # 在容器中查找a标签
                    container_a_tags = container.find_all('a')
                    for a_tag in container_a_tags:
                        # 检查a标签的文本或title属性是否包含关键词
                        if (keyword in (a_tag.get_text() or '') or 
                            keyword in (a_tag.get('title') or '')):
                            href = a_tag['href']
                            # 处理相对路径
                            if not href.startswith('http'):
                                href = url.rstrip('/') + '/' + href.lstrip('/')
                            if href not in results[content_type]:
                                results[content_type].append(href)
                                # print(f"找到{keyword}链接: {href}")
        
        # 新增逻辑：获取省政府常务会议链接
        # 遍历已找到的省政府会议链接
        # print("\n开始查找省政府常务会议链接...")
        for meeting_link in results['provincial_meetings']:
            try:
                # 请求省政府会议链接
                meeting_response = requests.get(meeting_link, headers=headers, timeout=10)
                meeting_response.encoding = meeting_response.apparent_encoding
                meeting_response.raise_for_status()
                
                # 解析省政府会议页面
                meeting_soup = BeautifulSoup(meeting_response.text, 'html.parser')
                
                # 查找包含"省政府常务会议"的链接
                executive_meeting_a_tags = meeting_soup.find_all('a', string=lambda text: text and '省政府常务会议' in text)
                for tag in executive_meeting_a_tags:
                    if 'href' in tag.attrs:
                        href = tag['href']
                        # 处理相对路径
                        if not href.startswith('http'):
                            # 获取基础URL，用于处理相对路径
                            base_url = '/'.join(meeting_link.split('/')[:3])
                            if href.startswith('/'):
                                href = base_url + href
                            else:
                                href = '/'.join(meeting_link.split('/')[:-1]) + '/' + href
                        if href not in results['provincial_executive_meetings']:
                            results['provincial_executive_meetings'].append(href)
                            # print(f"找到省政府常务会议链接: {href}")
                
                # 如果没有直接找到，尝试查找包含"省政府常务会议"的父元素中的a标签
                if not executive_meeting_a_tags:
                    executive_meeting_elements = meeting_soup.find_all(string=lambda text: text and '省政府常务会议' in text)
                    for element in executive_meeting_elements:
                        a_tag = element.find_parent('a')
                        if a_tag and 'href' in a_tag.attrs:
                            href = a_tag['href']
                            # 处理相对路径
                            if not href.startswith('http'):
                                base_url = '/'.join(meeting_link.split('/')[:3])
                                if href.startswith('/'):
                                    href = base_url + href
                                else:
                                    href = '/'.join(meeting_link.split('/')[:-1]) + '/' + href
                            if href not in results['provincial_executive_meetings']:
                                results['provincial_executive_meetings'].append(href)
                                # print(f"找到省政府常务会议链接: {href}")
            except Exception as e:
                print(f"请求省政府会议链接失败: {meeting_link}, 错误: {e}")
                continue
        
        # 新增逻辑：获取省政府常务会议详情页信息
        if results['provincial_executive_meetings']:
            first_executive_meeting_url = results['provincial_executive_meetings'][0]
            # print(f"\n开始解析第一个省政府常务会议详情页: {first_executive_meeting_url}")
            results['executive_meeting_details'] = parse_executive_meeting_details(first_executive_meeting_url)
        else:
            print("\n未找到省政府常务会议链接，无法获取详情页信息")
        
        # 新增逻辑：获取政府文件详情页信息
        if results['government_docs']:
            first_gov_doc_url = results['government_docs'][0]
            # print(f"\n开始解析第一个政府文件详情页: {first_gov_doc_url}")
            results['government_docs_details'] = parse_government_docs_details(first_gov_doc_url)
        else:
            print("\n未找到政府文件链接，无法获取详情页信息")

        # 打印统计信息
        total_links = 0
        for content_type, keyword in CONTENT_TYPES.items():
            link_count = len(results[content_type])
            total_links += link_count
            # print(f"总共找到{link_count}个{keyword}链接")
            
            # 如果未找到链接，打印部分网页内容用于调试
            if not results[content_type]:
                print(f"未找到{keyword}链接")
                print(f"\n网页前500个字符：")
                print(response.text[:500])
        
        # 打印省政府常务会议链接统计
        executive_meeting_count = len(results['provincial_executive_meetings'])
        # print(f"总共找到{executive_meeting_count}个省政府常务会议链接")
        
        # 打印省政府常务会议详情统计
        executive_meeting_details_count = len(results['executive_meeting_details'])
        # print(f"总共提取了{executive_meeting_details_count}条省政府常务会议详情信息")

        # 打印政府文件详情统计
        government_docs_details_count = len(results['government_docs_details'])
        # print(f"总共提取了{government_docs_details_count}条政府文件详情信息")
        
        # 转换为列表形式返回
        result_list = [
            {'type': 'government_docs', 'name': '政府文件', 'links': results['government_docs']},
            {'type': 'policy_interpretation', 'name': '政策解读', 'links': results['policy_interpretation']},
            {'type': 'provincial_meetings', 'name': '省政府会议', 'links': results['provincial_meetings']},
            {'type': 'provincial_executive_meetings', 'name': '省政府常务会议', 'links': results['provincial_executive_meetings']},
            {'type': 'executive_meeting_details', 'name': '省政府常务会议详情', 'details': results['executive_meeting_details']},
            {'type': 'government_docs_details', 'name': '政府文件详情', 'details': results['government_docs_details']}
        ]
        
        return result_list
        
    except requests.exceptions.RequestException as e:
        print(f"请求出错: {e}")
        # 返回空列表形式的结果
        return [
            {'type': 'government_docs', 'name': '政府文件', 'links': []},
            {'type': 'policy_interpretation', 'name': '政策解读', 'links': []},
            {'type': 'provincial_meetings', 'name': '省政府会议', 'links': []},
            {'type': 'provincial_executive_meetings', 'name': '省政府常务会议', 'links': []},
            {'type': 'executive_meeting_details', 'name': '省政府常务会议详情', 'details': []},
            {'type': 'government_docs_details', 'name': '政府文件详情', 'details': []}
        ]
    except Exception as e:
        print(f"解析出错: {e}")
        # 返回空列表形式的结果
        return [
            {'type': 'government_docs', 'name': '政府文件', 'links': []},
            {'type': 'policy_interpretation', 'name': '政策解读', 'links': []},
            {'type': 'provincial_meetings', 'name': '省政府会议', 'links': []},
            {'type': 'provincial_executive_meetings', 'name': '省政府常务会议', 'links': []},
            {'type': 'executive_meeting_details', 'name': '省政府常务会议详情', 'details': []},
            {'type': 'government_docs_details', 'name': '政府文件详情', 'details': []}
        ]

# 保持原有的函数接口以兼容现有代码
def crawl_hebei_gov():
    all_results = crawl_hebei_gov_all()
    for item in all_results:
        if item['type'] == 'government_docs':
            return item['links']
    return []

# 新增的政策解读爬取函数
def crawl_policy_interpretation():
    all_results = crawl_hebei_gov_all()
    for item in all_results:
        if item['type'] == 'policy_interpretation':
            return item['links']
    return []

# 新增的省政府会议爬取函数
def crawl_provincial_meetings():
    all_results = crawl_hebei_gov_all()
    for item in all_results:
        if item['type'] == 'provincial_meetings':
            return item['links']
    return []

# 新增的省政府常务会议爬取函数
def crawl_provincial_executive_meetings():
    all_results = crawl_hebei_gov_all()
    for item in all_results:
        if item['type'] == 'provincial_executive_meetings':
            return item['links']
    return []

# 新增的省政府常务会议详情爬取函数
def crawl_executive_meeting_details():
    all_results = crawl_hebei_gov_all()
    for item in all_results:
        if item['type'] == 'executive_meeting_details':
            return item['details']
    return []


# 新增的政府文件详情爬取函数
def crawl_government_docs_details():
    all_results = crawl_hebei_gov_all()
    for item in all_results:
        if item['type'] == 'government_docs_details':
            return item['details']
    return []

def generate_json_response(all_results):
    """根据爬取结果生成符合要求的JSON格式响应"""
    # 初始化返回数据结构
    response_data = {
        "article_groups": [],
        "display_type": 2,
        "view_more_url": "https://www.hebei.gov.cn/"
    }
    
    # 准备数据映射关系
    # 注意：根据注释中的格式，这里需要调整标签名称
    group_configs = [
        {
            'type_key': 'government_docs_details',  # 政府文件详情数据键
            'group_id': 1,  # 政府文件组ID
            'group_name': '政府文件',  # 政府文件组名称
            'tag': '政府文件'  # 标签名称
        },
        {
            'type_key': 'executive_meeting_details',  # 省政府常务会议详情数据键
            'group_id': 2,  # 省政府常务会议组ID
            'group_name': '常务会议',  # 省政府常务会议组名称
            'tag': '会议精神'  # 标签名称
        }
    ]
    
    # 遍历每个配置，生成对应的article_group
    for config in group_configs:
        # 查找对应的详情数据
        group_data = None
        for item in all_results:
            if item['type'] == config['type_key'] and 'details' in item:
                group_data = item
                break
        
        # 如果找到数据，创建article_group
        if group_data and group_data['details']:
            article_group = {
                "id": config['group_id'],
                "name": config['group_name'],
                "list": []
            }
            
            # 填充list元素，id从1开始递增
            for idx, detail in enumerate(group_data['details'], 1):
                article_item = {
                    "id": idx,  # id从1开始递增
                    "title": detail.get('title', ''),  # 填充标题
                    "uri": detail.get('link', ''),  # 填充完整的URL链接
                    "open_mode": 0,  # 固定值0
                    "description": "",  # 描述为空字符串
                    "date": detail.get('date', ''),  # 填充日期
                    "tag": config['tag'],  # 填充标签
                    "image_url": "",  # 图片URL为空字符串
                    "is_read": False  # 是否已读设为False
                }
                article_group["list"].append(article_item)
            
            # 将article_group添加到article_groups中
            response_data["article_groups"].append(article_group)
    
    return response_data


def get_hebei_gov():
    # print("开始爬取河北省政府网站的所有内容链接...")
    all_results = crawl_hebei_gov_all()
    
    # 打印结果列表
    # print("\n爬取结果列表：")
    # for item in all_results:
    #     if item['type'] in ['executive_meeting_details', 'government_docs_details']:
    #         print(f"\n{item['name']} ({len(item['details'])}条信息):")
    #         for detail in item['details']:
    #             print(f"  - 标题: {detail['title']}")
    #             print(f"    日期: {detail['date']}")
    #             print(f"    链接: {detail['link']}")
    #     else:
    #         print(f"\n{item['name']} ({len(item['links'])}个链接):")
    #         for link in item['links']:
    #             print(f"  - {link}")
    

    # 生成并打印符合格式的JSON响应
    # print("\n生成符合要求的JSON响应：")
    json_response = generate_json_response(all_results)
    import json
    return (json.dumps(json_response, ensure_ascii=False, indent=2))

    # print("\n爬取完成！")

if __name__ == "__main__":
    print("开始爬取河北省政府网站的所有内容链接...")
    all_results = crawl_hebei_gov_all()
    
    # 打印结果列表
    print("\n爬取结果列表：")
    for item in all_results:
        if item['type'] in ['executive_meeting_details', 'government_docs_details']:
            print(f"\n{item['name']} ({len(item['details'])}条信息):")
            for detail in item['details']:
                print(f"  - 标题: {detail['title']}")
                print(f"    日期: {detail['date']}")
                print(f"    链接: {detail['link']}")
        else:
            print(f"\n{item['name']} ({len(item['links'])}个链接):")
            for link in item['links']:
                print(f"  - {link}")
    

    # 生成并打印符合格式的JSON响应
    print("\n生成符合要求的JSON响应：")
    json_response = generate_json_response(all_results)
    import json
    print(json.dumps(json_response, ensure_ascii=False, indent=2))

    print("\n爬取完成！")

    # 参数返回的js形式
    # {
    #     "article_groups": [
    #         {
    #             "id": 1,
    #             "name": "常务会议",
    #             "list": [
    #                 {
    #                     "id": 1,
    #                     "title": "2025年9月1日王正谱主持召开河北省政府常务会议 研究灾后恢复重建、经济运行、生态保护等工作",
    #                     "uri": "https://www.hebei.gov.cn/columns/5b47c431-a184-4cd1-bdc9-172f60c82cc6/202509/02/1a5c7b8b-cd10-4b1a-bb18-c3224dfc62fc.html",
    #                     "open_mode": 0,
    #                     "description": "会议传达学习了习近平总书记近期重要讲话精神，强调要统筹抓好防汛和灾后恢复重建，加快修复受损道路等基础设施，分类修缮加固受灾房屋，深入开展环境卫生整治，加强复盘总结和针对性查漏补缺，不断完善防洪工程体系、应急管理体系，健全水文、气象监测网络，切实提高防灾减灾救灾能力。",
    #                     "date": "2025-09-02",
    #                     "tag": "会议精神",
    #                     "image_url": "https://woa.wps.cn/****/***.png",
    #                     "is_read": False
    #                 }
    #             ]
    #         },{
    #             "id": 2,
    #             "name": "政策解读",
    #             "list": [
    #                 {
    #                     "id": 1,
    #                     "title": "《河北省人民政府办公厅印发关于支持养老机构发展若干措施的通知》解读",
    #                     "uri": "https://www.hebei.gov.cn/columns/50679b44-048c-4322-8ebb-988337c07c46/202509/01/0bda01f9-1633-4231-8407-d2b23ee5db05.html",
    #                     "open_mode": 0,
    #                     "description": "我省自1999年进入老龄化社会以来，老年人口占比逐年攀升。随着高龄和失能老年人不断增多、家庭结构小型化和养老功能弱化，广大老年人入住养老机构的需求不断增多。为贯彻落实党中央、国务院决策部署和省委、省政府工作要求，进一步加大支持养老机构发展力度，不断扩大优质养老服务供给，研究出台了《若干措施》。",
    #                     "date": "2025-08-13",
    #                     "tag": "会议精神",
    #                     "image_url": "https://woa.wps.cn/****/***.png",
    #                     "is_read": False
    #                 }
    #             ]
    #         }
    #     ],
    #     "display_type": 2,
    #     "view_more_url": "https://www.hebei.gov.cn/"
    # }