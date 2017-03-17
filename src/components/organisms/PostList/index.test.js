import React from 'react'
import { mount } from 'enzyme'
import PostList from './'

const list = [
  { id: 1, title: 'title 1', body: 'body 1' },
  { id: 2, title: 'title 2', body: 'body 2' },
  { id: 3, title: 'title 3', body: 'body 3' },
]

const wrap = (props = {}) => mount(<PostList list={list} generateChild={() => <Mock></Mock>} {...props} />)

it('renders PostList', () => {
  const wrapper = wrap()

  expect(wrapper.find('Mock').length).toEqual(1)
})
