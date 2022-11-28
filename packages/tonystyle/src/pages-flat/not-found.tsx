import React, { FunctionComponent } from 'react'

import { HelmetCommon } from 'src/widgets/helmet-common'
import { PageTemplate } from 'src/widgets/page-template'

import { Typography } from 'src/shared/ui'

export const NotFound: FunctionComponent = () => (
  <PageTemplate>
    <HelmetCommon title='404' />

    <Typography.Heading as='h1'>
      Page not Found
    </Typography.Heading>
    <Typography.Paragraph>
      If you think this is an error contact me or write an issue in project repo
    </Typography.Paragraph>
  </PageTemplate>
)
