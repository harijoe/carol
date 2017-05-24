export const initialState = {
  authenticated: false,
  accessToken: null,
  refreshToken: null,
  expiresIn: null,
}

export const isAuthenticated = (state = initialState) => state.authenticated
export const getAccessToken = (state = initialState) => state.accessToken
export const getRefreshToken = (state = initialState) => state.refreshToken
export const getExpiresIn = (state = initialState) => state.expiresIn
