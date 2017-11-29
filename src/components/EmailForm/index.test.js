import React from 'react'
import { shallow } from 'enzyme'
import mockIntl from 'mocks/intlMock'
import ProfileForm from '.'

const wrap = (props = {}) => shallow(mockIntl(<ProfileForm {...props} />))

it('renders EmailForm', () => {
  expect(wrap()).toMatchSnapshot()
})
