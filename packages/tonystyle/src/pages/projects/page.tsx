import React, { FunctionComponent } from 'react'

import { PageTemplate } from 'src/widgets/page-template'
import { HeadTemplate } from 'src/widgets/head-template'

const Projects: FunctionComponent = () => (
  <>
    <HeadTemplate title='Projects' />
    <PageTemplate>
      <h1>Projects</h1>

      <h2>Feature-Sliced Design</h2>

      <h2>Panopticon</h2>
      <p>React component gallery as React component</p>

      <h2>Turntable</h2>
      <p>Framework-agnostic isomorphic architecture-friendly SPA router</p>

      <h2>Tabletka</h2>
      <p>Beautiful and stylish new tab for Chrome and Firefox</p>

      <h2>Tony.Style</h2>
      <p>This website. Business card, CV, personal blog, petproject playground, etc</p>
    </PageTemplate>
  </>
)

export default Projects
