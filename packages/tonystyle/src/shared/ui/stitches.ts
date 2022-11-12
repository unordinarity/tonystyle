import { createStitches, defaultThemeMap } from '@stitches/react'

import { background } from './tokens/background'
import { color } from './tokens/color'
import { font } from './tokens/font'

export const stitches = createStitches({
  theme: {
    fonts: font.families,
    fontWeights: font.weights,
    colors: {
      ...color.themes.stub,
    },
    image: {
      ...background.images,
    },
  },
  themeMap: {
    ...defaultThemeMap,
    ...background.themeMap,
  },
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
