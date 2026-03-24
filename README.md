# 数独休闲版 - 微信小程序

一款简洁优雅的休闲数独游戏，适合微信小程序打开 🚀

## 功能特性

- ✅ 4个难度级别（简单/中等/困难/专家）
- ✅ 笔记模式（候选数标记）
- ✅ 提示功能
- ✅ 计时挑战
- ✅ 每日挑战
- ✅ 通关记录

## 技术栈

- **框架**：uni-app (Vue3)
- **目标平台**：微信小程序

## 快速开始

### 1. 安装依赖

```bash
# 安装 HBuilderX（推荐）
# 或者使用 CLI
npm install -g @vue/cli @vue/vue3-jit
```

### 2. 运行项目

```bash
# 导入项目到 HBuilderX
# 点击运行 -> 运行到小程序模拟器

# 或使用 CLI
cd sudoku-miniapp
npm install
npm run dev:mp-weixin
```

### 3. 微信开发者工具

1. 下载微信开发者工具：https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html
2. 打开 `dist/dev/mp-weixin` 目录
3. 替换 manifest.json 中的 appid 为你的小程序 AppID
4. 在微信开发者工具中导入项目

## 项目结构

```
sudoku-miniapp/
├── pages/
│   ├── index/          # 首页（难度选择）
│   └── game/          # 游戏主界面
├── components/        # 组件（可扩展）
├── utils/
│   └── sudoku.js      # 数独算法
├── App.vue            # 根组件
├── main.js            # 入口文件
├── pages.json         # 路由配置
└── manifest.json      # 小程序配置
```

## 后续可扩展功能

- [ ] 每日挑战排行榜
- [ ] 社交分享（炫耀战绩）
- [ ] 主题皮肤
- [ ] 背景音乐
- [ ] 联机对战

## License

MIT