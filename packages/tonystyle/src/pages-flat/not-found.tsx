import React, { FunctionComponent } from 'react'

import { HelmetCommon } from 'src/widgets/helmet-common'
import { PageTemplate } from 'src/widgets/page-template'

export const NotFound: FunctionComponent = () => (
  <PageTemplate>
    <HelmetCommon title="404" />

    <h1>Page not Found</h1>
  </PageTemplate>
)
