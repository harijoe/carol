import React from 'react'
import { shallow } from 'enzyme'

import PopinMenuLink from './'

it('renders PopinMenuLink', () => {
  const wrapper = shallow(<PopinMenuLink to="test">Test</PopinMenuLink>)

  expect(wrapper).toMatchSnapshot()
})
