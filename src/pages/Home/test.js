import chai from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import Home from './'

const expect = chai.expect

describe('Home', () => {
  const enzymeWrapper  = shallow(<Home />)

  it('should have a div', () => {
    expect(enzymeWrapper.find('div')).to.have.length(1)
  })

})
