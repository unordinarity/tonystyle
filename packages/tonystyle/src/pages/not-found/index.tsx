import { createRoute } from 'atomic-router'
import loadable from '@loadable/component'
import { mdiLoading } from '@mdi/js'

import { Spinner } from 'src/shared/ui'

export const notFound = {
  path: '/404',
  route: createRoute(),
  view: loadable(
    () => import('./page'),
    { fallback: <Spinner path={mdiLoading} /> },
  ),
}