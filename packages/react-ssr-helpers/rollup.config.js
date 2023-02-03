import { defineConfig } from 'rollup'
import typescriptPlugin from '@rollup/plugin-typescript'
import typescriptDtsPlugin from 'rollup-plugin-dts'
import { readPackageUpSync } from 'read-pkg-up'

const packageJson = readPackageUpSync({ normalize: true })

export default defineConfig([{
  input: 'src/index.ts',
  plugins: [typescriptPlugin()],
  output: [{
    file: 'dist/index.js',
    format: 'esm',
  }],
  external: [
    ...Object.keys(packageJson.devDependencies ?? {}),
    ...Object.keys(packageJson.peerDependencies ?? {}),
  ],
}, {
  input: 'src/index.ts',
  plugins: [typescriptPlugin(), typescriptDtsPlugin()],
  output: {
    file: 'dist/index.d.ts',
    format: 'es',
  },
  external: [
    ...Object.keys(packageJson.devDependencies ?? {}),
    ...Object.keys(packageJson.peerDependencies ?? {}),
  ],
}])
