import React, { ComponentProps, FunctionComponent } from 'react'

import { Menu } from 'src/shared/ui'
import { SocialLink } from 'src/entities/static/social-link'

export const Footer: FunctionComponent<ComponentProps<typeof Menu.Section>> = (props) => (
  <Menu.Section {...props}>
    {SocialLink.list.map(link => (
      <Menu.Anchor
        key={link.title}
        to={link.url}
        target='_blank'
        icon={link.icon}
        text={link.title}
        direction='reversed'
      />
    ))}
    <Menu.Button size='large' text='Contacts' />
  </Menu.Section>
)
