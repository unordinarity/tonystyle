import { stitches } from '../stitches'

// https://andy-bell.co.uk/a-more-modern-css-reset/
export const resetGlobalCss = stitches.globalCss({
  // Box sizing rules
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  // Prevent font size inflation
  'html': {
    mozTextSizeAdjust: 'none',
    webkitTextSizeAdjust: 'none',
    textSizeAdjust: 'none'
  },

  // Remove default margin in favour of better control in authored CSS
  // 'body, h1, h2, h3, h4, p, figure, blockquote, dl, dd': {
  //   margin: '0',
  // },

  // Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed
  'ul[role="list"], ol[role="list"]': {
    listStyle: 'none',
  },

  // Set core body defaults
  body: {
    minHeight: '100vh',
    lineHeight: '1.5',
    margin: '0',
  },

  // Set shorter line heights on headings and interactive elements
  'h1, h2, h3, h4, button, input, label': {
    lineHeight: '1.1',
  },

  // Balance text wrapping on headings
  'h1, h2, h3, h4': {
    textWrap: 'balance',
  },

  /* Balance text wrapping on headings */
  'a:not([class])': {
    textDecorationSkipInk: 'auto',
    color: 'currentColor',
  },

  /* A elements that don't have a class get default styles */
  'img, picture': {
    maxWidth: '100%',
    display: 'block',
  },

  /* Inherit fonts for inputs and buttons */
  'input, button, textarea, select': {
    font: 'inherit',
  },

  'textarea:not([rows])': {
    minHeight: '10em',
  },

  /* Anything that has been anchored to should have extra scroll margin */
  ':target': {
    scrollMarginBlock: '5ex',
  }
})
