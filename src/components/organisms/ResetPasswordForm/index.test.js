import React from 'react'
import { shallow } from 'enzyme'

import { messages } from '../../../translations/en'
import mockIntl from '../../../../test/intlMock'
import ResetPasswordForm from './'

it('renders ResetPasswordForm', () => {
  const wrapper = shallow(mockIntl(<ResetPasswordForm />))

  expect(wrapper).toMatchSnapshot()
})
