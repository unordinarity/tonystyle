import React, { ComponentProps, FunctionComponent } from 'react'
import { VariantProps } from '@stitches/react'

import { stitches } from 'src/shared/ui'
import { Anchor as UiAnchor } from 'src/shared/ui/navigation/anchor'

import { Point } from './point'

type Props = ComponentProps<typeof UiAnchor> & VariantProps<typeof Point.Container> & {
  icon?: string
  text: string
  tip?: string
  children?: never
  as?: React.ElementType
}

const PointContainerStyled = stitches.styled(Point.Container, {
  backgroundBlendMode: 'multiply',

  '&:hover': {
    backgroundImage: '$paper',
    backgroundColor: '$tertiarySurface',
    color: '$tertiaryContent',
  },
})

const activeCss = stitches.css({
  scale: '1.07',
  rotate: '2deg',

  backfaceVisibility: 'hidden',

  boxShadow: '0 0 8px 0 $colors$primaryBack',
  backgroundImage: '$paper',
  backgroundColor: '$secondarySurface',
})()

export const Anchor: FunctionComponent<Props> = ({
  icon,
  text,
  tip,
  ...props
}) => (
  <PointContainerStyled
    as={UiAnchor}
    activeClassName={activeCss.className}
    {...props}>
    {icon && (
      <Point.Icon path={icon} />
    )}
    <Point.Text>
      {text}
      {tip && (
        <Point.Tip>{tip}</Point.Tip>
      )}
    </Point.Text>
  </PointContainerStyled>
)
