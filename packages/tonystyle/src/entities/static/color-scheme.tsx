import React, { FunctionComponent } from 'react'
import { combine, createEvent, createStore, Store } from 'effector'
import { useStore } from 'effector-react'
import { mdiWeatherNight } from '@mdi/js'
import { Icon } from '@mdi/react'

import { browserApi } from 'src/shared/lib/browser-api'
import { Button } from 'src/shared/ui'

// color scheme by time

type ColorSchemeByTime = 'light' | 'dark'
const colorSchemeByTime: Store<ColorSchemeByTime> = combine(
  browserApi.date,
  date => date.getHours() < 6 || date.getHours() > 19 ? 'dark' : 'light'
)

// system color scheme (using media query)

type ColorSchemeSystem = 'light' | 'dark' | null
const colorSchemeSystem: Store<ColorSchemeSystem> = browserApi.mediaQuery.colorScheme

// available to render color schemes

type ColorSchemeCustom = 'light' | 'light-dimmed' | 'dark' | 'dark-dimmed'
const colorSchemeFallback: ColorSchemeCustom = 'light'

// options for user to pick

type ColorSchemeOption = ColorSchemeCustom | 'auto-by-time' | 'auto-by-system'
const colorSchemeOption = createStore<ColorSchemeOption>('auto-by-system')
const colorSchemeOptionSet = createEvent<ColorSchemeOption>()
colorSchemeOption.on(colorSchemeOptionSet, (_, payload) => payload)
const colorSchemeOptionList: Array<ColorSchemeOption> =
  ['auto-by-time', 'auto-by-system', 'light', 'light-dimmed', 'dark', 'dark-dimmed']

// calculated result color scheme

type ColorSchemeCalculated = ColorSchemeCustom
const colorSchemeCalculated: Store<ColorSchemeCalculated> = combine(
  colorSchemeOption, colorSchemeSystem, colorSchemeByTime,
  (option, system, byTime) => {
    if (option === 'auto-by-system') {
      return system || byTime
    } else if (option === 'auto-by-time') {
      return byTime || system || colorSchemeFallback
    } else {
      return option
    }
  },
)

// switch component

export const ColorSchemeSwitch: FunctionComponent = () => {
  const option = useStore(colorSchemeOption)

  return (
    <Button
      onClick={() => {
        const currentOptionIndex = colorSchemeOptionList.indexOf(option)
        const nextOptionIndex = (currentOptionIndex + colorSchemeOptionList.length + 1) % colorSchemeOptionList.length
        colorSchemeOptionSet(colorSchemeOptionList[nextOptionIndex])
      }}>
      <Icon path={mdiWeatherNight} size="32px" />
    </Button>
  )
}

// exports

export type ColorScheme = ColorSchemeOption
export const colorScheme = {
  list: colorSchemeOptionList,
  store: colorSchemeCalculated,
  set: colorSchemeOptionSet,
  Switch: ColorSchemeSwitch,
}
