import React, { FunctionComponent } from 'react'
import { Icon } from '@mdi/react'
import { mdiGithub, mdiInstagram, mdiRss, mdiTranslate, mdiTwitter, mdiWeatherNight } from '@mdi/js'

import { Button, header, Logo } from 'src/shared/ui'

export const Header: FunctionComponent = () => (
  <header.Container>
    <header.Side>
      Menu
    </header.Side>
    <header.Center>
      <Logo />
    </header.Center>
    <header.Side>
      <Button><Icon path={mdiWeatherNight} size="32px" /></Button>
      <Button><Icon path={mdiTranslate} size="32px" /></Button>
      <Button><Icon path={mdiTwitter} size="32px" /></Button>
      <Button><Icon path={mdiGithub} size="32px" /></Button>
      <Button><Icon path={mdiInstagram} size="32px" /></Button>
      <Button><Icon path={mdiRss} size="32px" /></Button>
    </header.Side>
  </header.Container>
)
