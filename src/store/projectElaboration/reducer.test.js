import * as actions from './actions'
import reducer from './reducer'

let initialState

beforeEach(() => {
  initialState = {
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
})

it('returns the initial state', () => {
  expect(reducer(initialState, {})).toEqual(initialState)
})

it('handles PROJECT_ELABORATION_REPLY_REQUEST', () => {
  const action = {
    type: actions.PROJECT_ELABORATION_REPLY.REQUEST,
    text: 'response',
  }

  const expected = {
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
        response: 'response'
      },
    ],
  }

  expect(reducer(initialState, action)).toEqual(expected)
})

it('handles PROJECT_ELABORATION_REPLY_SUCCESS', () => {
  const action = {
    type: actions.PROJECT_ELABORATION_REPLY.SUCCESS,
    payload: [{ message: { text: 'next question' } }]
  }

  const expected = {
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
      {
        message: { text: 'next question' },
      },
    ],
  }

  expect(reducer(initialState, action)).toEqual(expected)
})
