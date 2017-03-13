import React from 'react'
import { shallow } from 'enzyme'

import mockIntl from '../../../../test/intlMock'
import HowItWorksBlock from './'

it('renders the HowItWorksBlock component', () => {
  const wrapper = shallow(mockIntl(<HowItWorksBlock title="Test" Content="Test content" />))

  expect(wrapper).toMatchSnapshot()
})
