import { defineConfig } from 'tsup'
import { esBuildDtsTypes } from '@unlogin/esbuild-plugin-dts'

export default defineConfig({
  entry: ['./src/index.ts'],
  sourcemap: true,
  target: 'esnext',
  outDir: 'dist',
  format: ['esm'],
  clean: true,
  esbuildPlugins: [esBuildDtsTypes({ tsConfigPath: 'tsconfig.build.json' })],
})
