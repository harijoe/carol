var rewire = require("rewire");
var chai = require('chai');
var expect = chai.expect;
var chaiJsonEqual = require('chai-json-equal');
var index = rewire("../../actions/index.js");
var receiveUsers = index.__get__('receiveUsers');
import * as types from '../../constants/actionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../actions/index';
import nock from 'nock';


chai.use(chaiJsonEqual);
const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('actions', function() {
    describe('index', function() {
        describe('test all private function', function() {
            it('should be equal to an object with value type: RECV_USER, payload: {first: "firstname"}', function() {
                const json = {first: 'my firstname'};
                const receiveUsersResult = receiveUsers(json);
                
                expect(receiveUsersResult)
                    .to.be.an('object')
                    .with.have.deep.property('type', 'RECV_USERS')
                ;
                expect(receiveUsersResult)
                    .to.have.property('payload').that.is.an('object')
                    .with.have.deep.property('first', 'my firstname')
                ;
            });
        });
    });
});

describe('async actions', () => {
    afterEach(() => {
        nock.cleanAll()
    })

    it('creates RECV_USERS when fetching users has been done', () => {
        const userList = [
            {
                "id": 1,
                "first": "Samar",
                "last": "Stephen",
                "age": 88,
                "description": "Stephen is a Php developer",
                "thumbnail": "https://ssl.gstatic.com/onebox/media/olympics/photos/o16/live/RIOEC8C1QFE71_768x432.JPG"
            },
            {
                "id": 2,
                "first": "Po",
                "last": "Panda",
                "age": 88,
                "description": "Po likes kung fu",
                "thumbnail": "http://api-fake/img/Kung-Fu-Panda-9.jpg"
            }
        ];
        nock('http://api-fake/app_dev.php/api/')
            .get('/users')
            .reply(200, userList)
        ;

        const expectedActions = [
            { type: types.REQ_DATA },
            { type: types.RECV_USERS, payload: userList }
        ];
        const store = mockStore();

        return store.dispatch(actions.getUsersList())
            .then(() => {
                expect(store.getActions()).to.jsonEqual(expectedActions);
            })
    })
});
