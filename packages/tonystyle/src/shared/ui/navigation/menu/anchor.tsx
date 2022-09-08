import React, { ComponentProps, FunctionComponent } from 'react'
import { VariantProps } from '@stitches/react'

import { Anchor as UiAnchor } from 'src/shared/ui/navigation/anchor'

import { Point } from './point'

type Props = ComponentProps<typeof UiAnchor> & VariantProps<typeof Point.Container> & {
  icon?: string
  text: string
  tip?: string
  children?: never
  as?: React.ElementType
}

export const Anchor: FunctionComponent<Props> = ({
  icon,
  text,
  tip,
  ...props
}) => (
  <Point.Container as={UiAnchor} {...props}>
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
