import React from 'react'
import { shallow, mount } from 'enzyme'
import theme from 'components/themes/default'
import { ThemeProvider } from 'styled-components'

import MotionMenu from './'

const wrapper = shallow(
  <ThemeProvider theme={theme}>
    <MotionMenu />
  </ThemeProvider>,
)
const wrapperMounted = mount(
  <ThemeProvider theme={theme}>
    <MotionMenu />
  </ThemeProvider>,
)

const clickMainButton = () => {
  wrapperMounted.find('Motion').last().simulate('click')
}
const clickBackground = () => {
  wrapperMounted.find('Motion').at(0).simulate('click')
}

it('renders MotionMenu', () => {
  expect(wrapper).toMatchSnapshot()
})

it('toggles menu', () => {
  // closed
  expect(wrapperMounted.find('MotionMenu').node.state.isOpen).toEqual(false)
  expect(wrapperMounted.find('Motion').at(0).prop('style').scale.val).toEqual(0.5)
  expect(wrapperMounted.find('Motion').last().prop('style').rotate.val).toEqual(0)

  clickMainButton()

  // opened
  expect(wrapperMounted.find('MotionMenu').node.state.isOpen).toEqual(true)
  expect(wrapperMounted.find('Motion').at(0).prop('style').scale.val).toEqual(80)
  expect(wrapperMounted.find('Motion').last().prop('style').rotate.val).toEqual(135)

  clickMainButton()

  // closed
  expect(wrapperMounted.find('MotionMenu').node.state.isOpen).toEqual(false)
  expect(wrapperMounted.find('Motion').at(0).prop('style').scale.val).toEqual(0.5)
  expect(wrapperMounted.find('Motion').last().prop('style').rotate.val).toEqual(0)

  clickMainButton()
  clickBackground()

  // opened
  expect(wrapperMounted.find('MotionMenu').node.state.isOpen).toEqual(false)
})
