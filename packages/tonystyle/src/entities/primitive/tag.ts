import { Post } from './post'

export namespace Tag {
  export interface Model {
    id: string,
    attributes: {
      title: string,
    },
    relations: {
      articles: Array<Post.Id>,
    },
  }

  export type Id = Model['id']

  export const list: Array<Model> = [{
    id: '',
    attributes: {
      title: '',
    },
    relations: {
      articles: [],
    },
  }]
}

