import React, { FunctionComponent } from 'react'

import { HeadTemplate } from 'src/widgets/head-template'
import { PageTemplate } from 'src/widgets/page-template'

export const BlogArticleId: FunctionComponent = () => (
  <PageTemplate>
    <h1>Article Id</h1>
  </PageTemplate>
)

export const BlogArticleIdHead: FunctionComponent = () => (
  <HeadTemplate title='PostId' />
)
