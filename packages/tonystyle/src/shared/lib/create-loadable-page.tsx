import { ComponentType } from 'react'
import loadable from '@loadable/component'
import { Icon } from '@mdi/react'
import { mdiGoogleDownasaur } from '@mdi/js'
import pRetry from 'p-retry'
import pMinDelay from 'p-min-delay'
import pTimeout from 'p-timeout'

import { stitches } from 'src/shared/ui'

const limitLoadablePage = <
  T extends ComponentType
> (
  dynamicImport: () => PromiseLike<T>,
) => (
  () => pTimeout(
    pMinDelay(
      pRetry(
        dynamicImport,
        { retries: 3 },
      ),
      500,
    ),
    { milliseconds: 3000 },
  )
)

const LoadableFullscreenWrapper = stitches.styled('div', {
  position: 'fixed',
  inset: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$primaryBack',
})

const iconKeyframes = stitches.keyframes({
  from: {
    rotate: '-10deg',
  },
  '50%': {
    rotate: '10deg',
  },
  to: {
    rotate: '-10deg',
  },
})

const IconAnimated = stitches.styled(Icon, {
  animationDirection: 'normal',
  animationDuration: '0.2s',
  animationFillMode: 'forwards',
  animationIterationCount: 'infinite',
  animationName: `${iconKeyframes}`,
  animationTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)',
})

export const createLoadablePage = <
  T extends ComponentType
> (
  dynamicImport: () => PromiseLike<T>,
) => (
  loadable(limitLoadablePage(dynamicImport), {
    fallback: (
      <LoadableFullscreenWrapper>
        <IconAnimated path={mdiGoogleDownasaur} size='80px' />
      </LoadableFullscreenWrapper>
    ),
  })
)
