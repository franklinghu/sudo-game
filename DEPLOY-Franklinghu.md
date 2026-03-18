# 🚀 部署到 GitHub - Franklinghu

**仓库信息**：
- 用户名：Franklinghu
- 仓库名：zhongkao-practice
- 仓库地址：https://github.com/Franklinghu/zhongkao-practice

---

## ⚠️ 需要手动部署

由于需要 GitHub 账号认证，请按以下步骤手动操作：

---

## 📝 方案一：网页上传（最简单，推荐）

### 第 1 步：创建仓库

1. **访问**：https://github.com/new
2. **填写**：
   - Repository name: `zhongkao-practice`
   - Description: `中考 100 天冲刺 - 每日答题系统`
   - 选择 **Public**（公开）
   - ✅ 勾选 **Add a README file**
3. 点击 **Create repository**

### 第 2 步：上传答题页面

1. 在仓库页面点击 **Add file** → **Upload files**
2. 打开文件管理器，进入：`/home/admin/.openclaw/workspace/daily-practice/`
3. **拖拽文件**到上传区域：
   - `2026-03-18-monday.html`
4. 在下方输入提交信息：`Add Monday practice`
5. 点击 **Commit changes**

### 第 3 步：启用 GitHub Pages

1. 点击仓库的 **Settings** 标签
2. 左侧菜单点击 **Pages**
3. 在 **Build and deployment** 下：
   - **Source**: Deploy from a branch
   - **Branch**: 选择 `main`
   - **Folder**: 选择 `/ (root)`
4. 点击 **Save**

### 第 4 步：等待部署

等待 1-2 分钟，页面刷新后会显示：
```
Your site is live at:
https://franklinghu.github.io/zhongkao-practice/
```

### ✅ 完成！

**答题链接**：
```
https://franklinghu.github.io/zhongkao-practice/daily-practice/2026-03-18-monday.html
```

---

## 📝 方案二：使用 GitHub CLI（命令行）

如果你已安装 `gh` 工具：

```bash
# 1. 登录 GitHub
gh auth login

# 2. 创建仓库
cd /home/admin/.openclaw/workspace
gh repo create zhongkao-practice --public --source=. --remote=origin

# 3. 推送
git branch -M main
git push -u origin main

# 4. 启用 Pages（需要手动在网页操作）
# 访问：https://github.com/Franklinghu/zhongkao-practice/settings/pages
```

---

## 📝 方案三：使用 Git + Personal Access Token

### 第 1 步：创建 Personal Access Token

1. 访问：https://github.com/settings/tokens
2. 点击 **Generate new token (classic)**
3. 填写：
   - Note: `zhongkao-practice deploy`
   - Expiration: `No expiration`
   - ✅ 勾选 **repo** 权限
4. 点击 **Generate token**
5. **复制 Token**（只显示一次，保存好！）

### 第 2 步：配置 Git

```bash
cd /home/admin/.openclaw/workspace

# 设置远程仓库（使用 Token）
git remote add origin https://Franklinghu:YOUR_TOKEN@github.com/Franklinghu/zhongkao-practice.git

# 推送
git branch -M main
git push -u origin main
```

### 第 3 步：启用 Pages

同上，在网页设置。

---

## 🌐 方案四：Netlify Drop（备选，30 秒）

如果 GitHub 部署遇到问题，可以用 Netlify：

1. **访问**：https://app.netlify.com/drop
2. **拖拽文件夹**：`/home/admin/.openclaw/workspace/daily-practice/`
3. **获得链接**：如 `https://random-name.netlify.app`

**优点**：
- ✅ 无需注册即可使用
- ✅ 30 秒完成
- ✅ 自动 HTTPS

---

## ✅ 部署后测试

在浏览器访问链接，测试：

- [ ] 页面能正常打开
- [ ] 可以切换四科标签页
- [ ] 可以点击选项
- [ ] 显示正确答案和解析
- [ ] 成绩统计正常
- [ ] 错题本功能可用

---

## 📱 分享给孩子

部署成功后，将链接发送给孩子：

```
📚 中考答题系统已上线！

🔗 答题链接：
https://franklinghu.github.io/zhongkao-practice/daily-practice/2026-03-18-monday.html

💡 使用说明：
1. 每天按时完成练习
2. 系统会自动判分
3. 错题会自动记录
4. 可以反复练习
5. 手机/电脑/平板都能用

📅 今日练习（3-18 周一）：
- 📖 语文：5 题
- 📜 历史：10 题
- 🔢 数学：5 题
- 📗 英语：5 题
总计 25 题，建议用时 70 分钟
```

---

## 📤 后续更新

每天生成新题目后：

### 方法 A：网页上传（推荐）
```
1. 访问：https://github.com/Franklinghu/zhongkao-practice
2. Add file → Upload files
3. 上传新的 HTML 文件
4. Commit changes
```

### 方法 B：命令行
```bash
cd /home/admin/.openclaw/workspace
git add daily-practice/
git commit -m "Add daily practice: 2026-03-19"
git push
```

---

## ⚠️ 常见问题

### Q: 上传后页面显示 404？
**A**: GitHub Pages 需要 1-2 分钟部署，耐心等待。

### Q: 样式显示不正常？
**A**: 清除浏览器缓存（Ctrl+Shift+Delete）后重试。

### Q: 如何删除重新部署？
**A**: 在仓库 Settings → 删除仓库，重新创建。

### Q: 可以自定义域名吗？
**A**: 可以，在 Settings → Pages → Custom domain 设置。

---

## 📞 需要帮助？

如果遇到问题，告诉我：
- 具体错误信息
- 截图

我会帮你解决！💪

---

**创建日期**：2026-03-19  
**目标仓库**：https://github.com/Franklinghu/zhongkao-practice
