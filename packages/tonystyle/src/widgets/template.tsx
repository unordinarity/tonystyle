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

import { stitches, Logo, footer, header } from 'src/shared/ui'

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
        <button><Icon path={mdiWeatherNight} size="32px" /></button>
        <button><Icon path={mdiTranslate} size="32px" /></button>
        <button><Icon path={mdiTwitter} size="32px" /></button>
        <button><Icon path={mdiGithub} size="32px" /></button>
        <button><Icon path={mdiInstagram} size="32px" /></button>
        <button><Icon path={mdiRss} size="32px" /></button>
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
