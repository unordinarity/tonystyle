import { createEvent, createStore } from 'effector'
import { executeAfterRender } from '@tonystyle/react-ssr-helpers'

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

executeAfterRender(watch)

export const languages = {
  store,
}
