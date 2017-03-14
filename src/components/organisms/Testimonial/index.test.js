import React from 'react'
import { shallow } from 'enzyme'
import Testimonial from './'

it('renders Testimonial', () => {
  expect(shallow(<Testimonial />)).toMatchSnapshot()
})
