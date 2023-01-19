import { createTheme } from '@stitches/react'
import { gray, grayDark, limeDark, mintDark, red, redDark, skyDark, yellow, yellowDark } from '@radix-ui/colors'
import tinycolor from 'tinycolor2'
import { mapValues } from 'lodash-es'

const palettes = {
  gray,
  grayDark,
  red: mapValues(red, color => {
    const instance = tinycolor(color)
    instance.spin(354 - instance.toHsl().h)
    instance.saturate(20)
    return instance.toHslString()
  }),
  redDark: mapValues(redDark, color => {
    const instance = tinycolor(color)
    instance.spin(354 - instance.toHsl().h)
    instance.saturate(20)
    return instance.toHslString()
  }),
  yellow,
  yellowDark,
}

interface Preset {
  back: string,
  surface: string,
  overlay: string,
  decoration: string,
  content: string,
  highlight: string,
}

const presets = {
  whiteOnBlack: {
    back: palettes.grayDark.gray1,
    surface: palettes.grayDark.gray2,
    overlay: palettes.grayDark.gray3,
    decoration: palettes.grayDark.gray6,
    content: palettes.grayDark.gray12,
    highlight: palettes.redDark.red9,
  } as Preset,
  whiteOnRed: {
    back: palettes.redDark.red7,
    surface: palettes.redDark.red8,
    overlay: palettes.redDark.red9,
    decoration: palettes.redDark.red11,
    content: palettes.redDark.red12,
    highlight: palettes.yellowDark.yellow9,
  } as Preset,
  blackOnRed: {
    back: palettes.red.red7,
    surface: palettes.red.red8,
    overlay: palettes.red.red9,
    decoration: palettes.red.red10,
    content: palettes.gray.gray12,
    highlight: palettes.yellowDark.yellow9,
  } as Preset,
  blackOnWhite: {
    back: palettes.gray.gray1,
    surface: palettes.gray.gray2,
    overlay: palettes.gray.gray3,
    decoration: palettes.gray.gray8,
    content: palettes.gray.gray12,
    highlight: palettes.redDark.red9,
  } as Preset,
}

interface Theme {
  primaryBack: string,
  primarySurface: string,
  primaryOverlay: string,
  primaryDecoration: string,
  primaryContent: string,
  primaryHighlight: string,
  secondaryBack: string,
  secondarySurface: string,
  secondaryOverlay: string,
  secondaryDecoration: string,
  secondaryContent: string,
  secondaryHighlight: string,
  tertiaryBack: string,
  tertiarySurface: string,
  tertiaryOverlay: string,
  tertiaryDecoration: string,
  tertiaryContent: string,
  tertiaryHighlight: string,
}

