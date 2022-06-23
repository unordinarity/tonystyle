import { PostId } from './post'

export interface Tag {
  id: string,
  attributes: {
    title: string,
  },
  relations: {
    articles: Array<PostId>,
  },
}

export type TagId = Tag['id']

export const tags: Array<Tag> = [{
  id: '',
  attributes: {
    title: '',
  },
  relations: {
    articles: []
  },
}]
