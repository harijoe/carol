var chai = require('chai');
var expect = chai.expect;
import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';
import { UserDetail } from '../../containers/user-detail';

describe('components', () => {
    describe('App', () => {
        it('should render h2 containing User list', () => {
            const enzymeWrapper  = shallow(<App />);
            expect(enzymeWrapper.find('h2').contains('User List')).to.equal(true);
        })
    })
})
