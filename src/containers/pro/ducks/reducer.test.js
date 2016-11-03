import chai, { expect } from 'chai'
import { fromJS } from 'immutable'
import chaiJsonEqual from 'chai-json-equal'
import prosReducer from './'

chai.use(chaiJsonEqual)

describe('prosReducer', function() {
  let initialState

  beforeEach(() => {
    initialState = fromJS([{
      id: null,
      name: null,
      trade: null
    }])
  })
  context('state = initialState and action.type = null', function() {
    it('should be null!', function() {
      expect(prosReducer(initialState, 'non existing type')).to.jsonEqual(initialState);
    })
  })

  context('state = initialState and action.type = PRO_LIST and no pro returned', function() {
    it('should be an object!', function() {
      const action = {
        type: 'PRO_LIST',
        pros: []
      }
      expect(prosReducer(initialState, action)).to.jsonEqual(initialState)
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

      const state = fromJS([
        {
          id: 1,
          name: 'Mcdo',
          trade: 'kitchen'
        },
        {
          id: 2,
          name: 'Leroy Merlin',
          trade: 'bricolage'
        }
      ])

      expect(prosReducer(initialState, action)).to.jsonEqual(state)
    })
  })
})
