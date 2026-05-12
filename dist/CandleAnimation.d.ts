export interface CandleAnimationProps {
    /** Number of candles to display (default: 9, recommended: 1-25) */
    numCandles?: number;
    /** Path to girl image (default: '/girl.png') */
    girlImage?: string;
    /** Path to cake image (default: '/cake.png') */
    cakeImage?: string;
    /** Path to candle image (default: '/candle.png') */
    candleImage?: string;
    /** Background color (default: '#000000', use 'transparent' for overlay) */
    backgroundColor?: string;
    /** Width of the canvas (default: '100%') */
    width?: string | number;
    /** Height of the canvas (default: '100vh') */
    height?: string | number;
    /** Scale factor for all elements (default: 1) */
    scale?: number;
    /** Callback triggered when the girl appears and blows out the candles */
    onComplete?: () => void;
}
/**
 * CandleAnimation - A React component that displays an interactive candle animation
 *
 * Uses bundled assets by default. Assets are included in the package at:
 * node_modules/@drivej/candle-animation/assets/
 *
 * Copy them to your public folder:
 * cp node_modules/@drivej/candle-animation/assets/* public/
 */
export default function CandleAnimation({ numCandles, girlImage, cakeImage, candleImage, backgroundColor, width, height, scale, onComplete }: CandleAnimationProps): import("react/jsx-runtime").JSX.Element;
