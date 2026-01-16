import { useState } from 'react';
import CandleAnimation from './CandleAnimation';

/**
 * Example App.jsx showing how to integrate the CandleAnimation component
 */
function App() {
  const [numCandles, setNumCandles] = useState(9);
  const [showControls, setShowControls] = useState(true);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
      {/* Candle Animation */}
      <CandleAnimation 
        numCandles={numCandles}
        girlImage="/girl.png"
        cakeImage="/cake.png"
        candleImage="/candle.png"
        backgroundColor="#000000"
      />

      {/* Optional Controls Overlay */}
      {showControls && (
        <div style={{
          position: 'absolute',
          top: 20,
          right: 20,
          background: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '10px',
          color: 'white',
          fontFamily: 'Arial, sans-serif',
          zIndex: 1000
        }}>
          <h3 style={{ margin: '0 0 15px 0' }}>🕯️ Controls</h3>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              Number of Candles: {numCandles}
            </label>
            <input 
              type="range" 
              min="1" 
              max="25" 
              value={numCandles}
              onChange={(e) => setNumCandles(parseInt(e.target.value))}
              style={{ width: '200px' }}
            />
          </div>

          <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
            <p style={{ margin: '5px 0' }}>💡 Click candles to light/extinguish</p>
            <p style={{ margin: '5px 0' }}>✨ Light all for special animation</p>
            <p style={{ margin: '5px 0' }}>🖱️ Move mouse to affect flames</p>
          </div>

          <button 
            onClick={() => setShowControls(false)}
            style={{
              marginTop: '15px',
              padding: '8px 16px',
              background: '#4a9eff',
              border: 'none',
              borderRadius: '5px',
              color: 'white',
              cursor: 'pointer',
              width: '100%'
            }}
          >
            Hide Controls
          </button>
        </div>
      )}

      {/* Show Controls Button (when hidden) */}
      {!showControls && (
        <button 
          onClick={() => setShowControls(true)}
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            padding: '10px 20px',
            background: 'rgba(0, 0, 0, 0.7)',
            border: '2px solid #4a9eff',
            borderRadius: '5px',
            color: 'white',
            cursor: 'pointer',
            zIndex: 1000
          }}
        >
          Show Controls
        </button>
      )}
    </div>
  );
}

export default App;

