import '@fontsource/ibm-plex-mono'
import '@fontsource/ibm-plex-sans'
import '@fontsource/ibm-plex-sans-condensed'

const stacks = {
  sansSerif: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Roboto"',
    '"Oxygen"',
    '"Ubuntu"',
    '"Cantarell"',
    '"Fira Sans"',
    '"Droid Sans"',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
  ],
  monospace: [
    'ui-monospace',
    'Menlo',
    'Monaco',
    '"Cascadia Mono"',
    '"Segoe UI Mono"',
    '"Roboto Mono"',
    '"Oxygen Mono"',
    '"Ubuntu Monospace"',
    '"Source Code Pro"',
    '"Fira Mono"',
    '"Droid Sans Mono"',
    '"Courier New"',
    'monospace',
  ],
}

export const families = {
  title: ['IBM Plex Sans Condensed', ...stacks.sansSerif].join(', '),
  paragraph: ['IBM Plex Sans', ...stacks.sansSerif].join(', '),
  code: ['IBM Plex Mono', ...stacks.monospace].join(', '),
}

export const weights = {
  light: '300',
  normal: '500',
  bold: '700',
}

export const font = {
  families,
  weights,
}
