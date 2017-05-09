import React from 'react'
import { shallow } from 'enzyme'

import ProjectAccountForm from '.'
import mockIntl from '../../../../test/intlMock'

it('renders ProjectAccountForm', () => {
  expect(shallow(mockIntl(<ProjectAccountForm />))).toMatchSnapshot()
})
