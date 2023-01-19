import { stitches } from '../stitches'

export const criticalCss = stitches.globalCss({
  'body': {
    backgroundColor: '#111111',

    '@media (prefers-color-scheme: light)': {
      backgroundColor: '#EEEEEE',
    },
  },
})
