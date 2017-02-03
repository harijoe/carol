import { getCurrentCountry } from 'utils/locale'

const initialState = { countryCode: getCurrentCountry() }

export default (state = initialState) => state
