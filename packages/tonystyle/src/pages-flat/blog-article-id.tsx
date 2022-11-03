import React, { FunctionComponent } from 'react'

import { HelmetCommon } from 'src/widgets/helmet-common'
import { PageTemplate } from 'src/widgets/page-template'

export const BlogArticleId: FunctionComponent = () => (
  <PageTemplate>
    <HelmetCommon title='PostId' />

    <h1>Article Id</h1>
  </PageTemplate>
)
