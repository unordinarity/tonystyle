import type { GatsbyConfig } from 'gatsby'
import path from 'path'

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Tony.Style',
    description: 'Business card, CV, personal blog, petproject playground',
  },
  flags: {
    DEV_SSR: true,
  },
  graphqlTypegen: {
    typesOutputPath: '/src/gatsby-graphql-typegen.d.ts',
  },
  plugins: [
    {
      resolve: 'gatsby-alias-imports',
      options: {
        aliases: {
          'src': path.resolve(__dirname, 'src'),
        },
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'positions',
        path: `${__dirname}/data/about-positions/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'articles',
        path: `${__dirname}/data/blog-articles/`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx'],
      },
    },
  ],
}

export default config
