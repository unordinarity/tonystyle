import React, { FunctionComponent, ReactElement } from 'react'
import flattenChildren from 'react-keyed-flatten-children'
import { Helmet } from 'react-helmet'

import faviconTransparentWhite from 'src/shared/assets/favicon-transparent-white.png'

import { HeaderFilled } from '../header-filled'
import { FooterFilled } from '../footer-filled'

interface ColumnedTemplateProps {
  children?: never,
  head?: ReactElement,
  content?: ReactElement,
}

import styles from './template-columned.module.css'

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
      {flattenChildren(head)}
    </Helmet>

    <HeaderFilled />

    <div className={styles.content}>
      {content}
    </div>

    <FooterFilled />
  </>
)
