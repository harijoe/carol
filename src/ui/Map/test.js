import chai from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import Map from './'

const expect = chai.expect

describe('Map', () => {
  const enzymeWrapper  = shallow(<Map />)

  it('should have one google map', () => {
    expect(enzymeWrapper.find('div')).to.have.length(2)
  })
})
