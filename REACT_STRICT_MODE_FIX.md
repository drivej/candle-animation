# 🔧 React Strict Mode Fix

## Problem

When running `npm run dev`, the browser showed a blank window with this error:

```
Uncaught TypeError: Cannot read properties of undefined (reading 'destroy')
    at _Application2.destroy (Application.ts:416:23)
    at CandleAnimation.tsx:351:13
```

## Root Cause

**React Strict Mode** in development intentionally runs effects **twice** to help detect side effects:

1. Component mounts → `useEffect` runs → `initPixi()` starts (async)
2. Component unmounts (Strict Mode) → cleanup runs → tries to destroy `app` (not initialized yet!)
3. Component mounts again → `useEffect` runs again

The cleanup function was trying to destroy the PIXI app before it was fully initialized, causing the error.

## Solution

Added proper async cancellation handling:

### 1. **Cancellation Flag**
```typescript
let isCancelled = false;
```

### 2. **Check Before Async Operations**
```typescript
const initPixi = async () => {
  if (!containerRef.current || isCancelled) return;
  
  app = new PIXI.Application();
  await app.init({ ... });
  
  if (isCancelled) return;  // ✅ Check after async
  
  // Load assets
  const girl_img = await PIXI.Assets.load(girlImage);
  if (isCancelled) return;  // ✅ Check after each async operation
  
  // ... more async operations with checks
};
```

### 3. **Set Flag in Cleanup**
```typescript
return () => {
  isCancelled = true;  // ✅ Cancel any pending async operations
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
```

### 4. **Initialization Flag**
```typescript
let isInitialized = false;

// At end of initPixi:
isInitialized = true;
```

### 5. **Null Check in Functions**
```typescript
const addCandle = (): Candle => {
  if (!app) throw new Error('PIXI app not initialized');
  // ... rest of function
};
```

## How It Works

1. **First Mount**: `initPixi()` starts loading assets asynchronously
2. **Strict Mode Unmount**: Cleanup sets `isCancelled = true`
3. **Async Operations**: Check `isCancelled` and bail out early
4. **Second Mount**: New `initPixi()` runs with fresh state
5. **Normal Cleanup**: Only destroys if `isInitialized` is true

## Benefits

✅ **No more errors** in React Strict Mode  
✅ **Proper cleanup** of PIXI resources  
✅ **Prevents memory leaks** from abandoned async operations  
✅ **Type-safe** with TypeScript null checks  
✅ **Production-ready** - works in both dev and production  

## Testing

```bash
# Run dev server
npm run dev

# Open http://localhost:5173
# Should see candle animation without errors
```

## React Strict Mode

React Strict Mode is enabled in `demo-app.tsx`:

```tsx
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

This is **intentional** and helps catch bugs early. The fix ensures the component works correctly with Strict Mode.

## Related Files

- `src/CandleAnimation.tsx` - Main component with fix
- `demo-app.tsx` - Demo app with Strict Mode enabled
- `index.html` - Entry point

## Production Build

The fix doesn't affect production builds, where Strict Mode doesn't run effects twice. But it ensures the component is robust in all environments.

