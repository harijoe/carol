var chai = require('chai');
var expect = chai.expect;
import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../containers/home';

describe('components', () => {
    describe('Home', () => {
        const enzymeWrapper  = shallow(<Home />);

        it('should have an image', () => {
            expect(enzymeWrapper.find('img')).to.have.length(1);
        })
        it('should have a search bar', () => {
            const navBar = (enzymeWrapper.find('Input.search-bar'));

            expect(navBar).to.have.length(1);
        })
    })
})
