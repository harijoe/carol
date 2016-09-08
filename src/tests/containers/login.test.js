var chai = require('chai')
var expect = chai.expect
import React from 'react'
import { shallow } from 'enzyme'
import Login from '../../containers/login'

describe('container', () => {
    describe('Login', () => {
        const enzymeWrapper  = shallow(<Login />);

        it('should have two inputs', () => {
            expect(enzymeWrapper.find('input')).to.have.length(2)
        })

        it('should have one button', () => {
          expect(enzymeWrapper.find('button')).to.have.length(1)
        })
    })
})
