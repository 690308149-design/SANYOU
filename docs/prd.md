# 需求文档

## 1. 应用概述

### 1.1 应用名称
三友科技官网（Sanyou Technology Official Website）

### 1.2 应用描述
三友科技官网是一个面向企业IT决策者、运维负责人和技术合作伙伴的多语言企业官方网站。网站展示公司的ITOM软件产品（Tri-Force ITOM套件、AIObserver智能分析平台）及IT服务体系（运维服务、AI智能服务、技术支持服务），传递「跨国协同、技术领先」的品牌形象。

「三友」象征中国、日本、韩国三国在IT与AI领域的深度合作，同时融合欧美先进技术经验，构建跨区域的技术交流与创新平台。

### 1.3 核心目标
- 展示公司产品与服务能力
- 传递品牌价值与差异化优势
- 提供多语言访问体验（日文默认、中文、英文）
- 为潜在客户提供联系渠道

## 2. 用户与使用场景

### 2.1 目标用户
- 企业IT决策者：了解ITOM解决方案，评估产品与服务
- 运维负责人：查看产品功能细节，寻求运维服务支持
- 技术合作伙伴：了解公司背景与合作机会

### 2.2 核心使用场景
- 用户通过搜索引擎或推广渠道访问官网，浏览公司介绍与产品服务信息
- 用户切换语言版本（日文/中文/英文），获取本地化内容
- 用户查看产品功能列表，了解技术优势
- 用户通过联系方式与公司沟通合作事宜

## 3. 页面结构与功能说明

### 3.1 页面结构树

```
三友科技官网
├── 首页（/ja/ 或 /zh/ 或 /en/）
├── 产品中心（/ja/products 或 /zh/products 或 /en/products）
├── 服务介绍（/ja/services 或 /zh/services 或 /en/services）
├── 关于我们（/ja/about 或 /zh/about 或 /en/about）
└── 联系我们（/ja/contact 或 /zh/contact 或 /en/contact）
```

### 3.2 全局导航

#### 3.2.1 导航栏
- 位置：页面顶部固定
- 内容：
  + 左侧：公司Logo
  + 中间：导航菜单（首页、产品、服务、关于我们、联系我们）
  + 右侧：语言切换下拉菜单（日本语/中文/English）
- 功能：
  + 点击导航菜单项跳转至对应页面
  + 点击语言切换下拉菜单，选择语言后全局内容更新为对应语言版本
  + 用户选择的语言存储至本地，下次访问时自动应用

#### 3.2.2 页脚
- 位置：所有页面底部
- 内容：版权信息「© 2026 三友科技 版权所有」（中文版）或「© 2026 三友テクノロジー All rights reserved.」（日文版）或「© 2026 Sanyou Technology All rights reserved.」（英文版）

### 3.3 首页（/ja/ 或 /zh/ 或 /en/）

#### 3.3.1 Hero区域
- 主标题：
  + 日文：未来のIT運用を共に創る 三友テクノロジー
  + 中文：共创未来IT运营 三友科技
  + 英文：Shaping the Future of IT Operations Together - Sanyou Technology
- 副标题：
  + 日文：日中韓の英知と欧米の先進ノウハウを融合し、エンタープライズ向けITOMとAI駆動のサービスを提供します。
  + 中文：融合中日韩智慧与欧美先进经验，为企业提供ITOM及AI驱动的运营服务。
  + 英文：Integrating expertise from China, Japan, and Korea with advanced practices from Europe and America, delivering enterprise ITOM and AI-driven operational services.
- 按钮：
  + 按钮1：「查看解决方案」（中文）/「ソリューションを見る」（日文）/「View Solutions」（英文），点击跳转至产品中心页面
  + 按钮2：「联系我们」（中文）/「お問い合わせ」（日文）/「Contact Us」（英文），点击跳转至联系我们页面

#### 3.3.2 三友象征区
- 内容：
  + 日文：「三友」の名は、中国・日本・韓国三国のIT・AI分野における協力と友情を表します。それぞれの強みを活かし、さらに欧米の最新トレンドを取り入れることで、グローバル水準のIT運用管理ソリューションを実現します。
  + 中文：「三友」之名代表中国、日本、韩国在IT与AI领域的合作与友谊。汇聚三国优势，引入欧美前沿实践，为您提供全球水准的IT运维管理解决方案。
  + 英文：The name \"Sanyou\" (Three Friends) represents the collaboration and friendship among China, Japan, and Korea in IT and AI. By leveraging the strengths of each nation and incorporating cutting-edge practices from Europe and America, we deliver world-class IT operations management solutions.

