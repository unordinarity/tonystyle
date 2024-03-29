import React, { FunctionComponent, ReactNode, useMemo } from 'react'
import { ComponentProps } from '@stitches/react'
import { random, sample } from 'lodash-es'

import { stitches } from '../stitches'
import { useRenderingState } from '@tonystyle/react-ssr-helpers'

const Container = stitches.styled('div', {
  position: 'relative',
  padding: '16px',
})

const Shadow = stitches.styled('div', {
  position: 'absolute',
  inset: '8px',
  border: '1px solid $colors$primaryContent',
  zIndex: -1,
})

const ShadowRandom: FunctionComponent<ComponentProps<typeof Shadow>> = ({
  style,
  ...props
}) => {
  const renderingState = useRenderingState()
  const dynamicStyle = useMemo(
    () => (
      renderingState === 'subsequent-client-render' ? {
        translate: `${sample([-1 * random(2, 4), random(2, 4)])}px ${sample([-1 * random(2, 4), random(2, 4)])}px`,
        rotate: `${random(-1, 1, true)}deg`,
      } : {}
    ),
    [renderingState],
  )

  return (
    <Shadow
      style={{
        ...dynamicStyle,
        ...style,
      }}
      {...props}
    />
  )
}

export const DrawnFrame: FunctionComponent<{ children?: ReactNode }> = ({
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
