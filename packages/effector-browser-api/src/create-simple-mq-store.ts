import { createEvent, createStore } from 'effector'

export const createSimpleMqStore = (query: string) => {
  const store = createStore<boolean | null>(null)
  const set = createEvent<boolean>()
  store.on(set, (_, payload) => payload)

  const mediaQueryList = window.matchMedia(query)

  mediaQueryList.addEventListener('change', ev => {
    set(ev.matches)
  })

  return store
}
