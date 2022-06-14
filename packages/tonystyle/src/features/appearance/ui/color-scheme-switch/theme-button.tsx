import React, { FunctionComponent } from 'react'
import clsx from 'clsx'
import { useStore } from 'effector-react'
import Icon from '@mdi/react'
import { mdiWhiteBalanceSunny, mdiWeatherNight, mdiHelp } from '@mdi/js'

import { colorScheme } from 'src/features/appearance'

import styles from './theme-button.module.css'

interface Props {
  className?: string
}

export const ThemeButton: FunctionComponent<Props> = ({
  className
}) => {
  const currentTheme = useStore(colorScheme.store)

  return (
    <div
      onClick={() => {
        colorScheme.turn()
      }}
    >
      <Icon
        className={clsx(styles.icon, className)}
        path={{
          light: mdiWhiteBalanceSunny,
          dark: mdiWeatherNight,
        }[currentTheme] ?? mdiHelp}
      />
    </div>
  )
}
