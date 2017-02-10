import React from 'react'
import { shallow } from 'enzyme'

import intlMock from '../../../../test/intlMock'
import GoogleLogin from '.'

it('renders GoogleLogin component', () => {
  const wrapper = shallow(intlMock(<GoogleLogin />))

  expect(wrapper).toMatchSnapshot()
})
