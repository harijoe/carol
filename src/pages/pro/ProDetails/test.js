import chai from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import ProDetails from './'

const expect = chai.expect

describe('ProDetails', () => {
  const enzymeWrapper  = shallow(<ProDetails />)

  it('should have a text', () => {
    expect(enzymeWrapper.find('div')).to.have.length(1)
  })
})
