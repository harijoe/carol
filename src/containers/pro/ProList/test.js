import chai from 'chai'
import rewire from 'rewire'
import React from 'react'
import { shallow } from 'enzyme'
import { fromJS } from 'immutable'
import Pro from '../Pro'

const expect = chai.expect
const ProListConnect = rewire('./')
const ProList = ProListConnect.__get__('ProList')

describe('SearchPro', () => {
  it('should return two <Pro /> components', () => {
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

    const enzymeWrapper = shallow(<ProList pros={pros} />)
    expect(enzymeWrapper.find(Pro)).to.have.length(2)
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

    const enzymeWrapper = shallow(<ProList pros={initialState} />)
    expect(enzymeWrapper.node).to.be.null
  })
})
