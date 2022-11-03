import React, { ComponentProps, FunctionComponent } from 'react'

import { stitches } from 'src/shared/ui'

import { Header } from './header'
import { Footer } from './footer'
import { Settings } from './settings'

const Container = stitches.styled('div', {
  width: '100%',
  height: '100%',

  backgroundColor: '$primaryBack',
})

const FirstSide = stitches.styled('div', {
  position: 'fixed',
  top: '24px',
  left: '24px',
  bottom: '24px',
  display: 'grid',
  gridTemplateAreas: '"header" "." "settings" "."',
  gridTemplateRows: 'auto 4fr auto 3fr',
})

const LastSide = stitches.styled('div', {
  position: 'fixed',
  top: '24px',
  right: '24px',
  bottom: '24px',
  display: 'grid',
  gridTemplateAreas: '"." "footer"',
  gridTemplateRows: '1fr auto',
})

const HeaderStyled = stitches.styled(Header, {
  gridArea: 'header',
})

const SettingsStyled = stitches.styled(Settings, {
  gridArea: 'settings',
})

const FooterStyled = stitches.styled(Footer, {
  gridArea: 'footer',
})

const Content = stitches.styled('main', {
  width: '100%',
  minHeight: '100%',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const PageTemplate: FunctionComponent<ComponentProps<typeof Container>> = ({
  children,
  ...props
}) => (
  <Container {...props}>
    <FirstSide>
      <HeaderStyled />
      <SettingsStyled />
    </FirstSide>
    <LastSide>
      <FooterStyled />
    </LastSide>
    <Content>
      {children}
    </Content>
  </Container>
)
