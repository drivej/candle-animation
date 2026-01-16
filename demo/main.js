// main.js

function rand(n1, n2) {
  return Math.random() * (n2 - n1) + n1;
}

const app = new PIXI.Application();

await app.init({
  resizeTo: window,
  backgroundAlpha: 0,
  backgroundColor: 0x000000,
  antialias: true,
  autoDensity: true,
  resolution: Math.min(window.devicePixelRatio || 1, 2)
});

document.body.appendChild(app.canvas);

// Enable zIndex sorting on the stage
app.stage.sortableChildren = true;

// Center follows mouse/pointer
const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2, offset: { x: 0, y: 0 } };

window.addEventListener('pointermove', (e) => {
  pointer.x = e.clientX;
  pointer.y = e.clientY;
  // Calculate offset from center of window
  pointer.offset.x = e.clientX - window.innerWidth / 2;
  pointer.offset.y = e.clientY - window.innerHeight / 2;
});

function onResize() {
  updateLayout();
}

const girl_img = await PIXI.Assets.load('assets/girl.png');
const girlBg = new PIXI.Sprite(girl_img);
girlBg.anchor.set(0.5);
girlBg.anim = { brightness: 0 };
app.stage.addChild(girlBg);

// Track if we've already started the tween to avoid running it every frame
let allCandlesLit = false;

function updateGirlBg() {
  const b = girlBg.anim.brightness * 256;
  girlBg.tint = new PIXI.Color({ r: b, g: b, b: b }).toNumber();
}

// Initialize the tint
updateGirlBg();

const cake_img = await PIXI.Assets.load('assets/cake.png');
const cakeBg = new PIXI.Sprite(cake_img);
cakeBg.anchor.set(0.5, 0);
app.stage.addChild(cakeBg);

function updateLayout() {
  girlBg.x = window.innerWidth / 2;
  girlBg.y = window.innerHeight / 2.7;
  girlBg.scale.set(0.7);
  cakeBg.x = window.innerWidth / 2;
  cakeBg.y = window.innerHeight / 1.7;
  cakeBg.scale.set(2);
  layoutCandles();
}

//
// START: shared assets
//
const candle_bg = await PIXI.Assets.load('assets/candle.png');
const flameBody = new PIXI.Graphics().circle(0, 0, 25).fill(0xffffff);
const blurryTexture = app.renderer.generateTexture(flameBody);
const flameGlowGradient = new PIXI.FillGradient({
  type: 'radial',
  center: { x: 0.5, y: 0.5 },
  outerCenter: { x: 0.5, y: 0.5 },
  innerRadius: 0, // Starts gradient from the very center point
  outerRadius: 0.9, // Ends gradient at the edge of the circle (0.5 * diameter)
  colorStops: [
    { offset: 0, color: 0xffff33, alpha: 0.5 }, // Red at the center (0% offset)
    { offset: 1, color: 0xffff33, alpha: 0 } // Blue at the edge (100% offset)
  ]
});
const flameGlow = new PIXI.Graphics().circle(0, 0, 20).fill(flameGlowGradient);
const flameGlowTexture = app.renderer.generateTexture(flameGlow);
//
// END: shared assets
//
class Candle extends PIXI.Container {
  isLit = false;
  flameBursts = [];

  constructor() {
    super();
    this.flameBurstsContainer = new FlameBurstsContainer();
    this.flameGlowSprite = new FlameGlow();
    this.candleBg = new PIXI.Sprite(candle_bg);
    this.candleBg.anchor.set(0.5, 1);
    this.addChild(this.candleBg);
    this.addChild(this.flameGlowSprite);
    this.addChild(this.flameBurstsContainer);

    this.flameGlowSprite.y = -this.candleBg.height;
    this.flameBurstsContainer.y = -this.candleBg.height;

    this.scale.set(0.7);
  }

  onTick(ticker) {
    // Spawn more frequently with more candles - aim for ~20-30 particles per candle
    const maxParticlesPerCandle = 30;
    const spawnChance = 0.8; // 80% chance per frame

    if (this.isLit && Math.random() < spawnChance && this.flameBursts.length < maxParticlesPerCandle) {
      // add new flame burst if candle is lit
      const f = new FlameBurst();
      this.flameBurstsContainer.addChild(f);
      this.flameBursts.push(f);
    }
    // adjust flame glow alpha
    this.flameGlowSprite.alpha = this.flameBursts.length / 40;
    this.flameGlowSprite.scale.set(rand(1.8, 2.2));

    // adjust candle bg brightness
    const brightness = 256 * Math.max(0.2, Math.min(1, this.flameBursts.length / 20));
    this.candleBg.tint = new PIXI.Color({ r: brightness, g: brightness, b: brightness }).toNumber();

    // Reverse iteration for safe removal during loop
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

const candles = [];

function addCandle() {
  const c = new Candle();
  app.stage.addChild(c);
  candles.push(c);
  c.interactive = true;
  c.buttonMode = true;
  c.on('click', () => {
    c.isLit = !c.isLit;
  });
  return c;
}

// Add candles - the layout will automatically arrange them in rings
// Try different numbers: 1, 7, 13, 19, 25, 49, etc.
for (let i = 0; i < 9; i++) {
  addCandle();
}

setTimeout(() => {
  const i = candles.findIndex((c) => c.isLit);
  if (i == -1) {
    candles[(Math.random() * candles.length) | 0].isLit = true;
  }
}, 3000);

function layoutCandles() {
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
}

function onTick(ticker) {
  let flameBursts = 0;
  let litCount = 0;

  candles.forEach((c) => {
    c.onTick(ticker);
    flameBursts += c.flameBursts.length;
    litCount += c.isLit ? 1 : 0;
  });

  const brightness = 256 * Math.max(0.2, Math.min(1, flameBursts / (20 * candles.length)));
  cakeBg.tint = new PIXI.Color({ r: brightness, g: brightness, b: brightness }).toNumber();

  // GSAP tween for girlBg brightness when all candles are lit
  if (litCount == candles.length && !allCandlesLit) {
    // All candles just got lit - trigger the tween ONCE
    allCandlesLit = true;

    gsap.to(girlBg.anim, {
      brightness: 1,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => {
        updateGirlBg();
      },
      onComplete: () => {
        // Blow out all candles after the animation
        candles.forEach((c) => {
          c.isLit = false;
        });
        allCandlesLit = false; // Reset flag

        gsap.to(girlBg.anim, {
          brightness: 0,
          duration: 1,
          ease: 'power2.out',
          onUpdate: () => {
            updateGirlBg();
          }
        });
      }
    });
  } else if (litCount < candles.length && allCandlesLit) {
    // Candles were blown out - reset flag
    allCandlesLit = false;
  }
}
// Render loop
app.ticker.add(onTick);
window.addEventListener('resize', onResize);

updateLayout();
