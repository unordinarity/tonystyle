import { Post } from './post'

export namespace Category {
  export interface Model {
    id: string,
    attributes: {
      title: string,
    },
    relations: {
      article: Array<Post.Id>,
    }
  }

  export type Id = Model['id']

  export const list: Array<Model> = [{
    id: 'megapost',
    attributes: {
      title: 'Megapost',
    },
    relations: {
      article: [],
    },
  }, {
    id: 'article',
    attributes: {
      title: 'Article',
    },
    relations: {
      article: [],
    },
  }, {
    id: 'diary',
    attributes: {
      title: 'Diary',
    },
    relations: {
      article: [],
    },
  }]
}
