import React, { FunctionComponent } from 'react'
import { PageTemplate } from 'src/widgets/page-template'
import { HelmetCommon } from 'src/widgets/helmet-common'

export const Uses: FunctionComponent = () => (
  <PageTemplate>
      <HelmetCommon title='Uses' />

      <h1>Uses</h1>

      <h2>Hardware</h2>

      <h2>Software</h2>

      <h2>Code style</h2>

      <h2>Habits and traits</h2>
  </PageTemplate>
)
