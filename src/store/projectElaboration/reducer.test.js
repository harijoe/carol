import * as actions from './actions'
import reducer from './reducer'

let initialState
const hero = [
  {
    message: {
      text: null,
      quick_replies: [],
    },
  },
  {
    message: {
      attachment: {
        type: null,
        payload: {
          template_type: null,
          elements: [],
        },
      },
    },
    answer: {
      text: null,
      payload: null,
    },
  },
]

beforeEach(() => {
  initialState = {
    sessionId: '1234',
    hero,
    activeConversation: [
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
    type: actions.PROJECT_ELABORATION_CONVERSATION_SET_RESPONSE,
    payload: 'response',
  }

  const expected = {
    sessionId: '1234',
    hero,
    activeConversation: [
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
        answer: {
          text: 'response',
        },
      },
    ],
  }

  expect(reducer(initialState, action)).toEqual(expected)
})

it('handles PROJECT_ELABORATION_REPLY_SUCCESS', () => {
  const action = {
    type: actions.PROJECT_ELABORATION_CONVERSATION_REPLY.SUCCESS,
    payload: [{ message: { text: 'next question' } }],
  }

  const expected = {
    sessionId: '1234',
    hero,
    activeConversation: [
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


it('handles PROJECT_ELABORATION_SET_SESSION_ID', () => {
  const action = {
    type: actions.PROJECT_ELABORATION_SET_SESSION_ID,
    payload: '321534546545',
  }

  const expected = {
    ...initialState,
    sessionId: '321534546545',
  }

  expect(reducer(initialState, action)).toEqual(expected)
})

it('handles PROJECT_ELABORATION_HERO_SET_RESPONSE', () => {
  const action = {
    type: actions.PROJECT_ELABORATION_HERO_SET_RESPONSE,
    payload: { text: 'test', payload: 'test' },
  }

  const expected = {
    sessionId: '1234',
    hero: [
      {
        message: {
          text: null,
          quick_replies: [],
        },
      },
      {
        message: {
          attachment: {
            type: null,
            payload: {
              template_type: null,
              elements: [],
            },
          },
        },
        answer: {
          text: 'test',
          payload: 'test',
        },
      },
    ],
    activeConversation: [
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

  expect(reducer(initialState, action)).toEqual(expected)
})

it('handles PROJECT_ELABORATION_HERO_DETAILS', () => {
  const action = {
    type: actions.PROJECT_ELABORATION_HERO_DETAILS.SUCCESS,
    payload: [
      {
        message: {
          text: 'Quel type de travaux souhaitez-vous faire ?',
          quick_replies: [],
        },
      },
      {
        message: {
          attachment: {
            type: 'template',
            payload: {
              template_type: null,
              elements: [],
            },
          },
        },
        answer: {
          text: 'test test',
          payload: 'test test',
        },
      },
    ],
  }

  const expected = {
    sessionId: '1234',
    hero: [
      {
        message: {
          text: 'Quel type de travaux souhaitez-vous faire ?',
          quick_replies: [],
        },
      },
      {
        message: {
          attachment: {
            type: 'template',
            payload: {
              template_type: null,
              elements: [],
            },
          },
        },
        answer: {
          text: null,
          payload: null,
        },
      },
    ],
    activeConversation: [
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

  expect(reducer(initialState, action)).toEqual(expected)
})

it('handles PROJECT_ELABORATION_CONVERSATIONS_DETAILS with user', () => {
  const action = {
    type: actions.PROJECT_ELABORATION_CONVERSATIONS_DETAILS.SUCCESS,
    payload: {
      user: {
        conversation: [{
          message: {
            text: 'My message test',
          },
          answer: {
            text: 'My response test',
          },
        }],
        sessionId: '456546535435',
      },
    },
  }

  const expected = {
    sessionId: '456546535435',
    hero: [
      {
        message: {
          text: null,
          quick_replies: [],
        },
      },
      {
        message: {
          attachment: {
            type: null,
            payload: {
              template_type: null,
              elements: [],
            },
          },
        },
        answer: {
          text: 'test',
          payload: 'test',
        },
      },
    ],
    activeConversation: [
      {
        message: { text: 'My message test' },
        answer: {
          text: 'My response test',
        },
      },
    ],
  }

  expect(reducer(initialState, action)).toEqual(expected)
})

it('handles PROJECT_ELABORATION_CONVERSATIONS_DETAILS with user and anonym', () => {
  const action = {
    type: actions.PROJECT_ELABORATION_CONVERSATIONS_DETAILS.SUCCESS,
    payload: {
      user: {
        conversation: [{
          message: {
            text: 'My message test',
          },
          answer: {
            text: 'My response test',
          },
        }],
        sessionId: '456546535435',
      },
      anonym: {
        conversation: [{
          message: {
            text: 'My message test',
          },
          answer: {
            text: 'My response test',
          },
        }],
        sessionId: '456546535435',
      },
    },
  }

  const expected = {
    ...initialState,
    conversations: {
      user: {
        conversation: [{
          message: {
            text: 'My message test',
          },
          answer: {
            text: 'My response test',
          },
        }],
        sessionId: '456546535435',
      },
      anonym: {
        conversation: [{
          message: {
            text: 'My message test',
          },
          answer: {
            text: 'My response test',
          },
        }],
        sessionId: '456546535435',
      },
    },
  }

  expect(reducer(initialState, action)).toEqual(expected)
})

it('handles PROJECT_ELABORATION_CONVERSATIONS_DETAILS with no conversation', () => {
  const action = {
    type: actions.PROJECT_ELABORATION_CONVERSATIONS_DETAILS.SUCCESS,
    payload: {},
  }

  const expected = {
    ...initialState,
    activeConversation: [],
    conversations: {},
  }

  expect(reducer(initialState, action)).toEqual(expected)
})

it('handles PROJECT_ELABORATION_CONVERSATION_DETAILS', () => {
  const action = {
    type: actions.PROJECT_ELABORATION_CONVERSATION_DETAILS,
    payload: 'user',
  }

  initialState = {
    ...initialState,
    conversations: {
      user: {
        conversation: [{
          message: {
            text: 'My message test',
          },
          answer: {
            text: 'My response test',
          },
        }],
        sessionId: '456546535435',
      },
      anonym: {
        conversation: [{
          message: {
            text: 'My message test',
          },
          answer: {
            text: 'My response test',
          },
        }],
        sessionId: '456546535435',
      },
    },
  }
  const expected = {
    ...initialState,
    activeConversation: initialState.conversations.user.conversation,
    conversations: {},
    sessionId: initialState.conversations.user.sessionId,
  }

  expect(reducer(initialState, action)).toEqual(expected)
})
