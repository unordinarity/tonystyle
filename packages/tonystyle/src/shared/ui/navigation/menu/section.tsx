import React, { ComponentProps, FunctionComponent, useMemo } from 'react'
import { random, sample } from 'lodash-es'

import { stitches } from 'src/shared/ui/stitches'

const Container = stitches.styled('div', {
  position: 'relative',

  backgroundColor: '$secondarySurface',
  color: '$secondaryContent',
  boxShadow: '0 0 8px -4px $colors$primaryBack',
})

const Shadow = stitches.styled('div', {
  position: 'absolute',
  inset: '0',
  zIndex: '-1',

  boxShadow: '0 0 8px 0 $colors$primaryBack',

  transitionProperty: 'translate, rotate',
})

const ShadowAnimated: FunctionComponent<ComponentProps<typeof Shadow>> = ({
  style,
  ...props
}) => {
  const stylePatch = useMemo(() => stitches.css({
    translate: `${random(-8, 8, false)}px ${random(-8, 8, false)}px`,
    rotate: `${random(-3, 3, true)}deg`,
    backgroundColor: sample(['$secondaryBack', '$secondarySurface', '$secondaryOverlay'])
  }), [])

  return (
    <Shadow
      className={stylePatch()}
      style={{
        ...style,
      }}
      {...props}
    />
  )
}

export const Section: FunctionComponent<ComponentProps<typeof Container>> = ({
  children,
  ...props
}) => (
  <Container {...props}>
    <ShadowAnimated />
    <ShadowAnimated />
    <ShadowAnimated />
    <ShadowAnimated />
    {children}
  </Container>
)
