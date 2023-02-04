import React, { FunctionComponent } from 'react'
import { PageTemplate } from 'src/widgets/page-template'
import { HeadTemplate } from 'src/widgets/head-template'

const Uses: FunctionComponent = () => (
  <>
    <HeadTemplate title='Uses' />
    <PageTemplate>
      <h1>Uses</h1>

      <h2>Hardware</h2>

      <h2>Software</h2>

      <h2>Code style</h2>

      <h2>Habits and traits</h2>
    </PageTemplate>
  </>
)

export default Uses