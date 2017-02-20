import React from 'react'
import { shallow } from 'enzyme'
import SignInForm from '.'

const wrap = (props = {}) => shallow(<SignInForm {...props} />)

it('renders SignInForm', () => {
  expect(wrap()).toMatchSnapshot()
})
