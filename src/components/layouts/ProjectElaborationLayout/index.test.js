import React from 'react'
import { shallow } from 'enzyme'

import ProjectElaborationLayout from './'

it('should render ProjectElaborationLayout component', () => {
  expect(shallow(<ProjectElaborationLayout children="test children" />)).toMatchSnapshot()
})
