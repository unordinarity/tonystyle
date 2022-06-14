import { combine, Store } from 'effector'
import { createSimpleMqStore } from './create-simple-mq-store'

export const createBreakpointMqStore = <Breakpoint extends string>(
  mediaParameter: string,
  breakpointMap: Record<Breakpoint, string>
) => {
  const intervalList: Array<{ name: string, from: string, to: string }> =
    Object.keys(breakpointMap).map((key, index, list) => ({
      name: key,
      from: breakpointMap[key as Breakpoint],
      to: list[index - 1][1]
    }))

  const storeList: Array<Store<boolean>> = intervalList.map(interval => {
    let mqString = ''
    if (interval.from) mqString += `(${interval.from} <= ${mediaParameter})`
    if (interval.from && interval.to) mqString += ', '
    if (interval.to) mqString += `(${mediaParameter} <= ${interval.to})`

    return createSimpleMqStore(mqString)
  })

  return combine(storeList, storeListValues => {
    for (let index = 0; index < storeListValues.length; index++) {
      if (storeListValues[index]) return intervalList[index].name as Breakpoint
    }
    return null
  })
}
