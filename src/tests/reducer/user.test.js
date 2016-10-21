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

  context('state = initialState, action.type = AUTH_TOKEN and action.grantType = password', function () {
    it('isLogged should be true!', function () {
      const initialState = fromJS({
        id: null,
        phone: '',
        isLogged: false
      })

      expect(userReducer(initialState, { type: 'AUTH_TOKEN', grantType: 'password' })).to.be.jsonEqual(initialState.set('isLogged', true))
    })
  })

  context('state = initialState, action.type = AUTH_TOKEN and action.grantType = otherGrantType', function () {
    it('state should be initialState!', function () {
      const initialState = fromJS({
        id: null,
        phone: '',
        isLogged: false
      })

      expect(userReducer(initialState, { type: 'AUTH_TOKEN', grantType: 'otherGrantType' })).to.be.jsonEqual(initialState)
    })
  })

  context('state = {id: /users/65456-dfx45-dxfg, phone: \'+33606060606\', isLogged: true } and action.type = USER_LOGOUT', function () {
    it('should be initialState when user is logging out!', function () {
      const state = fromJS({
        id: '/users/65456-dfx45-dxfg',
        phone: '+33606060606',
        isLogged: true
      })
      const initialState = fromJS({
        id: null,
        phone: '',
        isLogged: false
      })

      expect(userReducer(state, { type: 'USER_LOGOUT' })).to.be.jsonEqual(initialState)
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
