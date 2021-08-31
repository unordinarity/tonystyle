import React, { FunctionComponent } from 'react'
import Image from 'next/image'

import styles from './logo.module.css'

export const Logo: FunctionComponent = () => (
  <Image
    src="logo-transparent-white.png"
    alt="logo"
    className={styles.logo}
  />
)
