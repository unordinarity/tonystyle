import React, { FunctionComponent } from 'react'

import { HelmetCommon } from 'src/widgets/helmet-common'
import { PageTemplate } from 'src/widgets/page-template'

export const Personal: FunctionComponent = () => (
  <PageTemplate>
    <HelmetCommon title='Personal' />

    <h1>Personal</h1>

    <h2>Hardware</h2>

    <h2>Software</h2>

    <h2>Code style</h2>

    <h2>Habits and traits</h2>
  </PageTemplate>
)
