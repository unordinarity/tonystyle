import React, { FunctionComponent, useEffect } from 'react'
import { sample } from 'effector'
import { createHistoryRouter } from 'atomic-router'
import { createRoutesView, RouterProvider } from 'atomic-router-react'
import { createBrowserHistory } from 'history'
import { HelmetProvider } from 'react-helmet-async'

import { pages } from 'src/pages'

import 'modern-css-reset'
import './reset-patch.css'
import './spa.css'
import './critical.css'

import { themeCss } from './theme'

// router

export const router = createHistoryRouter({
  routes: Object.values(pages).map(page => ({ route: page.route, path: page.path })),
  notFoundRoute: pages.notFound.route,
})

const history = createBrowserHistory()
router.setHistory(history)

const RoutesView = createRoutesView({
  routes: Object.values(pages).map(page => ({ route: page.route, view: page.view })),
  otherwise: pages.notFound.view as FunctionComponent,
})

const Router = () => (
  <RouterProvider router={router}>
    <RoutesView />
  </RouterProvider>
)

sample({
  clock: router.routeNotFound,
  fn: () => ({}),
  target: pages.notFound.route.open,
})

// final setup

export const App: FunctionComponent = () => {
  useEffect(() => {
    themeCss()
  })

  return (
    <HelmetProvider>
      <Router />
    </HelmetProvider>
  )
}
