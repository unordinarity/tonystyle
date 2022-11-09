import React, { ComponentProps, FunctionComponent } from 'react'
import { VariantProps } from '@stitches/react'

import { stitches } from 'src/shared/ui'

import { Header } from './header'
import { Footer } from './footer'
import { Settings } from './settings'

const Container = stitches.styled('div', {
  width: '100%',
  height: '100%',
  position: 'relative',

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
  variants: {
    layoutHorizontal: {
      limited: {
        marginInline: 'calc($$sizeSidebar + $$sizePadding + $$sizeGap)',
        inlineSize: 'calc(100% - $$sizeSidebar * 2 - $$sizePadding * 2 - $$sizeGap * 2)',
      },
      expanded: {
        marginInline: 'calc($$sizeSidebar / 2 + $$sizePadding)',
        inlineSize: 'calc(100% - $$sizeSidebar - $$sizePadding * 2)',
      },
      framed: {
        marginInline: 'calc($$sizePadding)',
        inlineSize: 'calc(100% - $$sizePadding * 2)',
      },
      full: {
        marginInline: 0,
        inlineSize: '100%',
      },
    },
    layoutVertical: {
      framed: {
        marginBlock: 'calc($$sizePadding)',
        blockSize: 'calc(100% - $$sizePadding * 2)',
      },
      full: {
        marginBlock: 0,
        height: '100%',
      },
    },
  },
  defaultVariants: {
    layoutHorizontal: 'limited',
    layoutVertical: 'framed',
  },
})

type Props = ComponentProps<typeof Container> & VariantProps<typeof Content>

export const PageTemplate: FunctionComponent<Props> = ({
  children,
  layoutHorizontal,
  layoutVertical,
  ...props
}) => (
  <Container {...props}>
    <Content layoutHorizontal={layoutHorizontal} layoutVertical={layoutVertical}>
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
