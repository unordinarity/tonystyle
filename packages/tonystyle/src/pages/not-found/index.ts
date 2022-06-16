import loadable from '@loadable/component'
import { createRoute } from 'atomic-router'

export const notFound = {
  path: '/404',
  route: createRoute(),
  component: loadable(async () => (await import('./page')).NotFoundPage),
}
