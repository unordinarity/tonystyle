import React, { FunctionComponent } from 'react'

import { stitches } from 'src/shared/ui'

import { Header } from './header'
import { Footer } from './footer'
import { Settings } from 'src/templates/home/settings'

const globalStyles = stitches.globalCss({
  body: {
    backgroundColor: '#C20A1D'
  }
})

const HeaderWrapped = stitches.styled(Header, {
  position: 'fixed',
  top: 0,
  left: 0,
  minWidth: 320,
})

const SettingsWrapped = stitches.styled(Settings, {
  position: 'fixed',
  left: 0,
  top: '50%',
  minWidth: 320,
})

const FooterWrapped = stitches.styled(Footer, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  minWidth: 320,
})

const Container = stitches.styled('div', {
  width: '100%',
  height: '100%',

  padding: 80,

  backgroundColor: '#E80C22',
})

const Content = stitches.styled('main', {
  width: '100%',
  height: 5000,

  position: 'relative',
  zIndex: 1,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: '#191919'
})

export const Home: FunctionComponent = () => {
  globalStyles()

  return (
    <Container>
      <HeaderWrapped />
      <SettingsWrapped />
      <Content>
        <section className='section'>
          <h1>Hero</h1>
        </section>
        <section className='section'>
          <h1>About</h1>
        </section>
        <section className='section'>
          <h1>Experience</h1>
        </section>
        <section className='section'>
          <h1>Articles</h1>
        </section>
        <section className='section'>
          <h1>Projects</h1>
        </section>
        <section className='section'>
          <h1>Services</h1>
        </section>
        <section className='section'>
          <h1>Contacts</h1>
        </section>
      </Content>
      <FooterWrapped />
    </Container>
  )
}
