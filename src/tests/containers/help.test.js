import chai from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import Help from '../../containers/Help'

const expect = chai.expect

describe('Help', () => {
  const enzymeWrapper  = shallow(<Help />)

  it('should have a text', () => {
    expect(enzymeWrapper.find('p')).to.have.length(1)
  })
})
