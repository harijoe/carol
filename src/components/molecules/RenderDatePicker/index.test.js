import React from 'react'
import { shallow, mount } from 'enzyme'

import RenderDatePicker from '.'
import intlMock from '../../../../test/intlMock'

const wrap = (props = {}) => shallow(intlMock(<RenderDatePicker
  label="test"
  meta={{ touched: false }}
  dateFormat="DD/MM/YYYY"
  {...props}
/>))

test('renders renderDatePicker', () => {
  expect(wrap()).toMatchSnapshot()
})
