import * as types from '../constants/actionTypes'

const transformContent = (content) => {
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

const contentReducer = (state = null, action) => {
  switch (action.type) {
    case types.content.CONTENT_RECEIVE:
      return transformContent(action.content)
    default:
      return state
  }
}

export default contentReducer
