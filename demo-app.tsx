import React from 'react';
import ReactDOM from 'react-dom/client';
import CandleAnimation from './src/CandleAnimation';

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

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

