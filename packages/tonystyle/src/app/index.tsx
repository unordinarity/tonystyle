import React from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './app'

import './reset.css'
import './reset-patch.css'
import './reset-spa.css'

const reactRoot = createRoot(
  document.getElementById('root')!,
)

reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
