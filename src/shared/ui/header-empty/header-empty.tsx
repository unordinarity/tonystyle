import React, { FunctionComponent, ReactElement } from 'react'
import clsx from 'clsx'

import styles from './header-empty.module.css'

interface Props {
  className?: string,
  children?: never,
  firstSide?: ReactElement,
  center?: ReactElement,
  lastSide?: ReactElement,
}

export const HeaderEmpty: FunctionComponent<Props> = ({
  className,
  firstSide,
  center,
  lastSide,
}) => (
  <header className={clsx(styles.header, className)}>
    <div className={styles.headerSection}>
      {firstSide}
    </div>
    <div className={styles.headerSection}>
      {center}
    </div>
    <div className={styles.headerSection}>
      {lastSide}
    </div>
  </header>
)
