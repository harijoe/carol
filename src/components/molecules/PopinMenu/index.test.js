import React from 'react'
import { shallow } from 'enzyme'

import PopinMenu from './'

it('renders PopinMenu', () => {
  const wrapper = shallow(<PopinMenu menu={['hello']}>Test</PopinMenu>)

  expect(wrapper).toMatchSnapshot()
})
