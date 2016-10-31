import chai from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import InputPassword from './'

const expect = chai.expect

describe('InputPassword', () => {
  const attr = {
    className: 'password',
    id: 'password',
    name: 'password',
    placeholder: 'password'
  }
  const handleChange = sinon.spy()
  const enzymeWrapper  = shallow(<InputPassword attr={attr} value="aze123" onChange={handleChange} checkPattern="true" />)

  it('should have one input', () => {
    expect(enzymeWrapper.find('input')).to.have.html('<input type="password" class="password" id="password" name="password" placeholder="password" pattern="(?=^.{8,}$)((?=.*d)|(?=.*W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" value="aze123"/>')
  })
  it('should call onChange once', () => {
    enzymeWrapper.simulate('change')
    expect(handleChange.calledOnce).to.equal(true)
  })
})
