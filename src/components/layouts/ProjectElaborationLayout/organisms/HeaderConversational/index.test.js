import React from 'react'
import { shallow } from 'enzyme'

import HeaderConversational from '.'
import theme from '../../../../themes/default'

it('renders the HeaderConversational component', () => {
  expect(shallow(<HeaderConversational theme={theme} />)).toMatchSnapshot()
})
