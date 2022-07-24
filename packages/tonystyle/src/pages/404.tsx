import React, { FunctionComponent } from 'react'

import { HelmetCommon } from 'src/widgets/helmet-common'

const NotFoundPage: FunctionComponent = () => (
  <>
    <HelmetCommon title="404" />

    <h1>404: Page not Found</h1>
  </>
)

export default NotFoundPage
