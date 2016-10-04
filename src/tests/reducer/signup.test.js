import signupReducer from '../../reducers/signup'
const expect = require('chai').expect

describe('signupReducer', function() {
  const actionSignupSuccess = {
    type: 'SIGNUP_SUCCESS',
    ok: true
  }
  const actionSignupError = {
    type: 'SIGNUP_ERROR',
    error: 'Une erreur s\'est produite, merci de réessayer plus tard'
  }

  context('state = null and action.type = SIGNUP_SUCCESS', function() {
    it('should be an object!', function() {
      expect(signupReducer(null, actionSignupSuccess)).to.eql({ok: true})
    })
  })

  context('state = null and action.type = SIGNUP_ERROR', function() {
    it('should be an object!', function() {
      expect(signupReducer(null, actionSignupError)).to.eql({error: 'Une erreur s\'est produite, merci de réessayer plus tard'})
    })
  })

})
