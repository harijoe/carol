import { shallow } from 'enzyme'
import React from 'react'
import { fromJS } from 'immutable'
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
    wrapper = shallow(<WrapperComponent />, { context: { store: mockStore({ auth: fromJS({ 'grantType': 'password' }) }) }})

    expect(wrapper.contains('<div>Authentication access verified</div>')).toBe(true)
  })


  it('does not render the AuthenticationComponent if not authenticated', () => {
    wrapper = shallow(<WrapperComponent />, { context: { store: mockStore({ auth: fromJS({ 'grantType': 'none' }) }) }})

    expect(wrapper.contains('')).toBe(true)
  })
})
