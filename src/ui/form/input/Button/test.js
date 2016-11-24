import chai from 'chai'
import React from 'react'
import chaiJsonEqual from 'chai-json-equal'
import mountWithContext from '../../../../utils/ContextEnzymeTestHelper'
import Button from './'

const expect = chai.expect
chai.use(chaiJsonEqual)

describe('Button', () => {
  const enzymeWrapper  = mountWithContext(<Button id="submit" value="Rechercher" type="submit" />)

  it('should have an button', () => {
    expect(enzymeWrapper.find('button')).to.have.length(1)
    expect(enzymeWrapper.find('button')).to.have.attr('type', 'submit')
    expect(enzymeWrapper.find('button')).to.have.text('Rechercher')
    expect(enzymeWrapper.find('button')).to.have.id('submit')
  })
})
