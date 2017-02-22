import React from 'react'
import { shallow } from 'enzyme'

import Question from './'

const wrap = (props = {}) => shallow(<Question {...props} />)

it('renders Question', () => {
  const wrapper = wrap({ question: 'my question' })

  expect(wrapper.find('BubbleQuestion')).toHaveLength(1)
  expect(wrapper).toMatchSnapshot()
})

it('renders null', () => {
  expect(wrap().node).toBeNull()
})
