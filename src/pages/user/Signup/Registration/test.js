import chai from 'chai'
import rewire from 'rewire'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import { fromJS } from 'immutable'
import FacebookLogin from 'react-facebook-login'
import { shallowWithContext } from '../../../../utils/ContextEnzymeTestHelper'
import InputEmail from '../../../../ui/form/input/Email'
import InputPassword from '../../../../ui/form/input/Password'

const expect = chai.expect
const signupConnect = rewire("./")
const Signup = signupConnect.__get__('Signup')

describe('Signup', () => {
  const auth = fromJS({
    error: null
  })
  const signup = fromJS({
    error: null
  })
  const onSubmit = sinon.spy()
  const enzymeWrapper = shallowWithContext(<Signup submit={onSubmit} auth={auth} signup={signup} />)

  it('should have one form', () => {
    expect(enzymeWrapper.find('Form')).to.have.length(1)
  })

  it('should have one email input', () => {
    expect(enzymeWrapper.find('Form div.form-group').at(0).childAt(0).type()).to.equal(InputEmail)
  })

  it('should have two password inputs', () => {
    expect(enzymeWrapper.find('Form div.form-group').at(1).childAt(0).type()).to.equal(InputPassword)
    expect(enzymeWrapper.find('Form div.form-group').at(2).childAt(0).type()).to.equal(InputPassword)
  })

  it('should have one button', () => {
    expect(enzymeWrapper.find('Form Button')).to.have.length(1)
  })

  it('Email input has the right props', () => {
    const attr = enzymeWrapper.find('Form div.form-group').at(0).childAt(0).props().attr

    expect(attr.className).to.equal('email')
    expect(attr.id).to.equal('email')
    expect(attr.name).to.equal('email')
  })

  it('Password input has the right props', () => {
    const attr = enzymeWrapper.find('Form div.form-group').at(1).childAt(0).props().attr

    expect(attr.className).to.be.equal('password')
    expect(attr.placeholder).to.be.equal('user.password')
    expect(attr.id).to.be.equal('password')
    expect(attr.name).to.be.equal('password')
  })

  it('confirmPassword input has the right props', () => {
    const attr = enzymeWrapper.find('Form div.form-group').at(2).childAt(0).props().attr

    expect(attr.className).to.be.equal('confirmPassword')
    expect(attr.placeholder).to.be.equal('user.confirm_password')
    expect(attr.id).to.be.equal('confirmPassword')
    expect(attr.name).to.be.equal('confirmPassword')
  })

  it('calls componentWillReceiveProps', () => {
    const receiveProps = sinon.spy(Signup.prototype, 'componentWillReceiveProps')
    const wrapper = shallowWithContext(<Signup signup={fromJS({ status: 0 })} />)

    expect(receiveProps.calledOnce).to.be.false
    wrapper.setProps({country: fromJS({ status: 201 })})
    expect(receiveProps.calledOnce).to.be.true
  })

  it('simulates click events', () => {
    const callApiCreateUser = sinon.spy()
    const wrapper = shallowWithContext(
      <Signup callApiCreateUser={callApiCreateUser} auth={auth} signup={signup} />
    )

    wrapper.find('Form').simulate('submit')
    expect(callApiCreateUser.calledOnce).to.equal(true)
  })

  it('should have facebook button', () => {
    expect(enzymeWrapper.find(FacebookLogin)).to.have.length(1)
  })
})
