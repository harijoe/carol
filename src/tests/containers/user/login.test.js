import chai from 'chai'
import rewire from 'rewire'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'

const expect = chai.expect
const loginConnect = rewire("../../../containers/user/Login")
const Login = loginConnect.__get__('Login')

describe('Login', () => {
  const enzymeWrapper  = shallow(<Login />)

  it('should have one form', () => {
    expect(enzymeWrapper.find('Form')).to.have.length(1)
  })

  it('should have two inputs', () => {
    expect(enzymeWrapper.find('Form Input')).to.have.length(2)
  })

  it('should have one button', () => {
    expect(enzymeWrapper.find ('RaisedButton')).to.have.length(1)
  })

  it('simulates click events', () => {
    const onClickLogin = sinon.spy()
    const wrapper = shallow(
      <Login login={onClickLogin} />
    );
    wrapper.find('Form').simulate('submit')
    expect(onClickLogin.calledOnce).to.equal(true)
  })
})
