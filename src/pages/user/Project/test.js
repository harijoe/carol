import chai from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import Favorite from './'

const expect = chai.expect

describe('Project', () => {
  const enzymeWrapper  = shallow(<Favorite />)

  it('should have an element p', () => {
    expect(enzymeWrapper.find('p')).to.have.length(1)
  })
})
