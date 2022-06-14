import loadable from '@loadable/component'
import { createRoute } from 'atomic-router'

export const home = {
  path: '/',
  route: createRoute(),
  loadable: loadable(async () => (await import('./home')).HomePage),
}
