import { ComponentType } from 'react'
import { createRoute } from 'atomic-router'

import { createLoadablePage } from 'src/shared/lib/create-loadable-page'

export const blogHome = {
  path: '/blog',
  route: createRoute(),
  view: createLoadablePage(() => import('./page') as unknown as Promise<ComponentType>),
}
