import React from 'react'
import { shallow } from 'enzyme'
import ListItem from '.'
import theme from '../../themes/default'

const wrap = (props = {}) => shallow(<ListItem theme={theme} {...props} />).dive()

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })

  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })

  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders li by default', () => {
  const wrapper = wrap()

  expect(wrapper.find('li').length).toBeGreaterThan(0)
})
