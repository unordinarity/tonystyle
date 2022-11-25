import React, { FunctionComponent } from 'react'
import { ComponentProps } from '@stitches/react'

import { stitches } from 'src/shared/ui/stitches'
import { UniversalLink } from 'src/shared/lib/universal-link'

//

const Anchor = stitches.styled(UniversalLink, {})

//

const Paragraph = stitches.styled('p', {})

//

const HeadingProto = stitches.styled('div')

const Heading1 = stitches.styled(HeadingProto, {})

type HeadingProps = ComponentProps<typeof HeadingProto> & { as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' }

const Heading: FunctionComponent<HeadingProps> = ({
  as,
  ...props
}) => {
  if (as === 'h1') {
    return <Heading1 {...props} />
  }
  return null
}

//

const Code = stitches.styled('code', {})

//

const Image = stitches.styled('img', {})

//

export const Typography = {
  Anchor,
  Paragraph,
  Heading,
}
