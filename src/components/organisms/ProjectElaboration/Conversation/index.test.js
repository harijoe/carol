import React from 'react'
import { shallow } from 'enzyme'

import Conversation from './'

const wrap = (props = {}) => shallow(<Conversation {...props} />)

it('renders Conversation', () => {
  expect(wrap({
    conversation: [{
      message: {
        text: 'message',
        quick_replies: []
      },
      response: 'response',
    }]
  })).toMatchSnapshot()
})
