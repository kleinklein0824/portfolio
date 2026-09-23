# Klein · 个人作品集

一个基于原生 HTML / CSS / JavaScript 的个人作品集单页网站，展示 AI 辅助开发、桌面工具、网络工程与 Web 开发方向的精选项目。零框架、零构建、零第三方依赖，可离线运行。

## 主要功能

- **精选作品展示**：从数据源自动渲染 7 个项目卡片，三种版式（a/b/c）循环排版，含项目配图、分类标签、技术栈与完成时间
- **关于我**：个人简介与技能索引展示
- **联系板块**：邮箱、GitHub、个人主页、微信等联系方式
- **深浅主题切换**：支持明暗两套主题，选择持久化到 localStorage
- **交互细节**：
  - 导航栏滚动状态变化、当前区域自动高亮（Scroll Spy）
  - 移动端汉堡菜单
  - 滚动渐显动画（IntersectionObserver，不支持时自动降级）
  - 桌面端与移动端响应式布局

## 技术栈

- HTML5 / CSS3 / 原生 JavaScript（ES5 风格 IIFE，无框架、无 UI 组件库）
- Intersection Observer API（滚动渐显、区域高亮）
- SVG 本地插画（离线可用的项目配图）

## 运行方式

无需安装依赖、无需构建，直接任选其一：

```bash
# 方式一：直接双击打开 index.html

# 方式二：使用任意静态服务器（推荐）
python -m http.server 8080
# 然后访问 http://localhost:8080
```

## 项目结构

```
lab04/
├── index.html        # 页面结构（导航 / 首屏 / 作品 / 关于 / 联系）
├── css/
│   └── style.css     # 全部样式（主题变量、响应式、动画）
├── js/
│   ├── data.js       # 数据源：个人信息 profile + 项目列表 projects
│   └── main.js       # 页面逻辑：渲染、主题切换、导航、滚动动画
└── images/           # 项目配图（本地 SVG）
```

## 如何新增项目

编辑 [js/data.js](js/data.js)，向 `projects` 数组添加一条记录即可，页面会自动渲染并更新作品计数：

```js
{
  no: '08',
  title: '项目名称',
  titleEn: 'Project Name',
  summary: '一句话简介。',
  category: '分类',
  date: '2026.09',
  stack: ['技术1', '技术2'],
  desc: '详细描述。',
  image: './images/p08.svg',
  alt: '项目配图描述'
}
```

---

© 2026 Klein · [GitHub](https://github.com/kleinklein0824) · [个人主页](https://klein0824.github.io/)
