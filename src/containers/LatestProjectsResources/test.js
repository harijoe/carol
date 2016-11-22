import chai from 'chai'
import rewire from 'rewire'
import React from 'react'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import { fromJS } from 'immutable'

const expect = chai.expect
const LatestProjectsResourcesConnect = rewire('./')
const LatestProjectsResources = LatestProjectsResourcesConnect.__get__('LatestProjectsResources')
const mapStateToProps = LatestProjectsResourcesConnect.__get__('mapStateToProps')
const dataList = fromJS([
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
])
const fetchData = sinon.spy()
let wrapper

describe('<LatestProjectsResources />', () => {
  beforeEach(() => {
    wrapper = shallow(<LatestProjectsResources projects={dataList} fetchData={fetchData} />)
  })

  it('mapStateToProps()', () => {
    expect(mapStateToProps({latestProjectsResources: 'projects'})).to.jsonEqual({projects: 'projects'})
  })

  it('calls componentWillMount', () => {
    const willMount = sinon.spy(LatestProjectsResources.prototype, 'componentWillMount')

    shallow(<LatestProjectsResources projects={dataList} fetchData={fetchData} />)

    expect(willMount.calledOnce).to.be.true
  })

  it('should have a div', () => {
    expect(wrapper.find('div')).to.have.length(1)
  })
})
