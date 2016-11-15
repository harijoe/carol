import chai from 'chai'
import rewire from 'rewire'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import { fromJS } from 'immutable'

const expect = chai.expect
const resetPasswordConnect = rewire("./")
const ResetPassword = resetPasswordConnect.__get__('ResetPassword')

describe('ResetPassword', () => {
  const auth = fromJS({
    error: null
  })
  const resetPassword = fromJS({
    error: null
  })
  const enzymeWrapper = shallow(<ResetPassword auth={auth} resetPassword={resetPassword} />)

  it('should have one form', () => {
    expect(enzymeWrapper.find('Form')).to.have.length(1)
  })

  it('should have two password inputs', () => {
    expect(enzymeWrapper.find('Form InputPassword')).to.have.length(2)
  })

  it('should have one button', () => {
    expect(enzymeWrapper.find('Form Button')).to.have.length(1)
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

  it('simulates click events', () => {
    const onSubmit = sinon.spy()
    const wrapper = shallow(
      <ResetPassword submit={onSubmit} auth={auth} resetPassword={resetPassword} />
    )

    wrapper.find('Form').simulate('submit')
    expect(onSubmit.calledOnce).to.equal(true)
  })
})
