import { Category } from './category'
import { Tag } from './tag'

export namespace Post {
  export interface Model {
    id: string,
    attributes: {
      title: string,
      content: string,
      preview: string,
    },
    relations: {
      tags: Array<Tag.Id>,
      category: Category.Id,
    }
  }

  export type Id = Model['id']

  export const list: Array<Model> = [{
    id: '',
    attributes: {
      title: '',
      content: '',
      preview: '',
    },
    relations: {
      tags: [],
      category: '',
    },
  }]
}
