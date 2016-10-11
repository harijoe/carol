import userReducer from '../../reducers/user'
import chai, { expect } from 'chai'
import chaiJsonEqual from 'chai-json-equal'

chai.use(chaiJsonEqual)

describe('userReducer', () => {
  context('state and action.type = null', function () {
    it('should be null!', function () {
      expect(userReducer(null, 'non existing type')).to.be.null
    })
  })

  context('state = null and action.type = USER_INFO and user={ @id: user/drfgxdf-xdfgxdfg54-54x5dg, phone: 0606060606 }', function() {
    it('should be an object!', function() {
      const user = {
        '@id': 'user/drfgxdf-xdfgxdfg54-54x5dg',
        phone: '0606060606'
      }
      const action = {
        type: 'USER_INFO',
        payload: user
      }

      expect(userReducer(null, action)).to.jsonEqual(user)
    })
  })

  context('state = null and action.type = USER_UNAUTHORIZED', function() {
    it('should be an object!', function() {
      const action = {
        type: 'USER_UNAUTHORIZED'
      }

      expect(userReducer(null, action)).to.jsonEqual({authorized: false});
    })
  })
})
