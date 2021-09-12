import React, { FunctionComponent } from 'react'
import clsx from 'clsx'

import { Spinner } from '../../shared/ui/spinner'

import styles from './loading.module.css'

interface Props {
  className?: string;
}

export const Loading: FunctionComponent<Props> = ({
  className,
}) => (
  <div className={clsx(styles.fullPageWrapper, className)}>
    <Spinner />
  </div>
)
