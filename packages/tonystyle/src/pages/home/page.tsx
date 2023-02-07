import React, { FunctionComponent } from 'react'

import { PageTemplate } from 'src/widgets/page-template'
import { HeadTemplate } from 'src/widgets/head-template'

import { DrawnFrame, Typography } from 'src/shared/ui'

import { Layout } from './ui/layout'

const HomePage: FunctionComponent = () => (
  <>
    <HeadTemplate />
    <PageTemplate>
      <Layout.Container>
        <Layout.Section>
          <Typography.Heading as='h1'>
            Hero
          </Typography.Heading>
          <DrawnFrame>
            Hello, I'm Tony, software engineer
          </DrawnFrame>
        </Layout.Section>
        <Layout.Section>
          <Typography.Heading as='h1'>
            About me
          </Typography.Heading>
          <Typography.Paragraph>
            Couple paragraphs about myself
          </Typography.Paragraph>
        </Layout.Section>
        <Layout.Section>
          <Typography.Heading as='h1'>
            Articles
          </Typography.Heading>
          <Typography.Paragraph>
            Recent and popular article list
          </Typography.Paragraph>
        </Layout.Section>
        <Layout.Section>
          <Typography.Heading as='h1'>
            Projects
          </Typography.Heading>
          <Typography.Paragraph>
            Feature-Sliced Design, frontend architecture methodology
          </Typography.Paragraph>
        </Layout.Section>
        <Layout.Section>
          <Typography.Heading as='h1'>
            Skills
          </Typography.Heading>
          <ul>
            <li>UI/UX design</li>
            <li>Software development</li>
            <li>Software architecture</li>
          </ul>
        </Layout.Section>
        <Layout.Section>
          <Typography.Heading as='h1'>
            Experience
          </Typography.Heading>
          <ul>
            <li>Online education</li>
            <li>Crypto startups</li>
            <li>Stock trading</li>
            <li>Retail</li>
          </ul>
        </Layout.Section>
        <Layout.Section>
          <Typography.Heading as='h1'>
            Services
          </Typography.Heading>
          <ul>
            <li>Personal and team consulting</li>
            <li>Codebase review</li>
          </ul>
        </Layout.Section>
        <Layout.Section>
          <Typography.Heading as='h1'>
            Contacts
          </Typography.Heading>
          <Typography.Paragraph>
            Just open contacts menu and message me
          </Typography.Paragraph>
        </Layout.Section>
      </Layout.Container>
    </PageTemplate>
  </>
)

export default HomePage
