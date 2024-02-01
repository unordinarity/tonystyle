import React, { FunctionComponent } from 'react'
import { HeadFC } from 'gatsby'

import faviconClassic from './assets/favicon-classic.png'
import faviconAdaptive from './assets/favicon-adaptive.svg'
import faviconApple from './assets/favicon-apple.png'
import ogPreview from './assets/og-preview.png'

interface Props {
  title?: string
  description?: string
}

export const GatsbyHead: FunctionComponent<Props> = ({
  title,
  description = 'Anton Medvedev - web developer',
}) => (
  <>
    <title>{[title, 'Frontend.Church'].filter(elem => !!elem).join(' | ')}</title>
    <meta property='description' content={description} />

    <link rel='icon' sizes='any' href={faviconClassic} />
    <link rel='icon' href={faviconAdaptive} type='image/svg+xml' />
    <link rel='apple-touch-icon' href={faviconApple} />

    <meta property='og:title' content={title} />
    <meta property='og:description' content={description} />
    <meta property='og:type' content='website' />
    <meta property='og:image' content={ogPreview} />

    <meta property='twitter:image' content={ogPreview} />
    <meta property='twitter:card' content='summary_large_image' />
    <meta property='twitter:site' content={`@unordinarity`} />
    <meta property='twitter:creator' content={`@unordinarity`} />
  </>
)
