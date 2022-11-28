import React, { ComponentPropsWithoutRef, FunctionComponent } from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'

interface Props extends ComponentPropsWithoutRef<typeof Link> {
}

export const UniversalLink: FunctionComponent<Props> = ({
  to,
  activeClassName,
  activeStyle,
  partiallyActive,
  replace,
  state,
  ...props
}) => {
  const location = useLocation()
  const isRelative = location.origin === new URL(to, location.href).origin

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
