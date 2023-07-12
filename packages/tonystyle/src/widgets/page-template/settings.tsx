import React, { ComponentProps, FunctionComponent } from 'react'
import { mdiLightbulbOutline, mdiTranslate } from '@mdi/js'
import { useStore } from 'effector-react'

import { PaperMenu } from '@tonystyle/ui'

import { ColorScheme } from 'src/entities/static/color-scheme'

export const Settings: FunctionComponent<ComponentProps<typeof PaperMenu.Container>> = (props) => {
  const colorSchemeValue = useStore(ColorScheme.store)

  return (
    <PaperMenu.Container {...props}>
      <PaperMenu.PointButton
        onClick={() => {
          ColorScheme.set({
            'dark': 'dark-dimmed',
            'dark-dimmed': 'light',
            'light': 'light-dimmed',
            'light-dimmed': 'dark',
          }[colorSchemeValue] as ColorScheme.Model)
        }}>
        <PaperMenu.Icon path={mdiLightbulbOutline} />
        <PaperMenu.Text>
          Colors
          <PaperMenu.Tip>Too much red?</PaperMenu.Tip>
        </PaperMenu.Text>
      </PaperMenu.PointButton>
      <PaperMenu.PointButton>
        <PaperMenu.Icon path={mdiTranslate} />
        <PaperMenu.Text>
          Language
          <PaperMenu.Tip>English / Русский</PaperMenu.Tip>
        </PaperMenu.Text>
      </PaperMenu.PointButton>
    </PaperMenu.Container>
  )
}
