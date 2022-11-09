import React, { FunctionComponent } from 'react'
import { faker } from '@faker-js/faker'

import { PageTemplate } from 'src/widgets/page-template'
import { HelmetCommon } from 'src/widgets/helmet-common'

import { Layout } from './ui/layout'

export const Home: FunctionComponent = () => (
  <PageTemplate>
    <HelmetCommon />
    <Layout.Container>
      <Layout.Section>
        <h1>Hero</h1>
        <p>{faker.lorem.paragraph()}</p>
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
