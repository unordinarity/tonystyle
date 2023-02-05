import React, { FunctionComponent } from 'react'

import { Typography } from 'src/shared/ui'
import { HeadTemplate } from 'src/widgets/head-template'
import { PageTemplate } from 'src/widgets/page-template'

const Experience: FunctionComponent = () => (
  <>
    <HeadTemplate title='Experience' />
    <PageTemplate>
      <Typography.Heading as='h1'>Experience</Typography.Heading>
    </PageTemplate>
  </>
)

export default Experience
