import chai from 'chai'
import React from 'react'
import chaiJsonEqual from 'chai-json-equal'
import mountWithContext from '../../utils/ContextEnzymeTestHelper'
import Errors from './'

const expect = chai.expect
chai.use(chaiJsonEqual)

describe('Errors', () => {
  const errors = ['error1', 'error2']
  const enzymeWrapper  = mountWithContext(<Errors errors={errors} />)

  it('should have errors', () => {
    expect(enzymeWrapper.find('FormattedMessage')).to.have.length(2)
    expect(enzymeWrapper.find('FormattedMessage').at(0).props().id).to.equal('error1')
    expect(enzymeWrapper.find('FormattedMessage').at(0).props().tagName).to.equal('p')
    expect(enzymeWrapper.find('FormattedMessage').at(1).props().id).to.equal('error2')
    expect(enzymeWrapper.find('FormattedMessage').at(1).props().tagName).to.equal('p')
  })
})
