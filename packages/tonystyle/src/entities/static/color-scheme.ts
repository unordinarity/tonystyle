import { combine, createStore } from 'effector'

//

type ColorSchemeByTime = 'light' | 'dark'
const colorSchemeByTime = createStore<ColorSchemeByTime>('light')

//

type ColorSchemeSystem = 'light' | 'dark'
const colorSchemeSystem = createStore<ColorSchemeSystem>('light')

//

const colorSchemeOptionList = [
  'auto-by-time',
  'auto-by-system',
  'light',
  'light-dimmed',
  'sepia',
  'dark-dimmed',
  'dark',
  'dark-amoled',
] as const

type ColorScheme = (typeof colorSchemeOptionList)[number]

//

const colorSchemeCalculated = combine(
  colorSchemeByTime,
  colorSchemeSystem,
)

export const colorScheme = colorSchemeCalculated
