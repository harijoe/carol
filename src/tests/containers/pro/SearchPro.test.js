import chai from 'chai'
import rewire from 'rewire'
import React from 'react'
import sinon from 'sinon'
import { shallow } from 'enzyme'

const expect = chai.expect
const SearchProConnect = rewire('../../../containers/pro/SearchPro')
const SearchPro = SearchProConnect.__get__('SearchPro')

describe('SearchPro', () => {
  const enzymeWrapper  = shallow(<SearchPro />)

  it('should have a form', () => {
    expect(enzymeWrapper.find('Form')).to.have.length(1)
  })

  it('should have an Input into the form', () => {
    expect(enzymeWrapper.find('Form Input')).to.have.length(1)
  })

  it('should have a Button into the form', () => {
    expect(enzymeWrapper.find('Form Button')).to.have.length(1)
  })

  it('simulates submit events of the form', () => {
    const onClickSearch = sinon.spy()
    const wrapper = shallow(
      <SearchPro searchPro={onClickSearch} />
    )

    wrapper.find('Form').simulate('submit')
    expect(onClickSearch.calledOnce).to.equal(true)
  })
})
