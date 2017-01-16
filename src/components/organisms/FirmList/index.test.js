import React from 'react'
import { shallow } from 'enzyme'
import FirmList from './'

const list = [
  { id: 1, name: 'firm 1' },
  { id: 2, name: 'firm 2' },
  { id: 3, name: 'firm 3' },
]

const wrap = (props = {}) => shallow(<FirmList list={list} {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })

  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders loading when passed in', () => {
  const wrapper = wrap({ loading: true })

  expect(wrapper.contains('Loading...')).toBe(true)
})
