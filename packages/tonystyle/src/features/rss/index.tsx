import React, { FunctionComponent } from 'react'
import { Icon } from '@mdi/react'
import { mdiRss } from '@mdi/js'

import { Button } from 'src/shared/ui'

const RssButton: FunctionComponent = () => (
  <Button>
    <Icon path={mdiRss} size="32px" />
  </Button>
)

export const rss = {
  Button: RssButton,
}
