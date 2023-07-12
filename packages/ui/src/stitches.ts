import { createStitches } from '@stitches/react'

import { color } from './tokens/color'
import { font } from './tokens/font'

export const stitches = createStitches({
  theme: {
    fonts: font.families,
    fontWeights: font.weights,
    colors: {
      ...color.themes.stub,
    },
  },
})
