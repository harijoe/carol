import React from 'react'
import { shallow } from 'enzyme'
import SignInForm from '.'
import mockIntl from '../../../../test/intlMock'

const wrap = (props = {}) => shallow(mockIntl(<SignInForm {...props} />))

it('renders SignInForm', () => {
  expect(wrap()).toMatchSnapshot()
})
