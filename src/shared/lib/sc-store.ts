import { createStore } from 'effector'

import { mqColorSchemeStore } from './mq-stores'

//

type ColorSchemeByTime = 'light' | 'dark'
const colorSchemeByTime = createStore<ColorSchemeByTime>('light')

//

type ColorSchemeSystem = 'light' | 'dark'
const colorSchemeSystem = createStore<ColorSchemeSystem>('light')

//

const colorSchemes = [
  'light',
  'light-dimmed',
  'sepia',
  'dark-dimmed',
  'dark',
  'dark-amoled',
] as const

type ColorScheme = (typeof colorSchemes)[number]

const colorSchemeCalculated = createStore<ColorScheme>('light')

export const colorScheme = colorSchemeCalculated
