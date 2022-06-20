import { PostId } from './post'

export interface Category {
  id: string,
  attributes: {
    title: string,
  },
  relations: {
    article: Array<PostId>,
  }
}

export type CategoryId = Category['id']

export const categories: Array<Category> = [{
  id: 'megapost',
  attributes: {
    title: 'Megapost'
  },
  relations: {
    article: []
  }
}, {
  id: 'article',
  attributes: {
    title: 'Article'
  },
  relations: {
    article: []
  }
}, {
  id: 'diary',
  attributes: {
    title: 'Diary'
  },
  relations: {
    article: []
  }
}]
