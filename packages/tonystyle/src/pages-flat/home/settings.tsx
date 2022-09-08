import React, { ComponentProps, FunctionComponent } from 'react'
import { mdiLightbulbOutline, mdiTranslate } from '@mdi/js'

import { navigation } from './navigation'

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
