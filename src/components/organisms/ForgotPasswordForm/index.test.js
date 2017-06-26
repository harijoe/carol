import React from 'react'
import { shallow } from 'enzyme'

import mockIntl from '../../../../test/intlMock'
import ForgotPasswordForm from './'

it('renders ForgotPasswordForm', () => {
  const wrapper = shallow(mockIntl(<ForgotPasswordForm  />))

  expect(wrapper).toMatchSnapshot()
})
