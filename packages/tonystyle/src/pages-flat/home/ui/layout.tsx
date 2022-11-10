import React, { FunctionComponent, ReactNode } from 'react'
import { stitches } from 'src/shared/ui'

const Container = stitches.styled('div', {
  width: '100%',
  height: '100vh',

  display: 'flex',
  flexDirection: 'column',

  overflow: 'scroll',
  scrollSnapType: 'y mandatory',

  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
})

const SectionPlaceholder = stitches.styled('div', {
  position: 'relative',
  height: '100vh',
  flex: '0 0 100vh',

  scrollSnapAlign: 'center',

  pointerEvents: 'none',
})

const SectionSurface = stitches.styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: '200vh',
})

const SectionContent = stitches.styled('section', {
  width: '100%',
  height: '100vh',
  position: 'sticky',
  top: 0,
  left: 0,
  right: 0,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  '& > *': {
    pointerEvents: 'all',
  }
})

const Section: FunctionComponent<{ children?: ReactNode }> = ({
  children,
}) => (
  <SectionPlaceholder>
    <SectionSurface>
      <SectionContent>
        {children}
      </SectionContent>
    </SectionSurface>
  </SectionPlaceholder>
)

export const Layout = {
  Container,
  Section
}
