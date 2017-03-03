import React from 'react'
import { shallow } from 'enzyme'
import Block from './'
import theme from '../../themes/default'

const wrap = (props = {}) => shallow(<Block theme={theme} {...props} />)

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })

  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })

  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
