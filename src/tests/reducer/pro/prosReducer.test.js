import { expect } from 'chai'
import prosReducer from '../../../reducers/pro/prosReducer'

describe('prosReducer', function() {
  context('state and action.type = null', function() {
    it('should be null!', function() {
      expect(prosReducer(null, 'non existing type')).to.be.null;
    })
  })

  context('state = null and action.type = PRO_LIST and no pro returned', function() {
    it('should be an object!', function() {
      const action = {
        type: 'PRO_LIST',
        pros: []
      }
      expect(prosReducer(null, action)).to.eql([]);
    })
  })

  context('state = null and action.type = PRO_LIST and a list of pros returned', function() {
    it('should be an object!', function() {
      const action = {
        type: 'PRO_LIST',
        pros: [
          {
            '@id': 1,
            name: 'Mcdo',
            trade: 'kitchen'
          },
          {
            '@id': 2,
            name: 'Leroy Merlin',
            trade: 'bricolage'
          }
        ]
      }
      expect(prosReducer(null, action)).to.eql([{id: 1, name: 'Mcdo', trade: 'kitchen'}, {id: 2, name: 'Leroy Merlin', trade: 'bricolage'}]);
    })
  })
})
