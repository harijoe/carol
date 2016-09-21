var chai = require('chai');
var expect = chai.expect;
import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../containers/Home';

describe('Home', () => {
  const enzymeWrapper  = shallow(<Home />)

  it('should have an image', () => {
    expect(enzymeWrapper.find('img')).to.have.length(1)
  })

  it('should have a search pro\'s connect', () => {
    expect(enzymeWrapper.find('Connect(SearchPro)')).to.have.length(1)

  })

  it('should have a pro list\'s connect', () => {
    expect(enzymeWrapper.find('Connect(SearchPro)')).to.have.length(1)
    expect(enzymeWrapper.find('Connect(ProList)')).to.have.length(1)

  })
})
