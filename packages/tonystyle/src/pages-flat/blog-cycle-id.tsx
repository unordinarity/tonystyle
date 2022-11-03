import React, { FunctionComponent } from 'react'

import { HelmetCommon } from 'src/widgets/helmet-common'
import { PageTemplate } from 'src/widgets/page-template'

export const BlogCycleId: FunctionComponent = () => (
  <PageTemplate>
    <HelmetCommon title='PostId' />

    <h1>CycleId</h1>
  </PageTemplate>
)
