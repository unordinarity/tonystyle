import React, { ComponentPropsWithoutRef, FunctionComponent } from 'react'
import { Link } from 'gatsby'

interface Props extends ComponentPropsWithoutRef<typeof Link> {}

export const Anchor: FunctionComponent<Props> = ({
  to,
  activeClassName,
  activeStyle,
  partiallyActive,
  replace,
  state,
  ...props
}) => {
  const isRelative = new URL(document.baseURI).origin === new URL(to, document.baseURI).origin

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
