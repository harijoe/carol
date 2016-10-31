import { fromJS } from 'immutable'
import { countryDefault } from '../../../constants/country'

/*
Const
 */
const COUNTRY_UPDATE = 'COUNTRY_UPDATE'

/*
Actions
 */
export const countryUpdate = (country) => {
  return {
    type: COUNTRY_UPDATE,
    country
  }
}

/*
Reducer
 */
const initialState = fromJS({
  countryCode: countryDefault
})

export default function countryReducer(state = initialState, action) {
  switch (action.type) {
    case COUNTRY_UPDATE:
      return state.set('countryCode', action.country)
    default:
      return state
  }
}
