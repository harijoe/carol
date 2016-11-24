import chai from 'chai'
import rewire from 'rewire'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import { fromJS } from 'immutable'
import InputEmail from '../../../ui/form/input/Email'

const expect = chai.expect
const forgotPasswordConnect = rewire("./")
const ForgotPassword = forgotPasswordConnect.__get__('ForgotPassword')

describe('ForgotPassword', () => {
  const auth = fromJS({
    error: null
  })
  const forgotPassword = fromJS({
    error: null
  })
  const enzymeWrapper = shallow(<ForgotPassword auth={auth} forgotPassword={forgotPassword} />)

  it('should have one form', () => {
    expect(enzymeWrapper.find('Form')).to.have.length(1)
  })

  it('Email input has the right props', () => {
    const elt = enzymeWrapper.find('Form div.form-group').at(0).childAt(0)
    expect(elt.type()).to.equal(InputEmail)

    const props = elt.props()
    const attr = props.attr

    expect(attr.className).to.be.equal('email')
    expect(attr.id).to.be.equal('email')
    expect(attr.name).to.be.equal('email')
    expect(attr.required).to.equal('required')
  })

  it('should have one button', () => {
    expect(enzymeWrapper.find('Form Button')).to.have.length(1)
  })


  it('simulates click events', () => {
    const onSubmit = sinon.spy()
    const wrapper = shallow(
      <ForgotPassword submit={onSubmit} auth={auth} forgotPassword={forgotPassword} />
    )

    wrapper.find('Form').simulate('submit')
    expect(onSubmit.calledOnce).to.equal(true)
  })
})
