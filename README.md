# 🕯️ Candle Animation

An interactive birthday candle animation built with **React**, **PixiJS**, and **TypeScript**. Features realistic flame particles, GSAP animations, and responsive auto-scaling with full type safety.

![Candle Animation Demo](https://img.shields.io/badge/React-18+-blue) ![PixiJS](https://img.shields.io/badge/PixiJS-8.0-green) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue) ![License](https://img.shields.io/badge/license-MIT-blue)

## ✨ Features

- 🔥 Realistic particle-based flame animation
- 🎭 GSAP-powered smooth transitions
- 🖱️ Interactive candle lighting (click to toggle)
- 📱 Responsive auto-scaling layout
- 🎯 Dynamic candle positioning
- 🌈 Brightness effects on cake and background
- 💨 Mouse-reactive flame particles
- 📘 **Full TypeScript support** with exported types
- 🎨 Customizable props with sensible defaults
- 🎉 Callback support for animation completion

## 📦 Installation

### Install from GitHub

```bash
npm install github:drivej/candle-animation
# or
yarn add github:drivej/candle-animation
# or
pnpm add github:drivej/candle-animation
```

### Install from package.json

Add to your `package.json`:

```json
{
  "dependencies": {
    "@drivej/candle-animation": "github:drivej/candle-animation"
  }
}
```

Then run:
```bash
npm install
```

### Copy Assets

The package includes default images. Copy them to your public folder:

```bash
cp node_modules/@drivej/candle-animation/src/assets/* public/
```

This copies:
- `girl.png` - Background character image
- `cake.png` - Cake image
- `candle.png` - Individual candle sprite

## 🚀 Quick Start

### Simplest Usage

After copying assets to your public folder:

```jsx
import CandleAnimation from '@drivej/candle-animation';

function App() {
  return <CandleAnimation />;
}
```

This will:
- Display **9 candles** in an ellipse
- Look for images at `/girl.png`, `/cake.png`, `/candle.png`
- Use black background
- Auto-light one candle after 3 seconds
- Auto-scale to fit any container size

### With Custom Props

```tsx
import CandleAnimation from '@drivej/candle-animation';

function App() {
  return (
    <CandleAnimation
      numCandles={13}
      girlImage="/path/to/girl.png"
      cakeImage="/path/to/cake.png"
      candleImage="/path/to/candle.png"
      backgroundColor="#1a1a1a"
      width="800px"
      height="600px"
      scale={1.2}
      onComplete={() => console.log('Animation complete!')}
    />
  );
}
```

### TypeScript Usage

The package exports full TypeScript types:

```tsx
import CandleAnimation, { CandleAnimationProps } from '@drivej/candle-animation';

const props: CandleAnimationProps = {
  numCandles: 9,
  girlImage: '/girl.png',
  cakeImage: '/cake.png',
  candleImage: '/candle.png',
  backgroundColor: '#000000',
  width: '100%',
  height: '100vh',
  scale: 1,
  onComplete: () => {
    console.log('🎂 Candles blown out!');
  }
};

function App() {
  return <CandleAnimation {...props} />;
}
```

## ⚙️ Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `numCandles` | number | `9` | Number of candles to display (1-25 recommended) |
| `girlImage` | string | `'/girl.png'` | Path to girl image |
| `cakeImage` | string | `'/cake.png'` | Path to cake image |
| `candleImage` | string | `'/candle.png'` | Path to candle image |
| `backgroundColor` | string | `'#000000'` | Background color (use `'transparent'` for overlay) |
| `width` | string \| number | `'100%'` | Canvas width |
| `height` | string \| number | `'100vh'` | Canvas height |
| `scale` | number | `1` | Manual scale multiplier for all elements |
| `onComplete` | () => void | `undefined` | Callback when girl appears and blows out candles |

### Recommended Candle Counts

- **Mobile**: 7-9 candles (better performance)
- **Desktop**: 9-19 candles (balanced)
- **High-end**: 25+ candles (maximum visual effect)

## 🎮 Interaction

- **Click on candles** to light/extinguish them
- **Light all candles** to trigger the special animation:
  1. Girl fades in (2 seconds)
  2. Candles blow out → `onComplete()` fires
  3. Girl fades out (1 second)
- **Mouse movement** affects flame particle direction
- One candle auto-lights after 3 seconds

## 📐 Responsive Scaling

The component automatically scales to fit any container size while maintaining proportions:

```jsx
// Small container - everything scales down
<CandleAnimation width="400px" height="300px" />

// Medium container - scales proportionally
<CandleAnimation width="800px" height="600px" />

// Large container - scales up
<CandleAnimation width="1600px" height="900px" />

// Fine-tune with manual scale
<CandleAnimation width="800px" height="600px" scale={1.2} />
```

Reference dimensions: 1920x1080. The component calculates scale based on both width and height, using the smaller value to ensure everything fits.



## 🔄 Updating the Package

### After Making Changes

```bash
# In candle-animation repo
npm run build:lib
git add .
git commit -m "Update animation"
git push

# In your other project
npm update @drivej/candle-animation
# or force reinstall
npm uninstall @drivej/candle-animation
npm install github:drivej/candle-animation
```

### Install Specific Version

```bash
# Install from a specific tag
npm install github:drivej/candle-animation#v1.0.0

# Install from a specific branch
npm install github:drivej/candle-animation#main

# Install from a specific commit
npm install github:drivej/candle-animation#abc1234
```

## 🛠️ Development

### Clone and Setup

```bash
git clone https://github.com/drivej/candle-animation.git
cd candle-animation
npm install
```

### Development Commands

```bash
npm run dev          # Run React demo
npm run build:lib    # Build library for distribution
npm run build        # Build demo app
```

### Project Structure

```
candle-animation/
├── src/
│   ├── assets/          # Image assets (girl, cake, candle)
│   ├── CandleAnimation.tsx  # Main component
│   └── index.ts         # Package entry point
├── dist/                # Built library files
├── package.json
└── README.md
```

## 🐛 Troubleshooting

### Package not found
Make sure the GitHub repo is public or you have access to it.

### Assets not loading
Ensure you copied the assets to your `public/` folder and the paths in your component match:
```bash
cp node_modules/@drivej/candle-animation/src/assets/* public/
```

### React version mismatch
This package requires React 18+. Check your React version:
```bash
npm list react
```

### TypeScript errors
Make sure you have TypeScript 5.0+ installed:
```bash
npm install -D typescript@latest
```

## 📝 Complete Example

```jsx
import { useState } from 'react';
import CandleAnimation from '@drivej/candle-animation';

function BirthdayPage() {
  const [numCandles, setNumCandles] = useState(9);
  const [message, setMessage] = useState('');

  const handleComplete = () => {
    setMessage('🎉 Happy Birthday! 🎉');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <CandleAnimation
        numCandles={numCandles}
        girlImage="/girl.png"
        cakeImage="/cake.png"
        candleImage="/candle.png"
        backgroundColor="#000000"
        onComplete={handleComplete}
      />

      {message && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '48px',
          color: 'white',
          textShadow: '0 0 20px rgba(255,255,255,0.8)',
          animation: 'fadeIn 0.5s ease-in'
        }}>
          {message}
        </div>
      )}

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
            style={{ display: 'block', marginTop: '10px' }}
          />
        </label>
      </div>
    </div>
  );
}

export default BirthdayPage;
```

## 📄 License

MIT

## 🙏 Credits

Built with:
- [PixiJS](https://pixijs.com/) - WebGL rendering
- [GSAP](https://greensock.com/gsap/) - Animation library
- [React](https://react.dev/) - UI framework
