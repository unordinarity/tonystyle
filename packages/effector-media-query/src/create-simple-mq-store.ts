import { createEvent, createStore } from 'effector'

export const createSimpleMqStore = (query: string) => {
  const mediaQueryList = window.matchMedia(query)

  const $matches = createStore<boolean>(mediaQueryList.matches)
  const match = createEvent<boolean>()
  $matches.on(match, (_, payload) => payload)

  mediaQueryList.addEventListener('change', ev => {
    match(ev.matches)
  })

  return $matches
}