#### 3.3.3 产品与服务卡片区
- 展示4个卡片，每个卡片包含标题、说明文字
- 卡片1 - ITOM产品：
  + 标题：「ITOM产品」（中文）/「ITOM製品」（日文）/「ITOM Products」（英文）
  + 说明：「统一监控服务器/网络/云资源。内置自动化工作流与AI异常检测。支持多语言（日/中/韩/英）。」（中文）/「サーバー/ネットワーク/クラウドを統合監視。自動化ワークフローとAI異常検知を内蔵。多言語対応（日・中・韓・英）。」（日文）/「Unified monitoring for servers, networks, and cloud resources. Built-in automation workflows and AI anomaly detection. Multi-language support (Japanese, Chinese, Korean, English).」（英文）
- 卡片2 - 运维服务：
  + 标题：「运维服务」（中文）/「運用サービス」（日文）/「Operations Services」（英文）
  + 说明：「7x24小时托管服务、云运维、故障处理。专家团队守护您的系统。」（中文）/「24時間365日のマネージドサービス、クラウド運用、障害対応。専門チームがお客様のシステムを守ります。」（日文）/「24/7 managed services, cloud operations, and incident response. Expert teams safeguarding your systems.」（英文）
- 卡片3 - AI智能服务：
  + 标题：「AI智能服务」（中文）/「AIスマートサービス」（日文）/「AI Smart Services」（英文）
  + 说明：「基于机器学习的异常检测、预测分析、自动修复。从数据中提取洞察,减轻运维负担。」（中文）/「機械学習による異常検知、予測分析、自動修復。データからインサイトを抽出し、運用負荷を軽減します。」（日文）/「Machine learning-based anomaly detection, predictive analytics, and auto-remediation. Extract insights from data and reduce operational burden.」（英文）
- 卡片4 - 技术支持服务：
  + 标题：「技术支持服务」（中文）/「技術サポート」（日文）/「Technical Support」（英文）
  + 说明：「技术咨询、故障排查、培训服务。覆盖产品全生命周期的支持。」（中文）/「技術コンサルティング、トラブルシューティング、トレーニング。製品の全ライフサイクルを支援します。」（日文）/「Technical consulting, troubleshooting, and training services. Full lifecycle support for our products.」（英文）

#### 3.3.4 优势展示区
- 标题：「三友优势」（中文）/「三友の強み」（日文）/「Sanyou Advantages」（英文）
- 展示3个优势点：
  + 优势1：「中日韩协同 – 适配多样化市场需求」（中文）/「日中韓連携 – 多様な市場ニーズに適合」（日文）/「China-Japan-Korea Collaboration – Adapting to diverse market needs」（英文）
  + 优势2：「AI驱动运维 – 主动规避故障」（中文）/「AIドリブン運用 – プロアクティブな障害回避」（日文）/「AI-Driven Operations – Proactive incident prevention」（英文）
  + 优势3：「欧美最佳实践 – 遵循ITIL/SRE」（中文）/「欧米のベストプラクティス – ITIL/SRE準拠」（日文）/「Best Practices from Europe & America – ITIL/SRE compliant」（英文）

### 3.4 产品中心页面（/ja/products 或 /zh/products 或 /en/products）

#### 3.4.1 产品组合概览
- 展示两个核心产品：
  + Tri-Force ITOM套件（Tri-Force ITOMスイート）：统一监控+自动化运维平台
  + AIObserver智能分析平台（AIObserver）：AI驱动的可观测性与智能运维

#### 3.4.2 Tri-Force ITOM套件详情
- Hero区域：
  + 标题：「统一监控 + 自动化运维平台 Tri-Force ITOM 套件」（中文）/「統合監視＋自動運用プラットフォーム Tri-Force ITOMスイート」（日文）/「Unified Monitoring + Automation Platform - Tri-Force ITOM Suite」（英文）
  + 副标题：「支持多云与混合环境。从可视化到自动修复，简化IT运维全流程。」（中文）/「マルチクラウド・ハイブリッド環境に対応。見える化から自動修復まで、IT運用のすべてをシンプルに。」（日文）/「Supporting multi-cloud and hybrid environments. From visualization to auto-remediation, simplifying the entire IT operations workflow.」（英文）
- 功能模块列表：
  + 基础设施监控（インフラ監視）（Infrastructure Monitoring）：统一监控服务器、网络设备、存储、数据库，支持无代理/代理模式
  + 应用性能监控（アプリケーションパフォーマンス監視）（Application Performance Monitoring）：调用链追踪、事务分析、最终用户体验可视
  + 日志管理与分析（ログ管理・分析）（Log Management & Analytics）：集中日志采集、全文检索、模式识别、异常日志自动聚类
  + 事件与告警管理（イベント・アラート管理）（Event & Alert Management）：关联分析、去重、升级策略、多渠道通知（Slack/Teams/邮件）
  + 云监控（クラウド監視）（Cloud Monitoring）：支持AWS/Azure/Google/阿里云/腾讯云，多云环境的指标、成本、资源统一视图
  + 自动化工作流（自動化ワークフロー）（Automation Workflows）：故障时自动执行脚本、重启服务、弹性伸缩等
  + 配置管理数据库（CMDB）：资产与配置项关系管理、变更影响分析、ITIL对接
  + 报表与仪表盘（レポート・ダッシュボード）（Reports & Dashboards）：可定制的实时仪表盘、周/月总结报告
