import React from 'react'
import { shallow } from 'enzyme'
import { fromJS } from 'immutable'

import theme from '../../themes/default'
import Post from './'

const items = fromJS({
  id: 1,
  title: 'test title',
  image: 'image.jpg',
  body: 'test body',
})
const wrapper = (props = {}) => shallow(<Post theme={theme} items={items} {...props} />)

it('renders Post', () => {
  expect(wrapper).toMatchSnapshot()
})
