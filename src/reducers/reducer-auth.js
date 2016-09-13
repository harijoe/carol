const reducerAuth = (state = null, action) => {
  const payload = action.payload

  switch (action.type) {
    case 'AUTH_TOKEN':
      return {
        accessToken: payload.access_token,
        refreshToken: payload.refresh_token
      }
    default:
      return state
  }
}

export default reducerAuth
