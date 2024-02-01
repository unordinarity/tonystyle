import { stitches } from '../stitches'

export const spaGlobalCss = stitches.globalCss({
  'html, body, #___gatsby, #gatsby-focus-wrapper': {
    width: '100%',
    height: '100%',
  },
  '#react, #app, #root': {
    width: '100%',
    minHeight: '100%',
  },
  '#gatsby-focus-wrapper': {
    display: 'flex',
    flexDirection: 'column',
  },
})
