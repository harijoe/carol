import chai from 'chai'
import rewire from 'rewire'
import React from 'react'
import { shallow } from 'enzyme'
import { fromJS } from 'immutable'

const expect = chai.expect
const ContentsListConnect = rewire('./')
const ContentsList = ContentsListConnect.__get__('ContentsList')
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
let wrapper

describe('<ContentsList />', () => {
  beforeEach(() => {
    wrapper = shallow(<ContentsList items={dataList} />)
  })

  it('should have a div', () => {
    expect(wrapper.find('div')).to.have.length(1)
  })
})