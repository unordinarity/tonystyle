import { FunctionComponent } from 'react'
import { sample } from 'effector'
import { createHistoryRouter } from 'atomic-router'
import { createRoutesView } from 'atomic-router-react'
import { createBrowserHistory } from 'history'

import { pages } from 'src/pages'

const router = createHistoryRouter({
  routes: Object.values(pages).map(page => ({ route: page.route, path: page.path })),
  notFoundRoute: pages.notFound.route,
})

const history = createBrowserHistory()
router.setHistory(history)

export const RoutesView = createRoutesView({
  routes: Object.values(pages).map(page => ({ route: page.route, view: page.view })),
  otherwise: pages.notFound.view as FunctionComponent,
})

sample({
  clock: router.routeNotFound,
  fn: () => ({}),
  target: pages.notFound.route.open,
})
