import chai from 'chai'
import rewire from 'rewire'
import React from 'react'
import sinon from 'sinon'
import { shallow } from 'enzyme'

const expect = chai.expect
const SearchProConnect = rewire('./')
const SearchPro = SearchProConnect.__get__('SearchPro')

describe('SearchPro', () => {
  const enzymeWrapper  = shallow(<SearchPro />)

  it('should have a form', () => {
    expect(enzymeWrapper.find('Form')).to.have.length(1)
  })

  it('should have an Input into the form', () => {
    expect(enzymeWrapper.find('Form InputText')).to.have.length(1)
  })

  it('should have a Button into the form', () => {
    expect(enzymeWrapper.find('Form Button')).to.have.length(1)
  })

  it('simulates submit events of the form', () => {
    const loadProSearch = sinon.spy()
    const wrapper = shallow(
      <SearchPro loadProSearch={loadProSearch} />
    )

    wrapper.find('Form').simulate('submit')
    expect(loadProSearch.calledOnce).to.equal(true)
  })
})
