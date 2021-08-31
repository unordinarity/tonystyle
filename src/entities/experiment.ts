import { ComponentType } from 'react'

export interface Experiment {
  id: string,
  attributes: {
    title: string,
    description: string,
    component: ComponentType,
  },
  relations: {}
}

export type ExperimentId = Experiment['id']

export const experiments: Array<Experiment> = []
