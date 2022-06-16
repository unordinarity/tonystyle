import { createRoute } from 'atomic-router'
import loadable from '@loadable/component'

export const projectsHome = {
  path: '/projects',
  route: createRoute(),
  component: loadable(async () => (await import('./page')).ProjectsHome),
}
