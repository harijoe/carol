import React from 'react'
import { shallow } from 'enzyme'

import GoogleTagManager from './'

it('renders the GoogleTagManager component', () => {
  const wrapper = shallow(<GoogleTagManager gtmId="GTM-123" />)

  expect(wrapper).toMatchSnapshot()
})
