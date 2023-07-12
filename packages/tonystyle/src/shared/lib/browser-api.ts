import {
  createBreakpointMqStore,
  createDateStore,
  createEnumMqStore,
  createLanguagesStore,
} from '@tonystyle/effector-browser-api'

export const browserApi = {
  navigator: {
    languages: createLanguagesStore(),
  },
  date: createDateStore(),
  mediaQuery: {
    colorScheme: createEnumMqStore(
      'prefers-color-scheme',
      ['dark', 'light'],
    ),
    reducedMotion: createEnumMqStore(
      'prefers-reduced-motion',
      ['reduce', 'no-preference'],
    ),
    width: createBreakpointMqStore(
      'width',
      {
        mobile: '0px',
        tablet: '640px',
        desktop: '1024px',
      },
    ),
    aspectRatio: createBreakpointMqStore(
      'aspect-ratio',
      {
        vertical: '1/999',
        square: '12/14',
        horizontal: '14/12',
      },
    ),
  },
}
