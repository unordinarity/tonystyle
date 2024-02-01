import type { GatsbyConfig } from 'gatsby'
import pkgDir from 'pkg-dir'
import * as path from 'node:path'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Frontend.Church`,
    siteUrl: `https://frontend.church`,
  },
  graphqlTypegen: {
    typesOutputPath: 'src/gatsby-typegen.d.ts'
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        mdxOptions: {},
        gatsbyRemarkPlugins: [],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        'name': 'articles',
        'path': path.resolve(`${pkgDir.sync()}/../data/articles/`),
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        'name': 'pages',
        'path': path.resolve(`${pkgDir.sync()}/../data/pages/`),
      },
      __key: 'pages',
    },
  ],
}

export default config
