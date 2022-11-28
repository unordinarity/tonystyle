import React, { FunctionComponent, useMemo } from 'react'
import { ComponentProps } from '@stitches/react'
import { random, sample } from 'lodash-es'

import { stitches } from '../stitches'

import { paperCard } from './paper-card'

const ShadowStatic = stitches.styled('div', {
  ...paperCard.properties,
  position: 'absolute',
  inset: '0',
  zIndex: -1,

  translate: '0 0',
  rotate: '0',
})

const ShadowRandom: FunctionComponent<ComponentProps<typeof ShadowStatic>> = ({
  style,
  ...props
}) => {
  const staticStyle = useMemo(() => ({
    filter: `brightness(${random(0.75, 1.33, true)})`,
  }), [])

  const dynamicStyle = useMemo(() => ({
    translate: `${sample([-1 * random(2, 12), random(2, 12)])}px ${sample([-1 * random(2, 12), random(2, 12)])}px`,
    rotate: `${random(-2, 2, true)}deg`,
  }), [])

  return (
    <ShadowStatic
      style={{
        ...staticStyle,
        ...dynamicStyle,
        ...style,
      }}
      {...props}
    />
  )
}

const Container = stitches.styled('div', {
  ...paperCard.properties,
  position: 'relative',
})

export const PaperStack: FunctionComponent<ComponentProps<typeof Container>> = ({
  children,
  ...props
}) => (
  <Container {...props}>
    <ShadowRandom />
    <ShadowRandom />
    <ShadowRandom />
    <ShadowRandom />
    {children}
  </Container>
)
