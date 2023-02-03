import { createBreakpointMqStore, createEnumMqStore } from '@tonystyle/effector-media-query'
import { wrapStoreFactory } from '@tonystyle/effector-ssr-helpers'

export const mediaQuery = {
  colorScheme: wrapStoreFactory(
    () => createEnumMqStore<'dark' | 'light'>(
      'prefers-color-scheme',
      ['dark', 'light'],
    ),
    'dark',
  )(),
  reducedMotion: wrapStoreFactory(
    () => createEnumMqStore(
      'prefers-reduced-motion',
      ['reduce', 'no-preference'],
    ),
    'no-preference',
  ),
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
  ),
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
  ),
}
