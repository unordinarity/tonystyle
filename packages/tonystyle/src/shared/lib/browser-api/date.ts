import { createEvent, createStore } from 'effector'
import { executeAfterRender } from '@tonystyle/react-ssr-helpers'

const store = createStore<Date>(new Date())
const set = createEvent<Date>()
store.on(set, (_, payload) => payload)

const watch = () => {
  window.setInterval(() => {
    set(new Date())
  }, 60 * 1000)
}

executeAfterRender(watch)

export const date = {
  store,
}
