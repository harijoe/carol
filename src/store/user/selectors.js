export const initialState = {
  '@id': null,
  email: null,
  facebookId: '',
  googleId: '',
  gender: '',
  firstName: '',
  lastName: '',
  address: '',
  postalCode: '',
  city: '',
  region: '',
  countryCode: '',
  mobilePhone: '',
  fixedPhone: '',
  birthday: '',
  imageUrl: '',
  notification: null,
  preferedLanguage: '',
  newsletterSubscription: false,
  mobilePhoneVerified: null,
}

export const getDetails = (state = initialState) => state
export const getFirstName = (state = initialState) => state.firstName
export const getId = (state = initialState) => state['@id']
export const getMobilePhoneVerified = (state = initialState) => state.mobilePhoneVerified
export const getMobilePhone = (state = initialState) => state.mobilePhone
