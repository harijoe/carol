import React from 'react'
import { shallow } from 'enzyme'

import mockIntl from '../../../../test/intlMock'
import Footer from './'

it('renders the Footer component', () => {
  const wrapper = shallow(mockIntl(<Footer />))

  expect(wrapper).toMatchSnapshot()
})
