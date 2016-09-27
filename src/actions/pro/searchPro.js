import axios from 'axios'
import * as authActions from '../auth'
import config from '../../config'
import { pro as types } from '../../constants/actionTypes'

const receiveListPro = (pros) => {
  return {
    type: types.PRO_LIST,
    pros
  }
}

const receiveListProFAIL = () => {
  return { type: types.PRO_LIST_FAIL }
}

const searchSuccess = (data, dispatch) => {
  dispatch(receiveListPro(data))
}

const searchFailure = (response, dispatch) => {
  dispatch(receiveListProFAIL())
}

const searchPro = (trade) => {
  return function(dispatch) {
    const tradeQueryParam = trade ? `trade=${trade}` : ''
    return axios({
      url: `${config.apiUrl}/companies?${tradeQueryParam}`,
      timeout: config.timeout,
      method: 'GET',
      responseType: 'json',
      headers: {
        Authorization: `Bearer ${authActions.getToken('client_credentials')}`
      }
    })
      .then((response) => {
        searchSuccess(response.data['hydra:member'], dispatch)
      })
      .catch((response) => {
        searchFailure(response, dispatch)
      })
  }
}

export default searchPro
