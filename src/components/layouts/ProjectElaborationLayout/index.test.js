import React from 'react'
import { shallow } from 'enzyme'

import ProjectElaborationLayout from './'

it('should render ProjectElaborationLayout component', () => {
  expect(shallow(<ProjectElaborationLayout>test children</ProjectElaborationLayout>)).toMatchSnapshot()
})
