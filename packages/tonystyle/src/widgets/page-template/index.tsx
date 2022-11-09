import React, { ComponentProps, FunctionComponent } from 'react'

import { stitches } from 'src/shared/ui'

import { Header } from './header'
import { Footer } from './footer'
import { Settings } from './settings'

const Container = stitches.styled('div', {
  width: '100%',
  height: '100%',
  position: 'relative',

  display: 'flex',
  justifyContent: 'center',

  $$sizePadding: '24px',
  $$sizeGap: '48px',
  $$sizeSidebar: '240px'
})

const FirstSide = stitches.styled('div', {
  position: 'fixed',
  insetInlineStart: '$$sizePadding',
  insetBlock: '$$sizePadding',
  inlineSize: '$$sizeSidebar',

  display: 'grid',
  gridTemplateAreas: '"header" "." "settings" "."',
  gridTemplateRows: 'auto 4fr auto 3fr',
})

const LastSide = stitches.styled('div', {
  position: 'fixed',
  insetInlineEnd: '$$sizePadding',
  insetBlock: '$$sizePadding',
  inlineSize: '$$sizeSidebar',

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
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  variants: {
    size: {
      limited: {
        flexBasis: 'calc(100% - $$sizeSidebar * 2 - $$sizePadding * 2 - $$sizeGap * 2)',
        height: 'calc(100% - $$sizePadding * 2)',
      },
      expanded: {
        flexBasis: 'calc(100% - $$sizeSidebar - $$sizePadding * 2)',
        height: 'calc(100% - $$sizePadding * 2)',
      },
      framed: {
        flexBasis: 'calc(100% - $$sizePadding * 2)',
        height: 'calc(100% - $$sizePadding * 2)',
      },
      full: {
        flexBasis: '100%',
        height: '100%',
      }
    }
  },
  defaultVariants: {
    size: 'limited'
  }
})

export const PageTemplate: FunctionComponent<ComponentProps<typeof Container>> = ({
  children,
  ...props
}) => (
  <Container {...props}>
    <Content>
      {children}
    </Content>
    <FirstSide>
      <HeaderStyled />
      <SettingsStyled />
    </FirstSide>
    <LastSide>
      <FooterStyled />
    </LastSide>
  </Container>
)
