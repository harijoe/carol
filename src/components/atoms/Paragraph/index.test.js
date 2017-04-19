import React from 'react'
import { shallow } from 'enzyme'
import Paragraph from '.'
import theme from '../../themes/default'

const wrap = (props = {}) => shallow(<Paragraph theme={theme} {...props} />)

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })

  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })

  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})
