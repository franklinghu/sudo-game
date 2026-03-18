# 🚀 快速部署到网络 - 3 分钟完成

**目标**：让孩子可以在任何设备访问答题页面

---

## 方案一：GitHub Pages（推荐，永久免费）

### 步骤 1：创建仓库（1 分钟）

1. 访问 https://github.com
2. 登录 GitHub（没有账号先注册）
3. 点击右上角 **+** → **New repository**
4. 填写：
   - Repository name: `zhongkao-practice`
   - Description: `中考 100 天冲刺 - 每日答题系统`
   - ✅ Public
   - ✅ Add a README file
5. 点击 **Create repository**

### 步骤 2：上传文件（1 分钟）

1. 在仓库页面点击 **Add file** → **Upload files**
2. 打开文件管理器，进入：`/home/admin/.openclaw/workspace/daily-practice/`
3. 将 `2026-03-18-monday.html` 拖拽到上传区域
4. 在下方输入：`Add daily practice`
5. 点击 **Commit changes**

### 步骤 3：启用 Pages（30 秒）

1. 点击仓库的 **Settings** 标签
2. 左侧点击 **Pages**
3. 在 **Build and deployment** 下：
   - **Branch**: 选择 `main`
   - **Folder**: 选择 `/ (root)`
4. 点击 **Save**

### 步骤 4：等待部署（1-2 分钟）

等待页面顶部显示：
```
Your site is live at:
https://YOUR_USERNAME.github.io/zhongkao-practice/
```

### ✅ 完成！

**答题链接**：
```
https://YOUR_USERNAME.github.io/zhongkao-practice/2026-03-18-monday.html
```

---

## 方案二：Netlify Drop（最快，30 秒）

### 步骤

1. 访问 https://app.netlify.com/drop
2. 将文件夹 `/home/admin/.openclaw/workspace/daily-practice/` 整个拖拽到页面
3. 等待上传完成
4. 获得链接（如：`https://random-name-12345.netlify.app`）

### 自定义链接（需要注册）

1. 点击 **Sign up** 注册免费账号
2. 进入 **Site settings** → **Change site name**
3. 输入自定义名称：`zhongkao-practice`
4. 链接变为：`https://zhongkao-practice.netlify.app`

---

## 方案三：使用部署脚本（命令行）

如果你熟悉命令行：

```bash
# 1. 运行部署脚本（替换 YOUR_USERNAME 为你的 GitHub 用户名）
cd /home/admin/.openclaw/workspace
./deploy-to-github.sh YOUR_USERNAME

# 2. 按提示输入 GitHub 密码或 Token

# 3. 在 GitHub 启用 Pages（见方案一步骤 3）
```

---

## 📱 部署后测试

在浏览器访问链接，测试：

- [ ] 页面能正常打开
- [ ] 可以切换科目
- [ ] 可以点击选项
- [ ] 显示正确答案和解析
- [ ] 成绩统计正常

---

## 📤 后续更新

每天生成新题目后：

### GitHub Pages 更新

**方法 A：网页上传**
```
1. 打开仓库页面
2. Add file → Upload files
3. 上传新的 HTML 文件
4. Commit changes
```

**方法 B：命令行**
```bash
cd /home/admin/.openclaw/workspace
git add daily-practice/
git commit -m "Add daily practice: 2026-03-19"
git push
```

---

## 🔗 分享给孩子

部署成功后，将链接发送给孩子：

```
📚 中考答题系统
链接：https://YOUR_USERNAME.github.io/zhongkao-practice/2026-03-18-monday.html

💡 使用说明：
1. 每天按时完成练习
2. 系统会自动判分
3. 错题会自动记录
4. 可以反复练习
```

---

## ⚠️ 常见问题

### Q: 上传后页面显示 404？
**A**: GitHub Pages 需要 1-2 分钟部署，耐心等待。

### Q: 样式显示不正常？
**A**: 检查是否上传了完整的 HTML 文件，清除浏览器缓存后重试。

### Q: 如何删除重新部署？
**A**: 在仓库 Settings → Pages → 删除分支或整个仓库。

### Q: 可以自定义域名吗？
**A**: 可以，在 Settings → Pages → Custom domain 设置。

---

## 📞 需要帮助？

如果遇到问题，告诉我：
- 使用的部署方案
- 具体错误信息
- 截图

我会帮你解决！💪

---

**更新时间**：2026-03-19
