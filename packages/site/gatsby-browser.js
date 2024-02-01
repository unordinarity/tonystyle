import { spaGlobalCss, resetGlobalCss, stitchesGlobalCss, criticalGlobalCss, backgroundGlobalCss } from '@frontend-church/ui'

/** @type import('gatsby').GatsbyBrowser['onClientEntry'] */
export const onClientEntry = () => {
  spaGlobalCss()
  resetGlobalCss()
  stitchesGlobalCss()
  criticalGlobalCss()
  backgroundGlobalCss()
}
