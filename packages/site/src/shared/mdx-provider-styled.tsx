import React, { FunctionComponent, PropsWithChildren } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Typography } from '@frontend-church/ui'

export const MdxProviderStyled: FunctionComponent<PropsWithChildren> = ({
  children,
}) => (
  <MDXProvider
    components={{
      h1: Typography.H1,
      h2: Typography.H2,
      p: Typography.P,
    }}
  >
    {children}
  </MDXProvider>
)
