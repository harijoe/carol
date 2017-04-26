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
}

export const getDetails = (state = initialState) => state
export const getFirstName = (state = initialState) => state.firstName
