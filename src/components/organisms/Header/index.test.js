import React from 'react'
import { shallow } from 'enzyme'
import Header from '.'
import theme from '../../themes/default'

const wrap = (props = {}) => shallow(<Header theme={theme} {...props} />).dive()

it('should render Header component', () => {
  expect(wrap()).toMatchSnapshot()
})
