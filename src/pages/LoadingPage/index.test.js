import React from 'react'
import { shallow } from 'enzyme'
import LoadingPage from './'

it('renders LoadingPage', () => {
  expect(shallow(<LoadingPage />)).toMatchSnapshot()
})
