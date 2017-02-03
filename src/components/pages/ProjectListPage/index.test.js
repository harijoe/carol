import React from 'react'
import { shallow } from 'enzyme'
import ProjectPage from './'

it('renders', () => {
  const wrapper = shallow(<ProjectPage />)

  expect(wrapper).toMatchSnapshot()
})
