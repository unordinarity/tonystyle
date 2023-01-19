export namespace Link {
  export interface Model {
    id: string,
    attributes: {
      title: string,
      url: string,
      icon: string,
    },
    relations: {},
  }

  export type Id = Model['id']

  export const list: Array<Model> = [{
    id: '',
    attributes: {
      title: '',
      url: '',
      icon: '',
    },
    relations: {},
  }]
}
