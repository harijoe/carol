import React from 'react'
import { shallow } from 'enzyme'

import mockIntl from '../../../../test/intlMock'
import SignUpForm from './'

it('renders SignUpForm component', () => {
  const wrapper = shallow(mockIntl(<SignUpForm />))

  expect(wrapper).toMatchSnapshot()
})
