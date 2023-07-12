import React, { FunctionComponent } from 'react'

import { HeadTemplate } from 'src/widgets/head-template'
import { PageTemplate } from 'src/widgets/page-template'

const BlogCycleId: FunctionComponent = () => (
  <>
    <HeadTemplate title='CycleId' />
    <PageTemplate>
      <h1>CycleId</h1>
    </PageTemplate>
  </>
)

export default BlogCycleId
