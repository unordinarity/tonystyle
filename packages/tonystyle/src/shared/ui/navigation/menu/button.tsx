import React, { ComponentProps, FunctionComponent } from 'react'
import { VariantProps } from '@stitches/react'

import { stitches } from 'src/shared/ui/stitches'

import { Point } from './point'

const ContainerStyled = stitches.styled(Point.Container, {
  appearance: 'none',
  border: 'none',
})

type Props = ComponentProps<'button'> & VariantProps<typeof ContainerStyled> & VariantProps<typeof Point.Container> & {
  icon?: string
  text: string
  tip?: string
  children?: never
  as?: React.ElementType
}

export const Button: FunctionComponent<Props> = ({
  icon,
  text,
  tip,
  ...props
}) => (
  <ContainerStyled as='button' {...props}>
    {icon && (
      <Point.Icon path={icon} />
    )}
    <Point.Text>
      {text}
      {tip && (
        <Point.Tip>{tip}</Point.Tip>
      )}
    </Point.Text>
  </ContainerStyled>
)
