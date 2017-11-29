import React from 'react'
import { shallow } from 'enzyme'

import mockIntl from 'mocks/intlMock'
import ProjectElaboration from './'

const wrap = (props = {}) => shallow(mockIntl(<ProjectElaboration {...props} />))

it('renders ProjectElaboration', () => {
  expect(
    wrap({
      activeConversation: [
        {
          message: {
            text: 'message',
            quick_replies: [],
          },
        },
      ],
    }),
  ).toMatchSnapshot()
})
