import chai from 'chai'
import rewire from 'rewire'
import React from 'react'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import { fromJS } from 'immutable'

const expect = chai.expect
const ReinsuranceArticlesConnect = rewire('./')
const ReinsuranceArticles = ReinsuranceArticlesConnect.__get__('ReinsuranceArticles')
const mapStateToProps = ReinsuranceArticlesConnect.__get__('mapStateToProps')
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

describe('<ReinsuranceArticles />', () => {
  beforeEach(() => {
    wrapper = shallow(<ReinsuranceArticles articles={dataList} fetchData={fetchData} />)
  })

  it('mapStateToProps()', () => {
    expect(mapStateToProps({reinsuranceArticles: 'articles'})).to.jsonEqual({articles: 'articles'})
  })

  it('calls componentWillMount', () => {
    const willMount = sinon.spy(ReinsuranceArticles.prototype, 'componentWillMount')

    shallow(<ReinsuranceArticles articles={dataList} fetchData={fetchData} />)

    expect(willMount.calledOnce).to.be.true
  })

  it('should have a div', () => {
    expect(wrapper.find('div')).to.have.length(1)
  })
})
