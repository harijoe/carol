import React from 'react'
import { mount } from 'enzyme'
import FirmDetails from './'

const details = { id: '1', name: 'firm 1', trade: 'test' }

const wrap = (props = {}) => mount(<FirmDetails details={details} {...props} />)

it('renders FirmDetails', () => {
  const wrapper = wrap()

  expect(wrapper.find('Mock').length).toEqual(2)
})
