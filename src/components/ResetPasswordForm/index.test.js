import React from 'react'
import { shallow } from 'enzyme'

import mockIntl from 'mocks/intlMock'
import ResetPasswordForm from './'

it('renders ResetPasswordForm', () => {
  const wrapper = shallow(mockIntl(<ResetPasswordForm />))

  expect(wrapper).toMatchSnapshot()
})
