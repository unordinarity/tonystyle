import { stitches } from '../stitches'

const properties = {
  backgroundImage: `$paper`,
  backgroundBlendMode: 'multiply',
  backgroundColor: '$secondarySurface',
  color: '$secondaryContent',
  boxShadow: '0 0 8px -4px $colors$primaryBack',
  border: '0.5px solid $secondaryBack',
}

const classname = stitches.css(properties)()

export const paperCard = {
  properties,
  classname,
}
