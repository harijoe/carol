import React from 'react'
import { shallow } from 'enzyme'
import ProjectPage from './'

it('renders ProjectPage', () => {
  expect(shallow(<ProjectPage match={{ params: { projectId: '1' }}} />)).toMatchSnapshot()
})
