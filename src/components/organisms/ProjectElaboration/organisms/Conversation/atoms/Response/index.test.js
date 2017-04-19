import React from 'react'
import { shallow } from 'enzyme'

import Response from './'

const wrap = (props = {}) => shallow(<Response {...props} />)

it('renders Response', () => {
  const wrapper = wrap({ response: 'response' })

  expect(wrapper).toMatchSnapshot()
})

it('renders null', () => {
  expect(wrap().node).toBeNull()
})
