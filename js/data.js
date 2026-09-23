/* =========================================================
 * 个人信息与项目数据 —— 页面内容的唯一数据源
 * 新增项目：向 projects 数组添加一条记录即可，页面自动渲染
 * 项目配图：使用本地 ./images/ 下的主题插画（SVG，离线可用）
 * 如需换回文生图接口，端点格式：
 *   https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt={prompt}&image_size={size}
 * ========================================================= */

// ---------------- 个人信息 ----------------
var profile = {
  name: 'Klein',
  role: '物联网工程 · AI 辅助开发 / 桌面工具与网络工程',
  tagline: '热爱软件工程开发 —— 目前主要关注 AI 辅助开发、大语言模型技术、桌面工具、网络工程与代码版本追溯。',
  year: '2026',
  location: '中国·广州',
  email: 'kleinkleinwu@gmail.com',
  github: 'https://github.com/kleinklein0824',
  homepage: 'https://klein0824.github.io/',
  wechat: 'klein',
  skills: [
    { name: '编程语言', detail: 'Python · Java · TypeScript · Dart/Flutter · Node.js · C#/.NET · HTML/CSS' },
    { name: '框架与库', detail: 'React · Flask · PyInstaller · pywebview · WebView2 · Monaco Editor' },
    { name: '网络与系统', detail: 'PowerShell/netsh · Scapy' },
    { name: 'AI 与集成', detail: 'MCP · HuggingFace API · RAG/向量检索' }
  ]
};

