import { FunctionComponent } from 'react'

import { FooterEmpty } from '../../shared/ui/footer-empty'

interface Props {
  children?: never,
}

export const FooterFilled: FunctionComponent<Props> = () => (
  <FooterEmpty>
    Copyright
  </FooterEmpty>
)
