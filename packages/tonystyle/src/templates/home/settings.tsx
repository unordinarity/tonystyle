import React, { ComponentProps, FunctionComponent } from 'react'
import { navigation } from 'src/templates/home/navigation'
import { mdiLightbulbOutline, mdiTranslate } from '@mdi/js'

export const Settings: FunctionComponent<ComponentProps<typeof navigation.Container>> = props => (
  <navigation.Container {...props}>
    <navigation.Point iconBefore={mdiLightbulbOutline}>
      Colors
    </navigation.Point>
    <navigation.Point iconBefore={mdiTranslate}>
      Language
    </navigation.Point>
  </navigation.Container>
)
