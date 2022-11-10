import React from 'react'
import { Icon as MdiIcon } from '@mdi/react'

import { stitches } from 'src/shared/ui/stitches'
import paperTexture from 'src/shared/assets/textures/paper-one.png'

const Container = stitches.styled('div', {
  width: '100%',
  height: '$$sizeContainer',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  textAlign: 'start',
  gap: '16px',
  padding: '0 16px',

  fontFamily: '$title',
  fontWeight: '$bold',

  color: 'inherit',

  variants: {
    direction: {
      normal: {
        flexDirection: 'row',
      },
      reversed: {
        flexDirection: 'row-reverse',
      }
    },
    size: {
      small: {
        $$sizeContainer: '40px',
        $$sizeFont: '15px',
        $$sizeIcon: '24px',
      },
      medium: {
        $$sizeContainer: '48px',
        $$sizeFont: '20px',
        $$sizeIcon: '32px',
      },
      large: {
        $$sizeContainer: '64px',
        $$sizeFont: '28px',
        $$sizeIcon: '40px',
      }
    },
  },
  defaultVariants: {
    direction: 'normal',
    size: 'medium',
  },

  cursor: 'pointer',

  transitionProperty: 'background-color, color, scale, rotate, box-shadow',
  transitionDuration: '0.2s',
  transitionTimingFunction: 'ease-in-out',

  '&:hover': {
    background: `url(${paperTexture}), $tertiarySurface`,
    color: '$tertiaryContent',
  },
})

const Text = stitches.styled('div', {
  flex: '1 1 auto',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '4px',

  fontSize: '$$sizeFont',
  lineHeight: '1',
})

const Tip = stitches.styled('div', {
  alignSelf: 'center',

  fontSize: '0.6em',
  lineHeight: '0.8',
})

const Icon = stitches.styled(MdiIcon, {
  width: '$$sizeIcon',
  height: '$$sizeIcon',
  color: 'currentColor',
})

export const Point = {
  Container,
  Text,
  Tip,
  Icon,
}
