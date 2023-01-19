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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Tony.Style',
        short_name: 'Tony.Style',
        description: 'Business card, CV, personal blog, petproject playground',
        lang: 'ru',
        display: 'browser',
        start_url: '/',
        background_color: '#b388eb',
        theme_color: '#ffafcc',
        icons: [
          {
            'src': 'src/shared/assets/favicon-light-192.png',
            'type': 'image/png',
            'sizes': '192x192'
          },
          {
            'src': 'src/shared/assets/favicon-light-512.png',
            'type': 'image/png',
            'sizes': '512x512'
          },
        ],
        localize: [
          {
            start_url: '/en/',
            lang: 'en',
            name: 'Tony.Style',
            short_name: 'Tony.Style',
            description: 'Business card, CV, personal blog, petproject playground',
          },
        ],
      },
    },
  ],
}

export default config
