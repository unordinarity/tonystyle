import { createEvent, createStore } from 'effector'

export const createDateStore = () => {
  const store = createStore<Date>(new Date())
  const set = createEvent<Date>()
  store.on(set, (_, payload) => payload)

  window.setTimeout(() => {
    window.setInterval(() => {
      set(new Date())
    }, 1000)
  }, 1000 - (new Date()).getMilliseconds())

  return store
}
