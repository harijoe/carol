import React from 'react'
import { shallow } from 'enzyme'
import LoginPage from './'

it('renders LoginPage', () => {
  expect(shallow(<LoginPage />)).toMatchSnapshot()
})
