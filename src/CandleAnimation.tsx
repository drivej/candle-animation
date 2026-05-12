import gsap from 'gsap';
import * as PIXI from 'pixi.js';
import { useEffect, useRef } from 'react';

const rand = (n1: number, n2: number): number => Math.random() * (n2 - n1) + n1;
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

interface PointerState {
  x: number;
  y: number;
  offset: {
    x: number;
    y: number;
  };
}

interface AnimState {
  brightness: number;
}

interface FlameBurstAnim {
  vector: { x: number; y: number };
  color: PIXI.Color;
  fuel: number;
  burnRate: number;
  energy: number;
  fadeRate: number;
}

class Candle extends PIXI.Container {
  isLit = false;
  flameBursts: FlameBurst[] = [];
  flameBurstsContainer: FlameBurstsContainer;
  flameGlowSprite: FlameGlow;
  candleBg: PIXI.Sprite;
  blurryTexture: PIXI.Texture;

  constructor({ candleBg, flameGlowTexture, blurryTexture }: { candleBg: PIXI.Texture; flameGlowTexture: PIXI.Texture; blurryTexture: PIXI.Texture }) {
    super();
    this.flameBurstsContainer = new FlameBurstsContainer();
    this.flameGlowSprite = new FlameGlow(flameGlowTexture);
    this.candleBg = new PIXI.Sprite(candleBg);
    this.candleBg.anchor.set(0.5, 1);
    this.addChild(this.candleBg);
    this.addChild(this.flameGlowSprite);
    this.addChild(this.flameBurstsContainer);
    this.blurryTexture = blurryTexture;

    this.flameGlowSprite.y = -this.candleBg.height;
    this.flameBurstsContainer.y = -this.candleBg.height;
    // Initial scale - will be updated by updateLayout
    // this.scale.set(4);
    // this.pivot.set(0.5, 0.5);
  }

  onTick(ticker: PIXI.Ticker, pointer: PointerState) {
    const maxParticlesPerCandle = 30;
    const spawnChance = 0.8;

    if (this.isLit && Math.random() < spawnChance && this.flameBursts.length < maxParticlesPerCandle) {
      const f = new FlameBurst(this.blurryTexture);
      this.flameBurstsContainer.addChild(f);
      this.flameBursts.push(f);
    }

    this.flameGlowSprite.alpha = this.flameBursts.length / 40;
    this.flameGlowSprite.scale.set(rand(1.8, 2.2));

    const brightness = 256 * Math.max(0.2, Math.min(1, this.flameBursts.length / 20));
    this.candleBg.tint = new PIXI.Color({ r: brightness, g: brightness, b: brightness }).toNumber();

    for (let i = this.flameBursts.length - 1; i >= 0; i--) {
      const p = this.flameBursts[i];

      if (p.anim.energy <= 0 && p.anim.fuel <= 0) {
        this.flameBurstsContainer.removeChild(p);
        p.destroy();
        this.flameBursts.splice(i, 1);
        continue;
      }

      if (!p || !p?.scale?.x) continue;

      if (p.anim.fuel > 0) {
        p.anim.energy += p.anim.burnRate * ticker.deltaTime;
        p.anim.fuel -= p.anim.burnRate * ticker.deltaTime;
      }

      p.anim.energy -= p.anim.fadeRate * ticker.deltaTime;
      p.scale.x = p.anim.energy * 0.07;
      p.scale.y = p.anim.energy * 0.1;
      p.x += p.anim.vector.x - pointer.offset.x * 0.002;
      p.y += p.anim.vector.y;
      p.anim.color.setValue([p.anim.color.red, p.anim.color.green, p.anim.color.blue - 0.03]);
      p.tint = p.anim.color.toNumber();
    }
  }
}

class FlameGlow extends PIXI.Sprite {
  constructor(flameGlowTexture: PIXI.Texture) {
    super(flameGlowTexture);
    this.filters = [new PIXI.BlurFilter({ strength: 36, quality: 8 })];
    this.anchor.set(0.5);
    this.scale.set(2);
    this.alpha = 0.5;
  }
}

class FlameBurst extends PIXI.Sprite {
  anim: FlameBurstAnim;

  constructor(blurryTexture: PIXI.Texture) {
    super(blurryTexture);
    this.alpha = 1;
    this.anchor.set(0.5);
    this.anim = {
      vector: {
        x: rand(-0.2, 0.2),
        y: rand(-1.5, -0.8)
      },
      color: new PIXI.Color([1, 1, 1]),
      fuel: rand(5, 6),
      burnRate: 1,
      energy: 1,
      fadeRate: rand(0.2, 0.3)
    };
    this.tint = this.anim.color.toNumber();
  }
}

