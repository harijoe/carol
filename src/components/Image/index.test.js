import React from 'react'
import { shallow } from 'enzyme'
import Image from '.'

const wrap = (props = {}) => shallow(<Image {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ src: 'foo' })

  expect(wrapper.find({ src: 'foo' })).toHaveLength(1)
})
