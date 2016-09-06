var chai = require('chai');
var expect = chai.expect;
import React from 'react';
import { shallow } from 'enzyme';
import { UserDetail } from '../../containers/user-detail';

describe('containers (connected components)', () => {
    describe('User detail', () => {
        it('should has class loader', () => {
            const enzymeWrapper  = shallow(<UserDetail />);
            expect(enzymeWrapper.find('span').hasClass('loader')).to.equal(true);
        })
    })
});