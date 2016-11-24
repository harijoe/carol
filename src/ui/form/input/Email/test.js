import chai from 'chai'
import React from 'react'
import sinon from 'sinon'
import mountWithContext from '../../../../utils/ContextEnzymeTestHelper'
import InputEmail from './'

const expect = chai.expect

describe('InputEmail', () => {
  const attr = {
    className: 'email',
    id: 'email',
    name: 'email',
    placeholder: 'user.email'
  }
  const handleChange = sinon.spy()
  const enzymeWrapper  = mountWithContext(<InputEmail attr={attr} value="test@mail.com" onChange={handleChange} checkPattern="true" />)

  it('should have one input', () => {
    expect(enzymeWrapper.find('input')).to.have.length(1)
    expect(enzymeWrapper.find('input')).to.have.attr('type', 'email')
    expect(enzymeWrapper.find('input')).to.have.attr('name', 'email')
    expect(enzymeWrapper.find('input')).to.have.attr('placeholder', 'Email')
    expect(enzymeWrapper.find('input')).to.have.attr('pattern', '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')
    expect(enzymeWrapper.find('input')).to.have.attr('value', 'test@mail.com')
    expect(enzymeWrapper.find('input')).to.have.className('email')
    expect(enzymeWrapper.find('input')).to.have.id('email')
  })
  it('should call onChange once', () => {
    enzymeWrapper.simulate('change')
    expect(handleChange.calledOnce).to.equal(true)
  })
})
