import chai from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import Message from '../../../containers/user/Message'

const expect = chai.expect

describe('Message', () => {
  const enzymeWrapper  = shallow(<Message />)

  it('should have an element p', () => {
    expect(enzymeWrapper.find('p')).to.have.length(1)
  })
})
