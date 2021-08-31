import React, { FunctionComponent, ReactElement } from 'react'

import { HeaderFilled } from '../header-filled/header-filled'

interface ColumnedTemplateProps {
  head?: ReactElement,
  content?: ReactElement,
}

export const TemplateColumned: FunctionComponent<ColumnedTemplateProps> = ({
  head,
  content,
}) => (
  <>
    <Head>
      {head}
    </Head>

    <HeaderFilled />

    <hr />

    {content}

    <hr />

    <footer>
      Copyright
    </footer>
  </>
)
