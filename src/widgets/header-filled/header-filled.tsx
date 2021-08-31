import React, { FunctionComponent } from 'react'

import { HeaderEmpty } from '../../shared/ui/header-empty'
import { Logo } from '../../shared/ui/logo/logo'

interface Props {
  children?: never,
}

export const HeaderFilled: FunctionComponent<Props> = () => (
  <HeaderEmpty
    center={(
      <Logo />
    )}
  />
)
