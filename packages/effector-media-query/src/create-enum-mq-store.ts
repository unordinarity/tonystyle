import { createEvent, createStore } from 'effector'

export const createEnumMqStore = <V extends string>(
  mediaFeature: string,
  values: Array<V>,
) => {
  let initialValue: V | null = null

  const storeSet = createEvent<V | null>()

  if (window.matchMedia(`not all and (${mediaFeature}), (${mediaFeature})`)) {
    values.forEach(value => {
      const mql = window.matchMedia(`${mediaFeature}: ${value}`)
      if (mql.matches) initialValue = value
      mql.addEventListener('change', event => {
        if (event.matches) storeSet(value)
      })
    })
  }

  return createStore<V | null>(initialValue)
}
