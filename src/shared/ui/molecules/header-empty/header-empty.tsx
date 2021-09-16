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
  firstSide = ' ',
  center,
  lastSide = ' ',
}) => (
  <header className={clsx(styles.container, className)}>
    <div className={styles.content}>
      <div className={styles.section}>
        {firstSide}
      </div>
      <div className={styles.section}>
        {center}
      </div>
      <div className={styles.section}>
        {lastSide}
      </div>
    </div>
  </header>
)
