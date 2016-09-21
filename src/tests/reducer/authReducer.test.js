import reducerUsers from '../../reducers/authReducer';
var expect = require('chai').expect;

describe('auth', function() {
  const accessToken = 'xkjdfjkfdkg'
  const refreshToken = 'hxdkgjkxdfgk'
  const actionBadRequest = {
    type: 'LOGIN_BAD_REQUEST',
    payload: {
      access_token: accessToken,
      refresh_token: refreshToken
    }
  }

  context('state and action.type = null', function() {
    it('should be null!', function() {
      expect(reducerUsers(null, 'non existing type')).to.be.null;
    });
  })

  context('state = null and action.type = LOGIN_BAD_REQUEST', function() {
    it('should be an object!', function() {
      expect(reducerUsers(null, actionBadRequest)).to.eql({error: 'Votre login et/ou mot de passe sont invalides'});
    });
  })
});
