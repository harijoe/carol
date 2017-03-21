export const initialState = {
  authenticated: false,
  accessToken: null,
  expiresIn: null,
}

export const isAuthenticated = (state = initialState) => state.authenticated
export const getAccessToken = (state = initialState) => state.accessToken
export const getExpiresIn = (state = initialState) => state.expiresIn
