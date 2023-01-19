import { createEvent, createStore } from 'effector'

const store = createStore<Array<string>>(
  typeof window === 'undefined' ? [] : [...window.navigator.languages],
)

const set = createEvent<Array<string>>()
store.on(set, (_, payload) => payload)

const watch = () => {
  window.addEventListener('languagechange', () => {
    set([...window.navigator.languages])
  })
}

export const languages = {
  store,
  watch,
}
