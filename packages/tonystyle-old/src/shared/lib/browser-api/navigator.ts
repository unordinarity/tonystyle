import { createEvent, createStore } from 'effector'

const navigatorLanguagesStore = createStore<Array<string>>([...window.navigator.languages])
const setNavigatorLanguageStore = createEvent<Array<string>>()
navigatorLanguagesStore.on(setNavigatorLanguageStore, (_, payload) => payload)
window.addEventListener('languagechange', () => {
  setNavigatorLanguageStore([...window.navigator.languages])
})

export const navigator = {
  languages: navigatorLanguagesStore
}
