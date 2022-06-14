import { stitches } from '../stitches'

export const colorThemes = {
  lightContrast: stitches.createTheme({}),
  light: stitches.createTheme({
    colors: {
      background: '#F0F0F0',
      surface: '#F5F5F5',
      overlay: '#FAFAFA',
      text: 'rgba(0, 0, 0, 0.7)'
    }
  }),
  lightDimmed: stitches.createTheme({}),
  darkContrast: stitches.createTheme({}),
  dark: stitches.createTheme({
    colors: {
      background: '#1F1F1F',
      surface: '#262626',
      overlay: '#434343',
      text: 'rgba(255, 255, 255, 0.8)'
    }
  }),
  darkDimmed: stitches.createTheme({}),
  darkAmoled: stitches.createTheme({}),
}
