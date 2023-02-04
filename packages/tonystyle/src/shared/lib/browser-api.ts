import { Store } from 'effector'

import { wrapStoreFactory } from '@tonystyle/effector-ssr-helpers'
import {
  createBreakpointMqStore,
  createDateStore,
  createEnumMqStore,
  createLanguagesStore,
} from '@tonystyle/effector-browser-api'

export const browserApi = {
  navigator: {
    languages: wrapStoreFactory(
      () => createLanguagesStore(),
      [],
    )(),
  },
  date: wrapStoreFactory(
    () => createDateStore() as Store<Date | null>,
    null,
  )(),
  mediaQuery: {
    colorScheme: wrapStoreFactory(
      () => createEnumMqStore<'dark' | 'light'>(
        'prefers-color-scheme',
        ['dark', 'light'],
      ),
      'dark',
    )(),
    reducedMotion: wrapStoreFactory(
      () => createEnumMqStore<'reduce' | 'no-preference'>(
        'prefers-reduced-motion',
        ['reduce', 'no-preference'],
      ),
      'no-preference',
    )(),
    width: wrapStoreFactory(
      () => createBreakpointMqStore(
        'width',
        {
          mobile: '0px',
          tablet: '640px',
          desktop: '1024px',
        },
      ),
      'desktop',
    )(),
    aspectRatio: wrapStoreFactory(
      () => createBreakpointMqStore(
        'aspect-ratio',
        {
          vertical: '1/999',
          square: '12/14',
          horizontal: '14/12',
        },
      ),
      'horizontal',
    )(),
  },
}
