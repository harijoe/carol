import reducerUsers from './reducer'
import { fromJS } from 'immutable'
import chaiJsonEqual from 'chai-json-equal'
import chai, { expect } from 'chai'

chai.use(chaiJsonEqual)

describe('auth', function() {
  const access_token = 'xkjdfjkfdkg'
  const refresh_token = 'hxdkgjkxdfgk'
  const actionBadRequest = {
    type: 'LOGIN_BAD_REQUEST',
    payload: {
      access_token,
      refresh_token
    }
  }
  let initialState

  beforeEach(() => {
    initialState = fromJS({
      grantType: null,
      errors: []
    })
  })

  context('state = initialState and action.type = null', function() {
    it('should be initialState!', function() {
      expect(reducerUsers(initialState, 'non existing type')).to.be.jsonEqual(initialState)
    })
  })

  context('state = initialState and action.type = LOGIN_BAD_REQUEST', function() {
    it('should be an object!', function() {
      expect(reducerUsers(initialState, actionBadRequest)).to.jsonEqual(initialState.set('errors', ['user.invalid_login']))
    })
  })

  context('state = { grantType = otherType, error = "An error" } and action.type = USER_LOGOUT', function() {
    it('should be initialState', function() {
      const state = fromJS({
        grantType: 'otherType',
        error: ['An error']
      })

      expect(reducerUsers(state, { type: 'USER_LOGOUT' })).to.jsonEqual(initialState)
    })
  })

  context('state = initialState and action.type = LOGIN_ERROR', function() {
    it('should be initialState', function() {
      expect(reducerUsers(initialState, { type: 'LOGIN_ERROR' })).to.jsonEqual(initialState.set('errors', ['server_error']))
    })
  })
})
