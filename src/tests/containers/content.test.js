import chai from 'chai'
import rewire from 'rewire'
import React from 'react'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import configureStore from 'redux-mock-store'
import sinon from 'sinon'
import thunk from 'redux-thunk'

const expect = chai.expect
const middlewares = [thunk]
const ContentConnect = rewire("../../containers/Content")
const Content = ContentConnect.__get__('Content')
const mockStore = configureStore(middlewares)

chai.use(chaiEnzyme())

describe('Content', () => {
  const getContent = sinon.spy()
  const store = mockStore({content: 'content'})
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
    expect(enzymeWrapper).to.have.html('<div class="content"><article><h1>title 1</h1><p class="body">body 1</p></article><article><h1>title 2</h1><p class="body">body 2</p></article></div>')
  })
})
