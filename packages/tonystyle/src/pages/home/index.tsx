import { createRoute } from 'atomic-router'
import loadable from '@loadable/component'
import { mdiLoading } from '@mdi/js'

import { Spinner } from 'src/shared/ui'

export const home = {
  path: '/',
  route: createRoute(),
  view: loadable(
    async () => (await import('./page')).HomePage,
    { fallback: <Spinner path={mdiLoading} /> },
  ),
}
