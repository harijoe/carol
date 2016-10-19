import chai from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import Message from '../../../containers/user/Project'

const expect = chai.expect

describe('Project', () => {
  const enzymeWrapper  = shallow(<Message />)

  it('should have an element p', () => {
    expect(enzymeWrapper.find('p')).to.have.length(1)
  })
})
