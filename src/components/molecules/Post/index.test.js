import React from 'react'
import { mount, shallow } from 'enzyme'
import { fromJS } from 'immutable'
import Post from './'

const items = fromJS({
  id: 1,
  title: 'test title',
  image: 'image.jpg',
  body: 'test body',
})
const wrap = (props = {}) => shallow(<Post items={items} {...props} />)

it('mounts with different combination of props', () => {
  const wrapMounted = (props = {}) => mount(<Post items={items} {...props} />)

  wrapMounted()
  wrapMounted({ loading: true })
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })

  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
