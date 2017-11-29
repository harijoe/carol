import React from 'react'
import { shallow } from 'enzyme'
import theme from 'theme/default'
import Input from '.'

const wrap = (props = {}) => shallow(<Input theme={theme} {...props} />).dive()

it('renders input by default', () => {
  const wrapper = wrap()

  expect(wrapper.find('input')).toHaveLength(1)
})

it('renders select when type is select', () => {
  const wrapper = wrap({ type: 'select' })

  expect(wrapper.find('select')).toHaveLength(1)
})

it('renders textarea when type is textarea', () => {
  const wrapper = wrap({ type: 'textarea' })

  expect(wrapper.find('textarea')).toHaveLength(1)
})