- 差异化特性：
  + 多语言UI（日语、中文、韩语、英语）
  + 中日韩时区与节假日支持（优化排班管理、故障响应升级）
  + 混合监控（统一监控本地、边缘、公有云）

#### 3.4.3 AIObserver智能分析平台详情
- Hero区域：
  + 标题：「AI驱动的可观测性平台 AIObserver」（中文）/「AI駆動の可観測性プラットフォーム AIObserver」（日文）/「AI-Driven Observability Platform - AIObserver」（英文）
  + 副标题：「利用机器学习提前发现异常，数秒内定位故障根因。大幅减轻运维团队负担。」（中文）/「機械学習で異常を先取りし、障害の根本原因を数秒で特定。運用チームの負荷を劇的に削減。」（日文）/「Leveraging machine learning to detect anomalies in advance and pinpoint root causes within seconds. Dramatically reducing operational team burden.」（英文）
- 功能列表：
  + 异常检测（機械学習）（異常検知）（Anomaly Detection）：自动学习时序数据基线，无需阈值，智能检测异常
  + 根因分析（RCA）（根本原因分析）（Root Cause Analysis）：基于拓扑与指标关联，数秒内给出根因候选
  + 容量预测与资源优化（容量予測とリソース最適化）（Capacity Forecasting & Resource Optimization）：预测未来资源不足，提供扩缩容建议
  + 日志模式分析（ログのパターン分析）（Log Pattern Analysis）：从海量日志自动提取模式，分类已知/未知错误
  + 智能告警抑制（スマートアラート抑制）（Smart Alert Suppression）：通过事件关联和相似度聚类，减少90%告警噪声
  + AI智能助手（運維辅助）（AIチャットボット）（AI Assistant）：自然语言提问「CPU飙升原因」，立即返回分析结果

### 3.5 服务介绍页面（/ja/services 或 /zh/services 或 /en/services）

#### 3.5.1 运维服务
- 标题：「运维服务」（中文）/「運用サービス」（日文）/「Operations Services」（英文）
- 说明：「7x24小时基础设施监控、云管理、备份恢复、故障处理与升级。」（中文）/「24時間365日のインフラ監視、クラウド管理、バックアップ/リストア、障害対応とエスカレーション。」（日文）/「24/7 infrastructure monitoring, cloud management, backup/restore, incident response and escalation.」（英文）
- SLA可选：标准（99.9%）、高级（99.99%）

#### 3.5.2 AI智能服务
- 标题：「AI智能服务」（中文）/「AIスマートサービス」（日文）/「AI Smart Services」（英文）
- 说明：「基于AIObserver平台提供异常检测、根因分析、容量预测、自动化修复策略设计。」（中文）/「AIObserverプラットフォームによる異常検知、根本原因分析、容量予測、自動修復ポリシー設計。」（日文）/「Powered by AIObserver platform, providing anomaly detection, root cause analysis, capacity forecasting, and automated remediation policy design.」（英文）

#### 3.5.3 技术支持服务
- 标题：「技术支持服务」（中文）/「技術サポート」（日文）/「Technical Support」（英文）
- 说明：「标准（邮件/工单，工作日响应）、高级（电话+紧急支持）、尊享（专属技术经理+现场支持）。」（中文）/「標準（メール/チケット、営業日対応）、アドバンス（電話＋緊急対応）、プレミアム（専任技術マネージャー＋オンサイト）。」（日文）/「Standard (Email/Ticket, business day response), Advanced (Phone + emergency support), Premium (Dedicated technical manager + on-site support).」（英文）

### 3.6 关于我们页面（/ja/about 或 /zh/about 或 /en/about）

- 公司背景：
  + 中文：成立于2021年，总部位于东京，在北京、首尔设有联合创新中心。采用ITIL/SRE框架，多语言、多文化团队提供全球化服务。
  + 日文：2021年設立、本社東京。北京・ソウルに共同イノベーションセンターを設置。ITIL/SREフレームワークを採用し、多言語・多文化チームがグローバルなサービスを提供します。
  + 英文：Founded in 2021, headquartered in Tokyo, with joint innovation centers in Beijing and Seoul. Adopting ITIL/SRE frameworks, our multilingual and multicultural team delivers global services.
