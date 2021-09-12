import React, { FunctionComponent } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { HomePage, NotFoundPage } from '../pages'
import { ExperimentsPage } from '../features/experiments'

export const Router: FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/experiments" exact component={ExperimentsPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)
