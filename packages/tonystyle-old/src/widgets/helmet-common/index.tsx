import React, { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet-async'

import faviconSmall from './favicon-small.png'
import faviconMedium from './favicon-medium.png'
import faviconShortcut from './favicon-shortcut.png'
import faviconApple from './favicon-apple.png'
import preview from './preview.png'

const data = {
  twitter: {
    username: 'unordinarity'
  },
  locale: {
    list: ['ru', 'en'],
    primary: 'ru'
  }
}

interface Props {
  title?: string
  description?: string
}

export const HelmetCommon: FunctionComponent<Props> = ({
  title,
  description = 'Anton Medvedev - web developer',
}) => (
  <Helmet>
    <title>{['Tony.Style', title].filter(elem => !!elem).join(' | ')}</title>
    <meta property='description' content={description} />

    <link rel='icon' sizes='16x16' href={faviconSmall} />
    <link rel='icon' sizes='32x32' href={faviconMedium} />
    <link rel='icon' sizes='96x96' href={faviconShortcut} />
    <link rel='apple-touch-icon' href={faviconApple} />

    <meta property='og:title' content={title} />
    <meta property='og:image' content={preview} />

    <meta property='twitter:image' content={preview} />
    <meta property='twitter:card' content='summary_large_image' />
    <meta property='twitter:site' content={`@${data.twitter.username}`} />
    <meta property='twitter:creator' content={`@${data.twitter.username}`} />

    <link rel='canonical' href={data.locale.primary} />
    {data.locale.list.map(language => (
      <link rel='alternate' href={language} hrefLang={language} />
    ))}
    <link rel='alternate' href={data.locale.primary} hrefLang={data.locale.primary} />
  </Helmet>
)
