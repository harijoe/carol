import React from 'react'
import { shallow } from 'enzyme'

import intlMock from '../../../../test/intlMock'
import HomePage from './'

it('renders HomePage', () => {
  const wrapper = shallow(intlMock(<HomePage />))

  expect(wrapper).toMatchSnapshot()
})
