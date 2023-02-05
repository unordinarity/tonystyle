import React, { FunctionComponent } from 'react'

import { HeadTemplate } from 'src/widgets/head-template'
import { PageTemplate } from 'src/widgets/page-template'

const BlogArticleId: FunctionComponent = () => (
  <>
    <HeadTemplate title='PostId' />
    <PageTemplate>
      <h1>Article Id</h1>
    </PageTemplate>
  </>
)

export default BlogArticleId
