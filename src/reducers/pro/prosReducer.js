import * as types from '../../constants/actionTypes'

const transformPros = (pros) => {
  const transformedPros = []
  let i
  let proCurrent = {}

  for (i = 0; i < pros.length; i++) {
    proCurrent = pros[i]
    transformedPros[i] = {
      id: proCurrent['@id'],
      name: proCurrent.name,
      trade: proCurrent.trade
    }
  }

  return transformedPros
}

const reducerPros = (state = null, action) => {
  const pros = action.pros

  switch (action.type) {
    case types.pro.PRO_LIST:
      return transformPros(pros)
    default:
      return state
  }
}

export default reducerPros
