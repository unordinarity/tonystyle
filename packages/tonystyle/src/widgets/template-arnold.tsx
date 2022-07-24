import React, { FunctionComponent, ReactNode } from 'react'

import { stitches } from 'src/shared/ui'

const sections: Array<{
  id: string,
  title: string,
  content: ReactNode,
}> = [{
  id: 'jumbo',
  title: 'Jumbo',
  content: 'Jumbo',
}, {
  id: 'about',
  title: 'About',
  content: 'About',
}, {
  id: 'experience',
  title: 'Experience',
  content: 'Experience',
}, {
  id: 'articles',
  title: 'Articles',
  content: 'Articles',
}, {
  id: 'projects',
  title: 'Projects',
  content: 'Projects',
}, {
  id: 'services',
  title: 'Services',
  content: 'Services',
}]

const variables = {
  sizeFlank: '30vh',
  sizeFlankSticky: '40px',
  sizeSection: '100vh',
}

const Container = stitches.styled('div', {
  position: 'relative',
  overflow: 'scroll',
  scrollSnapType: 'y mandatory',
  height: '100vh',
})

const Header = {
  Container: stitches.styled('header', {
    position: 'fixed',
    top: 0,
    left: 0,

    width: '50vw',
    height: variables.sizeFlank,

    display: 'flex',
    flexDirection: 'column',
  }),
  Fixed: stitches.styled('div', {
    flexBasis: variables.sizeFlankSticky,

    zIndex: 1,

    backgroundColor: '#0000FF22'
  }),
  Floating: stitches.styled('div', {
    flexBasis: 0,
    flexGrow: 1,

    zIndex: 1,

    backgroundColor: '#0000FF22'
  }),
}

const Footer = {
  Container: stitches.styled('footer', {
    position: 'fixed',
    bottom: 0,
    right: 0,

    width: '50vw',
    height: variables.sizeFlank,

    display: 'flex',
    flexDirection: 'column',
  }),
  Floating: stitches.styled('div', {
    flexBasis: 0,
    flexGrow: 1,

    zIndex: 1,

    backgroundColor: '#0000FF22',
  }),
  Fixed: stitches.styled('div', {
    flexBasis: variables.sizeFlankSticky,

    zIndex: 1,

    backgroundColor: '#0000FF22'
  }),
}

const Grid = stitches.styled('main', {
  display: 'grid',
  gridAutoFlow: 'row dense',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows:
    `calc(${variables.sizeFlank} - ${variables.sizeFlankSticky}) ` +
    `repeat(${sections.length - 1}, calc(${variables.sizeSection} - ${variables.sizeFlankSticky})) ` +
    `calc(${variables.sizeFlank} - ${variables.sizeFlankSticky})`,

  '& > *:nth-child(2n + 1)': {
    transform: `translateY(${variables.sizeFlankSticky})`,
    scrollMarginBlockStart: variables.sizeFlankSticky,
  },

  paddingBottom: variables.sizeFlankSticky
})

const GridSectionContainer = stitches.styled('section', {
  gridRowStart: 'span 2',
  gridColumnStart: 'span 1',

  position: 'relative',

  scrollSnapAlign: 'start',
})

const GridSectionContent = stitches.styled('div', {
  position: 'sticky',
  top: '0',
  left: '0',
  right: '0',
  alignSelf: 'stretch',
  height: `calc(${variables.sizeSection} - ${variables.sizeFlankSticky})`,

  backgroundColor: '#FF000022'
})

const GridSectionPlaceholder = stitches.styled('div', {
  gridRowStart: 'span 1',
  gridColumnStart: 'span 1',
})

const GridHeaderPlaceholder = stitches.styled(GridSectionPlaceholder, {
  scrollSnapAlign: 'start',
})

const GridFooterPlaceholder = stitches.styled(GridSectionPlaceholder, {
  scrollSnapAlign: 'end',
  scrollMarginBlockEnd: variables.sizeFlankSticky,
})

export const TemplateArnold: FunctionComponent = () => (
  <Container>
    <Header.Container>
      <Header.Fixed>
        Header fixed items
      </Header.Fixed>
      <Header.Floating>
        <ul>
          {sections.map(section => (
            <li key={section.id}>{section.id}</li>
          ))}
        </ul>
      </Header.Floating>
    </Header.Container>
    <Grid>
      <GridHeaderPlaceholder />
      {sections.map(section => (
        <GridSectionContainer key={section.id}>
          <GridSectionContent>
            {section.content}
          </GridSectionContent>
        </GridSectionContainer>
      ))}
      <GridFooterPlaceholder />
    </Grid>
    <Footer.Container>
      <Footer.Floating>
        Footer menu
      </Footer.Floating>
      <Footer.Fixed>
        Social links
      </Footer.Fixed>
    </Footer.Container>
  </Container>
)
