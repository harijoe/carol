import axios from 'axios'
import Config from '../../config'
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
      url: `${Config.apiUrl}/companies?${tradeQueryParam}&access_token=${localStorage.getItem('access_token')}`,
      timeout: 20000,
      method: 'GET',
      responseType: 'json',
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
