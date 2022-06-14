import React, { FunctionComponent } from 'react'
import clsx from 'clsx'
import { Icon } from '@mdi/react'
import { mdiSunglasses } from '@mdi/js'

import { stitches } from '../stitches'

interface Props {
  className?: string,
}

const spinnerAnimation = stitches.keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(calc(3 * 360deg))',
  },
})

const spinnerClassName = stitches.css({
  color: 'white',
  animationDirection: 'normal',
  animationDuration: '1s',
  animationFillMode: 'forwards',
  animationIterationCount: 'infinite',
  animationName: spinnerAnimation.name,
  animationTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)',
})

export const Spinner: FunctionComponent<Props> = ({
  className,
}) => (
  <Icon
    path={mdiSunglasses}
    className={clsx(spinnerClassName, className)}
    size={64}
  />
)
