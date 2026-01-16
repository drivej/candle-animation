# 🕯️ Candle Animation React Component

An interactive birthday candle animation built with PixiJS and React. Features realistic flame particles, GSAP animations, and mouse interaction.

## 📦 Installation

### 1. Install Dependencies

```bash
npm install pixi.js gsap
# or
yarn add pixi.js gsap
# or
pnpm add pixi.js gsap
```

### 2. Copy Files to Your Project

Copy these files to your React project:
- `CandleAnimation.jsx` - Main component
- `girl.png` - Girl image asset
- `cake.png` - Cake image asset
- `candle.png` - Candle image asset

Place the images in your `public` folder or import them as modules.

## 🚀 Basic Usage

```jsx
import CandleAnimation from './CandleAnimation';

function App() {
  return <CandleAnimation />;
}
```

## ⚙️ Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `numCandles` | number | `9` | Number of candles to display |
| `girlImage` | string | `'/girl.png'` | Path to girl image |
| `cakeImage` | string | `'/cake.png'` | Path to cake image |
| `candleImage` | string | `'/candle.png'` | Path to candle image |
| `backgroundColor` | string | `'#000000'` | Background color (use `'transparent'` for overlay) |

## 📖 Examples

### Basic Example
```jsx
<CandleAnimation />
```

### Custom Number of Candles
```jsx
<CandleAnimation numCandles={13} />
```

### Custom Images
```jsx
<CandleAnimation 
  numCandles={9}
  girlImage="/assets/girl.png"
  cakeImage="/assets/cake.png"
  candleImage="/assets/candle.png"
  backgroundColor="#1a1a1a"
/>
```

### Transparent Background (Overlay)
```jsx
<div style={{ background: 'linear-gradient(to bottom, #1e3a8a, #000)' }}>
  <CandleAnimation 
    numCandles={7}
    backgroundColor="transparent"
  />
</div>
```

## 🎮 Interaction

- **Click on candles** to light/extinguish them
- **Light all candles** to trigger the special animation
- **Mouse movement** affects flame particle direction
- One candle auto-lights after 3 seconds

## 🎨 Features

- ✨ Realistic particle-based flame animation
- 🎭 GSAP-powered smooth transitions
- 🖱️ Interactive candle lighting
- 📱 Responsive layout
- 🎯 Dynamic candle positioning in ellipse
- 🌈 Brightness effects on cake and background
- 💨 Mouse-reactive flame particles

## 🏗️ Project Structure

```
your-project/
├── src/
│   ├── CandleAnimation.jsx    # Main component
│   └── App.jsx                # Your app
├── public/
│   ├── girl.png              # Girl image
│   ├── cake.png              # Cake image
│   └── candle.png            # Candle image
└── package.json
```

## 🔧 Customization

### Adjust Particle Count
Edit line 114 in `CandleAnimation.jsx`:
```javascript
const maxParticlesPerCandle = 30; // Increase for more particles
```

### Change Flame Colors
Edit lines 69-76 in `CandleAnimation.jsx`:
```javascript
colorStops: [
  { offset: 0, color: 0xff0000, alpha: 0.5 }, // Red flame
  { offset: 1, color: 0xffff00, alpha: 0 }    // Yellow edge
]
```

### Modify Candle Layout
Edit the `layoutCandles` function (lines 221-234) to change positioning.

## 🐛 Troubleshooting

### Images Not Loading
- Ensure images are in the `public` folder
- Use absolute paths: `/girl.png` not `./girl.png`
- Or import images: `import girlImg from './assets/girl.png'`

### Performance Issues
- Reduce `numCandles` (try 7-9 instead of 19+)
- Lower `maxParticlesPerCandle` in the code
- Reduce blur filter quality (line 163)

### TypeScript Errors
Add type definitions:
```bash
npm install --save-dev @types/react
```

## 📄 License

MIT - Feel free to use in your projects!

## 🎉 Credits

Built with:
- [PixiJS](https://pixijs.com/) - WebGL rendering
- [GSAP](https://greensock.com/gsap/) - Animation library
- [React](https://react.dev/) - UI framework

