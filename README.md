# 🕯️ Candle Animation

An interactive birthday candle animation built with PixiJS and React. Features realistic flame particles, GSAP animations, and mouse interaction.

![Candle Animation Demo](https://img.shields.io/badge/React-18+-blue) ![PixiJS](https://img.shields.io/badge/PixiJS-8.0-green) ![License](https://img.shields.io/badge/license-MIT-blue)

## ✨ Features

- 🔥 Realistic particle-based flame animation
- 🎭 GSAP-powered smooth transitions
- 🖱️ Interactive candle lighting (click to toggle)
- 📱 Responsive layout
- 🎯 Dynamic candle positioning
- 🌈 Brightness effects on cake and background
- 💨 Mouse-reactive flame particles

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

## 🚀 Usage

### Basic Example

```jsx
import CandleAnimation from '@drivej/candle-animation';

function App() {
  return <CandleAnimation />;
}
```

### With Custom Props

```jsx
import CandleAnimation from '@drivej/candle-animation';

function App() {
  return (
    <CandleAnimation
      numCandles={13}
      girlImage="/path/to/girl.png"
      cakeImage="/path/to/cake.png"
      candleImage="/path/to/candle.png"
      backgroundColor="#1a1a1a"
    />
  );
}
```

### Using Package Assets

The package includes default assets. You can copy them to your public folder:

```bash
cp node_modules/@drivej/candle-animation/assets/* public/assets/
```

Then use them:

```jsx
<CandleAnimation 
  girlImage="/assets/girl.png"
  cakeImage="/assets/cake.png"
  candleImage="/assets/candle.png"
/>
```

## ⚙️ Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `numCandles` | number | `9` | Number of candles to display |
| `girlImage` | string | `'/girl.png'` | Path to girl image |
| `cakeImage` | string | `'/cake.png'` | Path to cake image |
| `candleImage` | string | `'/candle.png'` | Path to candle image |
| `backgroundColor` | string | `'#000000'` | Background color (use `'transparent'` for overlay) |

## 🎮 Interaction

- **Click on candles** to light/extinguish them
- **Light all candles** to trigger the special animation
- **Mouse movement** affects flame particle direction
- One candle auto-lights after 3 seconds

## 🛠️ Development

### Clone and Setup

```bash
git clone https://github.com/drivej/candle-animation.git
cd candle-animation
npm install
```

### Run Demo

```bash
npm run dev
```

### Build Library

```bash
npm run build:lib
```

## 📄 License

MIT

## 🙏 Credits

Built with:
- [PixiJS](https://pixijs.com/) - WebGL rendering
- [GSAP](https://greensock.com/gsap/) - Animation library
- [React](https://react.dev/) - UI framework

