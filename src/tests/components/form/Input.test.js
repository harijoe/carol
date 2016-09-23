import chai from 'chai'
import rewire from "rewire"
import React from 'react'
import { shallow } from 'enzyme'

const expect = chai.expect
const loginConnect = rewire("../../../components/form/Input")
const Input = loginConnect.__get__('Input')

describe('Input', () => {
  const attr = {
    className: 'username',
    id: 'username',
    name: 'username',
    placeholder: 'Username',
    type: 'text'
  }
  const enzymeWrapper  = shallow(<Input attr={attr} value="monty93" handleChange={() => {return 1}} />);

  it('should have two inputs', () => {
    expect(enzymeWrapper.find('input')).to.have.html('<input type="text" class="username" id="username" name="username" placeholder="Username" value="monty93"/>')
  })
})
