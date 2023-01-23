import React, { ComponentProps, FunctionComponent } from 'react'
import { mdiLightbulbOutline, mdiTranslate } from '@mdi/js'
import { useStore } from 'effector-react'

import { Menu } from 'src/shared/ui'

import { ColorScheme } from 'src/entities/static/color-scheme'

export const Settings: FunctionComponent<ComponentProps<typeof Menu.Container>> = (props) => {
  const colorSchemeValue = useStore(ColorScheme.store)

  return (
    <Menu.Container {...props}>
      <Menu.PointButton
        onClick={() => {
          ColorScheme.set({
            'dark': 'dark-dimmed',
            'dark-dimmed': 'light',
            'light': 'light-dimmed',
            'light-dimmed': 'dark',
          }[colorSchemeValue] as ColorScheme.Model)
        }}>
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
}
