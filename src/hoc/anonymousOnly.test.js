import { shallow } from 'enzyme'
import React from 'react'
import { fromJS } from 'immutable'
import configureMockStore from 'redux-mock-store'

import anonymousOnly from './anonymousOnly'

describe('anonymousOnly', () => {
  let MockAnonymousComponent, WrapperComponent, wrapper
  const mockStore = configureMockStore()

  beforeEach(() => {
    MockAnonymousComponent = () => (
      <div>Anonymous access verified</div>
    )
    WrapperComponent = anonymousOnly(MockAnonymousComponent)
  })

  it('render the AnonymousComponent if not autenthicated', () => {
    wrapper = shallow(<WrapperComponent />, { context: { store: mockStore({ auth: fromJS({ 'grantType': 'none' }) }) }})

    expect(wrapper.html()).toBe('<div>Anonymous access verified</div>')
  })


  it('does not render the AnonymousComponent if authenticated', () => {
    wrapper = shallow(<WrapperComponent />, { context: { store: mockStore({ auth: fromJS({ 'grantType': 'password' }) }) }})

    expect(wrapper.html()).toBe('')
  })
})
