import React from 'react'
import { shallow } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import theme from 'theme/default'

import Dots from './'

it('renders the Dots component', () => {
  expect(
    shallow(
      <ThemeProvider theme={theme}>
        <Dots />
      </ThemeProvider>,
    ),
  ).toMatchSnapshot()
})
