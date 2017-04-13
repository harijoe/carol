import React from 'react'
import { shallow } from 'enzyme'

import ProjectElaborationQuestion from './'

const wrap = (props = {}) => shallow(<ProjectElaborationQuestion {...props} />)

it('renders Question', () => {
  const wrapper = wrap({ children: 'my question' })

  expect(wrapper.find('BubbleQuestion')).toHaveLength(1)
  expect(wrapper).toMatchSnapshot()
})

it('renders null', () => {
  expect(wrap().node).toBeNull()
})
