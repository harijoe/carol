import chai from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import chaiJsonEqual from 'chai-json-equal'
import Button from '../../../components/form/Button'

const expect = chai.expect
chai.use(chaiEnzyme())
chai.use(chaiJsonEqual);

describe('Button', () => {
  const enzymeWrapper  = shallow(<Button id="submit" value="Rechercher" type="submit" />);

  it('should have an button', () => {
    expect(enzymeWrapper.find('button')).to.have.html('<button type="submit" id="submit">Rechercher</button>')
  })
})
