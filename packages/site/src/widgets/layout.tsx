import React, { FunctionComponent, PropsWithChildren } from 'react'
import { stitches } from '@frontend-church/ui'
import { Link } from 'gatsby'
import { GatsbyLinkStyled } from '../shared/gatsby-link-styled'

const Menu = stitches.styled('div', {
  height: '64px',
  paddingInline: '32px',
  flexShrink: '0',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  backgroundColor: '$surface',
})

const MenuSection = stitches.styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
})

const Main = stitches.styled('main', {
  width: '100%',
  maxWidth: '1200px',
  alignSelf: 'center',

  paddingInline: '32px',
  paddingBlock: '32px',
  flexGrow: '1',
})

export const Layout: FunctionComponent<PropsWithChildren> = ({
  children
}) => (
  <>
    <Menu as='header'>
      <MenuSection>
        <GatsbyLinkStyled to='/'>Frontend.Church</GatsbyLinkStyled>
      </MenuSection>
      <MenuSection>
        <GatsbyLinkStyled to='/articles'>Blog</GatsbyLinkStyled>
        <GatsbyLinkStyled to='/about-me'>About me</GatsbyLinkStyled>
        <GatsbyLinkStyled to='/experience'>Experience</GatsbyLinkStyled>
        <GatsbyLinkStyled to='/uses'>/uses</GatsbyLinkStyled>
        <GatsbyLinkStyled to='/services'>Services</GatsbyLinkStyled>
        <GatsbyLinkStyled to='/projects'>Projects</GatsbyLinkStyled>
      </MenuSection>
    </Menu>
    <Main>
      {children}
    </Main>
    <Menu as='footer'>
      <GatsbyLinkStyled to='/'>Frontend.Church</GatsbyLinkStyled>
    </Menu>
  </>
)
