import chai from 'chai'
import rewire from 'rewire'
import sinon from 'sinon'
import React from 'react'
import { fromJS } from 'immutable'
import FacebookLogin from '../FacebookLogin'
import { shallowWithContext } from '../../../utils/ContextEnzymeTestHelper'
import InputEmail from '../../../ui/form/input/Email'
import InputPassword from '../../../ui/form/input/Password'

const expect = chai.expect
const loginConnect = rewire('./')
const Login = loginConnect.__get__('Login')

describe('Login', () => {
  const enzymeWrapper = shallowWithContext(<Login location={{ query: { username: 'test@mail.com' } }} auth={fromJS({grantType: null, error: null})} />)

  it('should have one form', () => {
    expect(enzymeWrapper.find('Form')).to.have.length(1)
  })

  it('should have one email input', () => {
    expect(enzymeWrapper.find('Form').childAt(0).type()).to.equal(InputEmail)
  })

  it('should have one password input', () => {
    expect(enzymeWrapper.find('Form').childAt(1).type()).to.equal(InputPassword)
  })

  it('should have one button', () => {
    expect(enzymeWrapper.find('Button')).to.have.length(1)
  })

  it('should autofill username input from url', () => {
    expect(enzymeWrapper.find('Form').childAt(0).prop('value')).to.equal('test@mail.com')
  })

  it('simulates click events', () => {
    const onClickLogin = sinon.spy()
    const wrapper = shallowWithContext(
      <Login login={onClickLogin} auth={fromJS({auth: {error: null}})} />
    )
    wrapper.find('Form').simulate('submit')
    expect(onClickLogin.calledOnce).to.equal(true)
  })

  it('should have facebook button', () => {
    expect(enzymeWrapper.find(FacebookLogin)).to.have.length(1)
  })
})
