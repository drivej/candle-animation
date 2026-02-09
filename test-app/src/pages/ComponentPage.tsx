import CandleAnimation from '@drivej/candle-animation';

function ComponentPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      TEST
      <CandleAnimation numCandles={7} width={500} height={500} />
    </div>
  );
}

export default ComponentPage;
