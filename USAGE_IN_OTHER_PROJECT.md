# 📦 Using Candle Animation in Your Project

## Step 1: Push to GitHub

First, initialize and push this repository to GitHub:

```bash
git init
git add .
git commit -m "Initial commit: Candle animation package"
git branch -M main
git remote add origin https://github.com/jasoncontento/candle-animation.git
git push -u origin main
```

## Step 2: Install in Your Other Project

In your other React project, install directly from GitHub:

### Option A: Using npm

```bash
npm install github:jasoncontento/candle-animation
```

### Option B: Using package.json

Add to your `package.json`:

```json
{
  "dependencies": {
    "@jasoncontento/candle-animation": "github:jasoncontento/candle-animation"
  }
}
```

Then run:
```bash
npm install
```

### Option C: Install Specific Branch/Tag

```bash
# Install from a specific branch
npm install github:jasoncontento/candle-animation#develop

# Install from a specific tag/release
npm install github:jasoncontento/candle-animation#v1.0.0

# Install from a specific commit
npm install github:jasoncontento/candle-animation#abc1234
```

## Step 3: Copy Assets to Your Project

The package includes default images. Copy them to your public folder:

```bash
# From your project root
cp node_modules/@jasoncontento/candle-animation/assets/* public/assets/
```

Or manually copy:
- `node_modules/@jasoncontento/candle-animation/assets/girl.png` → `public/assets/girl.png`
- `node_modules/@jasoncontento/candle-animation/assets/cake.png` → `public/assets/cake.png`
- `node_modules/@jasoncontento/candle-animation/assets/candle.png` → `public/assets/candle.png`

## Step 4: Use in Your React App

```jsx
import CandleAnimation from '@jasoncontento/candle-animation';

function App() {
  return (
    <CandleAnimation 
      numCandles={9}
      girlImage="/assets/girl.png"
      cakeImage="/assets/cake.png"
      candleImage="/assets/candle.png"
      backgroundColor="#000000"
    />
  );
}

export default App;
```

## Step 5: Update the Package

When you make changes to the candle-animation repo:

```bash
# In the candle-animation repo
git add .
git commit -m "Update animation"
git push

# In your other project
npm update @jasoncontento/candle-animation
# or force reinstall
npm uninstall @jasoncontento/candle-animation
npm install github:jasoncontento/candle-animation
```

## 🎯 Complete Example

### Your Project Structure

```
your-app/
├── src/
│   ├── App.jsx
│   └── main.jsx
├── public/
│   └── assets/
│       ├── girl.png      ← Copied from package
│       ├── cake.png      ← Copied from package
│       └── candle.png    ← Copied from package
├── package.json
└── vite.config.js
```

### App.jsx

```jsx
import { useState } from 'react';
import CandleAnimation from '@jasoncontento/candle-animation';

function App() {
  const [numCandles, setNumCandles] = useState(9);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <CandleAnimation 
        numCandles={numCandles}
        girlImage="/assets/girl.png"
        cakeImage="/assets/cake.png"
        candleImage="/assets/candle.png"
        backgroundColor="#000000"
      />
      
      {/* Optional: Add controls */}
      <div style={{
        position: 'absolute',
        top: 20,
        right: 20,
        background: 'rgba(0,0,0,0.7)',
        padding: '20px',
        borderRadius: '10px',
        color: 'white'
      }}>
        <label>
          Candles: {numCandles}
          <input 
            type="range" 
            min="1" 
            max="25" 
            value={numCandles}
            onChange={(e) => setNumCandles(parseInt(e.target.value))}
          />
        </label>
      </div>
    </div>
  );
}

export default App;
```

## 🔄 Using Private Repository

If your repo is private, use a GitHub personal access token:

```bash
npm install git+https://<TOKEN>@github.com/jasoncontento/candle-animation.git
```

Or add to `.npmrc`:
```
//npm.pkg.github.com/:_authToken=YOUR_TOKEN
```

## 🏷️ Using Releases (Recommended)

Create releases for version control:

```bash
# In candle-animation repo
git tag v1.0.0
git push origin v1.0.0
```

Then install specific version:
```bash
npm install github:jasoncontento/candle-animation#v1.0.0
```

## ✅ Verify Installation

```bash
# Check if package is installed
npm list @jasoncontento/candle-animation

# View package contents
ls node_modules/@jasoncontento/candle-animation
```

You should see:
- `dist/` - Built library files
- `assets/` - Image assets
- `package.json`
- `README.md`

