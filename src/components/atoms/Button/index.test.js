import React from 'react'
import { mount, shallow } from 'enzyme'
import Button from './'
import theme from '../../themes/default'

const wrap = (props = {}) => shallow(<Button theme={theme} {...props} />)
const wrapMounted = (props = {}) => mount(<Button theme={theme} {...props} />)

it('renders with different combination of props', () => {
  wrap({ disabled: true })
})

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })

  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrapMounted({ type: 'submit' })

  expect(wrapper.find({ type: 'submit' }).exists()).toEqual(true)
})

it('renders button by default', () => {
  const wrapper = wrapMounted()

  expect(wrapper.find('button').exists()).toEqual(true)
})
