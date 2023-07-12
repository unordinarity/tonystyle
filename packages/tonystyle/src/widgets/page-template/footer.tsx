import React, { ComponentProps, FunctionComponent } from 'react'

import { PaperMenu } from '@tonystyle/ui'

import { SocialLink } from 'src/entities/static/social-link'

export const Footer: FunctionComponent<ComponentProps<typeof PaperMenu.Container>> = (props) => (
  <PaperMenu.Container {...props}>
    {SocialLink.list.map(link => (
      <PaperMenu.PointAnchor
        key={link.label}
        to={link.url}
        target='_blank'>
        <PaperMenu.Text>{link.label}</PaperMenu.Text>
        <PaperMenu.Icon path={link.icon} />
      </PaperMenu.PointAnchor>
    ))}
    <PaperMenu.Point size='large'>
      <PaperMenu.Text>Contacts</PaperMenu.Text>
    </PaperMenu.Point>
  </PaperMenu.Container>
)
