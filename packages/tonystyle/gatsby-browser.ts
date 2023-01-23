import { afterRenderTrigger } from '@tonystyle/gatsby-ssg-helpers'

import './src/shared/ui/global/critical'
import './src/shared/ui/global/reset.css'
import './src/shared/ui/global/reset-patch.css'
import './src/shared/ui/global/reset-spa.css'
import './src/shared/ui/global/theme'

export const onInitialClientRender = () => {
  afterRenderTrigger()
}
