import React, { FunctionComponent } from 'react'

import { Template } from 'src/widgets/template'
import { HelmetCommon } from 'src/widgets/helmet-common'

const Personal: FunctionComponent = () => (
  <Template>
    <HelmetCommon title='Personal' />

    <h1>Personal</h1>

    <h2>Hardware</h2>

    <h2>Software</h2>

    <h2>Code style</h2>

    <h2>Habits and traits</h2>
  </Template>
)

export default Personal
