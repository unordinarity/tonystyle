import { stitches } from 'src/shared/ui'

const Container = stitches.styled('footer', {
  width: '100%',
  height: '40px',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  gap: '20px',
})

const Point = stitches.styled('div', {

})

export const footer = {
  Container,
  Point,
}
