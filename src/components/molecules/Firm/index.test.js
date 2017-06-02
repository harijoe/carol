import React from 'react'
import { shallow } from 'enzyme'

import Firm from './'

it('renders the Firm component', () => {
  const wrapper = shallow(<Firm />)

  expect(wrapper).toMatchSnapshot()
})

it('renders the Firm component full', () => {
  const wrapper = shallow(<Firm full />)

  expect(wrapper).toMatchSnapshot()
})
