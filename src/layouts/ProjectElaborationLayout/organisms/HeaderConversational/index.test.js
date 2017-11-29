import React from 'react'
import { shallow } from 'enzyme'

import theme from 'theme/default'
import HeaderConversational from '.'

it('renders the HeaderConversational component', () => {
  expect(shallow(<HeaderConversational theme={theme} />)).toMatchSnapshot()
})
