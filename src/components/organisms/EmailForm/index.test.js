import React from 'react'
import { shallow } from 'enzyme'
import ProfileForm from '.'
import mockIntl from '../../../../test/intlMock'

const wrap = (props = {}) => shallow(mockIntl(<ProfileForm {...props} />))

it('renders EmailForm', () => {
  expect(wrap()).toMatchSnapshot()
})
