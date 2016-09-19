import * as types from '../../constants/actionTypes'

const retrievePros = (pros) => {
  const retrievedPros = []
  let i
  let proCurrent = {}

  for (i = 0; i < pros.length; i++) {
    proCurrent = pros[i]
    retrievedPros[i] = {
      id: proCurrent['@id'],
      name: proCurrent.name,
      trade: proCurrent.trade
    }
  }

  return retrievedPros
}

const reducerPros = (state = null, action) => {
  const pros = action.pros

  switch (action.type) {
    case types.pro.PRO_LIST:
      return retrievePros(pros)
    default:
      return state
  }
}

export default reducerPros
