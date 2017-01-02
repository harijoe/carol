import { initialState } from './selectors'
import { POST_LIST_SUCCESS } from './actions'

const transform = (items, list) => {
  let i
  let current
  let newList = list

  for (i = 0; i < items.length; i += 1) {
    current = items[i]
    newList = newList
      .setIn([i, 'id'], current['@id'])
      .setIn([i, 'title'], current.title)
      .setIn([i, 'body'], current.body)
      .setIn([i, 'image'], current.featuredMedia)
      .setIn([i, 'slug'], current.slug)
      .setIn([i, 'date'], current.date)
      .setIn([i, 'tags'], current.tags)
      .setIn([i, 'latitude'], current.latitude)
      .setIn([i, 'longitude'], current.longitude)
  }

  return newList
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_LIST_SUCCESS: {
      const list = state.get(action.scope)

      return state.mergeIn([action.scope], transform(action.list, list))
    }
    default: {
      return state
    }
  }
}
