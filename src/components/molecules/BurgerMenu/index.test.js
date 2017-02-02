import React from 'react'
import { shallow } from 'enzyme'

import MenuBurger from '.'
import intlMock from '../../../../test/intlMock'
import muiMock from '../../../../test/muiMock'

const wrap = (props = {}) => shallow(muiMock(intlMock(<MenuBurger linkPro="https://www.quotatispro.fr/" {...props} />)))

it('renders MenuBurger', () => {
  expect(wrap()).toMatchSnapshot()
})
