import React, { FunctionComponent } from 'react'
import { combine, createEvent, createStore, Store } from 'effector'
import { Icon } from '@mdi/react'
import { mdiTranslate } from '@mdi/js'

import { Button } from 'src/shared/ui'
import { browserApi } from 'src/shared/lib/browser-api'

// system locale

type LocaleSystem = string
const localeSystemList: Store<Array<LocaleSystem>> = browserApi.navigator.languages

// available to use locales

const localeCustomList = ['en', 'ru'] as const
type LocaleCustom = (typeof localeCustomList)[number]
const localeFallback: LocaleCustom = 'en'

// options for user to pick

const localeOptionList = ['auto-by-system', 'en', 'ru'] as const
type LocaleOption = LocaleCustom | (typeof localeOptionList)[number]
const localeOption = createStore<LocaleOption>('auto-by-system')
const localeOptionSet = createEvent<LocaleOption>()
localeOption.on(localeOptionSet, (_, payload) => payload)

// calculated result locale

type LocaleCalculated = LocaleCustom
const localeCalculated: Store<LocaleCustom> = combine(
  localeOption, localeSystemList,
  (option, systemList) => {
    // @ts-ignore
    if (option === 'auto-by-system') {
      for (const system of systemList) {
        // @ts-ignore
        if (localeOptionList.includes(system)) return system as LocaleCustom
      }
      return localeFallback
    } else {
      return option
    }
  }
)

// switch component

export const LocaleSwitch: FunctionComponent = () => (
  <Button
    onClick={() => {

    }}>
    <Icon path={mdiTranslate} size="32px" />
  </Button>
)

export const locale = {
  list: localeSystemList,
  store: localeCalculated,
  set: localeOptionSet,
  Switch: LocaleSwitch,
}