- 团队文化：多语言、跨时区协作；提倡「全球视野，本地响应」

### 3.7 联系我们页面（/ja/contact 或 /zh/contact 或 /en/contact）

- 办公地址：
  + 东京：〒100-0005 東京都千代田区丸の内1-1-1
  + 北京：北京市朝阳区建国门外大街1号
  + 首尔：서울특별시 강남구 테헤란로 123
- Email：info@sanyou-tech.com
- 电话：
  + 东京：+81 3-1234-5678
  + 北京：+86 10-1234 5678
  + 首尔：+82 2-1234-5678
- 说明文字：
  + 中文：如有任何咨询，请通过以下方式联系我们。（邮件或电话）
  + 日文：お問い合わせは下記の連絡先までお願いいたします。（ご質問はメールまたはお電話で承ります。）
  + 英文：For any inquiries, please contact us via the following methods. (Email or phone)

## 4. 业务规则与逻辑

### 4.1 多语言切换规则
- 默认语言为日文，首次访问时展示日文版本
- URL结构：日文版本为 /ja/，中文版本为 /zh/，英文版本为 /en/
- 首页默认路径为 /ja/，访问根路径时自动重定向至 /ja/
- 用户通过导航栏右侧语言切换下拉菜单选择语言后，全局内容更新为对应语言版本
- 用户选择的语言存储至本地，下次访问时自动应用该语言
- 每个页面的URL需包含语言标识（/ja/ 或 /zh/ 或 /en/），切换语言时URL同步更新

### 4.2 内容管理规则
- 所有文案内容存储在三个独立的JSON文件中：ja.json（日文）、zh.json（中文）、en.json（英文）
- 页面内容动态绑定JSON文件中的对应字段
- JSON文件包含所有页面的文案内容，包括导航菜单、页面标题、正文、按钮文字、页脚版权等

### 4.3 导航与跳转规则
- 点击导航菜单项时，跳转至对应页面，保持当前语言版本
- 点击首页Hero区域的「查看解决方案」按钮，跳转至产品中心页面
- 点击首页Hero区域的「联系我们」按钮，跳转至联系我们页面
- 所有页面跳转需保持当前语言版本的URL结构

### 4.4 响应式设计规则
- 网站需适配桌面端与移动端
- 移动端导航栏使用汉堡菜单，点击展开导航菜单
- 卡片式内容在移动端自动调整为单列布局

## 5. 异常与边界情况

| 场景 | 处理方式 |
|------|----------|
| 用户访问不存在的语言路径（如 /ko/） | 自动重定向至默认语言版本（/ja/） |
| 用户访问不存在的页面路径 | 显示404页面，提供返回首页链接 |
| JSON文件加载失败 | 显示默认占位文字或错误提示 |
| 用户浏览器不支持本地存储 | 每次访问时使用默认语言（日文） |
| 移动端横屏显示 | 保持响应式布局，内容自适应屏幕宽度 |

## 6. 验收标准

1. 用户访问官网首页（/ja/），页面展示日文版本的Hero区域、三友象征区、产品与服务卡片区、优势展示区
2. 用户点击导航栏右侧语言切换下拉菜单，选择「English」，页面内容更新为英文版本，URL变更为 /en/
3. 用户点击导航菜单中的「Products」，跳转至产品中心页面（/en/products），页面展示Tri-Force ITOM套件和AIObserver智能分析平台的英文详细信息
4. 用户点击导航菜单中的「Services」，跳转至服务介绍页面（/en/services），页面展示运维服务、AI智能服务、技术支持服务的英文详细说明
5. 用户点击导航菜单中的「About Us」，跳转至关于我们页面（/en/about），页面展示公司背景与团队文化的英文内容
6. 用户点击导航菜单中的「Contact Us」，跳转至联系我们页面（/en/contact），页面展示办公地址、Email、电话等联系方式及英文说明文字
7. 用户关闭浏览器后重新访问官网，页面自动展示上次选择的语言版本（英文）
8. 用户在移动端访问官网，页面自动适配移动端布局，导航栏显示汉堡菜单，点击展开导航菜单，语言切换下拉菜单包含日本语/中文/English三个选项

## 7. 本期不实现功能

- 在线客服/聊天功能
- 用户注册与登录系统
- 产品试用申请表单
- 案例研究/客户成功故事页面
- 博客/新闻资讯模块
- 搜索功能
- 韩文等其他语言版本
- 产品价格与在线购买功能
- 用户评论与反馈系统
- 社交媒体分享功能
- 视频播放功能
- 下载中心（白皮书、产品手册等）
- 合作伙伴展示页面
- 招聘信息页面