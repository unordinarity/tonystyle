import Module from 'node:module'

import { defineConfig } from 'rollup'
import typescriptPlugin from '@rollup/plugin-typescript'
import urlPlugin from '@rollup/plugin-url';
import { readPackageUpSync } from 'read-pkg-up'
import dtsPlugin from 'rollup-plugin-dts'

const packageJson = readPackageUpSync({ normalize: true }).packageJson

export default defineConfig([{
  input: 'src/index.ts',
  plugins: [
    urlPlugin({
      limit: 1024,
    }),
    typescriptPlugin(),
  ],
  output: [{
    file: packageJson.module,
    format: 'esm',
  }],
  external: [
    ...Object.keys(packageJson.devDependencies ?? {}),
    ...Object.keys(packageJson.dependencies ?? {}),
    ...Object.keys(packageJson.peerDependencies ?? {}),
    Module.builtinModules.map(m => `node:${m}`),
  ],
}, {
  input: 'src/index.ts',
  plugins: [
    urlPlugin({
      limit: 1024,
    }),
    typescriptPlugin(),
    dtsPlugin(),
  ],
  output: [{
    file: packageJson.types,
    format: 'esm',
  }],
  external: [
    ...Object.keys(packageJson.devDependencies ?? {}),
    ...Object.keys(packageJson.dependencies ?? {}),
    ...Object.keys(packageJson.peerDependencies ?? {}),
    Module.builtinModules.map(m => `node:${m}`),
  ],
}])
