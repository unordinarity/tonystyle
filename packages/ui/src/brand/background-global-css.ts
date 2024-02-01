import { stitches } from '../stitches'

import patternUrl from '../tokens/pattern.svg'

export const backgroundGlobalCss = stitches.globalCss({
  body: {
    backgroundImage: `url(${patternUrl})`,
  }
})
