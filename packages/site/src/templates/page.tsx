import React, { FunctionComponent } from 'react'
import { HeadFC, PageProps } from 'gatsby'

import { Layout } from '../widgets/layout'
import { MdxProviderStyled } from '../shared/mdx-provider-styled'
import { GatsbyHead } from '../widgets/gatsby-head'

const PageTemplate: FunctionComponent<PageProps<object, Queries.File>> = ({
  children,
  pageContext,
}) => (
  <Layout>
    <MdxProviderStyled>
      {children}
    </MdxProviderStyled>
  </Layout>
)

export default PageTemplate

export const Head: HeadFC<object, Queries.File> = ({
  pageContext,
}) => (
  <GatsbyHead
    title={pageContext.childMdx?.frontmatter?.title ?? undefined}
  />
)
