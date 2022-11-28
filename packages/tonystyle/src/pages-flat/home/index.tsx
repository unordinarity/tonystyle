import React, { FunctionComponent } from 'react'
import { faker } from '@faker-js/faker'

import { PageTemplate } from 'src/widgets/page-template'
import { HelmetCommon } from 'src/widgets/helmet-common'

import { DrawnFrame } from 'src/shared/ui'

import { Layout } from './ui/layout'

export const Home: FunctionComponent = () => (
  <PageTemplate layoutVertical='full'>
    <HelmetCommon />
    <Layout.Container>
      <Layout.Section>
        <h1>Hero</h1>
        <DrawnFrame>{faker.lorem.paragraphs()}</DrawnFrame>
      </Layout.Section>
      <Layout.Section>
        <h1>About me</h1>
        <p>{faker.lorem.paragraphs()}</p>
      </Layout.Section>
      <Layout.Section>
        <h1>Articles</h1>
        <p>{faker.lorem.paragraphs()}</p>
      </Layout.Section>
      <Layout.Section>
        <h1>Projects</h1>
        <p>{faker.lorem.paragraphs()}</p>
      </Layout.Section>
      <Layout.Section>
        <h1>Skills</h1>
        <p>{faker.lorem.paragraphs()}</p>
      </Layout.Section>
      <Layout.Section>
        <h1>Experience</h1>
        <p>{faker.lorem.paragraphs()}</p>
      </Layout.Section>
      <Layout.Section>
        <h1>Services</h1>
        <p>{faker.lorem.paragraphs()}</p>
      </Layout.Section>
      <Layout.Section>
        <h1>Contacts</h1>
        <p>{faker.lorem.paragraphs()}</p>
      </Layout.Section>
    </Layout.Container>
  </PageTemplate>
)
