import chai from 'chai'
import rewire from "rewire"
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

const expect = chai.expect
const loginConnect = rewire("../../../components/form/Input/Input")
const Input = loginConnect.__get__('Input')

describe('Input', () => {
  const attr = {
    className: 'username',
    id: 'username',
    name: 'username',
    placeholder: 'Username',
    type: 'text'
  }
  const handleChange = sinon.spy()
  const enzymeWrapper  = shallow(<Input attr={attr} value="monty93" onChange={handleChange} />)

  it('should have two inputs', () => {
    expect(enzymeWrapper.find('input')).to.have.html('<input type="text" class="username" id="username" name="username" placeholder="Username" value="monty93"/>')
  })
  it('should call onChange once', () => {
    enzymeWrapper.simulate('change')
    expect(handleChange.calledOnce).to.equal(true)
  })
})