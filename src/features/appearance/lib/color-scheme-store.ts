import { createApi, createStore } from 'effector'
import { schemeSupportMediaQuery } from './utils'

export interface ColorScheme {
  id: string
  displayName: string
  mediaQuery?: string
}

const colorSchemeList: ReadonlyArray<ColorScheme> = [{
  id: 'light',
  displayName: 'Light',
  mediaQuery: 'prefers-color-scheme: light',
}, {
  id: 'dark-dimmed',
  displayName: 'Dark (dimmed)'
}, {
  id: 'dark',
  displayName: 'Dark (default)',
  mediaQuery: 'prefers-color-scheme: dark',
}] as const

export type ColorSchemeId = (typeof colorSchemeList)[number]['id']

let schemeDefaultValue: ColorSchemeId = 'light'

if (window.matchMedia(schemeSupportMediaQuery).matches) {
  colorSchemeList.forEach(theme => {
    if (
      theme.mediaQuery &&
      window.matchMedia(theme.mediaQuery).matches
    ) {
      schemeDefaultValue = theme.id
    }
  })
}

const colorSchemeStore = createStore<ColorSchemeId>(schemeDefaultValue)

const {
  colorSchemeSet,
  colorSchemeTurn,
} = createApi(colorSchemeStore, {
  colorSchemeSet: (currentSchemeId, newSchemeId: ColorSchemeId) => newSchemeId,
  colorSchemeTurn: (currentSchemeId) => {
    let newSchemeIndex = colorSchemeList.findIndex(theme => theme.id === currentSchemeId) + 1
    if (newSchemeIndex >= colorSchemeList.length) newSchemeIndex = 0
    return colorSchemeList[newSchemeIndex].id
  }
})

if (window.matchMedia(schemeSupportMediaQuery)) {
  colorSchemeList.map(scheme => {
    if (scheme.mediaQuery) {
      window.matchMedia(scheme.mediaQuery).addEventListener('change', event => {
        if (event.matches) {
          colorSchemeSet('dark')
        }
      })
    }
  })
}

export const colorScheme = {
  list: colorSchemeList,
  store: colorSchemeStore,
  set: colorSchemeSet,
  turn: colorSchemeTurn,
}
