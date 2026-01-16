# 📦 Installation Guide

## Install from GitHub

Since this package is hosted on GitHub at https://github.com/drivej/candle-animation, you can install it directly in any React project.

### Quick Install

```bash
npm install github:drivej/candle-animation
```

### Or add to package.json

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

## Copy Assets

The package includes default images. Copy them to your public folder:

```bash
cp node_modules/@drivej/candle-animation/assets/* public/
```

This copies:
- `girl.png`
- `cake.png`
- `candle.png`

## Basic Usage

```jsx
import CandleAnimation from '@drivej/candle-animation';

function App() {
  return (
    <CandleAnimation 
      numCandles={9}
      girlImage="/girl.png"
      cakeImage="/cake.png"
      candleImage="/candle.png"
      backgroundColor="#000000"
    />
  );
}

export default App;
```

## Install Specific Version

```bash
# Install from a specific tag
npm install github:drivej/candle-animation#v1.0.0

# Install from a specific branch
npm install github:drivej/candle-animation#main

# Install from a specific commit
npm install github:drivej/candle-animation#abc1234
```

## Update Package

When the package is updated on GitHub:

```bash
# Update to latest
npm update @drivej/candle-animation

# Or reinstall
npm uninstall @drivej/candle-animation
npm install github:drivej/candle-animation
```

## Verify Installation

```bash
# Check if installed
npm list @drivej/candle-animation

# View package files
ls node_modules/@drivej/candle-animation
```

You should see:
- `dist/` - Built library files
- `assets/` - Image files
- `package.json`
- `README.md`

## Troubleshooting

### Package not found
Make sure the GitHub repo is public or you have access to it.

### Assets not loading
Ensure you copied the assets to your `public/` folder and the paths in your component match.

### React version mismatch
This package requires React 18+. Check your React version:
```bash
npm list react
```

## Complete Example

```jsx
import { useState } from 'react';
import CandleAnimation from '@drivej/candle-animation';

function BirthdayPage() {
  const [numCandles, setNumCandles] = useState(9);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <CandleAnimation 
        numCandles={numCandles}
        girlImage="/girl.png"
        cakeImage="/cake.png"
        candleImage="/candle.png"
        backgroundColor="#000000"
      />
      
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

export default BirthdayPage;
```

## Next Steps

- See [README.md](./README.md) for full documentation
- See [QUICK_START.md](./QUICK_START.md) for quick reference
- Check the demo at https://github.com/drivej/candle-animation

