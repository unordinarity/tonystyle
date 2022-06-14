import React, { FunctionComponent } from 'react'

interface Props {
  colorBackground: string
  colorForeground: string
  iconPathList: Array<string>
}

export const PatternBase: FunctionComponent<Props> = ({
  colorBackground,
  colorForeground,
  iconPathList,
}) => {
  return (
    <svg>
      <defs>
        <pattern id="pattern">
          {iconPathList.map(iconPath => (
            <path d={iconPath} />
          ))}
        </pattern>
      </defs>

      <rect fill="url(#pattern)" />
    </svg>
  )
}
