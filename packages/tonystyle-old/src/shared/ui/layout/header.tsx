import { stitches } from 'src/shared/ui'

const Container = stitches.styled('div', {
  width: '100%',

  padding: '10px 20px',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'stretch',
})

const Side = stitches.styled('div', {
  flex: '0 1 auto',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  gap: '20px',
})

const Center = stitches.styled('div', {})

export const header = {
  Container,
  Side,
  Center,
}
