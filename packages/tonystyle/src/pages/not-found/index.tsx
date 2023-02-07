import { ComponentType } from 'react'
import { createRoute } from 'atomic-router'

import { createLoadablePage } from 'src/shared/lib/create-loadable-page'

export const notFound = {
  path: '/404',
  route: createRoute(),
  view: createLoadablePage(() => import('./page') as unknown as Promise<ComponentType>),
}
