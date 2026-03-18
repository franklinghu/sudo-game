#!/bin/bash

# 中考答题系统 - 一键部署脚本
# 使用方法：./deploy-to-github.sh YOUR_GITHUB_USERNAME

set -e

if [ -z "$1" ]; then
    echo "❌ 请提供 GitHub 用户名"
    echo "用法：./deploy-to-github.sh YOUR_USERNAME"
    exit 1
fi

GITHUB_USERNAME=$1
REPO_NAME="zhongkao-practice"
REMOTE_URL="https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"

echo "🚀 开始部署到 GitHub Pages..."
echo ""
echo "📁 仓库信息:"
echo "   用户名：${GITHUB_USERNAME}"
echo "   仓库名：${REPO_NAME}"
echo "   远程地址：${REMOTE_URL}"
echo ""

# 检查是否已配置 remote
if git remote | grep -q "^origin$"; then
    echo "⚠️  已存在 origin remote，是否覆盖？(y/n)"
    read -r response
    if [[ "$response" =~ ^[Yy]$ ]]; then
        git remote set-url origin "$REMOTE_URL"
    fi
else
    git remote add origin "$REMOTE_URL"
fi

# 重命名分支为 main
git branch -M main 2>/dev/null || true

# 推送
echo ""
echo "📤 推送到 GitHub..."
echo "   首次推送需要输入 GitHub 用户名和密码（或 Personal Access Token）"
echo ""

git push -u origin main --force

echo ""
echo "✅ 推送成功！"
echo ""
echo "📱 接下来请启用 GitHub Pages："
echo "   1. 访问：https://github.com/${GITHUB_USERNAME}/${REPO_NAME}/settings/pages"
echo "   2. Source 选择：Deploy from a branch"
echo "   3. Branch 选择：main"
echo "   4. Folder 选择：/"
echo "   5. 点击 Save"
echo ""
echo "🌐 部署完成后，访问链接："
echo "   https://${GITHUB_USERNAME}.github.io/${REPO_NAME}/daily-practice/2026-03-18-monday.html"
echo ""
