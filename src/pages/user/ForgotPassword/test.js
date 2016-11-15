import chai from 'chai'
import rewire from 'rewire'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import { fromJS } from 'immutable'

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

  it('should have one email input', () => {
    expect(enzymeWrapper.find('Form InputEmail')).to.have.length(1)
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

  it('simulates click events', () => {
    const onSubmit = sinon.spy()
    const wrapper = shallow(
      <ForgotPassword submit={onSubmit} auth={auth} forgotPassword={forgotPassword} />
    )

    wrapper.find('Form').simulate('submit')
    expect(onSubmit.calledOnce).to.equal(true)
  })
})
