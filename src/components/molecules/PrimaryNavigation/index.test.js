import React from 'react'
import { shallow } from 'enzyme'
import PrimaryNavigation from '.'

const wrap = (props = {}) => shallow(<PrimaryNavigation {...props} />)

it('renders PrimaryNavigation component', () => {
  const wrapper = wrap()

  expect(wrapper).toMatchSnapshot()
})
