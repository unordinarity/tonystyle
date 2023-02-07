import React, { FunctionComponent } from 'react'

import { HeadTemplate } from 'src/widgets/head-template'
import { PageTemplate } from 'src/widgets/page-template'

const BlogHome: FunctionComponent = () => (
  <>
    <HeadTemplate title='Blog' />
    <PageTemplate>
      <h1>Blog</h1>
    </PageTemplate>
  </>
)
export default BlogHome
