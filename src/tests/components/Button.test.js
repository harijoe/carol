var chai = require('chai')
var rewire = require("rewire");
var expect = chai.expect
import React from 'react'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import Button from '../../components/form/Button'
var chaiJsonEqual = require('chai-json-equal');
chai.use(chaiEnzyme())
chai.use(chaiJsonEqual);

describe('Button', () => {
  const enzymeWrapper  = shallow(<Button id="submit" value="Rechercher" type="submit" />);

  it('should have an button', () => {
    expect(enzymeWrapper.find('button')).to.have.html('<button type="submit" id="submit">Rechercher</button>')
  })
})
