import React from 'react'
import { shallow } from 'enzyme'
import theme from 'theme/default'
import Heading from '.'

const wrap = (props = {}) => shallow(<Heading theme={theme} {...props} />).dive()

it('renders with different props', () => {
  wrap({ kind: 'primary' })
})

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })

  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })

  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders h1 by default', () => {
  const wrapper = wrap()

  expect(wrapper.find('h1')).toHaveLength(1)
})

it('renders hLevel when level is passed in', () => {
  const wrapper = wrap({ level: 2 })

  expect(wrapper.find('h2')).toHaveLength(1)
})
