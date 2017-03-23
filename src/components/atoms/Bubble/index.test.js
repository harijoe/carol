import React from 'react'
import { shallow } from 'enzyme'

import Bubble from './'

it('renders the Bubble component', () => {
  expect(shallow(<Bubble />)).toMatchSnapshot()
})
