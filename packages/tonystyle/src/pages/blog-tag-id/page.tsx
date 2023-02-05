import React, { FunctionComponent } from 'react'

import { HeadTemplate } from 'src/widgets/head-template'
import { PageTemplate } from 'src/widgets/page-template'

const BlogTagId: FunctionComponent = () => (
  <>
    <HeadTemplate title='TagId' />
    <PageTemplate>
      <h1>TagId</h1>
    </PageTemplate>
  </>
)

export default BlogTagId
