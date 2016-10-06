import * as types from '../constants/actionTypes'
import { countryDefault } from '../constants/country'

const countryReducer = (state = countryDefault, action) => {
  switch (action.type) {
    case types.country.COUNTRY_UPDATE:
      return action.country
    case types.user.USER_INFO:
      if (action.payload.country) {
        return action.payload.country
      }

      break
    default:
      return state
  }

  return state
}

export default countryReducer
