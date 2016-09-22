import chai from 'chai'
import rewire from 'rewire'
import React from 'react'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'

const expect = chai.expect
const ProListConnect = rewire('../../../containers/pro/ProList')
const ProList = ProListConnect.__get__('ProList')

chai.use(chaiEnzyme())

describe('SearchPro', () => {
  it('should return a list of pros', () => {
    const pros = [
      {
        id: 1,
        name: 'Mcdo',
        trade: 'kitchen'
      },
      {
        id: 2,
        name: 'Bricorama',
        trade: 'bricolage'
      }
    ]
    const enzymeWrapper  = shallow(<ProList pros={pros} />)
    expect(enzymeWrapper).to.have.html('<div><ul><li><ul><li>Name: Mcdo</li><li>Trade: kitchen</li></ul><br/></li><li><ul><li>Name: Bricorama</li><li>Trade: bricolage</li></ul><br/></li></ul></div>')
  })

  it('should return null', () => {
    const enzymeWrapper  = shallow(<ProList />)
    expect(enzymeWrapper).to.have.html(null)
  })
})
