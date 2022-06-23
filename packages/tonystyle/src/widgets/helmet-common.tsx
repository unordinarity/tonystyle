import React, { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet-async'
import { graphql, useStaticQuery } from 'gatsby'

import faviconLightIco from 'src/shared/assets/favicon-light.ico'
import faviconAdaptiveSvg from 'src/shared/assets/favicon-adaptive.svg'
import faviconLightApple from 'src/shared/assets/favicon-light-apple.png'
import preview from 'src/shared/assets/preview.png'

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
}) => {
  console.log(faviconAdaptiveSvg)
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `,
  )

  return (
    <Helmet>
      <title>{['Tony.Style', title].filter(elem => !!elem).join(' | ')}</title>
      <meta property="description" content={description} />

      <link rel="icon" sizes="any" href={faviconLightIco} />
      <link rel="icon" href={faviconAdaptiveSvg} type="image/svg+xml" />
      <link rel="apple-touch-icon" href={faviconLightApple} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={preview} />

      <meta property="twitter:image" content={preview} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content={`@${data.twitter.username}`} />
      <meta property="twitter:creator" content={`@${data.twitter.username}`} />

      <link rel="canonical" href={data.locale.primary} />
      {data.locale.list.map(language => (
        <link key={language} rel="alternate" href={language} hrefLang={language} />
      ))}
      <link rel="alternate" href={data.locale.primary} hrefLang={data.locale.primary} />
    </Helmet>
  )
}
