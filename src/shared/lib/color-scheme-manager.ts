import { Store, Event, createStore, createEvent } from 'effector'

// define what color scheme manager is

interface Manager<
  SchemeList extends ReadonlyArray<string>
> {
  store: Store<SchemeList[number]>,
  setStore: Event<SchemeList[number]>,
}

type ManagerFactory = <
  SchemeList extends ReadonlyArray<string>,
  Scheme extends SchemeList[number],
>(
  schemes: SchemeList,
  options?: {
    initial?: Scheme,
    mediaQuery?: {
      light: Scheme,
      dark: Scheme,
    },
    scheduled?: {
      light: Scheme,
      dark: Scheme,
    }
  }
) => Manager<SchemeList>

// implement it

const createColorSchemeManager: ManagerFactory = (
  schemes,
  options
) => {
  const store = createStore<(typeof schemes)>(options?.initial ?? schemes[0])
  const setStore = createEvent<keyof typeof schemes>()
  store.on(
    setStore,
    (state, payload) => state
  )

  return {
    store,
    setStore,
  }
}

// create a manager using real color schemes

export const manager = createColorSchemeManager([
  'light',
  'light-dimmed',
  'sepia',
  'dark-dimmed',
  'dark',
  'dark-amoled',
] as const, {
  initial: 'ada',
  mediaQuery: {
    light: 'light',
    dark: 'dark',
  },
})
