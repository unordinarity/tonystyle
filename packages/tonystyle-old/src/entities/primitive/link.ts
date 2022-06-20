export interface Link {
  id: string,
  attributes: {
    title: string,
    url: string,
    icon: string,
  },
  relations: {},
}

export type LinkId = Link['id']

export const links: Array<Link> = [{
  id: '',
  attributes: {
    title: '',
    url: '',
    icon: '',
  },
  relations: {

  }
}]
