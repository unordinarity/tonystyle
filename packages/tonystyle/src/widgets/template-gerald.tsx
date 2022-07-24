import React, { ComponentProps, FunctionComponent } from 'react'
import { Link } from 'gatsby'
import Icon from '@mdi/react'
import {
  mdiBriefcaseOutline,
  mdiFloppy, mdiGlasses,
  mdiHammerWrench,
  mdiLightbulbOutline,
  mdiNewspaperVariantOutline,
  mdiPhoneClassic,
  mdiStarOutline, mdiTrophyOutline,
} from '@mdi/js'

import { stitches } from 'src/shared/ui'
import { socialLink } from 'src/entities/static/social-link'

// container

const Container = stitches.styled('div', {
  width: '100%',
  height: '100%',
  overflow: 'scroll',
  position: 'relative',
})

const Content = stitches.styled('main', {
  gridTemplateAreas: [
    'header hero',
    'about experience',
    'articles projects',
    'services footer'
  ].map(elem => `'${elem}'`).join(' '),

})

// sections

const sectionPoints = [{
  id: 'hero',
  title: 'Hero',
  icon: mdiStarOutline,
  content: 'Hero'
}, {
  id: 'about',
  title: 'About',
  icon: mdiLightbulbOutline,
  content: 'About',
}, {
  id: 'experience',
  title: 'Experience',
  icon: mdiHammerWrench,
  content: 'Experience',
}, {
  id: 'articles',
  title: 'Articles',
  icon: mdiNewspaperVariantOutline,
  content: 'Articles',
}, {
  id: 'projects',
  title: 'Projects',
  icon: mdiFloppy,
  content: 'Projects',
}, {
  id: 'services',
  title: 'Services',
  icon: mdiBriefcaseOutline,
  content: 'Services',
}, {
  id: 'contacts',
  title: 'Contacts',
  icon: mdiPhoneClassic,
  content: 'Contacts'
}]

const Section = stitches.styled('section', {})

// header

const headerPoints = [{
  title: 'About',
  url: '/about',
  icon: mdiGlasses,
}, {
  title: 'Articles',
  url: '/articles',
  icon: mdiLightbulbOutline,
}, {
  title: 'Projects',
  url: '/projects',
  icon: mdiFloppy,
}]

const HeaderContainer = stitches.styled('header', {
  position: 'absolute',
})

const HeaderItem = stitches.styled('div', {})

// footer

const footerPoints = socialLink.list

const FooterContainer = stitches.styled('footer', {
  position: 'absolute',
  bottom: 0,
  right: 0,
})

const FooterPoint = stitches.styled('div', {

})

interface Props extends ComponentProps<typeof Container> {}

export const TemplateGerald: FunctionComponent<Props> = ({
  ...props
}) => (
  <Container {...props}>

    <HeaderContainer>
      {headerPoints.map(point => (
        <HeaderItem>
          <Link to={point.url}>
            <Icon path={point.icon} size="32px" />
          </Link>
        </HeaderItem>
      ))}
    </HeaderContainer>

    <Content>
      {sectionPoints.map(point => (
        <Section>
          {point.content}
        </Section>
      ))}
    </Content>

    <FooterContainer>
      {footerPoints.map(point => (
        <FooterPoint>
          <a href={point.url} target="_blank" rel="noopener noreferrer">
            <Icon path={point.icon} size="32px" />
          </a>
        </FooterPoint>
      ))}
    </FooterContainer>

  </Container>
)
