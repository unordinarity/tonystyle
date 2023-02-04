import { combine } from 'effector'
import { mapValues } from 'lodash-es'

import { createSimpleMqStore } from './create-simple-mq-store'

export const createBreakpointMqStore = <Breakpoint extends string = string> (
  mediaParameter: string,
  breakpointMap: Record<Breakpoint, string>,
) => {
  const mqStoreMap = mapValues(breakpointMap, value => (
    createSimpleMqStore(`(${value} <= ${mediaParameter})`)
  ))

  return combine(mapValues(mqStoreMap, elem => elem), storeValuesMap => {
    return Object.entries(storeValuesMap)
      .reverse()
      .reduce<Breakpoint | null>(
        (result, [brName, brValue]) => result || (brValue as boolean ? brName as Breakpoint : result),
        null,
      )
  })
}
