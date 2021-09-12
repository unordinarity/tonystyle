import { combine, createApi, createEvent, createStore } from 'effector'

import { ColorSchemeId } from 'src/features/appearance'

export interface PseudoColorScheme {
  meta: {
    id: string
    displayName: string
  }
}

export interface ColorScheme extends PseudoColorScheme {
  colors?: {
    background: string
    surface: string
    overlay: string
    text: string
  }
}

export const colorSchemeList: ReadonlyArray<PseudoColorScheme | ColorScheme> = Object.freeze([{
  meta: {
    id: 'auto-system',
    displayName: 'System'
  },
}, {
  meta: {
    id: 'auto-schedule',
    displayName: 'Auto'
  },
}, {
  meta: {
    id: 'light',
    displayName: 'Light',
  },
  colors: {
    background: '#F0F0F0',
    surface: '#F5F5F5',
    overlay: '#FAFAFA',
    text: 'rgba(0, 0, 0, 0.6)',
  },
}, {
  meta: {
    id: 'dark-dimmed',
    displayName: 'Dark dimmed',
  },
  colors: {
    background: '#262626',
    surface: '#434343',
    overlay: '#595959',
    text: 'rgba(255, 255, 255, 0.7)'
  },
}, {
  meta: {
    id: 'dark',
    displayName: 'Dark (default)',
  },
  colors: {
    background: '#1F1F1F',
    surface: '#262626',
    overlay: '#434343',
    text: 'rgba(255, 255, 255, 0.7)'
  },
}, {
  meta: {
    id: 'dark-amoled',
    displayName: 'Amoled',
  },
  colors: {
    background: '#000000',
    surface: '#141414',
    overlay: '#1f1f1f',
    text: 'rgba(255, 255, 255, 0.7)'
  },
}])

export const $colorSchemeSaved = createStore<PseudoColorScheme>(colorSchemeList[0])
export const $colorSchemeCalculated = combine(
  $colorSchemeSaved,
  saved => {

  }
)

const colorSchemeSet = createEvent<ColorSchemeId>()
const colorSchemeTurn = createEvent()

$colorSchemeSaved.on(
  colorSchemeSet,
  (currentScheme, newSchemeId) => (
    colorSchemeList.find(scheme => scheme.meta.id === newSchemeId) ?? currentScheme
  )
)

$colorSchemeSaved.on(
  colorSchemeTurn,
  (currentSchemeId) => {
    let newSchemeIndex = colorSchemeList.findIndex(theme => theme.meta.id === currentSchemeId.meta.id) + 1
    if (newSchemeIndex >= colorSchemeList.length) newSchemeIndex = 0
    return colorSchemeList[newSchemeIndex]
  }
)
