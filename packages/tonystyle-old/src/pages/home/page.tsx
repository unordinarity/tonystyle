import React, { FunctionComponent } from 'react'

import { Template } from 'src/widgets/template'
import { HelmetCommon } from 'src/widgets/helmet-common'

export const HomePage: FunctionComponent = () => {
  return (
    <Template>

      <HelmetCommon />

      Hello, I am Tony, web developer from Russia.

      <section>
        Services
      </section>

      <section>
        Experience
      </section>

      <section>
        Articles
      </section>

      <section>
        Projects
      </section>

      <section>
        Contact
      </section>

    </Template>
  )
}
