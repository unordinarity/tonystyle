import path from 'node:path'

import type { GatsbyNode } from 'gatsby'

export const createPages: GatsbyNode['createPages'] = async ({
  graphql, actions, reporter,
}) => {
  // articles

  const articles = await graphql<Queries.Query>(`
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
            internal {
              contentFilePath
            }
            excerpt
            body
            frontmatter {
              slug
              date
              title
              tags
            }
          }
        }
      }
    }
  `)

  if (articles.errors) {
    reporter.panicOnBuild('Error loading MDX articles', articles.errors)
  }

  const articlesIdTemplate = path.resolve('src/templates/articles-id.tsx')

  articles.data?.allFile.nodes.forEach(node => {
    actions.createPage({
      path: `/articles/${node.childMdx?.frontmatter?.slug}`,
      component: `${articlesIdTemplate}?__contentFilePath=${node.childMdx?.internal.contentFilePath}`,
      context: node,
    })
  })

  // pages

  const pages = await graphql<Queries.Query>(`
    query {
      allFile(
        filter: {
          sourceInstanceName: {eq: "pages"}, 
          childMdx: {frontmatter: {public: {eq: true}}}
        }
      ) {
        nodes {
          childMdx {
            body
            frontmatter {
              slug
              title
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `)

  if (pages.errors) {
    reporter.panicOnBuild('Error loading MDX pages', pages.errors)
  }

  const pageTemplate = path.resolve('src/templates/page.tsx')

  pages.data?.allFile.nodes.forEach(node => {
    actions.createPage({
      path: `/${node.childMdx?.frontmatter?.slug}`,
      component: `${pageTemplate}?__contentFilePath=${node.childMdx?.internal.contentFilePath}`,
      context: node,
    })
  })
}
