import React from 'react'
import { mount, shallow } from 'enzyme'
import Link from '.'
import theme from '../../themes/default'

const wrap = (props = {}) => shallow(<Link theme={theme} {...props} />).dive()
const wrapMounted = (props = {}) => mount(<Link theme={theme} {...props} />)

it('mounts with different combination of props', () => {
  mount(<Link theme={theme} />)
  mount(<Link theme={theme} light />)
  mount(<Link theme={theme} light>test</Link>)
})

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })

  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })

  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders anchor by default', () => {
  const wrapper = wrap()

  expect(wrapper.find('a').length).toBeGreaterThan(0)
})

it('renders Link when prop to is passed in', () => {
  const wrapper = wrapMounted({ to: 'test' })

  expect(wrapper.prop('to')).toEqual('test')
})
