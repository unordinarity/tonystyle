import { stitches } from '../stitches'

export const stitchesGlobalCss = stitches.globalCss({
  body: {
    backgroundColor: '$background',
    color: '$textLatent',
    fontFamily: '$paragraph',
  },
  '::selection': {
    backgroundColor: '$textLatent',
    color: '$surface',
  },
})
