import React, { ComponentProps, FunctionComponent } from 'react'
import { Link } from 'gatsby'
import { stitches } from '@frontend-church/ui'
import clsx from 'clsx'

const LinkStyled = stitches.styled(Link, {
  color: '$textLatent',
  textDecoration: 'none',
})

const linkStyledActive = stitches.css({
  color: '$textActive',
}).className

type Props = ComponentProps<typeof LinkStyled>

export const GatsbyLinkStyled: FunctionComponent<Props> = ({
  activeClassName,
  ...props
}) => {
  return (
    <LinkStyled
      as={Link}
      partiallyActive={true}
      activeClassName={clsx(linkStyledActive, activeClassName)}
      {...props}
    />
  )
}
