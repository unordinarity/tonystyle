import { createEvent, createStore } from 'effector'

const store = createStore<Date>(new Date())
const set = createEvent<Date>()
store.on(set, (_, payload) => payload)

window.setInterval(() => {
  set(new Date())
}, 60 * 1000)

export const date = store
