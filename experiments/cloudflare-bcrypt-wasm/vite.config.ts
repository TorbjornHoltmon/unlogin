import 'dotenv/config'
import { defineConfig } from 'vite'
import wasm from 'vite-plugin-wasm'
// import { wasm } from '@rollup/plugin-wasm'

export default defineConfig({
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV ?? 'development'),
  },
  build: {
    sourcemap: true,
    emptyOutDir: true,
    target: 'esnext',
    minify: false,
    lib: {
      entry: 'src/main.ts',
      formats: ['es'],
      fileName: 'main',
    },
  },
  plugins: [wasm()],
})
