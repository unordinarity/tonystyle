import React, { FunctionComponent } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { createHistoryRouter } from 'atomic-router'
import { RouterProvider, Route } from 'atomic-router-react'
import { createBrowserHistory } from 'history'

import { routeList } from 'src/pages/routes'

const router = createHistoryRouter({ routes: routeList })
router.setHistory(createBrowserHistory())

export const App: FunctionComponent = () => (
  <HelmetProvider>
    <RouterProvider router={router}>
      {routeList.map(route => (
        <Route
          key={route.path}
          route={route.route}
          view={route.loadable as FunctionComponent}
        />
      ))}
    </RouterProvider>
  </HelmetProvider>
)
