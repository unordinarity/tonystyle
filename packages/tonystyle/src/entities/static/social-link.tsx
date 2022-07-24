import { mdiEmailOutline, mdiGithub, mdiInstagram, mdiLinkedin, mdiTwitter } from '@mdi/js'

const socialLinkList = [{
  title: 'Twitter',
  icon: mdiTwitter,
  url: 'https://twitter.com/unordinarity',
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

export const socialLink = {
  list: socialLinkList,
}
