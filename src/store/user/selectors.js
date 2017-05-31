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
  emailVerified: null,
  contactPreference: null,
  contactComment: null,
}

export const getDetails = (state = initialState) => state
export const getId = (state = initialState) => state['@id']
export const getFirstName = (state = initialState) => state.firstName
export const getEmail = (state = initialState) => state.email
export const getMobilePhoneVerified = (state = initialState) => state.mobilePhoneVerified
export const getEmailVerified = (state = initialState) => state.emailVerified
export const getMobilePhone = (state = initialState) => state.mobilePhone
export const getLastName = (state = initialState) => state.lastName
export const getGender = (state = initialState) => state.gender
export const getContactPreference = (state = initialState) => state.contactPreference
export const getContactComment = (state = initialState) => state.contactComment
