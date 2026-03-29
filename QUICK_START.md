# Quick Start Guide - RentConnect Burundi

## 🚀 Deploy to GitHub Pages in 3 Steps

### Step 1: Update Your Username

Open `package.json` and replace `{username}` with your GitHub username:

```json
"homepage": "https://your-username.github.io/rentconnect-burundi"
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Deploy

```bash
npm run deploy
```

That's it! Your site will be live at `https://your-username.github.io/rentconnect-burundi`

## 📋 Enable GitHub Pages

After deploying:

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

Wait 1-2 minutes for GitHub to build your site.

## 🛠️ Local Development

```bash
# Start development server
npm run dev

# Visit http://localhost:3000
```

## 📦 What Gets Deployed?

- ✅ All frontend React code
- ✅ Optimized production build
- ✅ Static assets and images
- ✅ Interactive map functionality
- ⚠️ Backend API not included (see DEPLOYMENT.md for full stack)

## 🔧 Troubleshooting

### Blank page after deployment?

1. Check `homepage` in `package.json` matches your repo URL
2. Check `base` in `vite.config.js` matches your repo name
3. Clear browser cache (Ctrl+Shift+R)

### Routes not working?

The app includes a 404.html redirect for client-side routing. If issues persist, check browser console for errors.

### Need to redeploy?

Just run `npm run deploy` again. It will rebuild and update your site.

## 📚 More Information

- Full deployment guide: [GITHUB_DEPLOYMENT.md](GITHUB_DEPLOYMENT.md)
- Production setup: [DEPLOYMENT.md](DEPLOYMENT.md)
- Contributing: [CONTRIBUTING.md](CONTRIBUTING.md)

## 💡 Tips

- Deploy from the `main` branch
- Don't edit the `gh-pages` branch manually
- Use `npm run build` to test builds locally
- Use `npm run preview` to preview the production build

---

Need help? Open an issue on GitHub!
