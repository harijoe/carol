import chai from 'chai'
import React from 'react'
import sinon from 'sinon'
import mountWithContext from '../../../../utils/ContextEnzymeTestHelper'
import InputPhone from './'

const expect = chai.expect

describe('InputPhone', () => {
  const attr = {
    className: 'fixedPhone',
    id: 'fixedPhone',
    name: 'fixedPhone',
    placeholder: 'user.fixed_phone'
  }
  const handleChange = sinon.spy()
  const enzymeWrapper  = mountWithContext(<InputPhone attr={attr} value="0123456789" onChange={handleChange} checkPattern="true" />)

  it('should have one input', () => {
    expect(enzymeWrapper.find('input')).to.have.length(1)
    expect(enzymeWrapper.find('input')).to.have.attr('type', 'text')
    expect(enzymeWrapper.find('input')).to.have.attr('name', 'fixedPhone')
    expect(enzymeWrapper.find('input')).to.have.attr('placeholder', 'user.fixed_phone')
    expect(enzymeWrapper.find('input')).to.have.attr('value', '0123456789')
    expect(enzymeWrapper.find('input')).to.have.attr('pattern', '^([0|+[0-9]{1,5})?([1-9][0-9]{9})$')
    expect(enzymeWrapper.find('input')).to.have.className('fixedPhone')
    expect(enzymeWrapper.find('input')).to.have.id('fixedPhone')
  })
  it('should call onChange once', () => {
    enzymeWrapper.simulate('change')
    expect(handleChange.calledOnce).to.equal(true)
  })
})
