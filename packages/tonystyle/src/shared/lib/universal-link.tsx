import React, { ComponentPropsWithoutRef, FunctionComponent } from 'react'
import { Link } from 'gatsby'
import isRelativeUrl from 'is-relative-url'

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
  const isRelative = isRelativeUrl(to)

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
