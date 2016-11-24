import chai from 'chai'
import React from 'react'
import sinon from 'sinon'
import mountWithContext from '../../../../utils/ContextEnzymeTestHelper'
import InputPassword from './'

const expect = chai.expect

describe('InputPassword', () => {
  const attr = {
    className: 'password',
    id: 'password',
    name: 'password',
    placeholder: 'user.password'
  }
  const handleChange = sinon.spy()
  const enzymeWrapper  = mountWithContext(<InputPassword attr={attr} value="aze123" onChange={handleChange} checkPattern="true" />)

  it('should have one input', () => {
    expect(enzymeWrapper.find('input')).to.have.length(1)
    expect(enzymeWrapper.find('input')).to.have.attr('type', 'password')
    expect(enzymeWrapper.find('input')).to.have.attr('name', 'password')
    expect(enzymeWrapper.find('input')).to.have.attr('placeholder', 'user.password')
    expect(enzymeWrapper.find('input')).to.have.attr('value', 'aze123')
    expect(enzymeWrapper.find('input')).to.have.attr('pattern', '(?=^.{8,}$)((?=.*d)|(?=.*W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')
    expect(enzymeWrapper.find('input')).to.have.className('password')
    expect(enzymeWrapper.find('input')).to.have.id('password')
  })
  it('should call onChange once', () => {
    enzymeWrapper.simulate('change')
    expect(handleChange.calledOnce).to.equal(true)
  })
})
