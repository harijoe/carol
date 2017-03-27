import React from 'react'
import { mount, shallow } from 'enzyme'
import Button from './'

const wrap = (props = {}) => shallow(<Button {...props} />)
const wrapMounted = (props = {}) => mount(<Button {...props} />)

it('renders with different combination of props', () => {
  wrap({ disabled: true })
})

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })

  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrapMounted({ type: 'submit' })

  expect(wrapper.find({ type: 'submit' })).toHaveLength(1)
})

it('renders button by default', () => {
  const wrapper = wrapMounted()

  expect(wrapper.find('button')).toHaveLength(1)
})
