import path from 'node:path'

import { GatsbyNode } from 'gatsby'

const createPages: GatsbyNode['createPages'] = async ({
  actions,
}) => {
  actions.createPage({
    path: '/asd',
    component: path.resolve('./src/pages/index.ts'),
    context: {},
  })
}

exports.createPages = createPages

const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({ actions: { createTypes } }) => {
  createTypes(`
    type Mdx implements Node {
      frontmatter: MdxFrontmatter
    }

    type MdxFrontmatter {
      items: [ItemValues]
      content: String @mdx
    }

    type ItemValues {
      value: String @mdx
    }
  `)
}

exports.createSchemaCustomization = createSchemaCustomization
