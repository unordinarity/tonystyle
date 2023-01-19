import React, { FunctionComponent } from 'react'
import { ComponentProps } from '@stitches/react'
import clsx from 'clsx'
import { Icon as IconMdi } from '@mdi/react'
import { random, sample } from 'lodash-es'

import { UniversalLink } from 'src/shared/lib/universal-link'

import { paperCard } from '../atoms/paper-card'
import { PaperStack } from '../atoms/paper-stack'

import { stitches } from '../stitches'

// container

const Container = stitches.styled(PaperStack, {})

// point

const Point = stitches.styled('div', {
  height: '$$pointHeight',
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px',
  paddingInline: '8px',

  color: '$secondaryContent',

  variants: {
    size: {
      small: {
        $$pointHeight: '40px',
        $$textSize: '16px',
        $$iconSize: '24px',
      },
      medium: {
        $$pointHeight: '48px',
        $$textSize: '20px',
        $$iconSize: '32px',
      },
      large: {
        $$pointHeight: '64px',
        $$textSize: '28px',
        $$iconSize: '40px',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

const pointHoverCss = {
  ...paperCard.properties,
  backgroundColor: '$tertiarySurface',
  color: '$tertiaryContent',
}

const pointHoverClassname = stitches.css(pointHoverCss)().className

const pointActiveProperties = {
  ...paperCard.properties,

  scale: '1.07',

  backfaceVisibility: 'hidden',

  boxShadow: '0 0 8px 0 $colors$primaryBack',
}

const pointActiveClassname = stitches.css(pointActiveProperties)().className

// button

const PointButtonLike = stitches.styled(Point, {
  background: 'unset',
  appearance: 'none',
  border: 'none',
  cursor: 'pointer',

  '&:hover': pointHoverCss,
})

type PointButtonProps =
  ComponentProps<typeof PointButtonLike> &
  { as?: never }

const PointButton: FunctionComponent<PointButtonProps> = props => (
  <PointButtonLike as='button' {...props} />
)

// anchor

const PointAnchorLike = stitches.styled(Point, {
  textDecoration: 'none',
  appearance: 'none',

  '&:hover': pointHoverCss,
})

type PointAnchorProps =
  ComponentProps<typeof PointAnchorLike> &
  { as?: never } &
  ComponentProps<typeof UniversalLink>

const PointAnchor: FunctionComponent<PointAnchorProps> = ({
  activeClassName,
  activeStyle,
  ...props
}) => (
  <PointAnchorLike
    as={UniversalLink}
    activeClassName={clsx(activeClassName, pointActiveClassname)}
    activeStyle={{
      ...activeStyle,
      rotate: `${sample([-1 * random(1, 4, true), random(1, 4, true)])}deg`,
    }}
    {...props}
  />
)

// text, tip, icon

const Text = stitches.styled('div', {
  flexGrow: '1',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  fontSize: '$$textSize',
  lineHeight: '1.2',
})

const Tip = stitches.styled('span', {
  fontSize: '0.65em',
  lineHeight: '1',
})

const Icon = stitches.styled(IconMdi, {
  width: '$$iconSize',
  height: '$$iconSize',
  color: 'currentColor',
})

// api

export const Menu = {
  Container,
  Point,
  PointAnchor,
  PointButton,
  Text,
  Tip,
  Icon,
}