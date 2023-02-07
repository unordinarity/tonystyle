import { createEvent, createStore } from 'effector'

export const createLanguagesStore = () => {
  const store = createStore<Array<string>>(
    typeof window === 'undefined' ? [] : [...window.navigator.languages],
  )
  const set = createEvent<Array<string>>()
  store.on(set, (_, payload) => payload)

  window.addEventListener('languagechange', () => {
    set([...window.navigator.languages])
  })

  return store
}
