import userReducer from '../../reducers/user'
import chai, { expect } from 'chai'
import chaiJsonEqual from 'chai-json-equal'
import { fromJS } from 'immutable'

chai.use(chaiJsonEqual)

describe('userReducer', () => {
  context('state and action.type = null', function () {
    it('should be null!', function () {
      expect(userReducer(null, 'non existing type')).to.be.null
    })
  })

  context('state = null and action.type = USER_INFO and user={ id: user/drfgxdf-xdfgxdfg54-54x5dg, phone: 0606060606 }', function() {
    it('should be an object!', function() {
      const user = {
        '@id': 'user/drfgxdf-xdfgxdfg54-54x5dg',
        phone: '0606060606'
      }
      const action = {
        type: 'USER_INFO',
        payload: user
      }
      const initialState = fromJS({
        id: null,
        phone: '',
        isLogged: false
      })

      expect(userReducer(initialState, action)).to.jsonEqual({id: user['@id'], phone: user.phone, isLogged: true})
    })
  })
})
