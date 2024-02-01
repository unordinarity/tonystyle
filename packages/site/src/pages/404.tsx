import React, { FunctionComponent } from 'react'
import { PageProps } from 'gatsby'

import { GatsbyHead } from '../widgets/gatsby-head'

const NotFoundPage: FunctionComponent<PageProps> = () => {
  return (
    <main>
      <h1>Page not found</h1>
    </main>
  )
}

export default NotFoundPage

export const Head = () => (
  <GatsbyHead title='404' />
)
