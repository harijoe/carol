var chai = require('chai')
var rewire = require("rewire")
var expect = chai.expect
import React from 'react'
import sinon from 'sinon'
import { shallow } from 'enzyme'
var SearchProConnect = rewire('../../../containers/pro/SearchPro')
const SearchPro = SearchProConnect.__get__('SearchPro')

describe('SearchPro', () => {
  const enzymeWrapper  = shallow(<SearchPro />)

  it('should have a form', () => {
    expect(enzymeWrapper.find('form')).to.have.length(1)
  })

  it('should have an Input into the form', () => {
    expect(enzymeWrapper.find('form Input')).to.have.length(1)
  })

  it('should have a Button into the form', () => {
    expect(enzymeWrapper.find('Button')).to.have.length(1)
  })

  it('simulates submit events of the form', () => {
    const onClickSearch = sinon.spy();
    const wrapper = shallow(
      <SearchPro searchPro={onClickSearch} />
    )

    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(onClickSearch.calledOnce).to.equal(true);
  })
})
