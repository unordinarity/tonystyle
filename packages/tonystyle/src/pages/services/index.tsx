import { createRoute } from 'atomic-router'
import { ComponentType } from 'react'

import { createLoadablePage } from 'src/shared/lib/create-loadable-page'

export const services = {
  path: '/services',
  route: createRoute(),
  view: createLoadablePage(() => import('./page') as unknown as Promise<ComponentType>),
}
