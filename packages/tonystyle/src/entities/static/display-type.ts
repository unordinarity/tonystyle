import { createStore } from 'effector'

export namespace DisplayType {
  export type Model = 'mobile' | 'desktop'

  export const list: Array<Model> = ['mobile', 'desktop']

  export const store = createStore<Model>('desktop')
}
