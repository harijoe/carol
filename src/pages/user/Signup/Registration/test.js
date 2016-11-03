import chai from 'chai'
import rewire from 'rewire'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import { fromJS } from 'immutable'

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
  const enzymeWrapper = shallow(<Signup auth={auth} signup={signup} />)

  it('should have one form', () => {
    expect(enzymeWrapper.find('Form')).to.have.length(1)
  })

  it('should have one email input', () => {
    expect(enzymeWrapper.find('Form InputEmail')).to.have.length(1)
  })

  it('should have two password inputs', () => {
    expect(enzymeWrapper.find('Form InputPassword')).to.have.length(2)
  })

  it('should have one phone input', () => {
    expect(enzymeWrapper.find('Form InputPhone')).to.have.length(1)
  })

  it('should have one button', () => {
    expect(enzymeWrapper.find('Form Button')).to.have.length(1)
  })

  it('Email input has the right attr', () => {
    const attr = enzymeWrapper.find('Form').find('InputEmail').get(0).props.attr

    expect(attr.className).to.be.equal('email')
    expect(attr.placeholder).to.be.equal('Email')
    expect(attr.id).to.be.equal('email')
    expect(attr.name).to.be.equal('email')
  })

  it('Password input has the right attr', () => {
    const attr = enzymeWrapper.find('Form').find('InputPassword').get(0).props.attr

    expect(attr.className).to.be.equal('password')
    expect(attr.placeholder).to.be.equal('Password')
    expect(attr.id).to.be.equal('password')
    expect(attr.name).to.be.equal('password')
  })

  it('confirmPassword input has the right attr', () => {
    const attr = enzymeWrapper.find('Form').find('InputPassword').get(1).props.attr

    expect(attr.className).to.be.equal('confirmPassword')
    expect(attr.placeholder).to.be.equal('Confirm your password')
    expect(attr.id).to.be.equal('confirmPassword')
    expect(attr.name).to.be.equal('confirmPassword')
  })

  it('Phone input has the right attr', () => {
    const attr = enzymeWrapper.find('Form').find('InputPhone').get(0).props.attr

    expect(attr.className).to.be.equal('phone')
    expect(attr.placeholder).to.be.equal('Phone number')
    expect(attr.id).to.be.equal('phone')
    expect(attr.name).to.be.equal('phone')
  })

  it('simulates click events', () => {
    const onSubmit = sinon.spy()
    const wrapper = shallow(
      <Signup submit={onSubmit} auth={auth} signup={signup} />
    )

    wrapper.find('Form').simulate('submit')
    expect(onSubmit.calledOnce).to.equal(true)
  })
})
