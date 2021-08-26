import { createApi, createStore } from 'effector'

export interface Locale {
  id: string
  displayName: string
  testRegex: RegExp
}

const localeList: ReadonlyArray<Locale> = [{
  id: 'en',
  displayName: 'English',
  testRegex: /^en\b/,
}, {
  id: 'ru',
  displayName: 'Russian',
  testRegex: /^ru\b/,
}] as const

export type LocaleId = (typeof localeList)[number]['id']

let localeDefaultValue: LocaleId = 'en'

localeList.forEach(locale => {
  if (locale.testRegex.test(window.navigator.language)) {
    localeDefaultValue = locale.id
  }
})

const localeStore = createStore<LocaleId>(localeDefaultValue)

const {
  setLocale,
  turnLocale,
} = createApi(localeStore, {
  setLocale: (currentLocaleId, newLocaleId: LocaleId) => newLocaleId,
  turnLocale: (currentLocaleId) => {
    let newLocaleIndex = localeList.findIndex(theme => theme.id === currentLocaleId) + 1
    if (newLocaleIndex >= localeList.length) newLocaleIndex = 0
    return localeList[newLocaleIndex].id
  }
})

export const locale = {
  list: localeList,
  store: localeStore,
  set: setLocale,
  turn: turnLocale,
}
