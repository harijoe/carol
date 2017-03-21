import React from 'react'
import { shallow } from 'enzyme'

import mockIntl from '../../../../test/intlMock'
import Hero from './'

it('renders the Hero component', () => {
  const wrapper = shallow(mockIntl(<Hero />))

  expect(wrapper).toMatchSnapshot()
})