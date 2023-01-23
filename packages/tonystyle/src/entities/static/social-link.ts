import { mdiEmailOutline, mdiGithub, mdiInstagram, mdiLinkedin, mdiSend, mdiTwitter } from '@mdi/js'
import { IconProps } from '@mdi/react/dist/IconProps'

export namespace SocialLink {
  export interface Model {
    label: string
    icon: IconProps['path']
    url: string
    username?: string
  }

  export const map = {
    twitter: {
      label: 'Twitter',
      icon: mdiTwitter,
      url: 'https://twitter.com/unordinarity',
      username: 'unordinarity',
    } as Model,
    telegram: {
      label: 'Telegram',
      icon: mdiSend,
      url: 'https://t.me/unordinarity',
      username: 'unordinarity',
    } as Model,
    github: {
      label: 'Github',
      icon: mdiGithub,
      url: 'https://github.com/unordinarity/',
      username: 'unordinarity',
    } as Model,
    instagram: {
      label: 'Instagram',
      icon: mdiInstagram,
      url: 'https://instagram.com/unordinarity/',
      username: 'unordinarity',
    } as Model,
    linkedIn: {
      label: 'LinkedIn',
      icon: mdiLinkedin,
      url: 'https://www.linkedin.com/in/unordinarity/',
      username: 'unordinarity',
    } as Model,
    mail: {
      label: 'Mail',
      icon: mdiEmailOutline,
      url: 'mailto:unordinarity@yandex.ru?subject=Partnership',
    } as Model,
  } as const


  export const list: Array<Model> = Object.values(map)
}
