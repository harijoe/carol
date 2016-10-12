import chai from 'chai'
import rewire from "rewire"
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

const expect = chai.expect
const InputPasswordConnect = rewire("../../../components/form/Input/InputPassword")
const InputPassword = InputPasswordConnect.__get__('InputPassword')

describe('InputPassword', () => {
  const attr = {
    className: 'password',
    id: 'password',
    name: 'password',
    placeholder: 'password',
    type: 'password'
  }
  const handleChange = sinon.spy()
  const enzymeWrapper  = shallow(<InputPassword attr={attr} value="aze123" onChange={handleChange} />)

  it('should have one input', () => {
    console.log('input -> ', enzymeWrapper.find('input').html())
    expect(enzymeWrapper.find('input')).to.have.html('<input type="password" class="password" id="password" name="password" placeholder="password" pattern="(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$" value="aze123"/>')
  })
  it('should call onChange once', () => {
    enzymeWrapper.simulate('change')
    expect(handleChange.calledOnce).to.equal(true)
  })
})
