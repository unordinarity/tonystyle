import React from 'react'
import { NextPage } from 'next'

import { TemplateColumned } from '../../widgets/template-columned'

export const HomePage: NextPage = () => {
  return (
    <TemplateColumned
      head={(
        <>
          <title>Title</title>
          <meta name="description" content="description" />
        </>
      )}
      content={(
        <div>
          <aside>

          </aside>
          <main>

          </main>
        </div>
      )}
    />
  )
}
