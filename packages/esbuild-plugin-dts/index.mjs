import { execa } from 'execa'

/**
 * @param {{
 *   tsConfigPath: string
 * }} config
 */
export const esBuildDtsTypes = (config) => ({
  name: 'esbuild-plugin-dts',
  setup: ({ onEnd }) => {
    onEnd(async ({ errors }) => {
      if (errors.length > 0) {
        return
      }
      try {
        const start = performance.now()
        const buildPromise = execa('tsc', ['-p', config.tsConfigPath, '--emitDeclarationOnly'], { cwd: process.cwd() })
        buildPromise.stdout.pipe(process.stdout)
        buildPromise.stderr.pipe(process.stderr)
        await buildPromise
        console.log('Finished generating types in ', Number(performance.now() - start).toFixed(1), 'ms')
      } catch (error) {
        if (process.env.NODE_ENV === 'production') {
          throw error
        } else {
          console.log(error)
        }
      }
    })
  },
})
