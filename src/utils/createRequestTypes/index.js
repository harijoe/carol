const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

const action = (type, payload = {}) => ({
  type,
  ...payload,
})

export const createRequestTypes = base =>
  [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    const newAcc = acc

    newAcc[type] = `${base}_${type}`

    newAcc.prefix = base

    return newAcc
  }, {})

export default action
