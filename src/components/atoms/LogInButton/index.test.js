import React from 'react'
import { shallow } from 'enzyme'

import mockIntl from '../../../../test/intlMock'
import LogInButton from '.'

it('renders the LogInButton component', () => {
  const wrapper = shallow(mockIntl(<LogInButton />))

  expect(wrapper).toMatchSnapshot()
})
