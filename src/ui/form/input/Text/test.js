import chai from 'chai'
import rewire from "rewire"
import React from 'react'
import mountWithContext from '../../../../utils/ContextEnzymeTestHelper'
import sinon from 'sinon'

const expect = chai.expect
const loginConnect = rewire('./')
const InputText = loginConnect.__get__('InputText')

describe('InputText', () => {
  const attr = {
    className: 'username',
    id: 'username',
    name: 'username',
    placeholder: 'username'
  }
  const handleChange = sinon.spy()
  const enzymeWrapper  = mountWithContext(<InputText attr={attr} value="monty93" onChange={handleChange} />)

  it('should have two inputs', () => {
    expect(enzymeWrapper.find('input')).to.have.length(1)
    expect(enzymeWrapper.find('input')).to.have.attr('type', 'text')
    expect(enzymeWrapper.find('input')).to.have.attr('name', 'username')
    expect(enzymeWrapper.find('input')).to.have.attr('placeholder', 'username')
    expect(enzymeWrapper.find('input')).to.have.attr('value', 'monty93')
    expect(enzymeWrapper.find('input')).to.have.className('username')
    expect(enzymeWrapper.find('input')).to.have.id('username')
  })
  it('should call onChange once', () => {
    enzymeWrapper.simulate('change')
    expect(handleChange.calledOnce).to.equal(true)
  })
})
