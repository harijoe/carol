import { shallow } from 'enzyme'
import React from 'react'
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

  it('render the AnonymousComponent if not authenthicated', () => {
    wrapper = shallow(<WrapperComponent />, { context: { store: mockStore({ auth: { isAuthenticated: false } }) }})

    expect(wrapper.html()).toBe('<div>Anonymous access verified</div>')
  })


  it('does not render the AnonymousComponent if authenticated', () => {
    wrapper = shallow(<WrapperComponent />, { context: { store: mockStore({ auth: { isAuthenticated: true } }) }})

    expect(wrapper.html()).toBe('')
  })
})
