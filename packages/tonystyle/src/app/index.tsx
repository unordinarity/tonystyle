import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'

import { RoutesView } from './routes-view'

const renderRoot = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
)

renderRoot.render(
  <React.StrictMode>
    <HelmetProvider>
      <RoutesView />
    </HelmetProvider>
  </React.StrictMode>,
)
