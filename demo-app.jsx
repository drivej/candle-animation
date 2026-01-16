import React from 'react';
import ReactDOM from 'react-dom/client';
import CandleAnimation from './src/CandleAnimation.jsx';

function App() {
  return (
    <CandleAnimation 
      numCandles={9}
      girlImage="/assets/girl.png"
      cakeImage="/assets/cake.png"
      candleImage="/assets/candle.png"
      backgroundColor="#000000"
    />
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

