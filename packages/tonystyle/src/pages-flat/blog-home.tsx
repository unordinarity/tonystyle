import React, { FunctionComponent } from 'react'

import { HeadTemplate } from 'src/widgets/head-template'
import { PageTemplate } from 'src/widgets/page-template'

export const BlogHome: FunctionComponent = () => (
  <PageTemplate>
    <h1>Blog</h1>
  </PageTemplate>
)
export const BlogHomeHead: FunctionComponent = () => (
  <HeadTemplate title='Blog' />
)
