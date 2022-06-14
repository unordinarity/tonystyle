import { createBreakpointMqStore, createEnumMqStore } from '@tonystyle/effector-media-query'

export const mediaQuery = {
  colorScheme: createEnumMqStore(
    'prefers-color-scheme',
    ['dark', 'light']
  ),
  reducedMotion: createEnumMqStore(
    'prefers-reduced-motion',
    ['reduce', 'no-preference']
  ),
  displayMode: createEnumMqStore(
    'display-mode',
    ['browser', 'fullscreen', 'standalone', 'minimal-components']
  ),
  lightLevel: createEnumMqStore(
    'light-level',
    ['dim', 'normal', 'washed']
  ),
  forcedColors: createEnumMqStore(
    'forced-colors',
    ['none', 'active']
  ),
  colorGamut: createEnumMqStore(
    'color-gamut',
    ['srgb', 'p3', 'rec2020']
  ),
  width: createBreakpointMqStore(
    'width',
    {
      wearable: '0px',
      mobile: '576px',
      tablet: '768px',
      laptop: '992px',
      desktop: '1200px'
    }
  ),
  aspectRatio: createBreakpointMqStore(
    'aspect-ratio',
    {
      vertical: '1/999',
      square: '12/14',
      horizontal: '14/12'
    }
  )
}
