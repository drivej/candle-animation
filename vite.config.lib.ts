import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'CandleAnimation',
      formats: ['es', 'umd'],
      fileName: (format) => `candle-animation.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'React.jsxRuntime',
        },
        // Disable code splitting to prevent chunking
        inlineDynamicImports: true,
      },
    },
    target: 'esnext',
  },
  esbuild: {
    target: 'esnext',
  },
});

