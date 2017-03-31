import React from 'react'
import { shallow } from 'enzyme'
import ProjectElaborationPage from './'

it('renders Form', () => {
  expect(shallow(<ProjectElaborationPage />)).toMatchSnapshot()
})
