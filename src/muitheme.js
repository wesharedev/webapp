const colors = {
  primary: '#0052C8',
  secondary: '#003787',
  base1: '#F7F9FF',
  base2: '#F0F0FF',
  base3: '#EAE9FC',
  base4: '#A5ACD1',
  base5: '#8887B1',
  base6: '#5B5A86',
  base7: '#41417A',
  supportGreen: '#37D19A',
  supportRed: '#FF5151',
  supportOrange: '#FF8A00',
  supportBlue: '#0085FF',
  brandYellow: '#FFD213',
  brandBlue0: '#0052C8',
  brandBlue1: '#85B7FF',
  brandBlue2: '#BDD8FF',
  brandBlue3: '#DEECFF',
  brandBlue4: '#EEF5FF',
  pureWhite: '#FFFFFF',
  overlay: 'rgba(0, 0, 0, 0.6)',
  background: '#F0F0F0',
  facebookButton: '#1877F2',
}

const palette = {
  common: colors,
  primary: {
    light: colors.primary,
    main: colors.primary,
    dark: colors.secondary,
  },
  secondary: {
    light: colors.primary,
    main: colors.secondary,
    dark: colors.secondary,
  },
  error: {
    light: colors.supportRed,
    main: colors.supportRed,
    dark: colors.supportRed,
  },
  warning: {
    light: colors.brandYellow,
    main: colors.brandYellow,
    dark: colors.brandYellow,
  },
  info: {
    light: colors.brandBlue1,
    main: colors.brandBlue1,
    dark: colors.brandBlue1,
  },
  success: {
    light: colors.supportGreen,
    main: colors.supportGreen,
    dark: colors.supportGreen,
  },
}

const overrides = {
  MuiTextField: {
    root: {
      width: '100%',
    },
  },
}

const spacing = (factor) => {
  return `${0.5 * factor}rem`
}

const isLightColor = (color) => {
  return [
    'base1',
    'brandBlue3',
    'brandBlue4',
    'pureWhite',
  ].includes(color)
}

const typography = {
  fontFamily: '\'Inter\', sans-serif',
  fontSize: 16,
}

const global = {
  // Maximum content width when resolution is large
  maxContentWidth: 960,
}

export default {
  global,
  spacing,
  palette,
  overrides,
  typography,
  isLightColor,
}
