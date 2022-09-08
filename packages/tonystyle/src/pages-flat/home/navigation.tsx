import React, { ComponentProps, FunctionComponent } from 'react'
import { Icon } from '@mdi/react'

import { stitches } from 'src/shared/ui'

const Container = stitches.styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'stretch',

  background: '#F2F2F2',
  color: '#000000EA'
})

const PointContainer = stitches.styled('div', {
  display: 'flex',
  alignItems: 'center',

  paddingLeft: 20,
  paddingRight: 20,
  gap: 40,

  fontWeight: 700,

  color: '#000000EA',
  backgroundColor: '#F2F2F2',

  '&:hover': {
    color: '#FFFFFFEA',
    backgroundColor: '#191919',
  },

  cursor: 'pointer',

  variants: {
    size: {
      m: {
        height: '60px',
        fontSize: '1.4rem',
      },
      l: {
        height: '80px',
        fontSize: '1.8rem',
      },
    },
  },
  defaultVariants: {
    size: 'm',
  },
})

const PointText = stitches.styled('div', {
  flexGrow: 1,
})

const PointIcon = stitches.styled(Icon, {
  height: 40,
  width: 40,
})

type PointProps =
  ComponentProps<typeof PointContainer> &
  { iconBefore?: string } &
  { iconAfter?: string }

const Point: FunctionComponent<PointProps> = ({
  iconBefore,
  iconAfter,
  children,
  ...props
}) => (
  <PointContainer {...props}>
    {iconBefore && (
      <PointIcon path={iconBefore} />
    )}
    <PointText>
      {children}
    </PointText>
    {iconAfter && (
      <PointIcon path={iconAfter} />
    )}
  </PointContainer>
)

export const navigation = {
  Container,
  Point,
}