class FlameBurstsContainer extends PIXI.Container {
  constructor() {
    super();
    this.filters = [new PIXI.BlurFilter({ strength: 0.5 })];
    this.alpha = 0.8;
  }
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
export default function CandleAnimation({ numCandles = 7, girlImage = '/girl.png', cakeImage = '/cake.png', candleImage = '/candle.png', backgroundColor = '#000000', width = '100%', height = '100vh', scale = 1.4, onComplete }: CandleAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<PIXI.Application | null>(null);
  const candlesRef = useRef<Candle[]>([]);
  const texturesRef = useRef<{
    candleBg: PIXI.Texture | null;
    blurryTexture: PIXI.Texture | null;
    flameGlowTexture: PIXI.Texture | null;
  }>({ candleBg: null, blurryTexture: null, flameGlowTexture: null });
  // const {width:windowWidth} = useWindowSize();

  // Initialize PIXI app only once
  useEffect(() => {
    if (!containerRef.current) return;

    let app: PIXI.Application | null = null;
    let isInitialized = false;
    let isCancelled = false;
    const pointer: PointerState = { x: 0, y: 0, offset: { x: 0, y: 0 } };
    let allCandlesLit = false;
    let girlBg: PIXI.Sprite & { anim: AnimState };
    let cakeBg: PIXI.Sprite;

    // Utility function

    // Initialize PixiJS
    const initPixi = async () => {
      if (!containerRef.current || isCancelled) return;

      app = new PIXI.Application();
      await app.init({
        resizeTo: containerRef.current,
        backgroundAlpha: backgroundColor === 'transparent' ? 0 : 1,
        background: backgroundColor === 'transparent' ? 0x000000 : backgroundColor,
        antialias: true,
        autoDensity: true,
        resolution: Math.min(window.devicePixelRatio || 1, 2)
      });

      if (isCancelled) return;

      containerRef.current.appendChild(app.canvas);
      app.stage.sortableChildren = true;
      appRef.current = app;

      // Load assets
      const girl_img = await PIXI.Assets.load<PIXI.Texture>(girlImage);
      if (isCancelled) return;

      girlBg = Object.assign(new PIXI.Sprite(girl_img), { anim: { brightness: 0 } });
      girlBg.anchor.set(0.5);
      girlBg.tint = 0x000000; // Start completely dark
      app.stage.addChild(girlBg);
      updateGirlBg();

      const cake_img = await PIXI.Assets.load<PIXI.Texture>(cakeImage);
      if (isCancelled) return;

      cakeBg = new PIXI.Sprite(cake_img);
      cakeBg.anchor.set(0.5, 0);
      cakeBg.visible = false;
      app.stage.addChild(cakeBg);

      const candle_img = await PIXI.Assets.load<PIXI.Texture>(candleImage);
      if (isCancelled) return;

      texturesRef.current.candleBg = candle_img;

      // Create shared textures
      const flameBody = new PIXI.Graphics().circle(0, 0, 25).fill(0xffffff);
      texturesRef.current.blurryTexture = app.renderer.generateTexture(flameBody);

      // Create radial gradient for flame glow
      const flameGlow = new PIXI.Graphics().circle(0, 0, 20).fill({
        color: 0xffff33,
        alpha: 0.5
      });
      texturesRef.current.flameGlowTexture = app.renderer.generateTexture(flameGlow);

      // Initial candles will be created by handleResize
      // which is called from updateLayout

      // Auto-light one candle after 3 seconds
      setTimeout(() => {
        const i = candlesRef.current.findIndex((c) => c.isLit);
        if (i === -1 && candlesRef.current.length > 0) {
          candlesRef.current[Math.floor(Math.random() * candlesRef.current.length)].isLit = true;
        }
      }, 3000);

      // This will create the initial candles based on canvas width
      handleResize();
      app.ticker.add(onTick);
      isInitialized = true;

      app.stage.eventMode = 'static';

      // Add the listener
      app.stage.on('pointermove', (event) => {
        handlePointerMove(event.data.originalEvent as unknown as PointerEvent);
      });
      app.stage.on('mousemove', (event) => {
        handlePointerMove(event.data.originalEvent as unknown as PointerEvent);
      });

      return app;
    };

    const addCandle = (): Candle => {
      if (!app) throw new Error('PIXI app not initialized');
      const { candleBg, blurryTexture, flameGlowTexture } = texturesRef.current;
      if (!candleBg || !blurryTexture || !flameGlowTexture) {
        throw new Error('Textures not loaded');
      }
      const c = new Candle({ blurryTexture, candleBg, flameGlowTexture });
      app.stage.addChild(c);
      candlesRef.current.push(c);
      c.interactive = true;
      c.cursor = 'pointer';
      c.on('pointerdown', () => {
        console.log('Candle clicked:', c);
        c.isLit = !c.isLit;
      });
      return c;
    };

    const updateGirlBg = (): void => {
      const b = girlBg.anim.brightness * 256;
      girlBg.tint = new PIXI.Color({ r: b, g: b, b: b }).toNumber();
    };

    const updateLayout = (): void => {
      if (!girlBg || !cakeBg || !app) return;
      const canvasWidth = app.canvas.width / app.renderer.resolution;
      const canvasHeight = app.canvas.height / app.renderer.resolution;

      // Calculate scale factor based on container size
      // Use the smaller dimension to ensure everything fits
      const baseWidth = 1920; // Reference width
      const baseHeight = 1080; // Reference height
      const scaleX = canvasWidth / baseWidth;
      const scaleY = canvasHeight / baseHeight;
      const autoScale = Math.min(scaleX, scaleY);

      // Center everything with responsive scaling
      girlBg.anchor.set(0.5, 0.5);
      girlBg.x = canvasWidth / 2;
      girlBg.y = canvasHeight * 0.5; // * 0.4; // Proportional to height
      // girlBg.scale.set(1 * scale * autoScale);
      girlBg.scale.set((1 * 1024) / canvasHeight);

      cakeBg.x = canvasWidth / 2;
      cakeBg.y = canvasHeight * 0.75; // Proportional to height
      cakeBg.scale.set(2 * scale * autoScale);

      // Calculate horizontal spacing with padding
      // const paddingPercent = 0.1; // 10% padding on each side
      // const padding = canvasWidth * paddingPercent;
      // const availableWidth = canvasWidth - (padding * 2);
      const numCandles = candlesRef.current.length;

      // Distribute candles evenly across available width
      // const spacing = numCandles > 1 ? availableWidth / (numCandles - 1) : 0;
      const spacing = canvasWidth / (numCandles + 1); // Alternative: equal spacing across entire width
      const padding = spacing;

      // Update candle scales and positions
      candlesRef.current.forEach((c, i) => {
        const b = c.getLocalBounds();
        c.scale.set((0.6 * canvasHeight) / b.height);

        // Position candles evenly with padding
        if (numCandles === 1) {
          c.x = canvasWidth / 2; // Center single candle
        } else {
          c.x = padding + spacing * i; // Distribute multiple candles
        }

        const b2 = c.getBounds();
        c.y = app!.canvas.height - b2.height * 1.5;
      });

      // layoutCandles();
    };

    const onTick = (ticker: PIXI.Ticker): void => {
      let flameBursts = 0;
      let litCount = 0;

      candlesRef.current.forEach((c) => {
        c.onTick(ticker, pointer);
        flameBursts += c.flameBursts.length;
        litCount += c.isLit ? 1 : 0;
      });

      const brightness = 256 * Math.max(0.2, Math.min(1, flameBursts / (20 * candlesRef.current.length)));
      if (cakeBg) {
        cakeBg.tint = new PIXI.Color({ r: brightness, g: brightness, b: brightness }).toNumber();
      }

      if (litCount === candlesRef.current.length && !allCandlesLit) {
        allCandlesLit = true;
        gsap.to(girlBg.anim, {
          brightness: 1,
          duration: 2,
          ease: 'power2.out',
          onUpdate: updateGirlBg,
          onComplete: () => {
            candlesRef.current.forEach((c) => {
              c.isLit = false;
            });
            allCandlesLit = false;

            // Trigger the onComplete callback when candles are blown out
            if (onComplete) {
              onComplete();
            }

            gsap.to(girlBg.anim, {
              brightness: 0,
              duration: 1,
              ease: 'power2.out',
              onUpdate: updateGirlBg
            });
          }
        });
      } else if (litCount < candlesRef.current.length && allCandlesLit) {
        allCandlesLit = false;
      }
    };

    // Mouse tracking
    const handlePointerMove = (e: PointerEvent): void => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.offset.x = e.clientX - window.innerWidth / 2;
      pointer.offset.y = e.clientY - window.innerHeight / 2;
    };

    const handleResize = (): void => {
      if (!app) return;

      // Calculate target number of candles based on canvas width
      // Use approximately 250px per candle as spacing
      const targetCount = Math.min(5, Math.max(1, Math.floor(app.canvas.width / 250)));
      console.log({ targetCount });

      if (candlesRef.current.length < targetCount) {
        // Add candles
        const toAdd = targetCount - candlesRef.current.length;
        for (let i = 0; i < toAdd; i++) {
          addCandle();
        }
      } else if (candlesRef.current.length > targetCount) {
        // Remove candles
        const toRemove = candlesRef.current.length - targetCount;
        for (let i = 0; i < toRemove; i++) {
          const c = candlesRef.current.pop();
          if (c) {
            app.stage.removeChild(c);
            c.destroy();
          }
        }
      }

      updateLayout();
    };

    window.addEventListener('resize', handleResize);
    initPixi();

    // Cleanup
    return () => {
      isCancelled = true;
      window.removeEventListener('resize', handleResize);
      if (app && isInitialized) {
        try {
          app.destroy(true, { children: true, texture: true });
        } catch (error) {
          console.warn('Error destroying PIXI app:', error);
        }
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only initialize once

  // Update candles when numCandles prop changes
  useEffect(() => {
    if (!appRef.current) return;

    // Trigger resize to adjust candle count
    if (candlesRef.current.length !== numCandles) {
      window.dispatchEvent(new Event('resize'));
    }
  }, [numCandles]);

  return (
    <div
      ref={containerRef}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        overflow: 'hidden',
        position: 'relative'
      }}
    />
  );
}
