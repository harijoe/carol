import uuid from 'uuid/v4'

export const initialState = {
  user: uuid(),
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

export const getConversation = (state = initialState) => state.conversation
export const getUser = (state = initialState) => state.user
