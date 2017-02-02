import React from 'react'
import { shallow } from 'enzyme'

import MenuAccount from '.'
import intlMock from '../../../../test/intlMock'

const wrap = (props = {}) => shallow(intlMock(<MenuAccount logout={() => {}} {...props} />))

test('renders MenuAccount', () => {
  expect(wrap()).toMatchSnapshot()
})
