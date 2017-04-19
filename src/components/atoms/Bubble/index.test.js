import React from 'react'
import { shallow } from 'enzyme'
import theme from 'components/themes/default'
import { ThemeProvider } from 'styled-components'

import Bubble from './'

it('renders the Bubble component', () => {
  expect(shallow(<ThemeProvider theme={theme}><Bubble /></ThemeProvider>)).toMatchSnapshot()
})
