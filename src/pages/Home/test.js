import chai from 'chai'
import rewire from 'rewire'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import { fromJS } from 'immutable'

const expect = chai.expect
const HomeConnect = rewire('./')
const Home = HomeConnect.__get__('Home')
const mapStateToProps = HomeConnect.__get__('mapStateToProps')
let wrapper
const fetchContents = sinon.spy()
const contentsData = {
  latestProjectsOnMap: [],
  latestProjectsResources: [],
  testimonialArticles: [],
  reinsuranceArticles: [
    {
      id: 1,
      title: 'title 1',
      image: 'image.jpg',
      body: 'body 1'
    },
    {
      id: 2,
      title: 'title 2',
      image: 'image.jpg',
      body: 'body 2'
    }
  ]
}

describe('<Home />', () => {
  beforeEach(() => {
    wrapper = shallow(<Home contents={fromJS(contentsData)} fetchContents={fetchContents} />)
  })

  it('mapStateToProps()', () => {
    expect(mapStateToProps({contents: 'contents'})).to.jsonEqual({contents: 'contents'})
  })

  it('calls componentWillMount', () => {
    const willMount = sinon.spy(Home.prototype, 'componentWillMount')

    shallow(<Home contents={fromJS(contentsData)} fetchContents={fetchContents} />)
    expect(willMount.calledOnce).to.be.true
  })
})
