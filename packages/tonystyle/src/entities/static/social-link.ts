import { mdiEmailOutline, mdiGithub, mdiInstagram, mdiLinkedin, mdiSend, mdiTwitter } from '@mdi/js'
import { IconProps } from '@mdi/react/dist/IconProps'

export namespace SocialLink {
  export interface Model {
    title: string
    icon: IconProps['path']
    url: string
  }

  export const list: Array<Model> = [{
    title: 'Twitter',
    icon: mdiTwitter,
    url: 'https://twitter.com/unordinarity',
  }, {
    title: 'Telegram',
    icon: mdiSend,
    url: 'https://t.me/unordinarity',
  }, {
    title: 'Github',
    icon: mdiGithub,
    url: 'https://github.com/unordinarity/',
  }, {
    title: 'Instagram',
    icon: mdiInstagram,
    url: 'https://instagram.com/unordinarity/',
  }, {
    title: 'LinkedIn',
    icon: mdiLinkedin,
    url: 'https://www.linkedin.com/in/unordinarity/',
  }, {
    title: 'Mail',
    icon: mdiEmailOutline,
    url: 'mailto:unordinarity@yandex.ru?subject=Partnership',
  }]
}
