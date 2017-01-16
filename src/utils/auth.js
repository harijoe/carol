import { Map } from 'immutable'

import config from 'config'
import storage from 'services/storage'
import { getToken } from './token'

export const setStoredAuthState = (grantType) => {
  storage.setItem('grant_type', grantType)
}

export const removeStoredAuthState = () => {
  storage.removeItem('grant_type')
}

export const getStoredAuthState = () => {
  try {
    const grantType = storage.getItem('grant_type')

    return new Map({ grantType })
  } catch (err) {
    removeStoredAuthState()

    return new Map()
  }
}

export const login = credentials => getToken('password', credentials)
export const isAuthenticated = grantType => ([config.facebookGrantType, 'password'].indexOf(grantType) !== -1)
