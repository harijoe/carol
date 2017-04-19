import React from 'react'
import { mount } from 'enzyme'
import FirmList from './'

const list = [
  { id: 1, name: 'firm 1' },
  { id: 2, name: 'firm 2' },
  { id: 3, name: 'firm 3' },
]

const wrap = (props = {}) => mount(<FirmList list={list} {...props} />)

it('renders FirmList', () => {
  const wrapper = wrap()

  expect(wrapper.find('Mock').length).toEqual(4)
})
