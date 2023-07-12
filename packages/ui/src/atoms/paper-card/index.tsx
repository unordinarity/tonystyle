import React, { FunctionComponent, useMemo } from 'react'
import { ComponentProps } from '@stitches/react'
import { random, sample } from 'lodash-es'

import { stitches } from '../../stitches'

import paperBackground from './paper.png'

// single card

const Single = stitches.styled('div', {
  backgroundImage: `url(${paperBackground})`,
  backgroundBlendMode: 'multiply',
  backgroundColor: '$secondarySurface',
  color: '$secondaryContent',
  boxShadow: '0 0 8px -4px $colors$primaryBack',
  border: '0.5px solid $secondaryBack',
})

// stack of cards

const StackShadowStatic = stitches.styled(Single, {
  position: 'absolute',
  inset: '0',
  zIndex: -1,

  translate: '0 0',
  rotate: '0',
})

const StackShadowRandom: FunctionComponent<ComponentProps<typeof StackShadowStatic>> = ({
  style,
  ...props
}) => {
  const randomStyle = useMemo(() => ({
    filter: `brightness(${random(0.75, 1.33, true)})`,
    translate: `${sample([-1 * random(2, 12), random(2, 12)])}px ${sample([-1 * random(2, 12), random(2, 12)])}px`,
    rotate: `${random(-2, 2, true)}deg`,
  }), [])

  return (
    <StackShadowStatic
      style={{
        ...randomStyle,
        ...style,
      }}
      {...props}
    />
  )
}

const StackContainer = stitches.styled(Single, {
  position: 'relative',
})

const Stack: FunctionComponent<ComponentProps<typeof StackContainer>> = ({
  children,
  ...props
}) => (
  <StackContainer {...props}>
    <StackShadowRandom />
    <StackShadowRandom />
    <StackShadowRandom />
    <StackShadowRandom />
    {children}
  </StackContainer>
)

//

export const PaperCard = {
  Single,
  Stack,
}
