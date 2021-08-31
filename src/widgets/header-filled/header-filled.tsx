import React, { FunctionComponent } from 'react'

import { HeaderEmpty } from '../../shared/ui/header-empty'
import { Logo } from '../../shared/ui/logo/logo'

export const HeaderFilled: FunctionComponent = () => (
  <HeaderEmpty
    center={(
      <Logo />
    )}
  />
)
