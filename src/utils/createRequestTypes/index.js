const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

const action = (type, payload = {}) => ({
  type,
  ...payload,
})

export const createRequestTypes = base => (
  [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`

    return acc
  }, {})
)

export default action
