import { country as types } from '../constants/actionTypes'

const countryUpdate = (country) => {
  return {
    type: types.COUNTRY_UPDATE,
    country
  }
}

export default countryUpdate
