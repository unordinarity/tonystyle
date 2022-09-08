import React, { ComponentProps, FunctionComponent } from 'react'
import { mdiGithub, mdiInstagram, mdiLinkedin, mdiMail, mdiTwitter } from '@mdi/js'

import { stitches } from 'src/shared/ui'

import { navigation } from './navigation'

const PointReversed = stitches.styled(navigation.Point, {
  flexDirection: 'row-reverse'
})

export const Footer: FunctionComponent<ComponentProps<typeof navigation.Container>> = (props) => (
  <navigation.Container {...props}>
    <PointReversed iconBefore={mdiTwitter}>
      Twitter
    </PointReversed>
    <PointReversed iconBefore={mdiGithub}>
      Github
    </PointReversed>
    <PointReversed iconBefore={mdiInstagram}>
      Instagram
    </PointReversed>
    <PointReversed iconBefore={mdiLinkedin}>
      LinkedIn
    </PointReversed>
    <PointReversed iconBefore={mdiMail}>
      Mail
    </PointReversed>
    <PointReversed size='l'>
      Contacts
    </PointReversed>
  </navigation.Container>
)
