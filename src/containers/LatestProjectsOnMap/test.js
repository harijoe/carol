import chai from 'chai'
import rewire from 'rewire'
import React from 'react'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import { fromJS } from 'immutable'

const expect = chai.expect
const LatestProjectsOnMapConnect = rewire('./')
const LatestProjectsOnMap = LatestProjectsOnMapConnect.__get__('LatestProjectsOnMap')
const mapStateToProps = LatestProjectsOnMapConnect.__get__('mapStateToProps')
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

describe('<LatestProjectsOnMap />', () => {
  beforeEach(() => {
    wrapper = shallow(<LatestProjectsOnMap projects={dataList} fetchData={fetchData} />)
  })

  it('mapStateToProps()', () => {
    expect(mapStateToProps({latestProjectsOnMap: 'projects'})).to.jsonEqual({projects: 'projects'})
  })

  it('calls componentWillMount', () => {
    const willMount = sinon.spy(LatestProjectsOnMap.prototype, 'componentWillMount')

    shallow(<LatestProjectsOnMap projects={dataList} fetchData={fetchData} />)

    expect(willMount.calledOnce).to.be.true
  })

  it('should have a div', () => {
    expect(wrapper.find('div')).to.have.length(1)
  })
})
