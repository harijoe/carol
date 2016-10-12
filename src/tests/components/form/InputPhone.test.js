import chai from 'chai'
import rewire from "rewire"
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

const expect = chai.expect
const InputPhoneConnect = rewire("../../../components/form/Input/InputPhone")
const InputPhone = InputPhoneConnect.__get__('InputPhone')

describe('InputPhone', () => {
  const attr = {
    className: 'phone',
    id: 'phone',
    name: 'phone',
    placeholder: 'phone',
    type: 'text'
  }
  const handleChange = sinon.spy()
  const enzymeWrapper  = shallow(<InputPhone attr={attr} value="0123456789" onChange={handleChange} />)

  it('should have one input', () => {
    expect(enzymeWrapper.find('input')).to.have.html('<input type="text" class="phone" id="phone" name="phone" placeholder="phone" pattern="^([0|+[0-9]{1,5})?([1-9][0-9]{9})$" value="0123456789"/>')
  })
  it('should call onChange once', () => {
    enzymeWrapper.simulate('change')
    expect(handleChange.calledOnce).to.equal(true)
  })
})
