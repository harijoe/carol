import React from 'react'
import { shallow } from 'enzyme'
import PrimaryNavigation from '.'

const wrap = (props = {}) => shallow(<PrimaryNavigation {...props} />)

it('renders PrimaryNavigation with AccountMenu', () => {
  const wrapper = wrap({ isAuthenticated: true })

  expect(wrapper.find('AccountMenu')).toHaveLength(1)
  expect(wrapper.find('SignInDropDownMenu')).toHaveLength(0)
  expect(wrapper).toMatchSnapshot()
})

it('renders PrimaryNavigation with SignInDropDownMenu', () => {
  const wrapper = wrap({ isAuthenticated: false })

  expect(wrapper.find('AccountMenu')).toHaveLength(0)
  expect(wrapper.find('SignInDropDownMenu')).toHaveLength(1)
  expect(wrapper).toMatchSnapshot()
})
