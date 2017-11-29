import React from 'react'
import { shallow } from 'enzyme'

import mockIntl from 'mocks/intlMock'
import ProjectAccountForm from '.'

it('renders ProjectAccountForm', () => {
  expect(shallow(mockIntl(<ProjectAccountForm />))).toMatchSnapshot()
})
