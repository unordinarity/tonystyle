import React, { FunctionComponent } from 'react'
import clsx from 'clsx'

import { Icon } from '@mdi/react'
import { mdiSunglasses } from '@mdi/js'

import styles from './spinner.module.css'

interface Props {
  className?: string,
}

export const Spinner: FunctionComponent<Props> = ({
  className,
}) => (
  <Icon
    path={mdiSunglasses}
    className={clsx(styles.spinner, className)}
    size={64}
  />
)
