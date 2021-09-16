import React, { FunctionComponent } from 'react'
import clsx from 'clsx'

import styles from './footer-empty.module.css'

interface Props {
  className?: string
}

export const FooterEmpty: FunctionComponent<Props> = ({
  children,
  className,
}) => (
  <footer className={clsx(styles.footer, className)}>
    {children}
  </footer>
)
