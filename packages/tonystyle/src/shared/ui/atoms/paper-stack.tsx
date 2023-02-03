import React, { FunctionComponent, useMemo } from 'react'
import { ComponentProps } from '@stitches/react'
import { random, sample } from 'lodash-es'

import { stitches } from '../stitches'

import { paperCard } from './paper-card'
import { useRenderingState } from '@tonystyle/react-ssr-helpers'

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
  const renderingState = useRenderingState()

  const staticStyle = useMemo(
    () => (
      renderingState === 'subsequent-client-render' ? {
        filter: `brightness(${random(0.75, 1.33, true)})`,
      } : {}
    ),
    [renderingState],
  )

  const dynamicStyle = useMemo(
    () => (
      renderingState === 'subsequent-client-render' ? {
        translate: `${sample([-1 * random(2, 12), random(2, 12)])}px ${sample([-1 * random(2, 12), random(2, 12)])}px`,
        rotate: `${random(-2, 2, true)}deg`,
      } : {}),
    [renderingState],
  )

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
