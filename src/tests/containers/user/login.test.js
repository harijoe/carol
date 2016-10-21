import chai from 'chai'
import rewire from 'rewire'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import { fromJS } from 'immutable'

const expect = chai.expect
const loginConnect = rewire("../../../containers/user/Login")
const Login = loginConnect.__get__('Login')

describe('Login', () => {
  const enzymeWrapper = shallow(<Login location={ { query: { username: 'test@mail.com' } } } auth={ fromJS({grantType: null, error: null}) } />)

  it('should have one form', () => {
    expect(enzymeWrapper.find('Form')).to.have.length(1)
  })

  it('should have one email input', () => {
    expect(enzymeWrapper.find('Form InputEmail')).to.have.length(1)
  })

  it('should have one password input', () => {
    expect(enzymeWrapper.find('Form InputPassword')).to.have.length(1)
  })

  it('should have one button', () => {
    expect(enzymeWrapper.find ('RaisedButton')).to.have.length(1)
  })

  it('should autofill username input from url', () => {
    expect(enzymeWrapper.find('Form InputEmail')).to.have.value('test@mail.com')
  })

  it('simulates click events', () => {
    const onClickLogin = sinon.spy()
    const wrapper = shallow(
      <Login login={onClickLogin} auth={fromJS({auth: {error: null}})} />
    );
    wrapper.find('Form').simulate('submit')
    expect(onClickLogin.calledOnce).to.equal(true)
  })
})
