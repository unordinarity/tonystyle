import { combine, createEvent, createStore, Store } from 'effector'
import { browserApi } from 'src/shared/lib/browser-api'

// color scheme by time

type ColorSchemeByTime = 'light' | 'dark'
const colorSchemeByTime: Store<ColorSchemeByTime> = combine(browserApi.date, date => (
  date.getHours() < 6 || date.getHours() > 19 ? 'dark' : 'light'
))

// color scheme by system (using media query)

type ColorSchemeSystem = 'light' | 'dark' | null
const colorSchemeSystem: Store<ColorSchemeSystem> = browserApi.mediaQuery.colorScheme

// available to render color schemes

type ColorSchemeCustom = 'light' | 'light-dimmed' | 'dark' | 'dark-dimmed'
const colorSchemeFallback: ColorSchemeCustom = 'light'

// options for user to pick

type ColorSchemeOption = ColorSchemeCustom | 'auto-by-time' | 'auto-by-system'
const colorSchemeOption: Store<ColorSchemeOption> = createStore<ColorSchemeOption>('auto-by-system')
const colorSchemeOptionSet = createEvent<ColorSchemeOption>()
colorSchemeOption.on(colorSchemeOptionSet, (_, payload) => payload)
const colorSchemeOptionList: Array<ColorSchemeOption> =
  ['light', 'light-dimmed', 'dark', 'dark-dimmed', 'auto-by-time', 'auto-by-system']

// calculated result color scheme

type ColorSchemeCalculated = ColorSchemeCustom
const colorSchemeCalculated: Store<ColorSchemeCalculated> = combine(
  colorSchemeSystem, colorSchemeByTime, colorSchemeOption,
  (system, byTime, option) => {
    if (option === 'auto-by-system') {
      return system || byTime
    } else if (option === 'auto-by-time') {
      return byTime || system || colorSchemeFallback
    } else {
      return option
    }
  },
)

// exports

export type ColorScheme = ColorSchemeOption
export const colorScheme = {
  list: colorSchemeOptionList,
  store: colorSchemeCalculated,
  set: colorSchemeOptionSet,
}
