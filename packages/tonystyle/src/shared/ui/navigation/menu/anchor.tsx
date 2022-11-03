import React, { ComponentProps, FunctionComponent } from 'react'
import { VariantProps } from '@stitches/react'

import { stitches } from 'src/shared/ui'
import { Anchor as UiAnchor } from 'src/shared/ui/navigation/anchor'
import paperTexture from 'src/shared/assets/textures/paper-one.png'

import { Point } from './point'

type Props = ComponentProps<typeof UiAnchor> & VariantProps<typeof Point.Container> & {
  icon?: string
  text: string
  tip?: string
  children?: never
  as?: React.ElementType
}

const activeCss = stitches.css({
  background: `url(${paperTexture}), $secondarySurface`,
  backgroundBlendMode: 'multiply',
  backfaceVisibility: 'hidden',
  scale: '1.07',
  rotate: 'z 2deg',
  boxShadow: '0 0 8px 0 $colors$primaryBack',
})()

export const Anchor: FunctionComponent<Props> = ({
  icon,
  text,
  tip,
  ...props
}) => (
  <Point.Container as={UiAnchor} activeClassName={activeCss.className} {...props}>
    {icon && (
      <Point.Icon path={icon} />
    )}
    <Point.Text>
      {text}
      {tip && (
        <Point.Tip>{tip}</Point.Tip>
      )}
    </Point.Text>
  </Point.Container>
)
