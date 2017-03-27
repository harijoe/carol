import resetsBase from 'components/themes/resets'
import scaffoldingBase from 'components/themes/scaffolding'

const theme = {}

theme.colors = {
  grayscale: {
    darkest: '#131313',
    darker: '#383838',
    dark: '#5E5E5E',
    medium: '#ABABAB',
    light: '#D1D1D1',
    lighter: '#EBEBEB',
    lightest: '#F9F9F9',
  },
  primary: '#3333FE',
  secondary: '#FDB63F',
  white: '#FFF',
  black: '#262626',
  grey: '#EEE',
  danger: '#d32f2f',
  alert: '#ffa000',
  success: '#388e3c',
}

theme.fonts = {
  size: {
    reset: '62.5%',
    base: '1.4rem',
    root: '1rem',
    xs: '1rem',
    s: '1.2rem',
    m: '1.5rem',
    l: '1.8rem',
    xl: '2.4rem',
    xxl: '3.2rem',
    xxxl: '5rem',
  },
  family: {
    andesLight: 'andes-extralight, serif',
    andesBlack: 'andes-black, serif',
    montserratLight: 'montserrat-light, sans-serif',
    montserratBold: 'montserrat-bold, sans-serif',
    montserratBlack: 'montserrat-black, sans-serif',
  },
}

theme.spaces = {
  xs: '.4rem',
  s: '.8rem',
  m: '1.6rem',
  l: '2.5rem',
  xl: '3.2rem',
  xxl: '5rem',
  xxxl: '10rem',
}

theme.grid = {
  gridSize: 12,
  container: 120,
  gutterWidth: {
    xs: 1.6,
    s: 1.6,
    m: 1.6,
    l: 1.6,
    xl: 1.6,
  },
  outerMargin: {
    xs: 1.6,
    s: 1.6,
    m: 1.6,
    l: 1.6,
    xl: 1.6,
  },
  breakpoints: {
    xs: 0,
    s: 576,
    m: 768,
    l: 992,
    xl: 1200,
  },
  padding: {
    xs: 1.6,
    s: 1.6,
    m: 2.5,
    l: 2.5,
    xl: 2.5,
  },
}

export default theme
export const resets = resetsBase
export const scaffolding = scaffoldingBase(theme)
