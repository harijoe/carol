export const FIRM_LIST = 'FIRM_LIST'
export const FIRM_LIST_REQUEST = 'FIRM_LIST_REQUEST'
export const FIRM_LIST_SUCCESS = 'FIRM_LIST_SUCCESS'
export const FIRM_LIST_FAILURE = 'FIRM_LIST_FAILURE'
export const FIRM_DETAILS = 'FIRM_DETAILS'
export const FIRM_DETAILS_REQUEST = 'FIRM_DETAILS_REQUEST'
export const FIRM_DETAILS_SUCCESS = 'FIRM_DETAILS_SUCCESS'
export const FIRM_DETAILS_FAILURE = 'FIRM_DETAILS_FAILURE'

export const firmList = {
  request: (params, resolve, reject) => ({ type: FIRM_LIST_REQUEST, params, resolve, reject }),
  success: list => ({ type: FIRM_LIST_SUCCESS, list }),
  failure: error => ({ type: FIRM_LIST_FAILURE, error }),
}

export const firmDetails = {
  request: (id, resolve, reject) => ({ type: FIRM_DETAILS_REQUEST, id, resolve, reject }),
  success: data => ({ type: FIRM_DETAILS_SUCCESS, data }),
  failure: error => ({ type: FIRM_DETAILS_FAILURE, error }),
}
