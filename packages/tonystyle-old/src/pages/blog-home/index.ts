import loadable from '@loadable/component'
import { createRoute } from 'atomic-router'

export const blogHome = {
  path: '/blog',
  route: createRoute(),
  component: loadable(async () => (await import('./page')).BlogHomePage),
}