const themes = {
  stub: {
    primaryBack: skyDark.sky9,
    primarySurface: skyDark.sky9,
    primaryOverlay: skyDark.sky9,
    primaryDecoration: skyDark.sky9,
    primaryContent: skyDark.sky9,
    primaryHighlight: skyDark.sky9,
    secondaryBack: mintDark.mint9,
    secondarySurface: mintDark.mint9,
    secondaryOverlay: mintDark.mint9,
    secondaryDecoration: mintDark.mint9,
    secondaryContent: mintDark.mint9,
    secondaryHighlight: mintDark.mint9,
    tertiaryBack: limeDark.lime9,
    tertiarySurface: limeDark.lime9,
    tertiaryOverlay: limeDark.lime9,
    tertiaryDecoration: limeDark.lime9,
    tertiaryContent: limeDark.lime9,
    tertiaryHighlight: limeDark.lime9,
  } as Theme,
  darkBright: {
    primaryBack: presets.whiteOnBlack.back,
    primarySurface: presets.whiteOnBlack.surface,
    primaryOverlay: presets.whiteOnBlack.overlay,
    primaryDecoration: presets.whiteOnBlack.decoration,
    primaryContent: presets.whiteOnBlack.content,
    primaryHighlight: presets.whiteOnBlack.highlight,
    secondaryBack: presets.whiteOnRed.back,
    secondarySurface: presets.whiteOnRed.surface,
    secondaryOverlay: presets.whiteOnRed.overlay,
    secondaryDecoration: presets.whiteOnRed.decoration,
    secondaryContent: presets.whiteOnRed.content,
    secondaryHighlight: presets.whiteOnRed.highlight,
    tertiaryBack: presets.blackOnWhite.back,
    tertiarySurface: presets.blackOnWhite.surface,
    tertiaryOverlay: presets.blackOnWhite.overlay,
    tertiaryDecoration: presets.blackOnWhite.decoration,
    tertiaryContent: presets.blackOnWhite.content,
    tertiaryHighlight: presets.blackOnWhite.highlight,
  } as Theme,
  darkDim: {
    primaryBack: presets.whiteOnBlack.back,
    primarySurface: presets.whiteOnBlack.surface,
    primaryOverlay: presets.whiteOnBlack.overlay,
    primaryDecoration: presets.whiteOnBlack.decoration,
    primaryContent: presets.whiteOnBlack.content,
    primaryHighlight: presets.whiteOnBlack.highlight,
    secondaryBack: presets.blackOnWhite.back,
    secondarySurface: presets.blackOnWhite.surface,
    secondaryOverlay: presets.blackOnWhite.overlay,
    secondaryDecoration: presets.blackOnWhite.decoration,
    secondaryContent: presets.blackOnWhite.content,
    secondaryHighlight: presets.blackOnWhite.highlight,
    tertiaryBack: presets.whiteOnRed.back,
    tertiarySurface: presets.whiteOnRed.surface,
    tertiaryOverlay: presets.whiteOnRed.overlay,
    tertiaryDecoration: presets.whiteOnRed.decoration,
    tertiaryContent: presets.whiteOnRed.content,
    tertiaryHighlight: presets.whiteOnRed.highlight,
  } as Theme,
  lightBright: {
    primaryBack: presets.blackOnWhite.back,
    primarySurface: presets.blackOnWhite.surface,
    primaryOverlay: presets.blackOnWhite.overlay,
    primaryDecoration: presets.blackOnWhite.decoration,
    primaryContent: presets.blackOnWhite.content,
    primaryHighlight: presets.blackOnWhite.highlight,
    secondaryBack: presets.blackOnRed.back,
    secondarySurface: presets.blackOnRed.surface,
    secondaryOverlay: presets.blackOnRed.overlay,
    secondaryDecoration: presets.blackOnRed.decoration,
    secondaryContent: presets.blackOnRed.content,
    secondaryHighlight: presets.blackOnRed.highlight,
    tertiaryBack: presets.whiteOnBlack.back,
    tertiarySurface: presets.whiteOnBlack.surface,
    tertiaryOverlay: presets.whiteOnBlack.overlay,
    tertiaryDecoration: presets.whiteOnBlack.decoration,
    tertiaryContent: presets.whiteOnBlack.content,
    tertiaryHighlight: presets.whiteOnBlack.highlight,
  } as Theme,
  lightDim: {
    primaryBack: presets.blackOnWhite.back,
    primarySurface: presets.blackOnWhite.surface,
    primaryOverlay: presets.blackOnWhite.overlay,
    primaryDecoration: presets.blackOnWhite.decoration,
    primaryContent: presets.blackOnWhite.content,
    primaryHighlight: presets.blackOnWhite.highlight,
    secondaryBack: presets.whiteOnBlack.back,
    secondarySurface: presets.whiteOnBlack.surface,
    secondaryOverlay: presets.whiteOnBlack.overlay,
    secondaryDecoration: presets.whiteOnBlack.decoration,
    secondaryContent: presets.whiteOnBlack.content,
    secondaryHighlight: presets.whiteOnBlack.highlight,
    tertiaryBack: presets.blackOnRed.back,
    tertiarySurface: presets.blackOnRed.surface,
    tertiaryOverlay: presets.blackOnRed.overlay,
    tertiaryDecoration: presets.blackOnRed.decoration,
    tertiaryContent: presets.blackOnRed.content,
    tertiaryHighlight: presets.blackOnRed.highlight,
  } as Theme,
}

const themesStitches = {
  stub: createTheme({
    colors: { ...themes.stub },
  }),
  darkBright: createTheme({
    colors: { ...themes.darkBright },
  }),
  darkDim: createTheme({
    colors: { ...themes.darkDim },
  }),
  lightBright: createTheme({
    colors: { ...themes.lightBright },
  }),
  lightDim: createTheme({
    colors: { ...themes.lightDim },
  }),
}

export const color = {
  themes,
  themesStitches,
}
