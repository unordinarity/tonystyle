import React, { FunctionComponent, useMemo } from 'react'
import { ComponentProps } from '@stitches/react'

import { stitches } from '../stitches'

const TearCardStatic = stitches.styled('div', {})

export const TearCard: FunctionComponent<ComponentProps<typeof TearCardStatic>> = ({
  ...props
}) => {
  const staticStyles = useMemo(() => ({
    clipPath: `polygon(${
      Array.from(new Array(20), () => [])
        .map(([x, y]) => `${x}% ${y}%`)
        .join(', ')
    })`,
  }), [])

  return <TearCardStatic {...props} />
}
