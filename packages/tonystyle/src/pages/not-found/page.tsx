import React, { FunctionComponent } from 'react'

import { HeadTemplate } from 'src/widgets/head-template'
import { PageTemplate } from 'src/widgets/page-template'

import { Typography } from 'src/shared/ui'

const NotFound: FunctionComponent = () => (
  <>
    <HeadTemplate title='404' />
    <PageTemplate>
      <Typography.Heading as='h1'>
        Page not Found
      </Typography.Heading>
      <Typography.Paragraph>
        If you think this is an error contact me or write an issue in project repo
      </Typography.Paragraph>
    </PageTemplate>
  </>
)

export default NotFound
