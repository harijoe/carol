import React from 'react'
import { shallow } from 'enzyme'
import MessagePage from './'

it('renders MessagePage', () => {
  expect(shallow(<MessagePage />)).toMatchSnapshot()
})
