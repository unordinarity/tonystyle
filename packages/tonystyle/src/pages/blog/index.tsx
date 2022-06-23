import React, { FunctionComponent } from 'react'

import { Template } from 'src/widgets/template'
import { HelmetCommon } from 'src/widgets/helmet-common'

const Blog: FunctionComponent = () => (
  <Template>
    <HelmetCommon title='Blog' />

    <h1>Blog</h1>
  </Template>
)

export default Blog
