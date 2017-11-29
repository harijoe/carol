import React from 'react'
import { shallow } from 'enzyme'
import theme from 'theme/default'
import Card from './'

it('renders the Card component', () => {
  expect(shallow(<Card theme={theme} />)).toMatchSnapshot()
})
