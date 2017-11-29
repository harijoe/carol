import React from 'react'
import { shallow } from 'enzyme'

import intlMock from 'mocks/intlMock'
import FacebookLogin from '.'

it('renders FacebookLogin component', () => {
  const wrapper = shallow(intlMock(<FacebookLogin />))

  expect(wrapper).toMatchSnapshot()
})
