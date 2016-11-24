import chai, { expect } from 'chai'
import countryReducer from './'
import chaiJsonEqual from 'chai-json-equal'

chai.use(chaiJsonEqual)

describe('prosReducer', function() {
  context('state = GB and action.type = null', function() {
    it('should be GB!', function() {
      expect(countryReducer(undefined, 'non existing type')).jsonEqual({ countryCode: "GB" })
    })
  })
})
