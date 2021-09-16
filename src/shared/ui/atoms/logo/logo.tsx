import React, { FunctionComponent } from 'react'

import logoTransparentWhite from 'src/shared/assets/logo-transparent-white.png'

import styles from './logo.module.css'

export const Logo: FunctionComponent = () => (
  <img
    src={logoTransparentWhite}
    alt="logo"
    className={styles.logo}
  />
)
