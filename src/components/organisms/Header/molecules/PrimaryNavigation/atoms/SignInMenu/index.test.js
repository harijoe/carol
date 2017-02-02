import React from 'react'
import { shallow } from 'enzyme'
import MenuSignIn from '.'

const wrap = (props = {}) => shallow(<MenuSignIn {...props} />)

describe('user is not connect', () => {
  it('should render a form', () => {
    const wrapper = wrap({ isAuthenticated: false })

    expect(wrapper.find('form')).toHaveLength(1)
  })
})

describe('user is connect with grantType facebook', () => {
  it('should render MenuAccount with no form', () => {
    const wrapper = wrap({ isAuthenticated: true })

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('form')).toHaveLength(0)
  })
})
