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
export default function CandleAnimation({
  numCandles = 7, //
  girlImage = '/girl.png',
  cakeImage = '/cake.png',
  candleImage = '/candle.png',
  backgroundColor = '#000000',
  width = '100%',
  height = '100vh',
  scale = 1.4,
  onComplete
}: CandleAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<PIXI.Application | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let app: PIXI.Application | null = null;
    let isInitialized = false;
    let isCancelled = false;
    const candles: Candle[] = [];
    const pointer: PointerState = { x: 0, y: 0, offset: { x: 0, y: 0 } };
    let allCandlesLit = false;
    let girlBg: PIXI.Sprite & { anim: AnimState };
    let cakeBg: PIXI.Sprite;
    let candleBg: PIXI.Texture;
    let blurryTexture: PIXI.Texture;
    let flameGlowTexture: PIXI.Texture;

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

      candleBg = candle_img;

      // Create shared textures
      const flameBody = new PIXI.Graphics().circle(0, 0, 25).fill(0xffffff);
      blurryTexture = app.renderer.generateTexture(flameBody);

      // Create radial gradient for flame glow
      const flameGlow = new PIXI.Graphics().circle(0, 0, 20).fill({
        color: 0xffff33,
        alpha: 0.5
      });
      flameGlowTexture = app.renderer.generateTexture(flameGlow);

      // Create candles
      numCandles = ~~(app!.canvas.width / 250);
      for (let i = 0; i < numCandles; i++) {
        addCandle();
      }

      // Auto-light one candle after 3 seconds
      setTimeout(() => {
        const i = candles.findIndex((c) => c.isLit);
        if (i === -1 && candles.length > 0) {
          candles[Math.floor(Math.random() * candles.length)].isLit = true;
        }
      }, 3000);

      updateLayout();
      app.ticker.add(onTick);
      isInitialized = true;
    };

    const addCandle = (): Candle => {
      if (!app) throw new Error('PIXI app not initialized');
      const c = new Candle({ blurryTexture, candleBg, flameGlowTexture });
      app.stage.addChild(c);
      candles.push(c);
      c.interactive = true;
      c.cursor = 'pointer';
      c.on('click', () => {
        c.isLit = !c.isLit;
      });
      return c;
    };

    const updateGirlBg = (): void => {
      const b = girlBg.anim.brightness * 256;
      girlBg.tint = new PIXI.Color({ r: b, g: b, b: b }).toNumber();
    };

    // const layoutCandles = (): void => {
    //   if (!cakeBg || !app) return;

    //   const canvasWidth = app.canvas.width / app.renderer.resolution;
    //   const centerX = canvasWidth / 2;
    //   const centerY = cakeBg.y + cakeBg.height * 0.27;
    //   const RAD = Math.PI / 180;
    //   const aOffset = 0;
    //   const step = 360 / candles.length;
    //   const rX = cakeBg.width * 0.3;
    //   const rY = cakeBg.height * 0.15;

    //   candles.forEach((c, i) => {
    //     const a = aOffset + step * i;
    //     c.x = centerX + Math.sin(a * RAD) * rX;
    //     c.y = centerY + Math.cos(a * RAD) * rY;
    //     c.zIndex = c.y;

    //     const sp = app!.canvas.width / (candles.length + 1);
    //     c.x = sp + sp * i; //
    //     c.y = cakeBg.y + cakeBg.height * 0.47;
    //   });
    // };

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
      girlBg.scale.set(1 * 1024 / canvasHeight);

      cakeBg.x = canvasWidth / 2;
      cakeBg.y = canvasHeight * 0.75; // Proportional to height
      cakeBg.scale.set(2 * scale * autoScale);

      const sp = app!.canvas.width / (candles.length + 1);


      // Update candle scales
      candles.forEach((c, i) => {
        // c.scale.set(0.7 * scale * autoScale);
        // c.scale.set(1);
        const b = c.getLocalBounds();
        // console.log(b.width, b.height, canvasHeight, (0.5 * canvasHeight) / b.height);
        c.scale.set((0.6 * canvasHeight) / b.height);
        c.x = (sp) + (sp * i); //
        const b2 = c.getBounds();
        c.y = app!.canvas.height + (b2.height * 0.2);//app!.canvas.height; // * 0.5; // + 40;
        // console.log(c.getBounds());
        // c.x = 50;
        // c.y = 50;

      });

      // layoutCandles();
    };

    const onTick = (ticker: PIXI.Ticker): void => {
      let flameBursts = 0;
      let litCount = 0;

      candles.forEach((c) => {
        c.onTick(ticker, pointer);
        flameBursts += c.flameBursts.length;
        litCount += c.isLit ? 1 : 0;
      });

      const brightness = 256 * Math.max(0.2, Math.min(1, flameBursts / (20 * candles.length)));
      if (cakeBg) {
        cakeBg.tint = new PIXI.Color({ r: brightness, g: brightness, b: brightness }).toNumber();
      }

      if (litCount === candles.length && !allCandlesLit) {
        allCandlesLit = true;
        gsap.to(girlBg.anim, {
          brightness: 1,
          duration: 2,
          ease: 'power2.out',
          onUpdate: updateGirlBg,
          onComplete: () => {
            candles.forEach((c) => {
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
      } else if (litCount < candles.length && allCandlesLit) {
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
      updateLayout();
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('resize', handleResize);

    initPixi();

    // Cleanup
    return () => {
      isCancelled = true;
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      if (app && isInitialized) {
        try {
          app.destroy(true, { children: true, texture: true });
        } catch (error) {
          console.warn('Error destroying PIXI app:', error);
        }
      }
    };
  }, [numCandles, girlImage, cakeImage, candleImage, backgroundColor, width, height, scale]);

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
