import React, { ComponentProps, FunctionComponent } from 'react'
import { Icon } from '@mdi/react'
import { mdiSunglasses } from '@mdi/js'

import { stitches } from '../stitches'

const spinnerAnimation = stitches.keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(calc(3 * 360deg))',
  },
})

export const SpinnerIcon = stitches.styled(Icon, {
  color: 'white',
  animationDirection: 'normal',
  animationDuration: '1s',
  animationFillMode: 'forwards',
  animationIterationCount: 'infinite',
  animationName: `${spinnerAnimation}`,
  animationTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)',
})

export const Spinner: FunctionComponent<ComponentProps<typeof Icon>> = ({
  path = mdiSunglasses,
  size = 64,
  ...props
}) => (
  <SpinnerIcon
    path={path}
    size={size}
    {...props}
  />
)
