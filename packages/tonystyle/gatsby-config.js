const path = require('path')

module.exports = {
  siteMetadata: {
    title: '',
    description: '',
  },
  plugins: [
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-image',
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
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          src: path.resolve(__dirname, 'src')
        },
        extensions: []
      }
    },
  ],
}
