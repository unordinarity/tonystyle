import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

const plugins = [
  typescript(),
]

export default defineConfig([{
  input: 'src/index.ts',
  plugins: [...plugins],
  output: [{
    file: 'dist/index.js',
    format: 'es',
  }],
  external: ['effector']
}, {
  input: 'src/index.ts',
  plugins: [...plugins, dts()],
  output: {
    file: 'dist/index.d.ts',
    format: 'es',
  },
  external: ['effector']
}])
