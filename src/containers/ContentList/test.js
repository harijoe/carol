import chai from 'chai'
import rewire from 'rewire'
import React from 'react'
import { shallow } from 'enzyme'
import { fromJS } from 'immutable'

const expect = chai.expect
const ContentConnect = rewire("./")
const Content = ContentConnect.__get__('ContentList')
const mapStateToProps = ContentConnect.__get__('mapStateToProps')
const contentList = fromJS([
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
let wrapper

describe('<ContentList />', () => {
  beforeEach(() => {
    wrapper = shallow(<Content content={contentList} />)
  })

  it('mapStateToProps()', () => {
    expect(mapStateToProps({content: contentList})).to.jsonEqual({content: contentList})
  })

  it('should have one or more articles with image and description', () => {
    expect(wrapper).to.have.html('<div><article style="display:block;"><h4>title 1</h4><img src="image.jpg" alt=""/><time>NaN/NaN/NaN</time><p>body 1</p></article><article style="display:none;"><h4>title 2</h4><img src="image.jpg" alt=""/><time>NaN/NaN/NaN</time><p>body 2</p></article></div>')
  })
})
