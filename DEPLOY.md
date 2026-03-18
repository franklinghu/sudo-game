# 📡 答题页面部署指南

**目标**：将每日答题页面部署到网络，让孩子可以在任何设备访问

---

## 🚀 方案一：GitHub Pages（推荐）

### 第 1 步：创建 GitHub 仓库

1. 访问 [github.com](https://github.com)
2. 点击右上角「+」→「New repository」
3. 仓库名称：`zhongkao-practice`
4. 描述：中考 100 天冲刺 - 每日答题系统
5. 选择 **Public**
6. ✅ 勾选「Add a README file」
7. 点击「Create repository」

### 第 2 步：上传文件

**方法 A：使用网页上传（简单）**

```
1. 在仓库页面点击「Add file」→「Upload files」
2. 将以下文件拖拽到上传区域：
   - daily-practice/2026-03-18-monday.html
   - daily-practice/2026-03-19-tuesday.html（后续生成）
   - README.md
3. 在「Commit changes」输入框填写：添加每日答题页面
4. 点击「Commit changes」
```

**方法 B：使用 Git 命令（高级）**

```bash
# 配置 Git（首次使用）
git config --global user.name "YourName"
git config --global user.email "your-email@example.com"

# 初始化仓库
cd /home/admin/.openclaw/workspace
git init
git add daily-practice/ README-daily-practice.md
git commit -m "Initial commit: 中考答题系统"

# 关联远程仓库（替换 YOUR_USERNAME 为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/zhongkao-practice.git

# 推送
git branch -M main
git push -u origin main
```

### 第 3 步：启用 GitHub Pages

```
1. 在仓库页面点击「Settings」
2. 左侧菜单点击「Pages」
3. 在「Build and deployment」下：
   - Source: Deploy from a branch
   - Branch: 选择 main 或 master
   - Folder: / (root)
4. 点击「Save」
```

### 第 4 步：获取在线链接

等待 1-2 分钟，页面刷新后会显示：

```
Your site is live at:
https://YOUR_USERNAME.github.io/zhongkao-practice/
```

**答题页面链接**：
```
https://YOUR_USERNAME.github.io/zhongkao-practice/daily-practice/2026-03-18-monday.html
```

---

## 🌐 方案二：Netlify Drop（最简单）

### 步骤

1. 访问 [Netlify Drop](https://app.netlify.com/drop)
2. 将 `daily-practice` 文件夹拖拽到上传区域
3. 等待上传完成
4. 获得在线链接（如：`https://yoursite.netlify.app`）

**优点**：
- ✅ 无需注册（临时使用）
- ✅ 拖拽即可部署
- ✅ 自动 HTTPS

**缺点**：
- ⚠️ 链接是随机的
- ⚠️ 需要注册账号才能自定义链接

---

## ☁️ 方案三：Vercel

### 步骤

1. 访问 [vercel.com](https://vercel.com)
2. 使用 GitHub 账号登录
3. 点击「Add New Project」
4. 选择你的 `zhongkao-practice` 仓库
5. 点击「Deploy」

**优点**：
- ✅ 自动部署（每次 push 自动更新）
- ✅ 自定义域名
- ✅ 全球 CDN

---

## 📱 方案四：飞书云文档（备选）

如果上述方案都不方便，可以将 HTML 文件上传到飞书云文档：

1. 打开飞书云文档
2. 创建新文档
3. 插入 → 附件 → 上传 HTML 文件
4. 分享链接给孩子

**缺点**：需要下载后打开，不如网页方便

---

## ✅ 部署后测试

部署完成后，在浏览器中访问链接，测试以下功能：

- [ ] 页面能正常打开
- [ ] 四科标签页可以切换
- [ ] 选择题可以点击
- [ ] 答案判分正确
- [ ] 解析显示正常
- [ ] 成绩统计正确
- [ ] 错题本功能正常

---

## 🔗 分享给孩子

部署成功后，将链接发送给孩子：

**示例链接**：
```
https://YOUR_USERNAME.github.io/zhongkao-practice/daily-practice/2026-03-18-monday.html
```

**使用建议**：
1. 将链接收藏到浏览器书签
2. 可以发送到手机/平板，多设备同步
3. 建议每天固定时间答题

---

## 📊 后续更新

每天生成新的答题页面后：

```bash
# 提交新文件
git add daily-practice/
git commit -m "Add daily practice: 2026-03-19"
git push

# GitHub Pages 会自动更新（1-2 分钟）
```

---

## 🛠️ 需要帮助？

如果遇到部署问题，告诉我：
- 使用的部署方案
- 遇到的具体问题
- 错误信息截图

我会帮你解决！💪

---

**创建日期**：2026-03-19  
**适用**：中考 100 天冲刺答题系统
