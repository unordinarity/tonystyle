import { FunctionComponent } from 'react'
import { Link, LinkProps } from 'atomic-router-react'

export const UniversalLink: FunctionComponent<LinkProps<any>> = ({
  ...props
}) => (
  <Link
    {...props}
  />
)
