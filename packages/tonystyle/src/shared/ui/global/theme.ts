import { stitches } from '../stitches'

export const themeCss = stitches.globalCss({
  'body': {
    fontFamily: '$paragraph',
    fontWeight: '$normal',
    backgroundColor: '$primaryBack',
    color: '$primaryContent',
  },
})

themeCss()
