import React from 'react'
import { shallow } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import ProfileForm from '.'
import theme from '../../themes/default'
import mockIntl from '../../../../test/intlMock'

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
