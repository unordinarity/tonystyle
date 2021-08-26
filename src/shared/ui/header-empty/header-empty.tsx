import React, { FunctionComponent } from 'react'
import clsx from 'clsx'

import styles from './header-empty.module.css'

interface Props {
  className?: string
  children?: never
}

export const HeaderEmpty: FunctionComponent<Props> = ({
  className
}) => (
  <header className={clsx(styles.header, className)}>
    <div className={styles.headerSection}>

    </div>
    <div className={styles.headerSection}>

    </div>
  </header>
)
