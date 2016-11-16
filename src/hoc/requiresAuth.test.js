import chai from 'chai'
import rewire from 'rewire'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import { fromJS } from 'immutable'
import configureMockStore from 'redux-mock-store'

import requiresAuth from './requiresAuth'

const expect = chai.expect

describe('requiresAuth', () => {
  let MockAuthenticationComponent, WrapperComponent, wrapper, instance
  const mockStore = configureMockStore()

  beforeEach(() => {
    MockAuthenticationComponent = () => (
      <div>Authentication access verified</div>
    )
    WrapperComponent = requiresAuth(MockAuthenticationComponent)
  })

  it('render the AuthenticationComponent if authenticated', () => {
    wrapper = shallow(<WrapperComponent />, { context: { store: mockStore({ auth: fromJS({ 'grant_type': 'password' }) }) }})

    expect(wrapper).to.have.html('')
  })


  it('does not render the AuthenticationComponent if not authenticated', () => {
    wrapper = shallow(<WrapperComponent />, { context: { store: mockStore({ auth: fromJS({ 'grant_type': 'none' }) }) }})

    expect(wrapper).to.have.html('')
  })
})
