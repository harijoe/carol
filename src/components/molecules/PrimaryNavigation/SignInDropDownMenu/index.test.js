import React from 'react'
import { shallow } from 'enzyme'

import SignInDropDownMenu from './'

const wrap = (props = {}) => shallow(<SignInDropDownMenu {...props} />)

describe('user is not on login page', () => {
  it('renders a form', () => {
    const wrapper = wrap({ location: { pathname: '/' } })

    expect(wrapper.node.props.label).toEqual('login')
    expect(wrapper).toMatchSnapshot()
  })
})

describe('user is on login page', () => {
  it('renders null', () => {
    const wrapper = wrap({ location: { pathname: '/login' } })

    expect(wrapper.node).toBeNull()
  })
})
