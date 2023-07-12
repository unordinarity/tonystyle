import React, { ComponentProps, FunctionComponent } from 'react'
import {
  mdiBookOpenPageVariantOutline,
  mdiCoffeeOutline,
  mdiDevices,
  mdiFloppy,
  mdiHammerWrench,
  mdiRocketLaunchOutline,
} from '@mdi/js'

import { PaperMenu } from '@tonystyle/ui'
import { pages } from 'src/pages'

export const Header: FunctionComponent<ComponentProps<typeof PaperMenu.Container>> = (props) => (
  <PaperMenu.Container {...props}>
    <PaperMenu.PointAnchor size='large' to={pages.home.route}>
      <PaperMenu.Text>Tony.Style</PaperMenu.Text>
    </PaperMenu.PointAnchor>
    <PaperMenu.PointAnchor to={pages.blogHome.route}>
      <PaperMenu.Icon path={mdiBookOpenPageVariantOutline} />
      <PaperMenu.Text>Blog</PaperMenu.Text>
    </PaperMenu.PointAnchor>
    <PaperMenu.PointAnchor to={pages.projects.route}>
      <PaperMenu.Icon path={mdiFloppy} />
      <PaperMenu.Text>Projects</PaperMenu.Text>
    </PaperMenu.PointAnchor>
    <PaperMenu.PointAnchor to={pages.services.route}>
      <PaperMenu.Icon path={mdiHammerWrench} />
      <PaperMenu.Text>Services</PaperMenu.Text>
    </PaperMenu.PointAnchor>
    <PaperMenu.PointAnchor to={pages.experience.route}>
      <PaperMenu.Icon path={mdiRocketLaunchOutline} />
      <PaperMenu.Text>Experience</PaperMenu.Text>
    </PaperMenu.PointAnchor>
    <PaperMenu.PointAnchor to={pages.uses.route}>
      <PaperMenu.Icon path={mdiDevices} />
      <PaperMenu.Text>
        Uses
        <PaperMenu.Tip>Work setup, IDE...</PaperMenu.Tip>
      </PaperMenu.Text>
    </PaperMenu.PointAnchor>
    <PaperMenu.PointAnchor to={pages.about.route}>
      <PaperMenu.Icon path={mdiCoffeeOutline} />
      <PaperMenu.Text>About me</PaperMenu.Text>
    </PaperMenu.PointAnchor>
  </PaperMenu.Container>
)
