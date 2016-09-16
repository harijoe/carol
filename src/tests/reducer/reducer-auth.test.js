import reducerUsers from '../../reducers/reducer-auth';
var expect = require('chai').expect;

describe('auth', function() {
  const accessToken = 'xkjdfjkfdkg'
  const refreshToken = 'hxdkgjkxdfgk'
  const actionAuthToken = {
    type: 'AUTH_TOKEN',
    payload: {
      access_token: accessToken,
      refresh_token: refreshToken
    }
  }
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

  context(`state = null and action.type = AUTH_TOKEN and action.payload = {access_token: "${accessToken}", refresh_token: "${refreshToken}"}`, function() {
    it('should be an object!', function() {
      expect(reducerUsers(null, actionAuthToken)).to.eql({accessToken, refreshToken});
    });
  })

  context('state = null and action.type = LOGIN_BAD_REQUEST', function() {
    it('should be an object!', function() {
      expect(reducerUsers(null, actionBadRequest)).to.eql({error: 'Votre login et/ou mot de passe sont invalides'});
    });
  })

});
