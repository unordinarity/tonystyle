import React, { FunctionComponent, ReactElement } from 'react'
import { Helmet } from 'react-helmet'

import faviconTransparentWhite from '../../shared/assets/favicon-transparent-white.png'

import { HeaderFilled } from '../header-filled'
import { FooterFilled } from '../footer-filled'

interface ColumnedTemplateProps {
  head?: ReactElement,
  content?: ReactElement,
}

export const TemplateColumned: FunctionComponent<ColumnedTemplateProps> = ({
  head,
  content,
}) => (
  <>
    <Helmet>
      <link
        rel="icon"
        href={faviconTransparentWhite}
        type="image/x-icon"
      />
      {head}
    </Helmet>

    <HeaderFilled />

    <hr />

    {content}

    <hr />

    <FooterFilled />
  </>
)
