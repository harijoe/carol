import React from 'react'
import { shallow } from 'enzyme'

import ValidatedInfo from './'

const wrap = (props = {}) => shallow(<ValidatedInfo {...props} />)

it('renders a validated info', () => {
  const wrapper = wrap({ validated: true, field: 'field'})

  expect(wrapper).toMatchSnapshot()
})

it('renders a non-validated info', () => {
  const wrapper = wrap({ validated: false, field: 'field'})

  expect(wrapper).toMatchSnapshot()
})
