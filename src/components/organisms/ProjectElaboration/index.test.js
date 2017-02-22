import React from 'react'
import { shallow } from 'enzyme'

import ProjectElaboration from './'
import mockIntl from '../../../../test/intlMock'

const wrap = (props = {}) => shallow(mockIntl(<ProjectElaboration {...props} />))

it('renders ProjectElaboration', () => {
  expect(wrap({
    conversation: [{
      message: {
        text: 'message',
        quick_replies: []
      },
    }]
  })).toMatchSnapshot()
})
