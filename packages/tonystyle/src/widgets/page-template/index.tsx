import React, { FunctionComponent, ReactNode } from 'react'
// import { useStore } from 'effector-react'
//
// import { browserApi } from 'src/shared/lib/browser-api'
import { PageTemplateDesktop } from './desktop'

export const PageTemplate: FunctionComponent<{ children?: ReactNode }> = ({
  children,
}) => {

  // const viewportWidth = useStore(browserApi.mediaQuery.width)

  // if (viewportWidth === 'mobile') return <h1>Mobile</h1>
  // if (viewportWidth === 'tablet') return <h1>Tablet</h1>
  // if (viewportWidth === 'desktop') return <PageTemplateDesktop>{children}</PageTemplateDesktop>
  // return <h1>Unknown</h1>

  return <PageTemplateDesktop>{children}</PageTemplateDesktop>
}
