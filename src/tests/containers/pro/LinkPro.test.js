import chai from 'chai'
import rewire from 'rewire'
import React from 'react'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import LinkPro from '../../../containers/pro/LinkPro'

const expect = chai.expect

chai.use(chaiEnzyme())

describe('LinkPro', () => {
  it('should return url pro', () => {
    const enzymeWrapper  = shallow(<LinkPro country='FR' />)
    expect(enzymeWrapper).to.have.html('<a href="https://www.quotatispro.fr">Je suis artisan</a>')
  })
})
