import { CategoryId } from './category'
import { TagId } from './tag'

export interface Post {
  id: string,
  attributes: {
    title: string,
    content: string,
    preview: string,
  },
  relations: {
    tags: Array<TagId>,
    category: CategoryId,
  }
}

export type PostId = Post['id']

export const posts: Array<Post> = [{
  id: '',
  attributes: {
    title: '',
    content: '',
    preview: '',
  },
  relations: {
    tags: [],
    category: ''
  }
}]
