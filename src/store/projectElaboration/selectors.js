export const initialState = {
  user: null,
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
      response: {
        text: null,
        payload: null,
      },
    },
  ],
  conversation: [],
}

export const getConversation = (state = initialState) => state.conversation
export const getUser = (state = initialState) => state.user
export const getFirstChoices = (state = initialState) => state.hero[1].message.attachment.payload.elements
export const getHeroResponse = (state = initialState) => state.hero[1].response
export const getHero = (state = initialState) => state.hero
