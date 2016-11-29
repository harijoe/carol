import chai from 'chai'
import rewire from 'rewire'
import React from 'react'
import sinon from 'sinon'
import { mount, shallow } from 'enzyme'
import { fromJS } from 'immutable'

const expect = chai.expect
const TestimonialArticlesConnect = rewire('./')
const TestimonialArticles = TestimonialArticlesConnect.__get__('TestimonialArticles')
const mapStateToProps = TestimonialArticlesConnect.__get__('mapStateToProps')
const dataList = fromJS([
  {
    id: 1,
    title: 'title 1',
    image: 'image.jpg',
    body: 'body 1',
    tags: ['testimony','construction']
  },
  {
    id: 2,
    title: 'title 2',
    image: 'image.jpg',
    body: 'body 2',
    tags: ['testimony','construction']
  },
  {
    id: "3",
    title: 'title 3',
    image: 'image.jpg',
    body: 'body 3',
    tags: ['testimony', 'fixing']
  }
])
const fetchData = sinon.spy()
let wrapper

describe('<TestimonialArticles />', () => {
  beforeEach(() => {
    wrapper = shallow(<TestimonialArticles articles={dataList} fetchData={fetchData} />)
  })

  it('mapStateToProps()', () => {
    expect(mapStateToProps({testimonialArticles: 'articles'})).to.jsonEqual({articles: 'articles'})
  })

  it('calls componentWillMount', () => {
    const willMount = sinon.spy(TestimonialArticles.prototype, 'componentWillMount')

    shallow(<TestimonialArticles articles={dataList} fetchData={fetchData} />)

    expect(willMount.calledOnce).to.be.true
  })

  it('should have a div', () => {
    expect(wrapper.find('div')).to.have.length(2)
  })
})
