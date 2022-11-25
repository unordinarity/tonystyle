import React, { ComponentProps, FunctionComponent } from 'react'
import { mdiLightbulbOutline, mdiTranslate } from '@mdi/js'

import { Menu } from 'src/shared/ui'

export const Settings: FunctionComponent<ComponentProps<typeof Menu.Container>> = (props) => (
  <Menu.Container {...props}>
    <Menu.PointButton>
      <Menu.Icon path={mdiLightbulbOutline} />
      <Menu.Text>
        Colors
        <Menu.Tip>Too much red?</Menu.Tip>
      </Menu.Text>
    </Menu.PointButton>
    <Menu.PointButton>
      <Menu.Icon path={mdiTranslate} />
      <Menu.Text>
        Language
        <Menu.Tip>English / Русский</Menu.Tip>
      </Menu.Text>
    </Menu.PointButton>
  </Menu.Container>
)
