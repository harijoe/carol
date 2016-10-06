import config from '../../config'
import { pro as types } from '../../constants/actionTypes'
import { request, getToken } from '../auth'

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
  return (dispatch) => {
    return getToken('client_credentials').then((token) => {
      const tradeQueryParam = trade ? `trade=${trade}` : ''

      return request(`${config.apiUrl}/companies?${tradeQueryParam}`, 'GET', token)
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
