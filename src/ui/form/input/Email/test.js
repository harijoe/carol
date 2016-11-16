import chai from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import InputEmail from './'

const expect = chai.expect

describe('InputEmail', () => {
  const attr = {
    className: 'email',
    id: 'email',
    name: 'email',
    placeholder: 'email'
  }
  const handleChange = sinon.spy()
  const enzymeWrapper  = shallow(<InputEmail attr={attr} value="test@mail.com" onChange={handleChange} checkPattern="true" />)

  it('should have one input', () => {
    expect(enzymeWrapper.find('input')).to.have.html('<input type="email" class="email" id="email" name="email" placeholder="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$" value="test@mail.com"/>')
  })
  it('should call onChange once', () => {
    enzymeWrapper.simulate('change')
    expect(handleChange.calledOnce).to.equal(true)
  })
})