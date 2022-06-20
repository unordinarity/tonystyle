import React, { FunctionComponent } from 'react'

import { stitches, Spinner } from 'src/shared/ui'

const Container = stitches.styled('div', {
  width: '100%',
  height: '100%',
})

export const Loading: FunctionComponent = () => (
  <Container>
    <Spinner />
  </Container>
)
