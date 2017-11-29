import React from 'react'
import { shallow } from 'enzyme'

import ReinsuranceCarousel from './'

it('renders ReinsuranceCarousel', () => {
  expect(shallow(<ReinsuranceCarousel />)).toMatchSnapshot()
})
