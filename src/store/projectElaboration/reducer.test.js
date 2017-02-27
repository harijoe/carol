import * as actions from './actions'
import reducer from './reducer'

const initialState = {
  answered: 0,
  user: '1234',
  conversation: [
    {
      message: { text: 'C\'est embetant mais nous allons devoir recommencer...' },
    },
    {
      message: {
        text: 'Hey, what is your name?',
        quick_replies: [
          {
            content_type: 'text',
            title: 'Choice 1',
            payload: 'b_1f305c9f-eeee-11e6-bd45-0242ac1f0003',
            image_url: null,
          },
          {
            content_type: 'text',
            title: 'Choice 2',
            payload: 'b_1f306b42-eeee-11e6-bd45-0242ac1f0003',
            image_url: null,
          },
          {
            content_type: 'text',
            title: 'Choice 3',
            payload: 'b_1f30779e-eeee-11e6-bd45-0242ac1f0003',
            image_url: null,
          },
        ],
      },
    },
  ],
}

it('returns the initial state', () => {
  expect(reducer(initialState, {})).toEqual(initialState)
})

it('handles PROJECT_ELABORATION_REPLY_SUCCESS', () => {
  const action = {
    type: actions.PROJECT_ELABORATION_REPLY.SUCCESS,
    payload: {
      'hydra:member': [{ message: { text: 'next question' } }],
      previousResponse: 'yes',
    }
  }

  const expected = {
    answered: 1,
    user: '1234',
    conversation: [
      {
        message: { text: 'C\'est embetant mais nous allons devoir recommencer...' },
      },
      {
        message: {
          text: 'Hey, what is your name?',
          quick_replies: [
            {
              content_type: 'text',
              title: 'Choice 1',
              payload: 'b_1f305c9f-eeee-11e6-bd45-0242ac1f0003',
              image_url: null,
            },
            {
              content_type: 'text',
              title: 'Choice 2',
              payload: 'b_1f306b42-eeee-11e6-bd45-0242ac1f0003',
              image_url: null,
            },
            {
              content_type: 'text',
              title: 'Choice 3',
              payload: 'b_1f30779e-eeee-11e6-bd45-0242ac1f0003',
              image_url: null,
            },
          ],
        },
        response: 'yes',
      },
      {
        message: { text: 'next question' },
      },
    ],
  }

  expect(reducer(initialState, action)).toEqual(expected)
})
