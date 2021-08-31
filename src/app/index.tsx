import React from 'react'
import { render } from 'react-dom'

import { App } from './app'

render(
  <App />,
  document.querySelector('#react') ||
  document.querySelector('#app') ||
  document.querySelector('#root')
)
