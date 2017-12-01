import React from 'react'
import { mount, shallow } from 'enzyme'
import Icon from '.'

const wrap = (props = {}) => shallow(<Icon icon="github" {...props} />).dive()

it('mounts with different combination of props', () => {
  mount(<Icon icon="github" />)
  mount(<Icon icon="github" size={20} />)
})
