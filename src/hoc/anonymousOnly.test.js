import chai from 'chai'
import rewire from 'rewire'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import { fromJS } from 'immutable'
import configureMockStore from 'redux-mock-store'

import anonymousOnly from './anonymousOnly'

const expect = chai.expect

describe('anonymousOnly', () => {
  let MockAnonymousComponent, WrapperComponent, wrapper, instance
  const mockStore = configureMockStore()

  beforeEach(() => {
    MockAnonymousComponent = () => (
      <div>Anonymous access verified</div>
    )
    WrapperComponent = anonymousOnly(MockAnonymousComponent)
  })

  it('render the AnonymousComponent if not autenthicated', () => {
    wrapper = shallow(<WrapperComponent />, { context: { store: mockStore({ auth: fromJS({ 'grant_type': 'none' }) }) }})

    expect(wrapper).to.have.html('<div>Anonymous access verified</div>')
  })


  it('does not render the AnonymousComponent if authenticated', () => {
    wrapper = shallow(<WrapperComponent />, { context: { store: mockStore({ auth: fromJS({ 'grant_type': 'password' }) }) }})

    expect(wrapper).to.have.html('<div>Anonymous access verified</div>')
  })
})
