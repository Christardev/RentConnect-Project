#!/bin/bash

# RentConnect Burundi - GitHub Pages Deployment Script

echo "🚀 Starting deployment to GitHub Pages..."

# Check if gh-pages is installed
if ! npm list gh-pages > /dev/null 2>&1; then
    echo "📦 Installing gh-pages..."
    npm install gh-pages --save-dev
fi

# Build the project
echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Deploy to GitHub Pages
    echo "📤 Deploying to GitHub Pages..."
    npm run deploy
    
    if [ $? -eq 0 ]; then
        echo "✅ Deployment successful!"
        echo "🌐 Your site will be available at: https://{username}.github.io/rentconnect-burundi"
        echo ""
        echo "⚠️  Remember to:"
        echo "   1. Replace {username} in package.json with your GitHub username"
        echo "   2. Enable GitHub Pages in repository Settings → Pages"
        echo "   3. Select 'gh-pages' branch as source"
    else
        echo "❌ Deployment failed!"
        exit 1
    fi
else
    echo "❌ Build failed!"
    exit 1
fi
