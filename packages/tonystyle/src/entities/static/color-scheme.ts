import { combine, createEvent, createStore, Store } from 'effector'

import { browserApi } from 'src/shared/lib/browser-api'
import { color } from 'src/shared/ui/tokens/color'
import { executeAfterRender } from '@tonystyle/gatsby-ssg-helpers'

export namespace ColorScheme {
  // color scheme by time

  type ColorSchemeByTime = 'light' | 'dark'
  const colorSchemeByTime: Store<ColorSchemeByTime> = combine(
    browserApi.date,
    date => date.store.getHours() < 6 || date.store.getHours() > 19 ? 'dark' : 'light',
  )

  // system color scheme (using media query)

  type ColorSchemeSystem = 'light' | 'dark' | null
  const colorSchemeSystem: Store<ColorSchemeSystem> = browserApi.mediaQuery.colorScheme.store

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
    'light': color.themesStitches.lightBright,
    'light-dimmed': color.themesStitches.lightDim,
    'dark': color.themesStitches.darkBright,
    'dark-dimmed': color.themesStitches.darkDim,
  }

  const watch = () => {
    colorSchemeCalculated.watch(theme => {
      Object.values(color.themesStitches).forEach(themeClassName => {
        document.body.classList.remove(themeClassName)
      })
      document.body.classList.add(themeToStitchesMap[theme])
    })
  }

  executeAfterRender(watch)

  // exports

  export type Model = ColorSchemeOption
  export const list = colorSchemeOptionList
  export const store = colorSchemeCalculated
  export const set = colorSchemeOptionSet
}
