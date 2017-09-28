import React from 'react'
import { shallow, mount } from 'enzyme'
import theme from 'components/themes/default'
import { ThemeProvider } from 'styled-components'
import mockIntl from '../../../../test/intlMock'

import MotionMenu, { Background, StyledMainButton} from '.'

const wrapper = shallow(
  mockIntl(
  <ThemeProvider theme={theme}>
    <MotionMenu />
  </ThemeProvider>,
  )
)
const wrapperMounted = mount(
  mockIntl(
  <ThemeProvider theme={theme}>
    <MotionMenu />
  </ThemeProvider>,
  )
)

const clickMainButton = () => {
  wrapperMounted.find(StyledMainButton).simulate('click')
}
const clickBackground = () => {
  wrapperMounted.find(Background).simulate('click')
}

it('renders MotionMenu', () => {
  expect(wrapper).toMatchSnapshot()
})

it('toggles menu', async () => {
  // closed
  expect(wrapperMounted.find('MotionMenu').instance().state.isOpen).toEqual(false)

  clickMainButton()

  // opened
  expect(wrapperMounted.find('MotionMenu').instance().state.isOpen).toEqual(true)

  clickMainButton()

  // closed
  expect(wrapperMounted.find('MotionMenu').instance().state.isOpen).toEqual(false)

  clickMainButton()
  clickBackground()

  // opened
  expect(wrapperMounted.find('MotionMenu').instance().state.isOpen).toEqual(false)
})
