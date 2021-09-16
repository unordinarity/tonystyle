import React from 'react'
import { render } from 'react-dom'

import { Router } from './router'

import 'src/shared/styles/reset.css'
import 'src/shared/styles/reset-patch.css'
import 'src/shared/styles/spa-sizing.css'

render(
  <Router />,
  document.querySelector('#react') ||
  document.querySelector('#app') ||
  document.querySelector('#root')
)
