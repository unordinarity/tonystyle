import { createStitches } from '@stitches/react'

import { font } from './tokens/font'
import { color } from './tokens/color'

export const stitches = createStitches({
  theme: {
    fonts: font.families,
    fontWeights: font.weights,
    colors: {
      ...color.themes.stub,
    },
  }
})

const globalCss = stitches.globalCss({
  'body': {
    fontFamily: '$paragraph',
    fontWeight: '$normal',
    backgroundColor: '$primaryBack',
    color: '$primaryContent',
  }
})

globalCss()
