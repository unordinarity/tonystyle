import React, { FunctionComponent } from 'react'

import { Typography } from 'src/shared/ui'
import { HeadTemplate } from 'src/widgets/head-template'
import { PageTemplate } from 'src/widgets/page-template'

export const Experience: FunctionComponent = () => (
  <PageTemplate>
    <Typography.Heading as='h1'>Experience</Typography.Heading>
  </PageTemplate>
)

export const ExperienceHead: FunctionComponent = () => (
  <HeadTemplate title='Experience' />
)
