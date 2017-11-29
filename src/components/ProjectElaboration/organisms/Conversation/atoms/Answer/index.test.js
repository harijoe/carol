import React from 'react'
import { shallow } from 'enzyme'

import Answer from './'

const wrap = (props = {}) => shallow(<Answer {...props} />)

it('renders Answer', () => {
  const wrapper = wrap({ answer: 'response' })

  expect(wrapper).toMatchSnapshot()
})

it('renders null', () => {
  expect(wrap().getElement()).toBeNull()
})
