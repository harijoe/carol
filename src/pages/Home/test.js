import chai from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import Home from './'

const expect = chai.expect

describe('Home', () => {
  const enzymeWrapper  = shallow(<Home />)

  it('should have an image', () => {
    expect(enzymeWrapper.find('img')).to.have.length(1)
  })

})
