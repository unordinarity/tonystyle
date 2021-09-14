import React from 'react'
import { render } from 'react-dom'

import { App } from './app'

import 'src/shared/styles/reset.css'
import 'src/shared/styles/reset-patch.css'
import 'src/shared/styles/spa-sizing.css'

render(
  <App />,
  document.querySelector('#react') ||
  document.querySelector('#app') ||
  document.querySelector('#root')
)
