import { auth as types } from '../constants/actionTypes'

export const receiveToken = (json) => {
  return {
    type: types.AUTH_TOKEN,
    payload: json
  }
}

/**
 * Save tokens in local storage and automatically add token within request
 * @param params
 */
export const saveTokens = ({ access_token, refresh_token }) => {
  localStorage.setItem('access_token', access_token)
  localStorage.setItem('refresh_token', refresh_token)
}
