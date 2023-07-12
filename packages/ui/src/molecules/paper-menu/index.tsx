import React, { FunctionComponent, useMemo } from 'react'
import { ComponentProps } from '@stitches/react'
import clsx from 'clsx'
import { Icon as IconMdi } from '@mdi/react'
import { random, sample } from 'lodash-es'
import { Link } from 'atomic-router-react'

import { PaperCard } from '../../atoms/paper-card'

import { stitches } from '../../stitches'

// container

const Container = stitches.styled(PaperCard.Stack, {})

// point

const Point = stitches.styled('div', {
  height: '$$pointHeight',
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px',
  paddingInline: '8px',

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

  backgroundColor: 'transparent',
  color: '$secondaryContent',
})

// button

const PointButtonLike = stitches.styled(Point, {
  background: 'unset',
  appearance: 'none',
  border: 'none',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$tertiarySurface',
    color: '$tertiaryContent',
  },
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
  background: 'none',

  '&:hover': {
    backgroundColor: '$tertiarySurface',
    color: '$tertiaryContent',
  },
  '&.active': {
    scale: '1.07',
    backfaceVisibility: 'hidden',
    boxShadow: '0 0 8px 0 $colors$primaryBack',
  }
})

type PointAnchorProps =
  ComponentProps<typeof PointAnchorLike> &
  ComponentProps<typeof Link> &
  { as?: never }

const PointAnchor: FunctionComponent<PointAnchorProps> = ({
  activeClassName,
  ...props
}) => {
  const randomClass = useMemo(() => stitches.css({
    rotate: `${sample([-1 * random(1, 4, true), random(1, 4, true)])}deg`,
  })().toString(), [])

  return (
    <PointAnchorLike
      as={Link}
      activeClassName={clsx(activeClassName, 'active', randomClass)}
      {...props}
    />
  )
}

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

export const PaperMenu = {
  Container,
  Point,
  PointAnchor,
  PointButton,
  Text,
  Tip,
  Icon,
}
