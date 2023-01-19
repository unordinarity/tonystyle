import React, { FunctionComponent } from 'react'

import { PageTemplate } from 'src/widgets/page-template'
import { HeadTemplate } from 'src/widgets/head-template'

export const Projects: FunctionComponent = () => (
  <PageTemplate>
        <h1>Projects</h1>

        <h2>Feature-Sliced Design</h2>

        <h2>Panopticon</h2>

        <h2>Turntable</h2>

        <h2>Tabea</h2>

        <h2>Tony.Style</h2>
  </PageTemplate>
)

export const ProjectsHead: FunctionComponent = () => (
  <HeadTemplate title='Projects' />
)
