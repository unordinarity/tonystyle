import loadable from '@loadable/component'
import { createRoute } from 'atomic-router'

export const aboutHome = {
  path: '/about',
  route: createRoute(),
  component: loadable(async () => (await import('./page')).AboutPage),
}
