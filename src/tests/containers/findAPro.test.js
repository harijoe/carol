import chai from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import FindAPro from '../../containers/FindAPro'

const expect = chai.expect

describe('FindAPro', () => {
  const enzymeWrapper  = shallow(<FindAPro />)

  it('should have a search pro\'s connect', () => {
    expect(enzymeWrapper.find('Connect(SearchPro)')).to.have.length(1)

  })

  it('should have a pro list\'s connect', () => {
    expect(enzymeWrapper.find('Connect(SearchPro)')).to.have.length(1)
    expect(enzymeWrapper.find('Connect(ProList)')).to.have.length(1)

  })
})
