import React from 'react'
import { shallow } from 'enzyme'
import MessagePage from './'

it('should render MessagePage componen', () => {
  expect(shallow(<MessagePage />)).toMatchSnapshot()
})
