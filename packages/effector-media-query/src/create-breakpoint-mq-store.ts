import { combine } from 'effector'
import { mapValues } from 'lodash-es'

import { createSimpleMqStore } from './create-simple-mq-store'

export const createBreakpointMqStore = <Breakpoint extends string = string>(
  mediaParameter: string,
  breakpointMap: Record<Breakpoint, string>
) => {
  const mqStoreMap = mapValues(breakpointMap, value => (
    createSimpleMqStore(`(${value} <= ${mediaParameter})`)
  ))

  const store = combine(mapValues(mqStoreMap, elem => elem.store), storeValuesMap => {
    return Object.entries(storeValuesMap)
      .reverse()
      .reduce<Breakpoint | null>(
        (result, [brName, brValue]) => result || (brValue as boolean ? brName as Breakpoint : result),
        null,
      )
  })

  const watch = () =>
    (Object.values(mqStoreMap) as Array<ReturnType<typeof createSimpleMqStore>>)
      .map(elem => elem.watch)
      .forEach(elem => elem())

  return {
    store,
    watch,
  }
}
