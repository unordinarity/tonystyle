import React, { FunctionComponent } from 'react'

import { TemplateColumned } from '../../widgets/template-columned'

export const NotFoundPage: FunctionComponent = () => (
  <TemplateColumned
    content={(
      <>
        <h1>
          404
        </h1>
        <p>
          Page not found
        </p>
      </>
    )}
  />
)
