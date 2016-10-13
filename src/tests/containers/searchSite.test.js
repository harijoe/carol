import chai from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import SearchSite from '../../containers/SearchSite'

const expect = chai.expect

describe('SearchSite', () => {
  const enzymeWrapper  = shallow(<SearchSite />)
    it('should have an text', () => {
      expect(enzymeWrapper.find('p')).to.have.length(1)
    })
})
