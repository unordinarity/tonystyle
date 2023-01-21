import React, { ComponentProps, FunctionComponent } from 'react'

import { Menu } from 'src/shared/ui'
import { SocialLink } from 'src/entities/static/social-link'

export const Footer: FunctionComponent<ComponentProps<typeof Menu.Container>> = (props) => (
  <Menu.Container {...props}>
    {SocialLink.list.map(link => (
      <Menu.PointAnchor
        key={link.label}
        to={link.url}
        target='_blank'>
        <Menu.Text>{link.label}</Menu.Text>
        <Menu.Icon path={link.icon} />
      </Menu.PointAnchor>
    ))}
    <Menu.Point size='large'>
      <Menu.Text>Contacts</Menu.Text>
    </Menu.Point>
  </Menu.Container>
)
