import React, { FunctionComponent } from 'react'

import { Template } from 'src/widgets/template'
import { HelmetCommon } from 'src/widgets/helmet-common'

const About: FunctionComponent = () => (
  <Template>
    <HelmetCommon title='About' />

    <h1>About</h1>
  </Template>
)

export default About
