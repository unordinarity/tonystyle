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

export const Header: FunctionComponent<ComponentProps<typeof Menu.Section>> = (props) => (
  <Menu.Section {...props}>
    <Menu.Anchor size='large' to='/' text='Tony.Style' />
    <Menu.Anchor to='/blog' icon={mdiBookOpenPageVariantOutline} text='Articles' />
    <Menu.Anchor to='/projects' icon={mdiFloppy} text='Projects' />
    <Menu.Anchor to='/services' icon={mdiHammerWrench} text='Services' />
    <Menu.Anchor to='/resume' icon={mdiRocketLaunchOutline} text='Experience' />
    <Menu.Anchor to='/uses' icon={mdiDevices} text='Uses' tip='Work setup, IDE...' />
    <Menu.Anchor to='/personal' icon={mdiCoffeeOutline} text='Personal' />
  </Menu.Section>
)
