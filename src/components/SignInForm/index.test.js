import React from 'react'
import { shallow } from 'enzyme'
import mockIntl from 'mocks/intlMock'
import SignInForm from '.'

const wrap = (props = {}) => shallow(mockIntl(<SignInForm {...props} />))

it('renders SignInForm', () => {
  expect(wrap()).toMatchSnapshot()
})
