import reducerUsers from '../../reducers/auth';
const expect = require('chai').expect;

describe('auth', function() {
  const access_token = 'xkjdfjkfdkg'
  const refresh_token = 'hxdkgjkxdfgk'
  const actionAuthToken = {
    type: 'AUTH_TOKEN',
    payload: {
      access_token: access_token,
      refresh_token: refresh_token
    }
  }
  const actionBadRequest = {
    type: 'LOGIN_BAD_REQUEST',
    payload: {
      access_token: access_token,
      refresh_token: refresh_token
    }
  }
  context('state and action.type = null', function() {
    it('should be null!', function() {
      expect(reducerUsers(null, 'non existing type')).to.be.null;
    });
  })

  context(`state = null and action.type = AUTH_TOKEN and action.payload = {access_token: "${access_token}", refresh_token: "${refresh_token}"}`, function() {
    it('should be an object!', function() {
      expect(reducerUsers(null, actionAuthToken)).to.eql({access_token, refresh_token});
    });
  })

  context('state = null and action.type = LOGIN_BAD_REQUEST', function() {
    it('should be an object!', function() {
      expect(reducerUsers(null, actionBadRequest)).to.eql({error: 'Votre login et/ou mot de passe sont invalides'});
    });
  })

});
