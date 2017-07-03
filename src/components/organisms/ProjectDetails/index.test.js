import React from 'react'
import { shallow } from 'enzyme'
import ProjectDetails from './'
import mockIntl from '../../../../test/intlMock'

const details = { id: '1', name: 'project1', trade: 'test' }
const wrap = (props = {}) => shallow(mockIntl(<ProjectDetails details={details} {...props} />))

it('renders ProjectDetails', () => {
  expect(wrap()).toMatchSnapshot()
})
