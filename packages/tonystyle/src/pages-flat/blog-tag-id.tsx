import React, { FunctionComponent } from 'react'

import { HelmetCommon } from 'src/widgets/helmet-common'
import { PageTemplate } from 'src/widgets/page-template'

export const BlogTagId: FunctionComponent = () => (
  <PageTemplate>
    <HelmetCommon title='TagId' />

    <h1>TagId</h1>
  </PageTemplate>
)
