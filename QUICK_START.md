# ⚡ Quick Start Guide

## 🚀 Publish to GitHub (First Time)

```bash
# 1. Repo already exists at: https://github.com/drivej/candle-animation

# 2. Push to GitHub
git add .
git commit -m "Setup: Package configuration for npm installation"
git push

# 3. Create release (optional)
git tag v1.0.0
git push origin v1.0.0
```

## 📦 Install in Another Project

```bash
# In your other React project
npm install github:drivej/candle-animation

# Copy assets
cp node_modules/@drivej/candle-animation/assets/* public/
```

## 💻 Use the Component

```jsx
import CandleAnimation from '@drivej/candle-animation';

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
npm update @drivej/candle-animation
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

