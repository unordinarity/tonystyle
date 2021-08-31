import React, { FunctionComponent } from 'react'

import logoTransparentWhite from '../../assets'

import styles from './logo.module.css'

export const Logo: FunctionComponent = () => (
  <img
    src={logoTransparentWhite}
    alt="logo"
    className={styles.logo}
  />
)
