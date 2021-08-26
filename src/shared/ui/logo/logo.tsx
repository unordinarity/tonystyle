import React, { FunctionComponent } from 'react'

import logoUrl from '../../assets/logo-transparent-white.png'

import styles from './logo.module.css'

export const Logo: FunctionComponent = () => (
  <img
    src={logoUrl.src}
    alt="logo"
    className={styles.logo}
  />
)
