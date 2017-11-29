import React from 'react'
import { shallow } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import theme from 'theme/default'
import mockIntl from 'mocks/intlMock'
import ProfileForm from '.'

const wrap = (props = {}) =>
  shallow(
    mockIntl(
      <ThemeProvider theme={theme}>
        <ProfileForm {...props} />
      </ThemeProvider>,
    ),
  )

it('renders ProfileForm', () => {
  expect(wrap()).toMatchSnapshot()
})
