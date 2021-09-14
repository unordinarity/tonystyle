import { createEvent, createStore, Store } from 'effector'

type MqStoreValue<Value> = Value | 'none' | 'auto'

const createMqStore = <V>(
  mediaFeature: string,
  values: Array<MqStoreValue<V>>,
) => {
  let initialValue: MqStoreValue<(typeof values)[number]> = 'none'

  const storeSet = createEvent<MqStoreValue<(typeof values)[number]>>()

  if (window.matchMedia(`not all and (${mediaFeature}), (${mediaFeature})`)) {
    values.forEach((value: (typeof values)[number]) => {
      const mql = window.matchMedia(`${mediaFeature}: ${value}`)
      if (mql.matches) initialValue = value
      mql.addEventListener('change', event => {
        if (event.matches) storeSet(value)
      })
    })
  }

  return createStore<MqStoreValue<(typeof values)[number]>>(initialValue)
}

export const mqColorSchemeStore = createMqStore<
  'dark' | 'light'
>(
  'prefers-color-scheme',
  ['dark', 'light']
)

export const mqReducedMotionStore = createMqStore<
  'reduce' | 'no-preference'
>(
  'prefers-reduced-motion',
  ['reduce', 'no-preference']
)

export const mqDisplayModeStore = createMqStore<
  'browser' | 'fullscreen' | 'standalone' | 'minimal-ui'
>(
  'display-mode',
  ['browser', 'fullscreen', 'standalone', 'minimal-ui']
)
