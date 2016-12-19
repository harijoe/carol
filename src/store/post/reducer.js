import { initialState } from './selectors'
import { POST_LIST_SUCCESS } from './actions'

const transform = (items, list) => {
  let i
  let current

  for (i = 0; i < items.length; i += 1) {
    current = items[i]
    list = list
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

  return list
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_LIST_SUCCESS: {
      const list = state.get(action.list.scope)

      return state.merge({
        [action.list.scope]: transform(action.list.data, list),
      })
    }
    default: {
      return state
    }
  }
}
