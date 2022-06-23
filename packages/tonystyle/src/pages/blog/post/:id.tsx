import React, { FunctionComponent } from 'react'

import { Template } from 'src/widgets/template'
import { HelmetCommon } from 'src/widgets/helmet-common'

const PostId: FunctionComponent = () => (
  <Template>
    <HelmetCommon title='PostId' />

    <h1>PostId</h1>
  </Template>
)

export default PostId
