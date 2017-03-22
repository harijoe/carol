import React from 'react'
import { shallow, mount } from 'enzyme'

import MotionMenu from './'

const wrapper = shallow(<MotionMenu />)
const wrapperMounted = mount(<MotionMenu />)

it('renders MotionMenu', () => {
  expect(wrapper).toMatchSnapshot()
})

it('toggles menu', () => {
  // closed
  expect(wrapperMounted.state().isOpen).toEqual(false)
  expect(wrapperMounted.find('Motion').at(0).prop('style').scale.val).toEqual(.5)
  expect(wrapperMounted.find('Motion').last().prop('style').rotate.val).toEqual(0)

  wrapperMounted.find('Motion').last().simulate('click')

  // opened
  expect(wrapperMounted.state().isOpen).toEqual(true)
  expect(wrapperMounted.find('Motion').at(0).prop('style').scale.val).toEqual(20)
  expect(wrapperMounted.find('Motion').last().prop('style').rotate.val).toEqual(135)


  wrapperMounted.find('Motion').last().simulate('click')

  // closed
  expect(wrapperMounted.state().isOpen).toEqual(false)
  expect(wrapperMounted.find('Motion').at(0).prop('style').scale.val).toEqual(.5)
  expect(wrapperMounted.find('Motion').last().prop('style').rotate.val).toEqual(0)
})
