import chai from 'chai'
import rewire from 'rewire'
import React from 'react'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon'

const expect = chai.expect
const ContentConnect = rewire("./")
const Content = ContentConnect.__get__('Content')

chai.use(chaiEnzyme())

describe('Content', () => {
  const getContent = sinon.spy()
  const contentList = [
    {
      id: 1,
      title: 'title 1',
      body: 'body 1'
    },
    {
      id: 2,
      title: 'title 2',
      body: 'body 2'
    }
  ]
  const enzymeWrapper = shallow(<Content getContent={ getContent } content={ contentList } />)

  expect(getContent.calledOnce).to.equal(true)

  it('should return a list of contents', () => {
    expect(enzymeWrapper).to.have.html('<div><article><h2>title 1</h2><div>body 1</div></article><article><h2>title 2</h2><div>body 2</div></article></div>')
  })
})
