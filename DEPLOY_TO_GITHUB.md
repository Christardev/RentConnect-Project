# 🚀 Deploy RentConnect Burundi to GitHub Pages

## Step-by-Step Guide

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `rentconnect-burundi`
3. Description: "Real estate rental platform for Bujumbura, Burundi"
4. Choose: **Public**
5. **DO NOT** initialize with README (we already have one)
6. Click **Create repository**

### Step 2: Push Your Code to GitHub

Open your terminal in the project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: RentConnect Burundi platform"

# Add your GitHub repository as remote
git remote add origin https://github.com/Christardev/rentconnect-burundi.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Deploy to GitHub Pages

Run this command to build and deploy:

```bash
npm run deploy
```

This will:
- Build your app for production
- Create a `gh-pages` branch
- Push the built files to GitHub

**Wait 1-2 minutes** for the deployment to complete.

### Step 4: Enable GitHub Pages

1. Go to your repository: https://github.com/Christardev/rentconnect-burundi
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under **Source**:
   - Branch: Select `gh-pages` from dropdown
   - Folder: Select `/ (root)`
5. Click **Save**

### Step 5: View Your Live Site

Your site will be available at:

**https://christardev.github.io/rentconnect-burundi/**

It may take 1-2 minutes to go live after enabling Pages.

---

## 🔄 Update Your Site

Whenever you make changes:

```bash
# 1. Save your changes
git add .
git commit -m "Description of changes"
git push origin main

# 2. Deploy updated version
npm run deploy
```

---

## ✅ Verification Checklist

- [ ] Repository created on GitHub
- [ ] Code pushed to `main` branch
- [ ] `npm run deploy` completed successfully
- [ ] `gh-pages` branch exists on GitHub
- [ ] GitHub Pages enabled in Settings
- [ ] Site is live at https://christardev.github.io/rentconnect-burundi/

---

## 🐛 Troubleshooting

### "gh-pages branch not found"
- Run `npm run deploy` first to create the branch

### "Permission denied"
- Make sure you're logged into GitHub
- Check your repository URL is correct

### "Blank page after deployment"
- Wait 2-3 minutes for GitHub to build
- Clear browser cache (Ctrl+Shift+R)
- Check browser console for errors

### "404 on routes"
- This is normal for client-side routing
- The 404.html redirect handles this automatically

---

## 📝 Quick Commands Reference

```bash
# Deploy to GitHub Pages
npm run deploy

# Build locally (test before deploy)
npm run build

# Preview production build locally
npm run preview

# Push code changes to GitHub
git add .
git commit -m "Your message"
git push origin main
```

---

## 🎉 Success!

Once deployed, share your link:
**https://christardev.github.io/rentconnect-burundi/**

Your RentConnect Burundi platform is now live! 🏠
