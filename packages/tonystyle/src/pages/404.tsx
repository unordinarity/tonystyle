import React from 'react'

import { Template } from 'src/widgets/template'
import { HelmetCommon } from 'src/widgets/helmet-common'

const NotFoundPage = () => (
  <Template>
    <HelmetCommon title="404" />
    <h1>404: Page not Found</h1>
  </Template>
)

export default NotFoundPage
