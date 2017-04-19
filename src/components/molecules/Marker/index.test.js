import React from 'react'
import { shallow } from 'enzyme'

import Marker from './'

it('renders the Marker component', () => {
  const wrapper = shallow(<Marker title="test" trade="trade" />)

  expect(wrapper).toMatchSnapshot()
})
