import React from 'react'
import { shallow } from 'enzyme'

import intlMock from 'mocks/intlMock'
import MenuBurger from './'

const wrap = (props = {}) => shallow(intlMock(<MenuBurger linkPro="https://www.quotatispro.fr/" {...props} />))

it('renders MenuBurger', () => {
  expect(wrap()).toMatchSnapshot()
})
