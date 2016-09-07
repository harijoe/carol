var chai = require('chai');
var expect = chai.expect;
import React from 'react';
import { shallow } from 'enzyme';
var rewire = require("rewire");
var index = rewire('../../containers/user-detail');
var UserDetail = index.__get__('UserDetail');

describe('containers (connected components)', () => {
    describe('User detail', () => {
        it('should has class loader', () => {
            const enzymeWrapper  = shallow(<UserDetail />);
            expect(enzymeWrapper.find('span').hasClass('loader')).to.equal(true);
        })
    })
})