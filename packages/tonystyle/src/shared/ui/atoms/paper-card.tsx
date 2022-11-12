import { stitches } from 'src/shared/ui'

import paperTexture from './assets/paper-one.png'

export const PaperCard = stitches.styled('div', {
  background: `url(${paperTexture}), $secondarySurface`,
  backgroundBlendMode: 'multiply',
  backgroundColor: '$secondarySurface',
  color: '$secondaryContent',
  boxShadow: '0 0 8px -4px $colors$primaryBack',

  variants: {
    active: {
      true: {
        backgroundColor: `url(${paperTexture})`,
      },
      'on-hover': {
        '&:hover': {},
        '&:not(:hover)': {},
      },
      false: {
        background: `url(${paperTexture}), $secondarySurface`,
      },
    },
  },
  defaultVariants: {
    active: false,
  },
})
