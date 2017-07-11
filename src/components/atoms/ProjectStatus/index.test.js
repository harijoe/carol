import React from 'react'
import { shallow } from 'enzyme'

import mockIntl from '../../../../test/intlMock'
import ProjectStatus from './'

it('renders the ProjectStatus component', () => {
  const wrapper = shallow(mockIntl(<ProjectStatus status="completion_in_progress" />))

  expect(wrapper).toMatchSnapshot()
})
