import { createRoute } from 'atomic-router'

export const routeMap = {
  home: {
    path: '/',
    route: createRoute(),
  },
  about: {
    home: createRoute(),
    experience: createRoute(),
    personal: createRoute(),
    consulting: createRoute(),
  },
  blog: {
    home: createRoute(),
    post: createRoute<{ id: string }>(),
    tag: createRoute<{ slug: string }>()
  },
  notFound: createRoute(),
  projects: {
    home: createRoute(),
    pinkDesktop: createRoute(),
    chlorine: createRoute(),
    spyShit: createRoute(),
    reachStacker: createRoute(),
    bookMarker: createRoute(),
  }
}
