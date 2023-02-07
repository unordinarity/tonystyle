import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './app'

const renderRoot = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
)

renderRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
