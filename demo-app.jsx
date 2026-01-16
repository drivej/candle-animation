import React from 'react';
import ReactDOM from 'react-dom/client';
import CandleAnimation from './src/CandleAnimation.jsx';

function App() {
  // Using all defaults: 9 candles, looks for images at /assets/
  return (
    <CandleAnimation
      girlImage="/assets/girl.png"
      cakeImage="/assets/cake.png"
      candleImage="/assets/candle.png"
    />
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

