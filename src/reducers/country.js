import { fromJS } from 'immutable'
import * as types from '../constants/actionTypes'
import { countryDefault } from '../constants/country'

const initialState = fromJS({
  countryCode: countryDefault
})

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.country.COUNTRY_UPDATE:
      return state.set('countryCode', action.country)
    default:
      return state
  }
}

export default countryReducer
