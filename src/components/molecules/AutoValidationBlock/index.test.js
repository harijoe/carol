import React from 'react'
import { shallow } from 'enzyme'

import AutoValidationBlock from './'

it('renders the AutoValidationBlock component', () => {
  expect(shallow(<AutoValidationBlock title="Test" Content="Test content" />)).toMatchSnapshot()
})
