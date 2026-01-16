# 🚀 Quick Setup Guide - Candle Animation in React

## Option 1: Add to Existing React Project

### Step 1: Install Dependencies
```bash
npm install pixi.js gsap
```

### Step 2: Copy Files
Copy these files to your `src` folder:
- `CandleAnimation.jsx`

Copy these images to your `public` folder:
- `girl.png`
- `cake.png`
- `candle.png`

### Step 3: Use in Your App
```jsx
// src/App.jsx
import CandleAnimation from './CandleAnimation';

function App() {
  return <CandleAnimation numCandles={9} />;
}

export default App;
```

### Step 4: Run
```bash
npm run dev
```

---

## Option 2: Create New Vite + React Project

### Step 1: Create Project
```bash
npm create vite@latest my-candle-app -- --template react
cd my-candle-app
```

### Step 2: Install Dependencies
```bash
npm install
npm install pixi.js gsap
```

### Step 3: Add Files
1. Copy `CandleAnimation.jsx` to `src/`
2. Copy `girl.png`, `cake.png`, `candle.png` to `public/`

### Step 4: Update App.jsx
```jsx
// src/App.jsx
import CandleAnimation from './CandleAnimation';
import './App.css';

function App() {
  return (
    <div style={{ margin: 0, padding: 0, width: '100vw', height: '100vh' }}>
      <CandleAnimation numCandles={9} />
    </div>
  );
}

export default App;
```

### Step 5: Update App.css (Optional)
```css
/* src/App.css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  overflow: hidden;
}
```

### Step 6: Run
```bash
npm run dev
```

Visit `http://localhost:5173`

---

## Option 3: Next.js Project

### Step 1: Create Next.js App
```bash
npx create-next-app@latest my-candle-app
cd my-candle-app
```

### Step 2: Install Dependencies
```bash
npm install pixi.js gsap
```

### Step 3: Make Component Client-Side
Rename `CandleAnimation.jsx` to `CandleAnimation.client.jsx` and add at top:
```jsx
'use client';

import { useEffect, useRef } from 'react';
// ... rest of the code
```

### Step 4: Create Page
```jsx
// app/page.js
import dynamic from 'next/dynamic';

const CandleAnimation = dynamic(() => import('../components/CandleAnimation.client'), {
  ssr: false
});

export default function Home() {
  return (
    <main style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
      <CandleAnimation numCandles={9} />
    </main>
  );
}
```

### Step 5: Add Images
Place images in `public/` folder

### Step 6: Run
```bash
npm run dev
```

---

## 📁 Final File Structure

```
your-project/
├── src/
│   ├── CandleAnimation.jsx    ← Main component
│   ├── App.jsx                ← Your app
│   └── main.jsx               ← Entry point
├── public/
│   ├── girl.png              ← Girl image
│   ├── cake.png              ← Cake image
│   └── candle.png            ← Candle image
├── package.json
└── vite.config.js (or next.config.js)
```

---

## ✅ Verify Installation

After setup, you should see:
- ✨ Black background with cake and girl images
- 🕯️ Candles arranged in an ellipse around the cake
- 💡 One candle auto-lights after 3 seconds
- 🖱️ Clickable candles
- 🔥 Animated flame particles

---

## 🐛 Common Issues

### "Module not found: pixi.js"
```bash
npm install pixi.js gsap
```

### Images not showing
- Check images are in `public/` folder
- Use paths like `/girl.png` not `./girl.png`

### Black screen
- Open browser console (F12) to check for errors
- Verify all dependencies are installed

### Performance issues
- Reduce `numCandles` prop to 7 or less
- Check browser console for warnings

---

## 🎉 You're Done!

Click on candles to light them. Light all candles to see the special animation! 🎂✨

