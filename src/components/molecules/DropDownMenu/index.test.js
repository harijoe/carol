import React from 'react'
import { shallow } from 'enzyme'

import DropDownMenu from '.'
import intlMock from '../../../../test/intlMock'
import muiMock from '../../../../test/muiMock'

const wrap = (props = {}) => shallow(muiMock(intlMock(<DropDownMenu label="test" {...props} />)))

test('renders DropDownMenu', () => {
  expect(wrap()).toMatchSnapshot()
})
