import { createStore, Store } from 'effector'

export const wrapStoreFactory = <
  ArgsType extends ReadonlyArray<any>,
  StoreValueType,
> (
  storeFactory: (...args: ArgsType) => Store<StoreValueType>,
  fallbackValue: StoreValueType,
) => (
  (typeof window === 'undefined')
    ? () => createStore<StoreValueType>(fallbackValue)
    : storeFactory
)
