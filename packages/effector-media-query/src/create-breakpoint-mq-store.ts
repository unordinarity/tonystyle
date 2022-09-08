import { combine } from 'effector'
import { mapValues } from 'lodash-es'
import { createSimpleMqStore } from './create-simple-mq-store'

export const createBreakpointMqStore = <Breakpoint extends string = string>(
  mediaParameter: string,
  breakpointMap: Record<Breakpoint, string>
) => {
  const storeMap = mapValues(breakpointMap, value => (
    createSimpleMqStore(`(${value} <= ${mediaParameter})`)
  )) as Record<Breakpoint, ReturnType<typeof createSimpleMqStore>>

  return combine(storeMap, storeValuesMap => (
    Object.entries(storeValuesMap as Record<Breakpoint, boolean>)
      .reverse()
      .reduce<string | null>(
        // @ts-ignore
        (result, [brName, brValue]: [Breakpoint, boolean]) => (
          result || brValue ? brName : result
        ),
        null,
      )
  ))
}
