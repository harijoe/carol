import { shallow } from 'enzyme'
import React from 'react'
import configureMockStore from 'redux-mock-store'

import requiresAuth from './requiresAuth'

describe('requiresAuth', () => {
  let MockAuthenticationComponent, WrapperComponent, wrapper
  const mockStore = configureMockStore()

  beforeEach(() => {
    MockAuthenticationComponent = () => (
      <div>Authentication access verified</div>
    )
    WrapperComponent = requiresAuth(MockAuthenticationComponent)
  })

  it('render the AuthenticationComponent if authenticated', () => {
    wrapper = shallow(<WrapperComponent />, { context: { store: mockStore({ auth: { isAuthenticated: true } }) }})

    expect(wrapper.html()).toBe('<div>Authentication access verified</div>')
  })


  it('does not render the AuthenticationComponent if not authenticated', () => {
    wrapper = shallow(<WrapperComponent />, { context: { store: mockStore({ auth: { isAuthenticated: false } }) }})

    expect(wrapper.html()).toBe('')
  })
})
