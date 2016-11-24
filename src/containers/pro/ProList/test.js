import chai from 'chai'
import rewire from 'rewire'
import React from 'react'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import { fromJS } from 'immutable'

const expect = chai.expect
const ProListConnect = rewire('./')
const ProList = ProListConnect.__get__('ProList')

chai.use(chaiEnzyme())

describe('SearchPro', () => {
  it('should return a list of pros', () => {
    const pros = fromJS([
      {
        id: 1,
        guid: '111-222-333-444',
        name: 'Mcdo',
        trade: 'kitchen'
      },
      {
        id: 2,
        guid: '444-333-222-111',
        name: 'Bricorama',
        trade: 'bricolage'
      }
    ])
    const enzymeWrapper  = shallow(<ProList pros={pros} />)

    expect(enzymeWrapper.find('ul').at(0).find('> li')).to.have.length(2)
    expect(enzymeWrapper.find('ul > li > ul > li').at(0).text()).to.have.be.equal('Name: Mcdo')
    expect(enzymeWrapper.find('ul > li > ul > li').at(1).text()).to.have.be.equal('Trade: kitchen')
    expect(enzymeWrapper.find('ul > li > ul > li').at(2).text()).to.have.be.equal('<Link />')
    expect(enzymeWrapper.find('ul > li > ul > li').at(3).text()).to.have.be.equal('Name: Bricorama')
    expect(enzymeWrapper.find('ul > li > ul > li').at(4).text()).to.have.be.equal('Trade: bricolage')
    expect(enzymeWrapper.find('ul > li > ul > li').at(5).text()).to.have.be.equal('<Link />')
  })

  it('should return null', () => {
    const initialState = fromJS([
      {
        id: null,
        guid: null,
        name: null,
        trade: null
      }
    ])
    const enzymeWrapper  = shallow(<ProList pros={initialState}/>)
    expect(enzymeWrapper).to.have.html(null)
  })
})
