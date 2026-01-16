# 🎯 Component Defaults

The `CandleAnimation` component comes with sensible defaults for easy use.

## Default Values

```jsx
<CandleAnimation 
  numCandles={9}                    // 9 candles arranged in ellipse
  girlImage="/girl.png"             // Expects in public folder
  cakeImage="/cake.png"             // Expects in public folder
  candleImage="/candle.png"         // Expects in public folder
  backgroundColor="#000000"         // Black background
/>
```

## Simplest Usage

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

## Asset Setup

### 1. Copy bundled assets to your public folder:

```bash
cp node_modules/@drivej/candle-animation/assets/* public/
```

### 2. Or specify custom paths:

```jsx
<CandleAnimation 
  girlImage="/images/my-girl.png"
  cakeImage="/images/my-cake.png"
  candleImage="/images/my-candle.png"
/>
```

## Customization Examples

### Different number of candles

```jsx
<CandleAnimation numCandles={13} />
```

### Transparent background (for overlay)

```jsx
<CandleAnimation backgroundColor="transparent" />
```

### Custom everything

```jsx
<CandleAnimation 
  numCandles={7}
  girlImage="/custom/girl.png"
  cakeImage="/custom/cake.png"
  candleImage="/custom/candle.png"
  backgroundColor="#1a1a1a"
/>
```

## Recommended Candle Counts

- **Mobile**: 7-9 candles (better performance)
- **Desktop**: 9-19 candles (balanced)
- **High-end**: 25+ candles (maximum visual effect)

## Asset Requirements

The component expects PNG images:
- **girl.png** - Background character image
- **cake.png** - Cake image (candles positioned around it)
- **candle.png** - Individual candle sprite

Default assets are included in the package at:
`node_modules/@drivej/candle-animation/assets/`

