import React from 'react'
import { shallow } from 'enzyme'
import HomePage from './'

it('renders HomePage', () => {
  expect(shallow(<HomePage />)).toMatchSnapshot()
})
