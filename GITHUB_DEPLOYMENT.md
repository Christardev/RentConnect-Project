# GitHub Pages Deployment Guide

## Quick Deployment Steps

### 1. Install gh-pages Package

```bash
npm install gh-pages --save-dev
```

### 2. Update Configuration

The following files have been configured for GitHub Pages:

**package.json:**
- Added `homepage` property
- Added `predeploy` and `deploy` scripts

**vite.config.js:**
- Added `base` property for correct asset paths

### 3. Update Repository Name

Before deploying, replace `{username}` in `package.json` with your GitHub username:

```json
"homepage": "https://your-username.github.io/rentconnect-burundi"
```

If your repository name is different, also update the `base` in `vite.config.js`:

```javascript
base: '/your-repo-name/'
```

### 4. Deploy to GitHub Pages

Run the deployment command:

```bash
npm run deploy
```

This will:
1. Build your app (`npm run build`)
2. Create/update the `gh-pages` branch
3. Push the built files to GitHub

### 5. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

Your site will be live at: `https://your-username.github.io/rentconnect-burundi`

## Alternative: Manual Deployment

If you prefer not to use gh-pages package:

1. Build the project:
```bash
npm run build
```

2. The `dist` folder contains your built app

3. Push the `dist` folder to the `gh-pages` branch manually

## Troubleshooting

### Blank Page After Deployment

If you see a blank page:
1. Check that `base` in `vite.config.js` matches your repo name
2. Verify `homepage` in `package.json` is correct
3. Clear browser cache and hard refresh (Ctrl+Shift+R)

### 404 Errors on Routes

For React Router, add a `404.html` that redirects to `index.html`:

```bash
cp dist/index.html dist/404.html
```

Or use HashRouter instead of BrowserRouter in your app.

### Assets Not Loading

Ensure the `base` path in `vite.config.js` matches your repository name exactly.

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain:
```
rentconnect.bi
```

2. Configure DNS records with your domain provider:
```
Type: CNAME
Name: www
Value: your-username.github.io
```

3. In GitHub Settings → Pages, add your custom domain

## Continuous Deployment

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys on push to main branch.

To use it:
1. Push your code to GitHub
2. GitHub Actions will automatically build and deploy
3. No need to run `npm run deploy` manually

## Environment Variables

For production API URL, set it in GitHub repository secrets:

1. Go to Settings → Secrets and variables → Actions
2. Add `VITE_API_URL` with your production API URL
3. The workflow will use it during build

## Commands Summary

```bash
# Install dependencies
npm install

# Install gh-pages
npm install gh-pages --save-dev

# Build locally
npm run build

# Deploy to GitHub Pages
npm run deploy

# Preview build locally
npm run preview
```

## Notes

- The `gh-pages` branch is automatically created
- Don't manually edit the `gh-pages` branch
- Always deploy from the main branch
- Build files are in the `dist` folder (gitignored)

---

For more help, see the [official Vite deployment guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
