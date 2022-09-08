import React, { FunctionComponent } from 'react'

import { stitches } from 'src/shared/ui'

import { Header } from './header'
import { Footer } from './footer'
import { Settings } from './settings'

import { } from 'src/entities/static/color-scheme'

//

const Container = stitches.styled('div', {
  width: '100%',
  minHeight: '100%',

  position: 'relative',

  backgroundColor: '$primaryBack'
})

const Layer = stitches.styled('div', {})

//

const LayerBack = stitches.styled('div', {
  position: 'fixed',
  inset: 0,

  display: 'grid',
  gridTemplateAreas: [
    'h . .',
    '. . .',
    's . .',
    '. . .',
    '. . f'
  ].map(elem => `"${elem}"`).join(' '),
  gridTemplateColumns: 'auto 1fr auto',
  gridTemplateRows: 'auto 1fr auto 4fr auto',
})

const LayerBackHeader = stitches.styled(Header, {
  gridArea: 'h',
})

const LayerBackFooter = stitches.styled(Footer, {
  gridArea: 'f',
})

const LayerBackSettings = stitches.styled(Settings, {
  gridArea: 's',
})

//

const LayerContent = stitches.styled(Layer, {
  width: '100%',
  height: '100%',

  position: 'relative',
  padding: '80px',
})

const Content = stitches.styled('main', {
  width: '100%',
  minHeight: '100%',

  backgroundColor: '$primarySurface'
})

//

const LayerFront = LayerBack

const LayerFrontHeader = LayerBackHeader

const LayerFrontFooter = LayerBackFooter

const LayerFrontSettings = LayerBackSettings

//

export const Landing: FunctionComponent = () => (
  <Container>
    <LayerBack>
      <LayerBackHeader />
      <LayerBackSettings />
      <LayerBackFooter />
    </LayerBack>
    <LayerContent>
      <Content>
        <section>
          <h1>Hero</h1>
        </section>
        <section>
          <h1>About</h1>
        </section>
        <section>
          <h1>Experience</h1>
        </section>
        <section>
          <h1>Articles</h1>
        </section>
        <section>
          <h1>Projects</h1>
        </section>
        <section>
          <h1>Services</h1>
        </section>
        <section>
          <h1>Contacts</h1>
        </section>
        <div style={{ height: 9999 }} />
      </Content>
    </LayerContent>
    <LayerFront>
      <LayerFrontHeader />
      <LayerFrontSettings />
      <LayerFrontFooter />
    </LayerFront>
  </Container>
)
