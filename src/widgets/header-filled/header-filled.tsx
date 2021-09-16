import React, { FunctionComponent } from 'react'

import { HeaderEmpty } from '../../shared/components/header-empty'
import { Logo } from '../../shared/components/logo/logo'

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
