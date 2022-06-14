import React, { FunctionComponent } from 'react'

import { Template } from 'src/widgets/template'

export const NotFoundPage: FunctionComponent = () => (
  <Template
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
