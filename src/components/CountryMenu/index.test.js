import React from 'react'
import { shallow } from 'enzyme'

import intlMock from 'mocks/intlMock'
import CountryMenu from '.'

const wrap = (props = {}) => shallow(intlMock(<CountryMenu {...props} />))

it('renders CountryMenu', () => {
  expect(wrap()).toMatchSnapshot()
})
