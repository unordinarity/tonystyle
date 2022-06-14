import React, { FunctionComponent, useMemo } from 'react'
import { sampleSize, random } from 'lodash-es'

import { PatternBase } from './pattern-base'
import { iconPathList } from './icon-path-list'

export const Pattern: FunctionComponent = () => {
  const colorHue = useMemo(() => random(200, 340, true), [])
  const colorBackground = useMemo(() => `oklch(70% 0.233 ${colorHue})`, [colorHue])
  const colorForeground = useMemo(() => `oklch(78.3% 0.142 ${colorHue})`, [colorHue])
  const iconPathListPicked = useMemo(() => sampleSize(iconPathList, 3), [])

  return (
    <PatternBase
      colorBackground={colorBackground}
      colorForeground={colorForeground}
      iconPathList={iconPathListPicked}
    />
  )
}
