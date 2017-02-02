import React from 'react'
import { shallow } from 'enzyme'
import Header from '.'

const wrap = (props = {}) => shallow(<Header {...props} />).dive()

it('should render Header component', () => {
  expect(wrap()).toMatchSnapshot()
})
