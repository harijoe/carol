import chai from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import Favorite from './'

const expect = chai.expect

describe('Favorite', () => {
  const enzymeWrapper  = shallow(<Favorite />)

  it('should have an element p', () => {
    expect(enzymeWrapper.find('FormattedMessage')).to.have.length(1)
  })
})
