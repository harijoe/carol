import { content as types } from '../constants/actionTypes'

const initialState = [
  {
    id: 0,
    title: null,
    body: null
  }
]

const transform = (content) => {
  const list = []
  let i
  let current = {}

  for (i = 0; i < content.length; i++) {
    current = content[i]
    list[i] = {
      id: current['@id'],
      title: current.title,
      body: current.body
    }
  }

  return list
}

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CONTENT_RECEIVE:
      return {
        ...state,
        posts: transform(action.content)
      }
    default:
      return state
  }
}

export default contentReducer
