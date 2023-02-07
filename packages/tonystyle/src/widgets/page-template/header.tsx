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
import { pages } from 'src/pages'

export const Header: FunctionComponent<ComponentProps<typeof Menu.Container>> = (props) => (
  <Menu.Container {...props}>
    <Menu.PointAnchor size='large' to={pages.home.route}>
      <Menu.Text>Tony.Style</Menu.Text>
    </Menu.PointAnchor>
    <Menu.PointAnchor to={pages.blogHome.route}>
      <Menu.Icon path={mdiBookOpenPageVariantOutline} />
      <Menu.Text>Blog</Menu.Text>
    </Menu.PointAnchor>
    <Menu.PointAnchor to={pages.projects.route}>
      <Menu.Icon path={mdiFloppy} />
      <Menu.Text>Projects</Menu.Text>
    </Menu.PointAnchor>
    <Menu.PointAnchor to={pages.services.route}>
      <Menu.Icon path={mdiHammerWrench} />
      <Menu.Text>Services</Menu.Text>
    </Menu.PointAnchor>
    <Menu.PointAnchor to={pages.experience.route}>
      <Menu.Icon path={mdiRocketLaunchOutline} />
      <Menu.Text>Experience</Menu.Text>
    </Menu.PointAnchor>
    <Menu.PointAnchor to={pages.uses.route}>
      <Menu.Icon path={mdiDevices} />
      <Menu.Text>
        Uses
        <Menu.Tip>Work setup, IDE...</Menu.Tip>
      </Menu.Text>
    </Menu.PointAnchor>
    <Menu.PointAnchor to={pages.about.route}>
      <Menu.Icon path={mdiCoffeeOutline} />
      <Menu.Text>About me</Menu.Text>
    </Menu.PointAnchor>
  </Menu.Container>
)
