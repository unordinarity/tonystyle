import React, { FunctionComponent } from 'react'

import { FooterEmpty } from '../../shared/components/footer-empty'

interface Props {
  children?: never,
}

export const FooterFilled: FunctionComponent<Props> = () => (
  <FooterEmpty>
    Copyright
  </FooterEmpty>
)