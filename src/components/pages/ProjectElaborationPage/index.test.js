import React from 'react'
import { shallow } from 'enzyme'
import ProjectElaborationPage from './'

it('renders', () => {
  expect(shallow(<ProjectElaborationPage />)).toMatchSnapshot()
})
