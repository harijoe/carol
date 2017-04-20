import React from 'react'
import { shallow } from 'enzyme'

import PopinMenuButton from './'

it('renders PopinMenuButton', () => {
  const wrapper = shallow(<PopinMenuButton onClick={() => {}}>Test</PopinMenuButton>)

  expect(wrapper).toMatchSnapshot()
})
