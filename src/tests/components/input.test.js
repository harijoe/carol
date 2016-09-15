var chai = require('chai')
var rewire = require("rewire");
var expect = chai.expect
import React from 'react'
import { shallow } from 'enzyme'
var loginConnect = rewire("../../components/input");
const Input = loginConnect.__get__('Input');

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
    expect(enzymeWrapper.find('input')).to.have.length(1)
  })
})
