import React from 'react'
import { shallow } from 'enzyme'

import PostList from './'

const list = [
  { id: 1, title: 'title 1', body: 'body 1' },
  { id: 2, title: 'title 2', body: 'body 2' },
  { id: 3, title: 'title 3', body: 'body 3' },
]

const wrap = (props = {}) => shallow(<PostList list={list} generateChild={(_, i) => <div key={i} />} {...props} />)

it('renders PostList', () => {
  const wrapper = wrap()

  expect(wrapper).toMatchSnapshot()
})
