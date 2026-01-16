# ⚡ Quick Start Guide

## 🚀 Publish to GitHub (First Time)

```bash
# 1. Create repo on GitHub: https://github.com/new
#    Name: candle-animation

# 2. Push to GitHub
git init
git add .
git commit -m "Initial commit: Candle animation package"
git branch -M main
git remote add origin https://github.com/jasoncontento/candle-animation.git
git push -u origin main

# 3. Create release (optional)
git tag v1.0.0
git push origin v1.0.0
```

## 📦 Install in Another Project

```bash
# In your other React project
npm install github:jasoncontento/candle-animation

# Copy assets
cp node_modules/@jasoncontento/candle-animation/assets/* public/
```

## 💻 Use the Component

```jsx
import CandleAnimation from '@jasoncontento/candle-animation';

function App() {
  return (
    <CandleAnimation 
      numCandles={9}
      girlImage="/girl.png"
      cakeImage="/cake.png"
      candleImage="/candle.png"
    />
  );
}
```

## 🔄 Update Package After Changes

```bash
# In candle-animation repo
npm run build:lib
git add .
git commit -m "Update animation"
git push

# In your other project
npm update @jasoncontento/candle-animation
```

## 🛠️ Development Commands

```bash
npm run dev          # Run React demo
npm run build:lib    # Build library
npm run build        # Build demo
```

## 📚 Full Documentation

- **README.md** - Main documentation
- **USAGE_IN_OTHER_PROJECT.md** - Detailed installation guide
- **GITHUB_PACKAGE_SETUP.md** - Complete setup guide

---

**That's it!** 🎉 Your package is ready to use across projects.

