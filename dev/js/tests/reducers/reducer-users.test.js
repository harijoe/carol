import reducerUsers from '../../reducers/reducer-users';
var expect = require('chai').expect;

describe('reducers', function() {
    describe('users', function() {
        context('state is null', function() {
            it('should be an array!', function() {
                expect(reducerUsers(null, 'non existing type')).to.be.null;
            });
        })

        context('state is an object', function() {
            it('should be an object!', function() {
                expect(reducerUsers({user: [{age: 88, description: 'My description', first: 'My firstname', last: 'My lastname', id: 1, thumbnail: '"https://ssl.gstatic.com/onebox/media/olympics/photos/o16/live/RIOEC8C1QFE71_768x432.JPG"'}]}, 'non existing type')).to.be.a('object');
            });
        })
        
    });
});
