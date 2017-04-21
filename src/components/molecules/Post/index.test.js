import React from 'react'
import { shallow } from 'enzyme'

import Post from './'
import theme from '../../themes/default'

const items = {
  id: 1,
  title: 'test title',
  image: 'image.jpg',
  body: 'test body',
}
const wrapper = (props = {}) => shallow(<Post theme={theme} items={items} {...props} />)

it('renders Post', () => {
  expect(wrapper).toMatchSnapshot()
})
