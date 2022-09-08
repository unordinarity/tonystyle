import React, { ComponentProps, FunctionComponent } from 'react'
import { mdiLightbulbOutline, mdiTranslate } from '@mdi/js'

import { Menu } from 'src/shared/ui'

export const Settings: FunctionComponent<ComponentProps<typeof Menu.Section>> = (props) => (
  <Menu.Section {...props}>
    <Menu.Button icon={mdiLightbulbOutline} text='Colors' tip='Too much red?' />
    <Menu.Button icon={mdiTranslate} text='Language' tip='Русские есть?' />
  </Menu.Section>
)
