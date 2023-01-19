import React, { FunctionComponent } from 'react'

import { HeadTemplate } from 'src/widgets/head-template'
import { PageTemplate } from 'src/widgets/page-template'

export const BlogTagId: FunctionComponent = () => (
  <PageTemplate>
    <h1>TagId</h1>
  </PageTemplate>
)

export const BlogTagIdHead: FunctionComponent = () => (
  <HeadTemplate title='TagId' />
)
