import React, { FunctionComponent } from 'react'
import { HeadFC, PageProps } from 'gatsby'

import { Layout } from '../widgets/layout'
import { MdxProviderStyled } from '../shared/mdx-provider-styled'
import { GatsbyHead } from '../widgets/gatsby-head'

const ArticlesIdTemplate: FunctionComponent<PageProps<object, Queries.File>> = ({
  children,
  pageContext,
}) => (
  <Layout>
    <h1>{pageContext.childMdx?.frontmatter?.title}</h1>
    <p>{pageContext.childMdx?.frontmatter?.date && (
      new Date(parseInt(pageContext.childMdx?.frontmatter?.date)).toLocaleDateString()
    )}</p>
   <MdxProviderStyled>

   </MdxProviderStyled>
  </Layout>
)

export default ArticlesIdTemplate

export const Head: HeadFC<object, Queries.File> = ({
  pageContext,
}) => (
  <GatsbyHead
    title={pageContext.childMdx?.frontmatter?.title ?? undefined}
  />
)
