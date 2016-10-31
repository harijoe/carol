import chai from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import InputPhone from './'

const expect = chai.expect

describe('InputPhone', () => {
  const attr = {
    className: 'phone',
    id: 'phone',
    name: 'phone',
    placeholder: 'phone'
  }
  const handleChange = sinon.spy()
  const enzymeWrapper  = shallow(<InputPhone attr={attr} value="0123456789" onChange={handleChange} checkPattern="true" />)

  it('should have one input', () => {
    expect(enzymeWrapper.find('input')).to.have.html('<input type="text" class="phone" id="phone" name="phone" placeholder="phone" pattern="^([0|+[0-9]{1,5})?([1-9][0-9]{9})$" value="0123456789"/>')
  })
  it('should call onChange once', () => {
    enzymeWrapper.simulate('change')
    expect(handleChange.calledOnce).to.equal(true)
  })
})
