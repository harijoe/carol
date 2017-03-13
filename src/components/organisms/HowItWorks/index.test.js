import React from 'react'
import { shallow } from 'enzyme'

import mockIntl from '../../../../test/intlMock'
import HowItWorks from './'

it('renders the HowItWorks component', () => {
  const wrapper = shallow(mockIntl(<HowItWorks title="Test" Content="Test content" />))

  expect(wrapper).toMatchSnapshot()
})
