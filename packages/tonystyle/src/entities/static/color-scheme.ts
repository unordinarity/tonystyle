import { combine, createEvent, createStore, Store } from 'effector'

import { color } from '@tonystyle/ui'

import { browserApi } from 'src/shared/lib/browser-api'

export namespace ColorScheme {
  // color scheme by time

  type ColorSchemeByTime = 'light' | 'dark' | null
  // TODO date typings are losing somehow
  const colorSchemeByTime: Store<ColorSchemeByTime> = combine(
    browserApi.date,
    date => date
      ? (date as Date).getHours() < 6 || (date as Date).getHours() > 19 ? 'dark' : 'light'
      : null,
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
        return system || colorSchemeFallback
      } else if (option === 'auto-by-time') {
        return byTime || colorSchemeFallback
      } else {
        return option
      }
    },
  )

  // listener

  const themeToStitchesMap: Record<ColorSchemeCalculated, string> = {
    'light': color.themesStitches.lightBright.toString(),
    'light-dimmed': color.themesStitches.lightDim.toString(),
    'dark': color.themesStitches.darkBright.toString(),
    'dark-dimmed': color.themesStitches.darkDim.toString(),
  }

  colorSchemeCalculated.watch(scheme => {
    Object.values(themeToStitchesMap).forEach(className => {
      if (themeToStitchesMap[scheme] === className) document.body.classList.add(className)
      else document.body.classList.remove(scheme)
    })
  })

  // exports

  export type Model = ColorSchemeOption
  export const list = colorSchemeOptionList
  export const store = colorSchemeCalculated
  export const set = colorSchemeOptionSet
}
