import { ComponentType } from 'react'

export namespace Experiment {
  export interface Model {
    id: string,
    attributes: {
      title: string,
      description: string,
      component: ComponentType,
    },
    relations: {}
  }

  export type Id = Model['id']

  export const list: Array<Model> = []
}
