import React, { FunctionComponent } from 'react'

import { HelmetCommon } from 'src/widgets/helmet-common'
import { PageTemplate } from 'src/widgets/page-template'

export const BlogHome: FunctionComponent = () => (
  <PageTemplate>
    <HelmetCommon title='Blog' />

    <h1>Blog</h1>
  </PageTemplate>
)
