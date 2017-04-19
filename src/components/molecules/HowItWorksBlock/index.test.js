import React from 'react'
import { shallow } from 'enzyme'

import HowItWorksBlock from './'

it('renders the HowItWorksBlock component', () => {
  expect(shallow(<HowItWorksBlock title="Test" Content="Test content" />)).toMatchSnapshot()
})
