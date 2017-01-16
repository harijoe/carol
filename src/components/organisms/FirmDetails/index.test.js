import React from 'react'
import { shallow } from 'enzyme'
import FirmDetails from './'

const details = { id: '1', name: 'firm 1', trade: 'test' }

const wrap = (props = {}) => shallow(<FirmDetails details={details} {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })

  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders loading when passed in', () => {
  const wrapper = wrap({ loading: true })

  expect(wrapper.contains('Loading...')).toBe(true)
})
