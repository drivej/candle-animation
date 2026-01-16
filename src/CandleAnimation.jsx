import { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';
import gsap from 'gsap';

/**
 * CandleAnimation - A React component that displays an interactive candle animation
 *
 * Uses bundled assets by default. Assets are included in the package at:
 * node_modules/@drivej/candle-animation/assets/
 *
 * Copy them to your public folder:
 * cp node_modules/@drivej/candle-animation/assets/* public/
 *
 * @param {Object} props
 * @param {number} props.numCandles - Number of candles to display (default: 9)
 * @param {string} props.girlImage - Path to girl image (default: '/girl.png')
 * @param {string} props.cakeImage - Path to cake image (default: '/cake.png')
 * @param {string} props.candleImage - Path to candle image (default: '/candle.png')
 * @param {string} props.backgroundColor - Background color (default: '#000000')
 */
export default function CandleAnimation({
  numCandles = 9,
  girlImage = '/girl.png',
  cakeImage = '/cake.png',
  candleImage = '/candle.png',
  backgroundColor = '#000000'
}) {
  const containerRef = useRef(null);
  const appRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let app;
    let candles = [];
    let pointer = { x: 0, y: 0, offset: { x: 0, y: 0 } };
    let allCandlesLit = false;
    let girlBg, cakeBg, candleBg, blurryTexture, flameGlowTexture;

    // Utility function
    const rand = (n1, n2) => Math.random() * (n2 - n1) + n1;

    // Initialize PixiJS
    const initPixi = async () => {
      app = new PIXI.Application();
      await app.init({
        resizeTo: containerRef.current,
        backgroundAlpha: backgroundColor === 'transparent' ? 0 : 1,
        backgroundColor: backgroundColor,
        antialias: true,
        autoDensity: true,
        resolution: Math.min(window.devicePixelRatio || 1, 2)
      });

      containerRef.current.appendChild(app.canvas);
      app.stage.sortableChildren = true;
      appRef.current = app;

      // Load assets
      const girl_img = await PIXI.Assets.load(girlImage);
      girlBg = new PIXI.Sprite(girl_img);
      girlBg.anchor.set(0.5);
      girlBg.anim = { brightness: 0 };
      app.stage.addChild(girlBg);

      const cake_img = await PIXI.Assets.load(cakeImage);
      cakeBg = new PIXI.Sprite(cake_img);
      cakeBg.anchor.set(0.5, 0);
      app.stage.addChild(cakeBg);

      const candle_img = await PIXI.Assets.load(candleImage);
      candleBg = candle_img;

      // Create shared textures
      const flameBody = new PIXI.Graphics().circle(0, 0, 25).fill(0xffffff);
      blurryTexture = app.renderer.generateTexture(flameBody);

      const flameGlowGradient = new PIXI.FillGradient({
        type: 'radial',
        center: { x: 0.5, y: 0.5 },
        outerCenter: { x: 0.5, y: 0.5 },
        innerRadius: 0,
        outerRadius: 0.9,
        colorStops: [
          { offset: 0, color: 0xffff33, alpha: 0.5 },
          { offset: 1, color: 0xffff33, alpha: 0 }
        ]
      });
      const flameGlow = new PIXI.Graphics().circle(0, 0, 20).fill(flameGlowGradient);
      flameGlowTexture = app.renderer.generateTexture(flameGlow);

      // Create candles
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
    };

    // Candle class
    class Candle extends PIXI.Container {
      isLit = false;
      flameBursts = [];

      constructor() {
        super();
        this.flameBurstsContainer = new FlameBurstsContainer();
        this.flameGlowSprite = new FlameGlow();
        this.candleBg = new PIXI.Sprite(candleBg);
        this.candleBg.anchor.set(0.5, 1);
        this.addChild(this.candleBg);
        this.addChild(this.flameGlowSprite);
        this.addChild(this.flameBurstsContainer);

        this.flameGlowSprite.y = -this.candleBg.height;
        this.flameBurstsContainer.y = -this.candleBg.height;
        this.scale.set(0.7);
      }

      onTick(ticker) {
        const maxParticlesPerCandle = 30;
        const spawnChance = 0.8;

        if (this.isLit && Math.random() < spawnChance && this.flameBursts.length < maxParticlesPerCandle) {
          const f = new FlameBurst();
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
      constructor() {
        super(flameGlowTexture);
        this.filters = [new PIXI.BlurFilter({ strength: 36, quality: 8 })];
        this.anchor.set(0.5);
        this.scale.set(2);
        this.alpha = 0.5;
      }
    }

    class FlameBurst extends PIXI.Sprite {
      constructor() {
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

    const addCandle = () => {
      const c = new Candle();
      app.stage.addChild(c);
      candles.push(c);
      c.interactive = true;
      c.cursor = 'pointer';
      c.on('click', () => {
        c.isLit = !c.isLit;
      });
      return c;
    };

    const updateGirlBg = () => {
      const b = girlBg.anim.brightness * 256;
      girlBg.tint = new PIXI.Color({ r: b, g: b, b: b }).toNumber();
    };

    const layoutCandles = () => {
      if (!cakeBg) return;
      const centerX = window.innerWidth / 2;
      const centerY = cakeBg.y + cakeBg.height * 0.27;
      const RAD = Math.PI / 180;
      const aOffset = 15;
      const step = 360 / candles.length;
      const rX = cakeBg.width * 0.3;
      const rY = cakeBg.height * 0.15;

      candles.forEach((c, i) => {
        const a = aOffset + step * i;
        c.x = centerX + Math.sin(a * RAD) * rX;
        c.y = centerY + Math.cos(a * RAD) * rY;
        c.zIndex = c.y;
      });
    };

    const updateLayout = () => {
      if (!girlBg || !cakeBg) return;
      girlBg.x = window.innerWidth / 2;
      girlBg.y = window.innerHeight / 2.7;
      girlBg.scale.set(0.7);
      cakeBg.x = window.innerWidth / 2;
      cakeBg.y = window.innerHeight / 1.7;
      cakeBg.scale.set(2);
      layoutCandles();
    };

    const onTick = (ticker) => {
      let flameBursts = 0;
      let litCount = 0;

      candles.forEach((c) => {
        c.onTick(ticker);
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
    const handlePointerMove = (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.offset.x = e.clientX - window.innerWidth / 2;
      pointer.offset.y = e.clientY - window.innerHeight / 2;
    };

    const handleResize = () => {
      updateLayout();
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('resize', handleResize);

    initPixi();

    // Cleanup
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      if (app) {
        app.destroy(true, { children: true, texture: true, baseTexture: true });
      }
    };
  }, [numCandles, girlImage, cakeImage, candleImage, backgroundColor]);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative'
      }}
    />
  );
}

