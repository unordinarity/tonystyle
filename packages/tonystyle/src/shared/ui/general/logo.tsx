import React, { ComponentProps, FunctionComponent } from 'react'

import { stitches } from '../stitches'

const LogoTemplate = stitches.styled('div', {
  maxWidth: '100%',
  height: '100%'
})

export const Logo: FunctionComponent<ComponentProps<typeof LogoTemplate>> = ({
  children,
  ...props
}) => (
  <LogoTemplate {...props}>
    Tony.Style
  </LogoTemplate>
)
