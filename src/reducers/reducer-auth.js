/**
 * Save tokens in local storage and automatically add token within request
 * @param params
 */
const saveTokens = ({ access_token, refresh_token }) => {
  localStorage.setItem('access_token', access_token)
  localStorage.setItem('refresh_token', refresh_token)
}

const reducerAuth = (state = null, action) => {
  const payload = action.payload

  switch (action.type) {
    case 'AUTH_TOKEN':
      saveTokens(payload)

      return {
        accessToken: payload.access_token,
        refreshToken: payload.refresh_token
      }
    default:
      return state
  }
}

export default reducerAuth
