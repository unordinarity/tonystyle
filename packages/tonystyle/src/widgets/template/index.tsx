import React, { FunctionComponent, ReactNode } from 'react'
import Icon from '@mdi/react'
import {
  mdiGithub,
  mdiInstagram,
  mdiRss,
  mdiTranslate,
  mdiTwitter,
  mdiWeatherNight,
} from '@mdi/js'

import { stitches, Logo, footer, header, Button } from 'src/shared/ui'

import './reset.css'
import './reset-patch.css'
import './reset-spa.css'

const Container = stitches.styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
})

const Content = stitches.styled('main', {
  flexGrow: '1',
  maxWidth: '1200px',
  display: 'flex',
  flexDirection: 'column',
})

interface Props {
  children?: ReactNode
}

export const Template: FunctionComponent<Props> = ({
  children,
}) => (
  <Container>
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
    <Content>
      {children}
    </Content>
    <footer.Container>
      <footer.Point>About me</footer.Point>
      <footer.Point>Services</footer.Point>
      <footer.Point>Experience</footer.Point>
      <footer.Point>Articles</footer.Point>
      <footer.Point>Projects</footer.Point>
      <footer.Point>Personal</footer.Point>
    </footer.Container>
  </Container>
)
