import  { getCurrentCountry } from 'utils/locale'

const initialState = { countryCode: getCurrentCountry() }

export default function countryReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
