import React, { ComponentProps, FunctionComponent } from 'react'
import { mdiBookOpenPageVariantOutline, mdiFloppy, mdiGlasses } from '@mdi/js'

import { stitches } from 'src/shared/ui'

import { navigation } from './navigation'

const TitleWrapped = stitches.styled(navigation.Point, {
  position: 'relative',
  zIndex: '1'
})

export const Header: FunctionComponent<ComponentProps<typeof navigation.Container>> = (props) => (
  <navigation.Container {...props}>
    <TitleWrapped size='l'>
      Tony.Style
    </TitleWrapped>
    <navigation.Point iconBefore={mdiGlasses}>
      About
    </navigation.Point>
    <navigation.Point iconBefore={mdiBookOpenPageVariantOutline}>
      Articles
    </navigation.Point>
    <navigation.Point iconBefore={mdiFloppy}>
      Projects
    </navigation.Point>
  </navigation.Container>
)
