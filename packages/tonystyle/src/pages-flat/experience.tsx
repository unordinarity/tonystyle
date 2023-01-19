import React, { FunctionComponent } from 'react'

import { HeadTemplate } from 'src/widgets/head-template'
import { PageTemplate } from 'src/widgets/page-template'

export const Experience: FunctionComponent = () => (
  <PageTemplate><h1>Experience</h1>
  </PageTemplate>
)

export const ExperienceHead: FunctionComponent = () => (
  <HeadTemplate title='Experience' />
)
