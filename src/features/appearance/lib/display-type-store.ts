import { createApi, createStore } from 'effector'

export interface DisplayType {
  id: string
  mediaQuery?: string
}

const displayList: ReadonlyArray<DisplayType> = [{
  id: 'mobile',
  mediaQuery: '(max-width: 320px)',
}, {
  id: 'tablet',
  mediaQuery: '(min-width: 320px) and (max-width: 800px)',
}, {
  id: 'laptop',
  mediaQuery: '(min-width: 800px) and (max-width: 1440px)',
}, {
  id: 'desktop',
  mediaQuery: '(min-width: 1440px)',
}] as const

export type DisplayTypeId = (typeof displayList)[number]['id']

let displayTypeDefaultValue: DisplayTypeId = 'laptop'

displayList.forEach(display => {
  if (
    display.mediaQuery &&
    window.matchMedia(display.mediaQuery).matches
  ) {
    displayTypeDefaultValue = display.id
  }
})

const displayTypeStore = createStore<DisplayTypeId>(displayTypeDefaultValue)

const {
  displayTypeSet,
  displayTypeTurn,
} = createApi(displayTypeStore, {
  displayTypeSet: (currentDisplayTypeId, newDisplayTypeId: DisplayTypeId) => newDisplayTypeId,
  displayTypeTurn: (currentDisplayTypeId) => {
    let newDisplayTypeIndex = displayList.findIndex(theme => theme.id === currentDisplayTypeId) + 1
    if (newDisplayTypeIndex >= displayList.length) newDisplayTypeIndex = 0
    return displayList[newDisplayTypeIndex].id
  }
})

export const displayType = {
  list: displayList,
  store: displayTypeStore,
  set: displayTypeSet,
  turn: displayTypeTurn,
}
