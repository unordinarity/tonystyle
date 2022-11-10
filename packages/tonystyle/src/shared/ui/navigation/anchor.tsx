import React, { ComponentPropsWithoutRef, FunctionComponent } from 'react'
import { Link } from 'gatsby'

import { stitches } from 'src/shared/ui/stitches'

interface Props extends ComponentPropsWithoutRef<typeof Link> {}

const AnchorUnstyled: FunctionComponent<Props> = ({
  to,
  activeClassName,
  activeStyle,
  partiallyActive,
  replace,
  state,
  ...props
}) => {
  const isRelative = new URL(document.baseURI).origin === new URL(to, document.baseURI).origin;

  return (isRelative ? (
    <Link
      to={to}
      activeClassName={activeClassName}
      activeStyle={activeStyle}
      partiallyActive={partiallyActive}
      replace={replace}
      state={state}
      {...props}
    />
  ) : (
    <a href={to}
      {...props}
    />
  ))
}

export const Anchor = stitches.styled(AnchorUnstyled, {

})