// ---------------- 项目作品 ----------------
// image_size 可选：landscape_16_9 / landscape_4_3 / portrait_4_3 / square
var projects = [
  {
    no: '01',
    title: 'Code History 2 · 代码修改历史管理器',
    titleEn: 'Code History Manager',
    summary: '让每一次代码修改都可追溯、可对比、可回退。',
    category: '开发者工具',
    date: '2026.08',
    stack: ['Node.js', 'MCP', 'stdio JSON-RPC', 'Monaco Editor', 'HTML/CSS/JS', 'C#/.NET 9', 'WinForms', 'WebView2', '@yao-pkg/pkg', 'dotnet publish'],
    desc: '面向 AI 辅助编程（Vibe Coding）场景的本地代码修改历史管理器，目标是让每一次代码修改都可追溯、可对比、可回退。项目采用双模式设计：AI Agent 通过 MCP 工具 safe_write_file 自动存档，修改文件时同步完成“备份旧版 → 生成 diff → 记录语义注释 → 写回文件”；用户也可通过 GUI 手动存档并填写注释。核心使用 Node.js 内置模块实现，零第三方运行时依赖，所有历史存放在项目内的 .code_history/ 目录，随项目移动不丢失。项目提供浏览器版与桌面版两种形态，桌面版基于 C#/.NET 9 WinForms + WebView2，自包含单文件发布。功能上支持 Monaco Editor 左右对比、字符级精确高亮、并排多版本对比、全屏查看、HTML 双栏预览、一键回退、导出独立 diff HTML、文件对比、深浅配色切换与 CLI 命令行模式。MCP 服务器共提供 9 个工具，可接入 Claude、Cline、Continue 等支持 MCP 的 Agent。项目全量检测共 119 项全部通过。',
    image: './images/p01.svg',
    alt: 'Code History 2——代码修改历史管理器项目配图'
  },
  {
    no: '02',
    title: 'DNS 解析工具 · 网络控制台',
    titleEn: 'DNS Network Console',
    summary: '整合 9 个功能面板的本地网络工具箱。',
    category: '网络工具',
    date: '2026.08',
    stack: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Python 3.13', 'Flask', 'PowerShell/netsh/Scapy', 'pywebview', 'PyInstaller'],
    desc: '面向教室、机房和老旧电脑场景的本地网络工具箱，整合了 DNS 解析、网卡优先级控制、DNS 设置、网络诊断、ARP 局域网发现、路由与活动连接查看、DNS 测速、子网计算等 9 个功能面板。项目采用前后端同源架构，Flask 仅监听 127.0.0.1，通过 pywebview 内嵌 WebView2 或自动降级浏览器运行，最终打包为约 61MB 的单文件 EXE。DNS 解析采用“系统解析 + DoH 兜底”两段式策略，解决反向 DNS 查询挂起问题；网卡管理支持 USB 无线网卡 PnP 识别、驱动未就绪提示和硬件扫描；同时处理了 PyInstaller 体积暴涨、Defender 误报、前端 MIME、PowerShell 退出码误报等工程问题。项目包含 24 条 REST API 和 39 项 Playwright 端到端断言，并支持自检与窗口自检。',
    image: './images/p02.svg',
    alt: 'DNS解析工具——网络控制台项目配图'
  },
  {
    no: '03',
    title: 'NovaFTP · 个人 FTP 服务器',
    titleEn: 'Personal FTP Server',
    summary: '点开即用、退出零残留的一次性 FTP 服务器。',
    category: '网络工具',
    date: '2026.08',
    stack: ['Python', 'pyftpdlib', 'pywebview', 'WebView2', 'netsh', 'PyInstaller'],
    desc: '点开即用的一次性 Windows FTP 服务器。项目支持多目录共享、登录方式三选一（账号密码 / 匿名 / 两者）、只读或可写模式、GBK/UTF-8 文件名编码切换、被动端口范围与自动避让、防火墙自动放行、netsh PortProxy 端口通道、端口预检与 WinError 10013 诊断、连接测试、外网访问助手、传输统计和实时日志。退出或暂停时会自动关闭 FTP 服务，并删除本次创建的防火墙规则、端口通道、临时虚拟目录与 junction，做到零残留。程序采用分层架构，打包为单文件 EXE，内嵌管理员清单，并通过自动化测试覆盖服务端与 UI 全链路。',
    image: './images/p03.svg',
    alt: 'NovaFTP——个人FTP服务器项目配图'
  },
  {
    no: '04',
    title: 'GPU Check',
    titleEn: 'GPU & AI Model Checker',
    summary: '电脑硬件检测与本地 AI 模型显存适配面板。',
    category: '硬件工具',
    date: '2026',
    stack: ['Flutter', 'Dart', 'PowerShell', 'HuggingFace API', 'CustomPainter', 'BackdropFilter', 'Inno Setup'],
    desc: '电脑硬件规格检测与本地可部署 AI 模型适配面板，支持 Windows / macOS。项目重点解决 Windows 下 WMI AdapterRAM 32 位截断导致显存读取不准的问题，采用驱动注册表 qwMemorySize、nvidia-smi 和 WMI 三源交叉校验获取真实显存。内置模型推荐引擎，按权重体积、KV Cache 和框架开销估算显存需求，自动挑选可完整载入的最高精度量化档位，并给出适配评级。项目支持 HuggingFace 官方直连下载、GGUF 仓库搜索、官方 / 镜像双源自动降级与网络不可达引导。界面复刻 iPhone“液态玻璃”视觉语言，手写 CustomPainter / BackdropFilter 实现玻璃层、金属拉丝、悬停扫光、液态背景与自适应主题，最终生成约 12MB 的 Windows 安装包并实现 app-local 部署。',
    image: './images/p04.svg',
    alt: 'GPU Check——硬件检测与AI模型适配面板项目配图'
  },
  {
    no: '05',
    title: 'PyInstaller-GUI · 一键打包工具',
    titleEn: 'One-click Packaging Tool',
    summary: '选择脚本与参数，一键打包生成可执行文件。',
    category: '效率工具',
    date: '2026',
    stack: ['Python', 'pywebview', 'PyInstaller', 'HTML/CSS/JS'],
    desc: '基于 pywebview + PyInstaller 的桌面打包工具。用户可选择 .py 脚本与 .ico 图标，自定义 exe 名称和 PyInstaller 参数，一键生成可执行文件。工具支持 onefile / onedir、windowed / console、clean、版本信息文件、附加资源目录、隐式导入、排除模块、数据收集、额外搜索路径、启动画面、运行时临时目录、管理员权限、UPX 压缩、日志级别和可选加密等选项。同时提供配置保存 / 载入、复制打包命令、实时构建日志、失败排查提示、自动打开输出目录等功能。输出目录规则避免 dist / build 污染，build 缓存存放于系统缓存目录并支持二次打包复用加速。',
    image: './images/p05.svg',
    alt: 'PyInstaller-GUI——一键打包工具项目配图'
  },
  {
    no: '06',
    title: 'AI API Price',
    titleEn: 'AI API Price Comparison',
    summary: '集中查看与比较各大模型 API 定价。',
    category: 'AI 应用',
    date: '进行中',
    stack: ['Flutter', 'Dart'],
    desc: '基于 Flutter 的 AI API 价格查询与对比应用，用于集中查看和比较不同大语言模型 API 的定价信息，帮助开发者快速选择合适模型。项目采用 Flutter 跨平台构建，目前处于早期开发阶段。',
    image: './images/p06.svg',
    alt: 'AI API Price——大模型API价格对比应用项目配图'
  },
  {
    no: '07',
    title: '拾光集市 · 校园二手交易平台',
    titleEn: 'Campus Second-hand Market',
    summary: '面向校园的二手交易平台，注册用户 300+。',
    category: 'Web 应用',
    date: '2025.09',
    stack: ['Java', 'Spring Boot', 'MySQL', 'TypeScript', 'Vue'],
    desc: '面向校园场景的二手交易平台，提供商品发布、关键词检索、站内私信和信用评分等功能。从需求梳理、界面设计到主要接口开发均独立完成，上线测试后累计注册用户超过 300 人。',
    image: './images/p07.svg',
    alt: '拾光集市——校园二手交易平台项目配图'
  }
];
