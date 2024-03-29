import React, { FunctionComponent } from 'react'
import { useStore } from 'effector-react'
import { Helmet } from 'react-helmet-async'

import { SocialLink } from 'src/entities/static/social-link'
import { locale } from 'src/entities/static/locale'

import faviconClassic from './assets/favicon-classic.png'
import faviconAdaptive from './assets/favicon-adaptive.svg'
import faviconApple from './assets/favicon-apple.png'
import ogPreview from './assets/og-preview.png'

interface Props {
  title?: string
  description?: string
}

export const HeadTemplate: FunctionComponent<Props> = ({
  title,
  description = 'Anton Medvedev - web developer',
}) => {
  const localeList = useStore(locale.list)

  return (
    <Helmet>
      <title>{[title, 'Tony.Style'].filter(elem => !!elem).join(' | ')}</title>
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
      <meta property='twitter:site' content={`@${SocialLink.map.twitter.username}`} />
      <meta property='twitter:creator' content={`@${SocialLink.map.twitter.username}`} />

      <link rel='canonical' href={locale.primary} />
      {localeList.map(language => (
        <link key={language} rel='alternate' href={language} hrefLang={language} />
      ))}
      <link rel='alternate' href={locale.primary} hrefLang={locale.primary} />
    </Helmet>
  )
}
