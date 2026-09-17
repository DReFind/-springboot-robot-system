# Robot Shop

Robot Shop 是一个基于 Vue 3 和 Vite 构建的智能机器人产品展示网站，面向餐饮、清洁、巡检、迎宾、教育和工业生产等应用场景，集中展示不同类型的机器人产品。

项目采用简洁的商城式视觉设计，突出机器人产品图片、产品类型、功能介绍和参考价格，适合作为智能机器人产品销售平台的前端展示页面，也可作为本科毕业设计的前端项目基础。

## 项目功能

- 全屏首屏轮播展示，突出智能机器人主题
- 顶部导航栏，支持网站主要页面入口展示
- 机器人产品列表，采用响应式卡片布局
- 展示产品名称、产品类型、功能描述和参考价格
- 支持桌面端、平板端和移动端自适应布局
- 页脚展示 Robot Shop 品牌信息、GitHub 和 QQ 联系方式
- GitHub 联系入口可跳转至个人主页

当前展示的产品包括：

- 智能送餐机器人
- 智能清洁机器人
- 智能巡检机器人
- 智能迎宾机器人
- 智能教育机器人
- 工业机械臂

## 技术栈

- [Vue 3](https://vuejs.org/)
- [Vite](https://vite.dev/)
- JavaScript
- CSS3
- SVG 图标

## 项目结构

```text
robot-system-front/
├── public/                 # 公共静态资源
├── front-image-simple/     # 机器人产品和轮播图片
├── src/
│   ├── assets/             # 全局样式文件
│   ├── components/         # 页面组件
│   │   ├── HeroBanner.vue  # 首屏轮播组件
│   │   ├── Navbar.vue      # 顶部导航组件
│   │   └── RobotCard.vue   # 机器人产品卡片
│   ├── App.vue             # 应用主页面
│   ├── main.js             # 项目入口
│   └── style.css           # 基础样式
├── index.html
├── package.json
└── vite.config.js
```

## 环境要求

- Node.js 18 或更高版本
- npm 9 或更高版本

## 安装依赖

```bash
npm install
```

## 启动开发服务器

```bash
npm run dev
```

启动后，使用浏览器访问终端中显示的本地开发地址，通常为：

```text
http://localhost:5173
```

## 构建生产版本

```bash
npm run build
```

构建完成后的文件会输出到 `dist` 目录。

## 预览生产版本

```bash
npm run preview
```

## 联系方式

- GitHub：[DReFind](https://github.com/DReFind)
- QQ：2952235159

## 项目说明

本项目目前主要用于机器人产品前端展示，产品数据和页面内容保存在前端代码中。后续可以继续接入后端接口，实现用户登录、产品详情、购物车、订单管理和后台产品维护等功能。
## 项目开发时间
2026年9月1日----