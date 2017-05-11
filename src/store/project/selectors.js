export const initialState = {
  status: null,
  list: [],
}

export const getStatus = (state = initialState) => state.status
export const getList = (state = initialState) => state.list
export const getDetails = (state = initialState, id) => state[id] || null

const get = (state = initialState, id, field) => {
  const projectDetails = getDetails(state, id)

  return projectDetails && projectDetails[field]
}

export const getStartTimeframe = (state = initialState, id) => get(state, id, 'startTimeframe') || 'now'
export const getPurpose = (state = initialState, id) => get(state, id, 'purpose') || 'find_a_pro'
export const getProjectPath = (state = initialState, id) => get(state, id, '@id')
