import CandleAnimation from './CandleAnimation';

/**
 * Example 1: Basic usage with default settings
 */
export function BasicExample() {
  return <CandleAnimation />;
}

/**
 * Example 2: Custom number of candles
 */
export function CustomCandlesExample() {
  return (
    <CandleAnimation 
      numCandles={13}
    />
  );
}

/**
 * Example 3: Custom images and background
 */
export function CustomImagesExample() {
  return (
    <CandleAnimation 
      numCandles={9}
      girlImage="/path/to/your/girl.png"
      cakeImage="/path/to/your/cake.png"
      candleImage="/path/to/your/candle.png"
      backgroundColor="#1a1a1a"
    />
  );
}

/**
 * Example 4: Transparent background (for overlay)
 */
export function TransparentExample() {
  return (
    <div style={{ position: 'relative', background: 'linear-gradient(to bottom, #1e3a8a, #000)' }}>
      <CandleAnimation 
        numCandles={7}
        backgroundColor="transparent"
      />
    </div>
  );
}

/**
 * Example 5: Full page with custom styling
 */
export function FullPageExample() {
  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
      <CandleAnimation 
        numCandles={19}
        backgroundColor="#000000"
      />
    </div>
  );
}

