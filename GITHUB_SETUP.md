# GitHub Setup Guide

Your local repository is ready! Follow these steps to push to GitHub.

## ✅ Completed Locally

- ✓ Git repository initialized
- ✓ All files staged and committed
- ✓ Branch renamed to `main`
- ✓ Commit: "Portfolio website: Add components, theme system, and journey timeline"

## 📝 Remaining Steps

### 1. Create Repository on GitHub
- Go to https://github.com/new
- Repository name: `portfolio`
- Description: "My professional portfolio website built with Next.js"
- Choose: Public (to showcase work)
- **DO NOT** initialize with README (we have files already)
- Click "Create repository"

### 2. Add Remote and Push

Replace `YOUR_USERNAME` with your actual GitHub username, then run these commands:

```powershell
cd "d:\Semester 8\Personal Coding\portfolio"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### 3. Authentication

When prompted, use one of these methods:
- **Personal Access Token** (Recommended)
  - Create at: https://github.com/settings/tokens
  - Select scopes: `repo` (full control of private repositories)
  - Copy token and paste when prompted
  
- **SSH Key** (If already configured)
  - Should work automatically if ~/.ssh/id_rsa is set up
  
- **GitHub CLI**
  ```powershell
  gh auth login
  ```

### 4. Verify

After push completes, verify at: `https://github.com/YOUR_USERNAME/portfolio`

## 📊 Project Contents

Your repository will contain:
- Next.js 16.2.2 portfolio application
- React components for Hero, About, Projects, Experience sections
- Dark/Light theme system
- Responsive design
- Journey timeline with alternating card layout
- Project showcase
- Contact section

## 🔐 Security

- Keep your token/credentials secure
- Don't commit `.env` files with secrets
- Review `.gitignore` to ensure sensitive files aren't tracked

---

**Ready to push?** Replace `YOUR_USERNAME` in step 2 and run the commands! 🚀
