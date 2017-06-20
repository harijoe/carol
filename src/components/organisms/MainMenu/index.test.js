import React from 'react'
import { shallow } from 'enzyme'

import MenuBurger from './index'
import intlMock from '../../../../test/intlMock'

const wrap = (props = {}) => shallow(intlMock(<MenuBurger linkPro="https://www.quotatispro.fr/" {...props} />))

it('renders MenuBurger', () => {
  expect(wrap()).toMatchSnapshot()
})
