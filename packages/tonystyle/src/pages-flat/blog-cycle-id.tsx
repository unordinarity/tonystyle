import React, { FunctionComponent } from 'react'

import { HeadTemplate } from 'src/widgets/head-template'
import { PageTemplate } from 'src/widgets/page-template'

export const BlogCycleId: FunctionComponent = () => (
  <PageTemplate>
    <h1>CycleId</h1>
  </PageTemplate>
)

export const BlogCycleIdHead: FunctionComponent = () => (
  <HeadTemplate title='PostId' />
)
