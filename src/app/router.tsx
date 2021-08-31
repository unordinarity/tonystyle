import { FunctionComponent } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { HomePage } from '../pages/home'
import { ExperimentsPage } from '../pages/experiments-home'
import { NotFoundPage } from '../pages/not-found'

export const Router: FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/experiments" exact component={ExperimentsPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)
