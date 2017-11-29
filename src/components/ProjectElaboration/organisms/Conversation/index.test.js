import React from 'react'
import { shallow } from 'enzyme'

import Conversation from './'

const wrap = (props = {}) => shallow(<Conversation {...props} />)

it('renders Conversation', () => {
  expect(
    wrap({
      activeConversation: [
        {
          message: {
            text: 'message',
            quick_replies: [],
            image_url: 'url',
          },
          answer: {
            text: 'response',
            payload: '6843531-515-56465',
          },
        },
      ],
    }),
  ).toMatchSnapshot()
})
