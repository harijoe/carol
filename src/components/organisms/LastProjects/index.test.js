import React from 'react'
import { shallow } from 'enzyme'

import mockIntl from '../../../../test/intlMock'
import LastProjects from './'

it('renders LastProjects component', () => {
  expect(shallow(mockIntl(<LastProjects />))).toMatchSnapshot()
})
