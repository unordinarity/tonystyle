import React, { FunctionComponent } from 'react'

import { stitches } from 'src/shared/ui'
import { Header } from 'src/templates/home/header'

const colors = {
  blood: {
    'a500': '#E80C22',
    'a400': '#C20A1D',
  },
  carbon: '#191919',
  platinum: '#F2F2F2'
}

//

const Container = stitches.styled('div', {
  width: '100%',
  minHeight: '100%',

  position: 'relative',

  backgroundColor: colors.blood.a500
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

  backgroundColor: '#1D1D1D'
})

//

const LayerFront = LayerBack

const LayerFrontHeader = LayerBackHeader

//

export const Landing: FunctionComponent = () => (
  <Container>
    <LayerBack>
      <LayerBackHeader />
      <div style={{ gridArea: 's', backgroundColor: '#222' }}>
        Settings back
      </div>
      <div style={{ gridArea: 'f', backgroundColor: '#222' }}>
        Footer back
      </div>
    </LayerBack>
    <LayerContent>
      <Content>
        <div style={{ height: 9999 }} />
      </Content>
    </LayerContent>
    <LayerFront>
      <LayerFrontHeader />
      <div style={{ gridArea: 's', backgroundColor: '#E11' }}>
        Settings front
      </div>
      <div style={{ gridArea: 'f', backgroundColor: '#E11' }}>
        Footer front
      </div>
    </LayerFront>
  </Container>
)
