import React, { ComponentProps, FunctionComponent } from 'react'
import {
  mdiBookOpenPageVariantOutline,
  mdiCoffeeOutline,
  mdiDevices,
  mdiFloppy,
  mdiHammerWrench,
  mdiRocketLaunchOutline,
} from '@mdi/js'

import { Menu } from 'src/shared/ui'

export const Header: FunctionComponent<ComponentProps<typeof Menu.Container>> = (props) => (
  <Menu.Container {...props}>
    <Menu.PointAnchor size='large' to='/'>
      <Menu.Text>Tony.Style</Menu.Text>
    </Menu.PointAnchor>
    <Menu.PointAnchor to='/blog'>
      <Menu.Icon path={mdiBookOpenPageVariantOutline} />
      <Menu.Text>Blog</Menu.Text>
    </Menu.PointAnchor>
    <Menu.PointAnchor to='/projects'>
      <Menu.Icon path={mdiFloppy} />
      <Menu.Text>Projects</Menu.Text>
    </Menu.PointAnchor>
    <Menu.PointAnchor to='/services'>
      <Menu.Icon path={mdiHammerWrench} />
      <Menu.Text>Services</Menu.Text>
    </Menu.PointAnchor>
    <Menu.PointAnchor to='/experience'>
      <Menu.Icon path={mdiRocketLaunchOutline} />
      <Menu.Text>Experience</Menu.Text>
    </Menu.PointAnchor>
    <Menu.PointAnchor to='/uses'>
      <Menu.Icon path={mdiDevices} />
      <Menu.Text>
        Uses
        <Menu.Tip>Work setup, IDE...</Menu.Tip>
      </Menu.Text>
    </Menu.PointAnchor>
    <Menu.PointAnchor to='/about-me'>
      <Menu.Icon path={mdiCoffeeOutline} />
      <Menu.Text>About me</Menu.Text>
    </Menu.PointAnchor>
  </Menu.Container>
)
