import React from 'react'
import { shallow } from 'enzyme'
import SignInForm from '.'
import intlMock from '../../../../test/intlMock'

const wrap = (props = {}) => shallow(intlMock(<SignInForm {...props} />))

it('renders SignInForm', () => {
  expect(wrap()).toMatchSnapshot()
})
