export const initialState = {
  authenticated: false,
  accessToken: null,
}

export const isAuthenticated = (state = initialState) => state.authenticated
export const getToken = (state = initialState) => state.accessToken
