import React, { FunctionComponent } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { createHistoryRouter } from 'atomic-router'
import { RouterProvider, Route } from 'atomic-router-react'
import { createBrowserHistory } from 'history'

import { routeObjectsList } from './route-objects'

const router = createHistoryRouter({ routes: routeObjectsList })
router.setHistory(createBrowserHistory())

export const App: FunctionComponent = () => (
  <HelmetProvider>
    <RouterProvider router={router}>
      {routeObjectsList.map(route => (
        <Route
          key={route.path}
          route={route.route}
          view={route.component as FunctionComponent}
        />
      ))}
    </RouterProvider>
  </HelmetProvider>
)
