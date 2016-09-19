var chai = require('chai');
var expect = chai.expect;
import React from 'react';
import sinon from 'sinon'
import { shallow } from 'enzyme';
import Home from '../../containers/home';

describe('Home', () => {
  const enzymeWrapper  = shallow(<Home />);

  it('should have an image', () => {
    expect(enzymeWrapper.find('img')).to.have.length(1);
  })

  it('should have a search pro', () => {
    const navBar = (enzymeWrapper.find('Input'));

    expect(navBar).to.have.length(1);
  })

  it('should have a button', () => {
    const button = (enzymeWrapper.find('button'));

    expect(button).to.have.length(1);
  })

  it('simulates click events', () => {
    const onClickSearch = sinon.spy();
    const wrapper = shallow(
      <Home searchPro={onClickSearch} />
    );
    wrapper.find('button').simulate('click');
    expect(onClickSearch.calledOnce).to.equal(true);
  })
})
