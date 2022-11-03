import React, { FunctionComponent } from 'react'

import { PageTemplate } from 'src/widgets/page-template'

import { Layout } from './ui/layout'

export const Home: FunctionComponent = () => (
  <PageTemplate>
    <Layout.Container>
      <Layout.Section>
        <h1>Hero</h1>
      </Layout.Section>
      <Layout.Section>
        <h1>About</h1>
      </Layout.Section>
      <Layout.Section>
        <h1>Articles</h1>
      </Layout.Section>
      <Layout.Section>
        <h1>Projects</h1>
      </Layout.Section>
      <Layout.Section>
        <h1>Skills</h1>
      </Layout.Section>
      <Layout.Section>
        <h1>Experience</h1>
      </Layout.Section>
      <Layout.Section>
        <h1>Services</h1>
      </Layout.Section>
      <Layout.Section>
        <h1>Contacts</h1>
      </Layout.Section>
    </Layout.Container>
  </PageTemplate>
)
