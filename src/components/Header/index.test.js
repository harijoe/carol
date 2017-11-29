import React from 'react'
import { shallow } from 'enzyme'
import theme from 'theme/default'
import Header from '.'

const wrap = (props = {}) => shallow(<Header theme={theme} {...props} />).dive()

it('should render Header component', () => {
  expect(wrap()).toMatchSnapshot()
})
