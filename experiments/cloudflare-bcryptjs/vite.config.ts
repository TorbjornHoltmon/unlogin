import 'dotenv/config'
import { defineConfig } from 'vite'

export default defineConfig({
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV ?? 'development'),
  },
  build: {
    assetsInlineLimit: 1,
    sourcemap: true,
    emptyOutDir: true,
    target: 'esnext',
    // In order to inspect output of vite
    minify: false,
    lib: {
      entry: 'src/main.ts',
      formats: ['es'],
      fileName: 'main',
    },
  },
})
