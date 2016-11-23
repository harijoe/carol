import { Map } from 'immutable'
import chooseDefaultStorage from './storage'

export const setStoredAuthState = (grantType) => {
  chooseDefaultStorage.setItem('grant_type', grantType)
}

export const removeStoredAuthState = () => {
  chooseDefaultStorage.removeItem('grant_type')
}

export const getStoredAuthState = () => {
  try {
    const grantType = chooseDefaultStorage.getItem('grant_type')

    return new Map({ grantType })
  } catch (err) {
    removeStoredAuthState()

    return new Map()
  }
}
