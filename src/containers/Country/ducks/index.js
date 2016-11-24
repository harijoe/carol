import { fromJS } from 'immutable'
import  { getCurrentCountry } from '../../../utils/locale'

/*
Reducer
 */
const initialState = fromJS({
  countryCode: getCurrentCountry()
})

export default function countryReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
