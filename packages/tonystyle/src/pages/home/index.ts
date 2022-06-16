import loadable from '@loadable/component'
import { createRoute } from 'atomic-router'

export const home = {
  path: '/',
  route: createRoute(),
  component: loadable(async () => (await import('./page')).HomePage),
}
