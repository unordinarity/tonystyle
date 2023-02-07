import React, { FunctionComponent } from 'react'

import { PageTemplate } from 'src/widgets/page-template'
import { HeadTemplate } from 'src/widgets/head-template'

const Uses: FunctionComponent = () => (
  <>
    <HeadTemplate title='Uses' />
    <PageTemplate>
      <h1>Uses</h1>

      <h2>Web development and other work-related stuff</h2>

      <h3>Hardware</h3>
      <ul>
        <li>Apple MacBook Air 2020 aka M1-book aka stickerbombed blade aka best buy in my life</li>
        <li>Satechi type-c dual multimedia adapter</li>
        <li>UGreen GaN X 100 to charge them all</li>
      </ul>

      <h3>Software</h3>
      <ul>
        <li>Jetbrains WebStorm (with monokai theme)</li>
        <li>Beekeeper studio</li>
        <li>Insomnia</li>
        <li>iTerm</li>
        <li>Notion for planning</li>
        <li>Miro for diagrams</li>
        <li>Alt-tab</li>
        <li>Cloudflare Warp</li>
        <li>Mail.app</li>
        <li>Calendar.app</li>
      </ul>

      <h3>Favourite tech stack</h3>
      <ul>
        <li>Stitches</li>
        <li>Vite</li>
        <li>React</li>
        <li>Typescript</li>
        <li>Effector</li>
        <li>GraphQL</li>
        <li>Nest (not Next)</li>
        <li>Lerna</li>
        <li>NX</li>
      </ul>

      <h3>Code style</h3>
      <ul>
        <li>EditorConfig</li>
        <li>ESLint</li>
        <li>FSD recommendations for ESLint</li>
        <li>ESLint alloy config</li>
      </ul>

      <h3>Browser</h3>
      <ul>
        <li>Google chrome</li>
        <li>React devtools</li>
        <li>User JS and CSS</li>
        <li>Wappalyzer</li>
        <li>Bitwarden</li>
        <li>Tabliss</li>
        <li>uBlock</li>
      </ul>

      <h3>Music making</h3>
      <ul>
        <li>Akai MPK mini 3</li>
        <li>Apple Logic Pro</li>
      </ul>

      <h2>Gamedev and gaming</h2>

      <h3>PC build</h3>
      <ul>
        <li>DeepCool CK560</li>
        <li>Gigabyte X570S Aero G</li>
        <li>AMD Ryzen 5 5600X</li>
        <li>Gigabyte GeForce RTX 3060 Ti</li>
        <li>Kingston Fury Beast Black</li>
        <li>Kingston NV1</li>
        <li>Corsair RM750</li>
      </ul>

      <h3>Peripherals</h3>
      <ul>
        <li>Razer Naga Pro</li>
        <li>Keychron Q1</li>
        <li>Dark Project HS-3</li>
      </ul>

      <h3>Software</h3>
      <ul>
        <li>Jetbrains CLion</li>
        <li>Godot engine</li>
      </ul>
    </PageTemplate>
  </>
)

export default Uses
