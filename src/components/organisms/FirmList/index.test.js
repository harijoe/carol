import React from 'react'
import { shallow } from 'enzyme'
import { ThemeProvider } from 'styled-components'

import theme from '../../themes/default'
import mockIntl from '../../../../test/intlMock'
import FirmList from './'

const list = [
  { id: 1, name: 'firm 1' },
  { id: 2, name: 'firm 2' },
  { id: 3, name: 'firm 3' },
]

const wrap = (props = {}) => shallow(mockIntl(<ThemeProvider theme={theme}><FirmList {...{ list, ...props }} /></ThemeProvider>))

it('renders FirmList', () => {
  const wrapper = wrap()

  expect(wrapper).toMatchSnapshot()
})
