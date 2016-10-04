import chai from 'chai'
import rewire from 'rewire'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'

const expect = chai.expect
const signupConnect = rewire("../../../containers/user/Signup")
const Signup = signupConnect.__get__('Signup')

describe('Signup', () => {
  let receiveProps

  before(() => {
    receiveProps = sinon.spy(Signup.prototype, 'componentWillReceiveProps')
  })

  after(() => {
    receiveProps.restore()
  })

  const postSignup = sinon.spy()
  const enzymeWrapper  = shallow(<Signup
    postSignup={ postSignup }
  />)

  it('should have one form', () => {
    expect(enzymeWrapper.find('Form')).to.have.length(1)
  })

  it('should have four inputs', () => {
    expect(enzymeWrapper.find('Form Input')).to.have.length(4)
  })

  it('should have one button', () => {
    expect(enzymeWrapper.find('Form Button')).to.have.length(1)
  })

  it('Email input has the right attr', () => {
    const attr = enzymeWrapper.find('Form').find('Input').get(0).props.attr

    expect(attr.className).to.be.equal('email')
    expect(attr.placeholder).to.be.equal('Email')
    expect(attr.id).to.be.equal('email')
    expect(attr.name).to.be.equal('email')
    expect(attr.type).to.be.equal('email')
  })

  it('Password input has the right attr', () => {
    const attr = enzymeWrapper.find('Form').find('Input').get(1).props.attr

    expect(attr.className).to.be.equal('password')
    expect(attr.placeholder).to.be.equal('Password')
    expect(attr.id).to.be.equal('password')
    expect(attr.name).to.be.equal('password')
    expect(attr.type).to.be.equal('password')
  })

  it('confirmPassword input has the right attr', () => {
    const attr = enzymeWrapper.find('Form').find('Input').get(2).props.attr

    expect(attr.className).to.be.equal('confirmPassword')
    expect(attr.placeholder).to.be.equal('Confirm your password')
    expect(attr.id).to.be.equal('confirmPassword')
    expect(attr.name).to.be.equal('confirmPassword')
    expect(attr.type).to.be.equal('password')
  })

  it('Phone input has the right attr', () => {
    const attr = enzymeWrapper.find('Form').find('Input').get(3).props.attr

    expect(attr.className).to.be.equal('phone')
    expect(attr.placeholder).to.be.equal('Phone number')
    expect(attr.id).to.be.equal('phone')
    expect(attr.name).to.be.equal('phone')
    expect(attr.type).to.be.equal('text')
  })

  it('simulates click events', () => {
    enzymeWrapper.find('Form').simulate('submit')
    expect(postSignup.calledOnce).to.equal(true)
  })

  it('should call componentWillReceiveProps', () => {
    const wrapper = shallow(<Signup error='' />, { lifecycleExperimental: true })
    const prevProp = wrapper.props()

    wrapper.setState({
      error: 'An error has occurred'
    })
    wrapper.instance().componentWillReceiveProps(prevProp)
    expect(receiveProps.calledOnce).to.be.true
  })
})
