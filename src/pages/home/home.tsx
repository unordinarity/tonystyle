import React, { FunctionComponent } from 'react'

import { TemplateColumned } from 'src/widgets/template-columned'

export const HomePage: FunctionComponent = () => {
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
