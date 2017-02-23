import React from 'react'
import { shallow } from 'enzyme'

import CountryMenu from '.'
import intlMock from '../../../../test/intlMock'

const wrap = (props = {}) => shallow(intlMock(<CountryMenu {...props} />))

it('renders CountryMenu', () => {
  expect(wrap()).toMatchSnapshot()
})
