import React, { FunctionComponent } from 'react'
import { ComponentProps } from '@stitches/react'
import { Link } from 'atomic-router-react'

import { stitches } from '../../stitches'

//

const Anchor = stitches.styled(Link, {})

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
    return <Heading1 as='h1' {...props} />
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
