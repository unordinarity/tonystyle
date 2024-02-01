import * as React from 'react'
import { stitches } from '@frontend-church/ui'

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <style
      id='stitches'
      dangerouslySetInnerHTML={{
        __html: stitches.getCssText(),
      }}
    />,
  ])
}
