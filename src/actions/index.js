import axios from 'axios'
import * as types from '../constants/actionTypes'

export const selectUser = (user) => {
  return {
    type: types.USER_SELECTED,
    payload: user
  }
}

const requestData = () => {
  return { type: types.REQ_DATA }
}

const receiveUsers = (json) => {
  return {
    type: types.RECV_USERS,
    payload: json
  }
}

const receiveError = (json) => {
  return {
    type: types.RECV_ERROR,
    data: json
  }
}

export const getUsersList = () => {
  return function(dispatch) {
    dispatch(requestData())

    return axios({
      url: 'http://api-fake/app_dev.php/api/users',
      timeout: 20000,
      method: 'get',
      responseType: 'json'
    })
      .then((response) => {
        dispatch(receiveUsers(response.data))
      })
      .catch((response) => {
        dispatch(receiveError(response.data))
      })
  }
}
