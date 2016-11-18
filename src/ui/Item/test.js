import chai from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import Item from './'

const expect = chai.expect

describe('Item', () => {
  const enzymeWrapper  = shallow(<Item />)

  it('should have one article', () => {
    expect(enzymeWrapper.find('article')).to.have.length(1)
  })

  it('should have one title', () => {
    expect(enzymeWrapper.find('h4')).to.have.length(1)
  })

  it('should have one image', () => {
    expect(enzymeWrapper.find('img')).to.have.length(1)
  })

  it('should have content', () => {
    expect(enzymeWrapper.find('p')).to.have.length(1)
  })
})
