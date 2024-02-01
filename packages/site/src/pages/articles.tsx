import React, { FunctionComponent } from 'react'
import { graphql, PageProps, useStaticQuery, navigate } from 'gatsby'

import { Typography } from '@frontend-church/ui'

import { GatsbyHead } from '../widgets/gatsby-head'
import { Layout } from '../widgets/layout'

const BlogHome: FunctionComponent<PageProps> = () => {
  const data = useStaticQuery<Queries.Query>(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: {eq: "articles"},
          childMdx: {frontmatter: {public: {eq: true}}}
        }
        sort: {
          childMdx: {frontmatter: {date: DESC}}
        }
      ) {
        nodes {
          childMdx {
            frontmatter {
              slug
              date
              title
            }
            excerpt
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Typography.H1>Blog</Typography.H1>
      {data.allFile.nodes.map(node => (
        <article onClick={() => navigate(node.childMdx?.frontmatter?.slug ?? '')}>
          <Typography.H1>{node.childMdx?.frontmatter?.title}</Typography.H1>
          <Typography.P>{node.childMdx?.excerpt}</Typography.P>
        </article>
      ))}
    </Layout>
  )
}

export default BlogHome

export const Head = () => (
  <GatsbyHead title='Blog' />
)
