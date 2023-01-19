import { combine, createEvent, createStore, Store } from 'effector'

import { browserApi } from 'src/shared/lib/browser-api'
import { color } from 'src/shared/ui/tokens/color'

export namespace ColorScheme {
  // color scheme by time

  type ColorSchemeByTime = 'light' | 'dark'
  const colorSchemeByTime: Store<ColorSchemeByTime> = combine(
    browserApi.date,
    date => date.store.getHours() < 6 || date.store.getHours() > 19 ? 'dark' : 'light',
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

  // listener

  colorSchemeCalculated.watch(theme => {
    for (let themesKey in color.themesStitches) {
      document.body.classList.remove(themesKey)
    }
    document.body.classList.add({
      'light': color.themesStitches.lightBright,
      'light-dimmed': color.themesStitches.lightDim,
      'dark': color.themesStitches.darkBright,
      'dark-dimmed': color.themesStitches.darkDim,
    }[theme])
  })

  // exports

  export type Model = ColorSchemeOption
  export const list = colorSchemeOptionList
  export const store = colorSchemeCalculated
  export const set = colorSchemeOptionSet
}
