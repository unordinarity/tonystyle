export namespace Contribution {
  export type Model = {
    id: string,
    attributes: {
      title: ''
    },
    relations: {},
  }

  export type Id = Model['id']

  export const list: Array<Model> = []
}
