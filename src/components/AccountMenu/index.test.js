import React from 'react'
import { shallow } from 'enzyme'

import intlMock from 'mocks/intlMock'
import MenuAccount from '.'

const wrap = (props = {}) => shallow(intlMock(<MenuAccount logout={() => {}} {...props} />))

test('renders MenuAccount', () => {
  expect(wrap()).toMatchSnapshot()
})
