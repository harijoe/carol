import React from 'react'
import { shallow } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import theme from 'theme/default'

import BouncingBall from './'

it('renders the BouncingBall component', () => {
  expect(
    shallow(
      <ThemeProvider theme={theme}>
        <BouncingBall />
      </ThemeProvider>
    ),
  ).toMatchSnapshot()
})
